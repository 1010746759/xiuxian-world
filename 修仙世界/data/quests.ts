import type { QuestDef } from '../types/data'

export const quests: QuestDef[] = [
  {
    id: 'main_enter_sect',
    name: '初入仙门',
    description: '你来到青玄宗外门，传功长老听说你天资不错，让你先去后山采些灵草，再回外门修炼至练气第一层',
    type: 'main',
    objectives: [
      { type: 'gather', targetId: 'spirit_herb', targetAmount: 5, description: '在后山采集灵草 x5' },
      { type: 'reach_realm', targetId: 'qi_refining', targetAmount: 1, description: '修炼至练气期第一层' },
    ],
    rewards: [
      { resourceId: 'spirit_stone', amount: 50 },
      { resourceId: 'qi_gathering_pill', amount: 3 },
    ],
    sectContributionReward: 20,
    preQuestId: null,
  },
  {
    id: 'main_slay_spider',
    name: '初试锋芒',
    description: '任务堂发布悬赏：后山的石魔蛛数量激增，已有同门受伤。请击杀3只石魔蛛',
    type: 'main',
    objectives: [
      { type: 'kill', targetId: 'stone_spider', targetAmount: 3, description: '击杀石魔蛛 x3' },
    ],
    rewards: [
      { resourceId: 'spirit_stone', amount: 100 },
      { resourceId: 'recovery_pill', amount: 5 },
      { resourceId: 'technique_scroll', amount: 1 },
    ],
    sectContributionReward: 50,
    preQuestId: 'main_enter_sect',
  },
  {
    id: 'main_breakthrough',
    name: '筑基之路',
    description: '你已修炼至练气第九层，筑基在即。传功长老建议你先去妖兽密林历练一番，收集筑基所需的材料',
    type: 'main',
    objectives: [
      { type: 'gather', targetId: 'demon_core_low', targetAmount: 3, description: '收集妖兽内丹 x3' },
      { type: 'reach_realm', targetId: 'foundation', targetAmount: 1, description: '突破至筑基期' },
    ],
    rewards: [
      { resourceId: 'spirit_stone', amount: 500 },
      { resourceId: 'breakthrough_pill_low', amount: 2 },
      { resourceId: 'sect_token', amount: 100 },
    ],
    sectContributionReward: 200,
    preQuestId: 'main_slay_spider',
  },
  {
    id: 'side_herb_collect',
    name: '采药日常',
    description: '丹房的采药童子说灵草供不应求，需要更多灵草来炼制聚气丹',
    type: 'daily',
    objectives: [
      { type: 'gather', targetId: 'spirit_herb', targetAmount: 10, description: '采集灵草 x10' },
    ],
    rewards: [
      { resourceId: 'spirit_stone', amount: 30 },
      { resourceId: 'qi_gathering_pill', amount: 2 },
    ],
    sectContributionReward: 10,
    preQuestId: null,
  },
  {
    id: 'side_wolf_hunt',
    name: '猎妖令',
    description: '妖兽密林入口有巡逻弟子受伤，需要清理附近的青面妖狼',
    type: 'side',
    objectives: [
      { type: 'kill', targetId: 'green_wolf', targetAmount: 2, description: '击杀青面妖狼 x2' },
    ],
    rewards: [
      { resourceId: 'spirit_stone', amount: 200 },
      { resourceId: 'healing_pill', amount: 3 },
      { resourceId: 'iron_ore', amount: 5 },
    ],
    sectContributionReward: 40,
    preQuestId: null,
  },
]

export function getQuest(id: string): QuestDef {
  const quest = quests.find(q => q.id === id)
  if (!quest) throw new Error(`未知任务: ${id}`)
  return quest
}
