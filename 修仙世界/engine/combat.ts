import type { CombatBuff, CombatState, GameSave } from '../types/save'
import { enemies } from '../data/enemies'
import { getResource } from '../data/resources'
import { getCurrentRealm, getEnemy } from './selectors'
import { addItem } from './inventory'
import { clamp } from './format'

function getPlayerAttack(save: GameSave): number {
  const realm = getCurrentRealm(save)
  return Math.round(15 * realm.combatPowerMultiplier)
}

function getPlayerDefense(save: GameSave): number {
  const realm = getCurrentRealm(save)
  return Math.round(5 * realm.combatPowerMultiplier)
}

export function startCombat(save: GameSave, enemyId: string): { ok: boolean; message: string } {
  if (save.combat) return { ok: false, message: '已经在战斗中' }

  const enemy = getEnemy(enemyId)
  if (!enemy) return { ok: false, message: '未知敌人' }

  save.combat = {
    enemyId,
    enemyName: enemy.name,
    enemyHp: enemy.hp,
    enemyMaxHp: enemy.hp,
    enemyRealm: enemy.realm,
    enemySpiritPower: enemy.spiritPower,
    enemyMaxSpiritPower: enemy.spiritPower,
    turn: 0,
    playerHp: save.currentHp,
    playerMaxHp: save.maxHp,
    playerSpiritPower: save.spiritPower,
    playerMaxSpiritPower: save.maxSpiritPower,
    playerBuffs: [],
    enemyBuffs: [],
    logs: [`战斗开始！你遭遇了${enemy.name}（${enemy.realm === 'foundation' ? '筑基级' : '练气级'}）`],
    status: 'active',
  }

  return { ok: true, message: `战斗开始！遭遇${enemy.name}` }
}

function applyBuffs(state: CombatState): void {
  state.playerBuffs = state.playerBuffs.filter(b => {
    b.remainingTurns--
    if (b.type === 'dot') state.playerHp -= b.value
    if (b.type === 'hot') state.playerHp += b.value
    return b.remainingTurns > 0
  })
  state.enemyBuffs = state.enemyBuffs.filter(b => {
    b.remainingTurns--
    if (b.type === 'dot') state.enemyHp -= b.value
    if (b.type === 'hot') state.enemyHp += b.value
    return b.remainingTurns > 0
  })
  state.playerHp = clamp(state.playerHp, 0, state.playerMaxHp)
  state.enemyHp = clamp(state.enemyHp, 0, state.enemyMaxHp)
}

function getPlayerCombatSpiritPower(save: GameSave): number {
  const combat = save.combat
  if (!combat) return save.spiritPower
  return combat.playerSpiritPower
}

export function playerAttack(save: GameSave, techniqueId: string): {
  ok: boolean
  message: string
} {
  if (!save.combat) return { ok: false, message: '不在战斗中' }

  const combat = save.combat
  if (combat.status !== 'active') return { ok: false, message: '战斗已结束' }

  const technique = save.techniques.find(t => t.id === techniqueId)
  if (!technique) return { ok: false, message: '未掌握的功法' }
  if (technique.category !== 'attack') return { ok: false, message: '该功法不是攻击型功法' }

  const spiritCost = 5 + technique.level * 2
  if (combat.playerSpiritPower < spiritCost) return { ok: false, message: '灵气不足' }

  combat.turn++
  combat.playerSpiritPower -= spiritCost

  const baseAtk = getPlayerAttack(save)
  const techniqueBonus = 1 + technique.level * 0.15
  const variance = 0.85 + Math.random() * 0.3
  let damage = Math.round(baseAtk * techniqueBonus * variance)

  const enemy = getEnemy(combat.enemyId)
  damage = Math.max(1, damage - enemy.defense)

  combat.enemyHp = Math.max(0, combat.enemyHp - damage)
  combat.logs.unshift(`[第${combat.turn}回合] 你使用${technique.name}，造成${damage}点伤害`)

  applyBuffs(combat)

  if (combat.enemyHp <= 0) {
    combat.status = 'victory'
    combat.logs.unshift(`${enemy.name}被击败！`)
    return { ok: true, message: `击败${enemy.name}！` }
  }

  return { ok: true, message: `造成${damage}点伤害` }
}

export function playerDefend(save: GameSave): { ok: boolean; message: string } {
  if (!save.combat) return { ok: false, message: '不在战斗中' }

  const combat = save.combat
  if (combat.status !== 'active') return { ok: false, message: '战斗已结束' }

  combat.turn++
  combat.playerBuffs.push({
    id: `defend-${combat.turn}`,
    name: '防御姿态',
    type: 'shield',
    value: Math.round(getPlayerDefense(save) * 1.5),
    remainingTurns: 1,
  })

  combat.playerSpiritPower = Math.min(combat.playerMaxSpiritPower, combat.playerSpiritPower + 10)
  combat.logs.unshift(`[第${combat.turn}回合] 你采取防御姿态，恢复10点灵气`)

  applyBuffs(combat)
  return { ok: true, message: '采取防御姿态' }
}

export function playerFlee(save: GameSave): { ok: boolean; message: string } {
  if (!save.combat) return { ok: false, message: '不在战斗中' }
  const combat = save.combat
  if (combat.status !== 'active') return { ok: false, message: '战斗已结束' }

  const fleeChance = 0.6
  if (Math.random() <= fleeChance) {
    combat.status = 'fled'
    combat.logs.unshift('你成功脱离了战斗')
    return { ok: true, message: '成功逃离战斗' }
  }

  combat.turn++
  combat.logs.unshift('逃离失败！')
  applyBuffs(combat)
  return { ok: true, message: '逃离失败，继续战斗' }
}

export function playerUsePillInCombat(save: GameSave, itemId: string): { ok: boolean; message: string } {
  if (!save.combat) return { ok: false, message: '不在战斗中' }
  const combat = save.combat
  if (combat.status !== 'active') return { ok: false, message: '战斗已结束' }

  const item = save.inventory.find(i => i.id === itemId)
  if (!item) return { ok: false, message: '物品不存在' }

  combat.turn++

  if (item.resourceId === 'healing_pill') {
    const healAmount = 50
    combat.playerHp = Math.min(combat.playerMaxHp, combat.playerHp + healAmount)
    item.amount -= 1
    if (item.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== item.id)
    combat.logs.unshift(`[第${combat.turn}回合] 使用${item.name}，恢复${healAmount}点生命`)
    applyBuffs(combat)
    return { ok: true, message: `恢复${healAmount}点生命` }
  }

  if (item.resourceId === 'recovery_pill') {
    const recoverAmount = 30
    combat.playerSpiritPower = Math.min(combat.playerMaxSpiritPower, combat.playerSpiritPower + recoverAmount)
    item.amount -= 1
    if (item.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== item.id)
    combat.logs.unshift(`[第${combat.turn}回合] 使用${item.name}，恢复${recoverAmount}点灵气`)
    applyBuffs(combat)
    return { ok: true, message: `恢复${recoverAmount}点灵气` }
  }

  return { ok: false, message: '该物品不能在战斗中使用' }
}

export function enemyAct(save: GameSave): { acted: boolean; message: string } {
  if (!save.combat || save.combat.status !== 'active') return { acted: false, message: '' }

  const combat = save.combat
  const enemy = getEnemy(combat.enemyId)

  const skill = enemy.skills[Math.floor(Math.random() * enemy.skills.length)]
  if (!skill) return { acted: false, message: '' }

  if (combat.enemySpiritPower >= skill.spiritCost) {
    combat.enemySpiritPower -= skill.spiritCost
  } else {
    combat.enemySpiritPower += 5
    combat.logs.unshift(`${enemy.name}蓄力恢复灵气`)
    return { acted: true, message: `${enemy.name}蓄力恢复灵气` }
  }

  const hasShield = combat.playerBuffs.some(b => b.type === 'shield' && b.remainingTurns > 0)

  if (skill.id === 'howl' && !hasShield) {
    combat.playerBuffs.push({
      id: `howl-${combat.turn}`,
      name: '震慑',
      type: 'stat_down',
      value: 0.3,
      remainingTurns: 2,
    })
    combat.logs.unshift(`${enemy.name}使用${skill.name}，你的防御降低2回合`)
    return { acted: true, message: `${enemy.name}使用${skill.name}` }
  }

  let damage = Math.round(enemy.attack * skill.damageMultiplier * (0.85 + Math.random() * 0.3))

  if (hasShield) {
    const shield = combat.playerBuffs.find(b => b.type === 'shield')
    if (shield) {
      const absorbed = Math.min(shield.value, damage)
      shield.value -= absorbed
      damage -= absorbed
      if (shield.value <= 0) combat.playerBuffs = combat.playerBuffs.filter(b => b.id !== shield.id)
    }
  }

  damage = Math.max(1, damage - Math.round(getPlayerDefense(save) * 0.5))
  combat.playerHp = Math.max(0, combat.playerHp - damage)
  combat.logs.unshift(`${enemy.name}使用${skill.name}，对你造成${damage}点伤害`)

  if (skill.id === 'poison_fog') {
    combat.playerBuffs.push({
      id: `poison-${combat.turn}`,
      name: '中毒',
      type: 'dot',
      value: 15,
      remainingTurns: 3,
    })
  }

  if (combat.playerHp <= 0) {
    combat.status = 'defeat'
    combat.logs.unshift('你被击败了...')
    return { acted: true, message: '你被击败了' }
  }

  return { acted: true, message: `${enemy.name}造成${damage}点伤害` }
}

export function settleCombat(save: GameSave): void {
  if (!save.combat) return
  const combat = save.combat

  if (combat.status === 'victory') {
    save.currentHp = combat.playerHp
    save.spiritPower = combat.playerSpiritPower

    const enemy = getEnemy(combat.enemyId)
    for (const loot of enemy.loot) {
      if (Math.random() <= loot.chance) {
        const amount = loot.amount[0] + Math.floor(Math.random() * (loot.amount[1] - loot.amount[0] + 1))
        addItem(save, loot.resourceId, amount)
      }
    }

    const expGain = enemy.realm === 'foundation' ? 30 : 10
    for (const tech of save.techniques) {
      if (tech.category === 'attack' && tech.level < tech.maxLevel) {
        tech.experience += expGain
        if (tech.experience >= tech.level * 50) {
          tech.experience -= tech.level * 50
          tech.level += 1
        }
      }
    }
  } else if (combat.status === 'defeat') {
    save.currentHp = Math.round(save.maxHp * 0.2)
    save.spiritPower = 0
  } else if (combat.status === 'fled') {
    save.currentHp = combat.playerHp
    save.spiritPower = combat.playerSpiritPower
  }

  save.combat = null
}
