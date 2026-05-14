import type { ActionResult, GameAction } from '../types/action'
import type { GameSave } from '../types/save'
import { tickSave } from './tick'
import { formatClock } from './format'
import {
  getLocation,
  getCurrentRealm,
  getRealmLayerText,
  getEnemy,
  getTechnique,
  getPillRecipe,
  getQuest,
} from './selectors'
import { addItem, countItem, deductItems, hasItems, spendSpiritStones, addSpiritStones } from './inventory'
import {
  canBreakthrough,
  executeBreakthrough,
  getCultivationProgressPercent,
} from './cultivation'
import {
  startCombat,
  playerAttack,
  playerDefend,
  playerFlee,
  playerUsePillInCombat,
  enemyAct,
  settleCombat,
} from './combat'
import { canRefine, startRefine } from './alchemy'
import { realms } from '../data/realms'
import { locations } from '../data/locations'
import { enemies } from '../data/enemies'
import { techniqueTemplates } from '../data/techniqueTemplates'
import { quests } from '../data/quests'

export function dispatchGameAction(save: GameSave, action: GameAction): ActionResult {
  const now = Date.now()
  tickSave(save, now)

  if (action.type === 'TICK_NOW') {
    return { ok: true, tone: 'green', message: '时间已推进结算。' }
  }

  if (action.type === 'LOCATION_CHANGE') {
    const location = getLocation(action.locationId)
    if (!location) return { ok: false, tone: 'red', message: '未知地点' }
    if (!save.discoveredLocationIds.includes(action.locationId)) {
      return { ok: false, tone: 'amber', message: '该地点尚未探索' }
    }
    if (save.combat) return { ok: false, tone: 'red', message: '战斗中无法转移地点' }
    if (save.cultivationQueue) return { ok: false, tone: 'red', message: '修炼中无法转移地点' }

    save.currentLocationId = action.locationId
    save.messages.unshift({
      id: `msg-${now}-location`,
      type: 'system',
      title: '地点移动',
      timestamp: formatClock(now),
      text: `你来到了${location.title}。${location.description}`,
      tags: [{ label: location.isSafe ? '安全区' : '野外', tone: location.isSafe ? 'cyan' : 'amber' }],
    })
    return { ok: true, tone: location.isSafe ? 'cyan' : 'amber', message: `已到达${location.title}` }
  }

  if (action.type === 'LOCATION_EXPLORE') {
    const location = getLocation(action.locationId)
    if (!location) return { ok: false, tone: 'red', message: '未知地点' }
    if (location.unlocked) return { ok: false, tone: 'amber', message: '该地点已解锁' }

    save.discoveredLocationIds.push(action.locationId)
    save.messages.unshift({
      id: `msg-${now}-explore`,
      type: 'system',
      title: '探索发现',
      timestamp: formatClock(now),
      text: `你发现了新地点：${location.title}。${location.description}`,
      tags: [{ label: '探索', tone: 'violet' }],
    })
    return { ok: true, tone: 'violet', message: `发现新地点：${location.title}` }
  }

  if (action.type === 'CULTIVATION_START') {
    if (save.combat) return { ok: false, tone: 'red', message: '战斗中无法修炼' }
    if (save.cultivationQueue) return { ok: false, tone: 'amber', message: '已经在修炼中' }

    const realm = getCurrentRealm(save)
    const hours = realm.cultivationHoursPerPercent * (100 - save.cultivationProgress)
    const durationMs = hours * 3600 * 1000

    const pillsUsed: string[] = []
    if (action.pillIds.length > 0) {
      for (const pillId of action.pillIds) {
        const pill = save.inventory.find(i => i.id === pillId)
        if (!pill) continue
        if (pill.resourceId === 'qi_gathering_pill') {
          pill.amount -= 1
          if (pill.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== pill.id)
          pillsUsed.push('聚气丹')
        }
      }
    }

    save.cultivationQueue = {
      id: `cult-${now}`,
      method: action.method,
      startedAt: now,
      finishAt: now + durationMs,
      pillsUsed,
    }

    const pillBonus = pillsUsed.length > 0 ? `（使用了${pillsUsed.join('、')}加速）` : ''
    save.messages.unshift({
      id: `msg-${now}-cult-start`,
      type: 'system',
      title: '开始修炼',
      timestamp: formatClock(now),
      text: `你开始修炼${realm.name}，预计需要${Math.round(hours * 10) / 10}小时${pillBonus}`,
      tags: [{ label: '修炼', tone: 'cyan' }],
    })
    return { ok: true, tone: 'cyan', message: `开始修炼${realm.name}` }
  }

  if (action.type === 'CULTIVATION_STOP') {
    if (!save.cultivationQueue) return { ok: false, tone: 'amber', message: '没有进行中的修炼' }
    save.cultivationQueue = null
    save.messages.unshift({
      id: `msg-${now}-cult-stop`,
      type: 'system',
      title: '中断修炼',
      timestamp: formatClock(now),
      text: '你中止了修炼',
      tags: [{ label: '修炼', tone: 'amber' }],
    })
    return { ok: true, tone: 'amber', message: '修炼已中止' }
  }

  if (action.type === 'BREAKTHROUGH_ATTEMPT') {
    if (save.combat) return { ok: false, tone: 'red', message: '战斗中无法突破' }
    const check = canBreakthrough(save)
    if (!check.ok) return { ok: false, tone: 'amber', message: check.reason }

    const result = executeBreakthrough(save, now)
    if (result.success) {
      save.spiritRoot = save.realm === 'qi_refining' ? '下品灵根(已觉醒)' : save.spiritRoot
      save.messages.unshift({
        id: `msg-${now}-breakthrough`,
        type: 'system',
        title: '突破成功',
        timestamp: formatClock(now),
        text: result.message,
        tags: [{ label: '突破', tone: 'violet' }],
      })
      save.alerts = save.alerts.filter(a => !a.id.startsWith('br-'))
      return { ok: true, tone: 'violet', message: result.message, shouldAskAI: true }
    }

    save.messages.unshift({
      id: `msg-${now}-br-fail`,
      type: 'alert',
      title: '突破失败',
      timestamp: formatClock(now),
      text: result.message,
      tags: [{ label: '突破失败', tone: 'red' }],
    })
    save.alerts.push({
      id: `br-fail-${now}`,
      severity: 'warning',
      text: '突破失败，需要恢复修炼进度后再尝试。',
    })
    return { ok: true, tone: 'red', message: result.message, shouldAskAI: true }
  }

  if (action.type === 'COMBAT_START') {
    if (save.combat) return { ok: false, tone: 'red', message: '已经在战斗中' }
    if (save.cultivationQueue) {
      save.cultivationQueue = null
    }
    const result = startCombat(save, action.enemyId)
    if (!result.ok) return { ok: false, tone: 'red', message: result.message }
    save.messages.unshift({
      id: `msg-${now}-combat-start`,
      type: 'system',
      title: '战斗开始',
      timestamp: formatClock(now),
      text: result.message,
      tags: [{ label: '战斗', tone: 'red' }],
    })
    return { ok: true, tone: 'red', message: result.message, shouldAskAI: true }
  }

  if (action.type === 'COMBAT_ATTACK') {
    const result = playerAttack(save, action.techniqueId)
    if (!result.ok) return { ok: false, tone: 'red', message: result.message }

    if (save.combat && save.combat.status === 'victory') {
      settleCombat(save)
      save.alerts = save.alerts.filter(a => !a.id.startsWith('combat-'))
      return { ok: true, tone: 'green', message: result.message, shouldAskAI: true }
    }

    enemyAct(save)
    if (save.combat && save.combat.status === 'defeat') {
      settleCombat(save)
      save.alerts.push({
        id: `combat-defeat-${now}`,
        severity: 'critical',
        text: '战斗失败，已退回安全地点。生命和灵气已部分恢复。',
      })
      save.currentLocationId = 'qingxuan_outer'
      return { ok: true, tone: 'red', message: '战斗失败！已退回青玄宗外门', shouldAskAI: true }
    }

    return { ok: true, tone: 'cyan', message: result.message }
  }

  if (action.type === 'COMBAT_DEFEND') {
    const result = playerDefend(save)
    if (!result.ok) return { ok: false, tone: 'red', message: result.message }
    enemyAct(save)
    if (save.combat && save.combat.status === 'defeat') {
      settleCombat(save)
      save.currentLocationId = 'qingxuan_outer'
      return { ok: true, tone: 'red', message: '战斗失败！已退回青玄宗外门', shouldAskAI: true }
    }
    return { ok: true, tone: 'cyan', message: result.message }
  }

  if (action.type === 'COMBAT_FLEE') {
    const result = playerFlee(save)
    if (!result.ok) return { ok: false, tone: 'red', message: result.message }
    if (save.combat && save.combat.status === 'fled') {
      settleCombat(save)
      return { ok: true, tone: 'amber', message: result.message }
    }
    enemyAct(save)
    if (save.combat && save.combat.status === 'defeat') {
      settleCombat(save)
      save.currentLocationId = 'qingxuan_outer'
      return { ok: true, tone: 'red', message: '战斗失败！', shouldAskAI: true }
    }
    return { ok: true, tone: 'amber', message: result.message }
  }

  if (action.type === 'COMBAT_USE_PILL') {
    const result = playerUsePillInCombat(save, action.inventoryItemId)
    if (!result.ok) return { ok: false, tone: 'red', message: result.message }
    enemyAct(save)
    if (save.combat && save.combat.status === 'defeat') {
      settleCombat(save)
      save.currentLocationId = 'qingxuan_outer'
      return { ok: true, tone: 'red', message: '战斗失败！', shouldAskAI: true }
    }
    return { ok: true, tone: 'cyan', message: result.message }
  }

  if (action.type === 'ALCHEMY_REFINE') {
    if (save.combat) return { ok: false, tone: 'red', message: '战斗中无法炼丹' }
    const result = startRefine(save, action.recipeId, action.count, now)
    if (!result.ok) return { ok: false, tone: 'amber', message: result.message }
    return { ok: true, tone: 'violet', message: result.message }
  }

  if (action.type === 'HERB_GATHER') {
    const location = getLocation(save.currentLocationId)
    let gathered = false
    for (const r of location.resources) {
      if (Math.random() <= r.gatherRate) {
        addItem(save, r.resourceId, 1)
        gathered = true
      }
    }
    if (gathered) {
      return { ok: true, tone: 'green', message: '采集到了一些材料' }
    }
    return { ok: true, tone: 'amber', message: '这次什么也没采到' }
  }

  if (action.type === 'TECHNIQUE_CREATE') {
    const template = techniqueTemplates.find(t => t.id === action.templateId)
    if (!template) return { ok: false, tone: 'red', message: '未知功法模板' }

    const hasScroll = save.inventory.some(i => i.resourceId === 'technique_scroll' && i.amount > 0)
    if (!hasScroll) return { ok: false, tone: 'red', message: '需要功法残卷才能自创功法' }

    const existing = save.techniques.find(t => t.name === action.name)
    if (existing) return { ok: false, tone: 'amber', message: '已有同名功法' }

    const scroll = save.inventory.find(i => i.resourceId === 'technique_scroll')
    if (scroll) {
      scroll.amount -= 1
      if (scroll.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== scroll.id)
    }

    save.techniques.push({
      id: `tech-self-${now}`,
      name: action.name,
      templateId: action.templateId,
      category: template.category,
      level: 1,
      maxLevel: template.maxLevel,
      experience: 0,
      selfCreated: true,
      selfCreatedDescription: action.description,
      createdAt: now,
    })

    save.messages.unshift({
      id: `msg-${now}-tech-create`,
      type: 'system',
      title: '自创功法',
      timestamp: formatClock(now),
      text: `你自创了功法「${action.name}」: ${action.description || '无详细描述'}`,
      tags: [{ label: '自创功法', tone: 'violet' }],
    })
    return { ok: true, tone: 'violet', message: `自创功法「${action.name}」成功！`, shouldAskAI: true }
  }

  if (action.type === 'TECHNIQUE_UPGRADE') {
    const tech = getTechnique(save, action.techniqueId)
    if (!tech) return { ok: false, tone: 'red', message: '未知功法' }
    if (tech.level >= tech.maxLevel) return { ok: false, tone: 'amber', message: '已达最高等级' }

    const cost = tech.level * 30
    if (save.spiritStones < cost) return { ok: false, tone: 'red', message: `灵石不足（需要${cost}）` }

    spendSpiritStones(save, cost)
    tech.level += 1
    tech.experience = 0

    save.messages.unshift({
      id: `msg-${now}-tech-upgrade`,
      type: 'system',
      title: '功法升级',
      timestamp: formatClock(now),
      text: `「${tech.name}」提升至第${tech.level}层`,
      tags: [{ label: '功法', tone: 'cyan' }],
    })
    return { ok: true, tone: 'cyan', message: `「${tech.name}」升级至第${tech.level}层` }
  }

  if (action.type === 'TECHNIQUE_RENAME') {
    const tech = getTechnique(save, action.techniqueId)
    if (!tech) return { ok: false, tone: 'red', message: '未知功法' }
    if (!tech.selfCreated) return { ok: false, tone: 'amber', message: '只能重命名自创功法' }

    const oldName = tech.name
    tech.name = action.newName
    save.messages.unshift({
      id: `msg-${now}-tech-rename`,
      type: 'system',
      title: '功法重命名',
      timestamp: formatClock(now),
      text: `「${oldName}」已重命名为「${action.newName}」`,
      tags: [{ label: '功法', tone: 'cyan' }],
    })
    return { ok: true, tone: 'cyan', message: `已重命名为「${action.newName}」` }
  }

  if (action.type === 'QUEST_ACCEPT') {
    const quest = getQuest(action.questId)
    if (!quest) return { ok: false, tone: 'red', message: '未知任务' }
    if (save.quests.some(q => q.questId === quest.id && q.status === 'accepted')) {
      return { ok: false, tone: 'amber', message: '已接取该任务' }
    }
    if (save.quests.some(q => q.questId === quest.id && q.status === 'completed')) {
      return { ok: false, tone: 'amber', message: '已完成该任务' }
    }
    if (quest.preQuestId) {
      const preDone = save.quests.some(q => q.questId === quest.preQuestId && q.status === 'completed')
      if (!preDone) return { ok: false, tone: 'amber', message: '前置任务未完成' }
    }

    save.quests.push({
      questId: quest.id,
      objectives: quest.objectives.map(o => ({
        targetId: o.targetId,
        current: 0,
        required: o.targetAmount,
      })),
      status: 'accepted',
      acceptedAt: now,
      completedAt: null,
    })

    save.messages.unshift({
      id: `msg-${now}-quest-accept`,
      type: 'system',
      title: '接取任务',
      timestamp: formatClock(now),
      text: `接取任务: ${quest.name}\n${quest.description}`,
      tags: [{ label: '任务', tone: 'cyan' }],
    })
    return { ok: true, tone: 'cyan', message: `接取任务: ${quest.name}` }
  }

  if (action.type === 'QUEST_TURN_IN') {
    const progress = save.quests.find(q => q.questId === action.questId && q.status === 'accepted')
    if (!progress) return { ok: false, tone: 'amber', message: '没有进行中的该任务' }

    const quest = getQuest(action.questId)
    const allDone = progress.objectives.every(o => o.current >= o.required)
    if (!allDone) return { ok: false, tone: 'amber', message: '任务目标尚未完成' }

    progress.status = 'completed'
    progress.completedAt = now

    for (const reward of quest.rewards) {
      if (reward.resourceId === 'spirit_stone') {
        addSpiritStones(save, reward.amount)
      } else {
        addItem(save, reward.resourceId, reward.amount)
      }
    }
    save.sectContribution += quest.sectContributionReward

    save.messages.unshift({
      id: `msg-${now}-quest-done`,
      type: 'system',
      title: '任务完成',
      timestamp: formatClock(now),
      text: `完成任务: ${quest.name}。获得宗门贡献+${quest.sectContributionReward}`,
      tags: [{ label: '任务完成', tone: 'green' }],
    })
    return { ok: true, tone: 'green', message: `完成任务: ${quest.name}`, shouldAskAI: true }
  }

  if (action.type === 'SECT_SHOP_BUY') {
    const price = action.resourceId === 'qi_gathering_pill' ? 15
      : action.resourceId === 'recovery_pill' ? 8
      : action.resourceId === 'healing_pill' ? 12
      : action.resourceId === 'technique_scroll' ? 300
      : 10

    const totalPrice = price * action.amount
    if (save.sectContribution < totalPrice) {
      return { ok: false, tone: 'red', message: `宗门贡献不足（需要${totalPrice}）` }
    }

    save.sectContribution -= totalPrice
    addItem(save, action.resourceId, action.amount)
    return { ok: true, tone: 'green', message: `购买成功，消耗${totalPrice}宗门贡献` }
  }

  if (action.type === 'USE_PILL') {
    const item = save.inventory.find(i => i.id === action.inventoryItemId)
    if (!item) return { ok: false, tone: 'red', message: '物品不存在' }

    if (item.resourceId === 'qi_gathering_pill') {
      if (save.combat) return { ok: false, tone: 'red', message: '战斗中不能使用修炼丹' }
      save.cultivationProgress = Math.min(100, save.cultivationProgress + 15)
      item.amount -= 1
      if (item.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== item.id)
      return { ok: true, tone: 'green', message: '使用聚气丹，修炼进度+15%' }
    }

    if (item.resourceId === 'recovery_pill') {
      const recovered = Math.min(30, save.maxSpiritPower - save.spiritPower)
      save.spiritPower += recovered
      item.amount -= 1
      if (item.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== item.id)
      return { ok: true, tone: 'green', message: `使用回灵丹，灵气+${recovered}` }
    }

    if (item.resourceId === 'healing_pill') {
      const healed = Math.min(50, save.maxHp - save.currentHp)
      save.currentHp += healed
      item.amount -= 1
      if (item.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== item.id)
      return { ok: true, tone: 'green', message: `使用疗伤丹，生命+${healed}` }
    }

    return { ok: false, tone: 'red', message: '该物品不能直接使用' }
  }

  if (action.type === 'COMMS_SEND') {
    const text = action.text.trim()
    if (!text) return { ok: false, tone: 'red', message: '输入不能为空' }
    save.messages.unshift({
      id: `msg-${now}-comms`,
      type: 'user',
      title: save.playerName,
      timestamp: formatClock(now),
      text,
      tags: [{ label: '玩家', tone: 'cyan' }],
    })
    return { ok: true, tone: 'cyan', message: '消息已发送', shouldAskAI: true }
  }

  return { ok: false, tone: 'red', message: '未知动作' }
}
