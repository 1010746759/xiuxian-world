import type { GameSave } from '../types/save'
import { getCurrentRealm } from './selectors'
import { clamp } from './format'

export function getCultivationSpeed(save: GameSave): number {
  const realm = getCurrentRealm(save)
  let speed = 1 / realm.cultivationHoursPerPercent

  const heartSutra = save.techniques.find(t => t.templateId === 'heart_sutra')
  if (heartSutra) {
    speed *= 1 + heartSutra.level * 0.05
  }

  return speed
}

export function getCultivationProgressPercent(save: GameSave): number {
  return clamp(save.cultivationProgress, 0, 100)
}

export function runCultivation(save: GameSave, elapsedSeconds: number): void {
  if (!save.cultivationQueue) return

  const queue = save.cultivationQueue
  const now = Date.now()
  if (now >= queue.finishAt) {
    save.cultivationQueue = null
    return
  }

  const hoursPassed = elapsedSeconds / 3600
  const speed = getCultivationSpeed(save)
  save.cultivationProgress = clamp(save.cultivationProgress + hoursPassed * speed * 100, 0, 100)
}

export function canBreakthrough(save: GameSave): { ok: boolean; reason: string } {
  const realm = getCurrentRealm(save)
  const nextRealm = realm.id === 'mortal'
    ? { id: 'qi_refining', name: '练气期' }
    : (() => {
        const allRealms = [
          { id: 'mortal', name: '凡人' },
          { id: 'qi_refining', name: '练气期' },
          { id: 'foundation', name: '筑基期' },
          { id: 'golden_core', name: '金丹期' },
        ]
        const idx = allRealms.findIndex(r => r.id === save.realm)
        return idx < allRealms.length - 1 ? allRealms[idx + 1] : null
      })()

  if (!nextRealm) {
    return { ok: false, reason: '已至当前世界最高境界' }
  }

  if (save.realm === 'mortal' && save.cultivationProgress < 100) {
    return { ok: false, reason: '修炼进度不足100%' }
  }

  if (save.realm !== 'mortal' && save.realmLayer < realm.layerCount) {
    return { ok: false, reason: `需要修炼至${realm.name}第${realm.layerCount}层` }
  }

  if (save.realm !== 'mortal' && save.cultivationProgress < 100) {
    return { ok: false, reason: '当前层修炼进度不足100%' }
  }

  return { ok: true, reason: '' }
}

export function getBreakthroughChance(save: GameSave): number {
  const realm = getCurrentRealm(save)
  let chance = realm.breakthroughBaseChance

  if (save.realm === 'qi_refining' || save.realm === 'mortal') {
    const hasPill = save.inventory.some(i => i.resourceId === 'breakthrough_pill_low' && i.amount > 0)
    if (hasPill) chance += 15
  }

  if (save.realm === 'foundation') {
    const hasPill = save.inventory.some(i => i.resourceId === 'breakthrough_pill_mid' && i.amount > 0)
    if (hasPill) chance += 10
  }

  const heartSutra = save.techniques.find(t => t.templateId === 'heart_sutra')
  if (heartSutra) {
    chance += heartSutra.level * 2
  }

  return clamp(chance, 1, 95)
}

export function executeBreakthrough(save: GameSave, now: number): {
  success: boolean
  damage: number
  message: string
} {
  const chance = getBreakthroughChance(save)
  const roll = Math.random() * 100
  const success = roll <= chance

  if (success) {
    if (save.realm === 'mortal') {
      save.realm = 'qi_refining'
      save.realmLayer = 1
    } else {
      const nextRealms = ['qi_refining', 'foundation', 'golden_core']
      const currentIdx = nextRealms.indexOf(save.realm)
      if (currentIdx >= 0 && currentIdx < nextRealms.length - 1) {
        save.realm = nextRealms[currentIdx + 1]
        save.realmLayer = 1
      } else {
        return { success: false, damage: 0, message: '无法确定下一境界' }
      }
    }

    const newRealm = getCurrentRealm(save)
    save.maxLifespan += newRealm.lifespanBonus
    save.lifespan = save.maxLifespan
    save.maxHp += 100 * newRealm.combatPowerMultiplier
    save.currentHp = save.maxHp
    save.maxSpiritPower += newRealm.spiritPowerBonus
    save.spiritPower = save.maxSpiritPower
    save.cultivationProgress = 0
    save.tribulationProgress += 10

    if (save.realm === 'qi_refining' || save.realm === 'foundation') {
      const pillId = save.realm === 'qi_refining' ? 'breakthrough_pill_low' : 'breakthrough_pill_mid'
      const pill = save.inventory.find(i => i.resourceId === pillId)
      if (pill && pill.amount > 0) {
        pill.amount -= 1
        if (pill.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== pill.id)
      }
    }

    return {
      success: true,
      damage: 0,
      message: `突破成功！晋升${getCurrentRealm(save).name}`,
    }
  }

  const damage = Math.round(save.maxHp * 0.3)
  save.currentHp = Math.max(1, save.currentHp - damage)
  save.cultivationProgress = Math.max(0, save.cultivationProgress - 20)
  save.tribulationProgress += 5

  return {
    success: false,
    damage,
    message: `突破失败！受到${damage}点心魔反噬伤害，修炼进度倒退20%`,
  }
}
