import type { GameSave } from '../types/save'
import { getLocation, getCurrentRealm, getRealmLayerText } from '../engine/selectors'
import { formatAmount, formatPercent } from '../engine/format'
import { getResourceName } from '../data/resources'

function buildStatsLine(save: GameSave): string {
  return [
    `境界: ${getRealmLayerText(save)}`,
    `修炼进度: ${formatPercent(save.cultivationProgress)}`,
    `灵根: ${save.spiritRoot}`,
    `寿元: ${save.lifespan}/${save.maxLifespan}年`,
    `生命: ${save.currentHp}/${save.maxHp}`,
    `灵气: ${save.spiritPower}/${save.maxSpiritPower}`,
  ].join(', ')
}

function buildInventoryLine(save: GameSave): string {
  if (save.inventory.length === 0) return '背包为空'
  return save.inventory
    .filter(i => i.amount > 0)
    .slice(0, 10)
    .map(i => `${i.name} × ${i.amount}`)
    .join(', ')
}

function buildTechniqueLine(save: GameSave): string {
  if (save.techniques.length === 0) return '未掌握任何功法'
  return save.techniques
    .map(t => `${t.name} Lv.${t.level}/${t.maxLevel}${t.selfCreated ? '(自创)' : ''}`)
    .join(', ')
}

function buildQuestLine(save: GameSave): string {
  const active = save.quests.filter(q => q.status === 'accepted')
  if (active.length === 0) return '无进行中的任务'
  return active.map(q => {
    const def = (() => {
      try { return require('../data/quests').getQuest(q.questId) } catch { return null }
    })()
    const progress = q.objectives.map(o => `${o.current}/${o.required}`).join(' ')
    return `${def?.name ?? q.questId} [${progress}]`
  }).join('; ')
}

function buildCultivationLine(save: GameSave): string {
  if (!save.cultivationQueue) return '未在修炼'
  const remain = save.cultivationQueue.finishAt - Date.now()
  const remainHours = Math.round(remain / 3600000 * 10) / 10
  return `修炼中, 剩余约${remainHours}小时`
}

function buildCombatLine(save: GameSave): string {
  if (!save.combat) return '未在战斗'
  return `战斗中: ${save.combat.enemyName} (HP ${save.combat.enemyHp}/${save.combat.enemyMaxHp})`
}

export function buildSituationSummary(save: GameSave): string {
  const location = getLocation(save.currentLocationId)
  return [
    `当前位置: ${location.title} (${location.zone}), ${location.isSafe ? '安全区' : '野外'}`,
    `玩家: ${save.playerName}`,
    buildStatsLine(save),
    `灵石: ${save.spiritStones}`,
    `宗门: ${save.sectRank}, 贡献: ${save.sectContribution}`,
    `背包: ${buildInventoryLine(save)}`,
    `功法: ${buildTechniqueLine(save)}`,
    `任务: ${buildQuestLine(save)}`,
    `修炼: ${buildCultivationLine(save)}`,
    `战斗: ${buildCombatLine(save)}`,
    `因果: ${save.karma} | 天劫累积: ${save.tribulationProgress}`,
    `告警: ${save.alerts.map(a => a.text).join('; ') || '无'}`,
  ].join('\n')
}

export function buildWorldbookScanText(save: GameSave): string {
  const location = getLocation(save.currentLocationId)
  const tags: string[] = [
    '[修仙世界]',
    `地点:${location.title}`,
    `区域:${location.zone}`,
    ...location.worldbookTags,
    `境界:${getRealmLayerText(save)}`,
    `门派:青玄宗`,
    `身份:${save.sectRank}`,
    `安全:${location.isSafe ? '是' : '否'}`,
  ]

  if (save.combat) {
    tags.push(`战斗:${save.combat.enemyName}`)
  }
  if (save.cultivationQueue) {
    tags.push('修炼:进行中')
  }
  for (const alert of save.alerts) {
    tags.push(`告警:${alert.severity}`)
  }

  return Array.from(new Set(tags)).join('\n')
}

export function buildAIInjects(save: GameSave): Omit<InjectionPrompt, 'id'>[] {
  const situation = buildSituationSummary(save)
  const scanText = buildWorldbookScanText(save)

  return [
    {
      position: 'none',
      depth: 0,
      role: 'system',
      should_scan: true,
      content: scanText,
    },
    {
      position: 'in_chat',
      depth: 0,
      role: 'system',
      should_scan: false,
      content: [
        '你作为这个修仙世界的叙述者，负责旁白描述、NPC对话、场景气氛和角色互动。',
        '你可以扮演所有非玩家角色：宗门长老、同门师兄弟、散修、妖兽、路人等。',
        '所有修炼进度、资源、战斗结果、任务状态都由前端脚本决定，你不能修改。',
        '你可以根据当前局势描述修炼体感、战斗画面、NPC态度、场景气氛。',
        '不要输出变量更新、JSON、MVU命令、函数调用或世界书编辑指令。',
        '不要输出思考过程、<thinking>、<content>或类似标签。',
        '最终回复保持自然的叙述或角色对话。',
        '',
        '当前权威局势:',
        situation,
      ].join('\n'),
    },
  ]
}
