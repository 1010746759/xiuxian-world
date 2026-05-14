import type { GameSave } from '../types/save'

export function createInitialSave(): GameSave {
  const now = Date.now()
  return {
    version: 1,
    createdAt: now,
    lastTickAt: now,

    playerName: '无名修士',
    realm: 'mortal',
    realmLayer: 1,
    cultivationProgress: 0,
    lifespan: 80,
    maxLifespan: 80,
    spiritRoot: '未觉醒',

    spiritStones: 100,
    inventory: [
      { id: 'inv-qi-pill-1', resourceId: 'qi_gathering_pill', name: '聚气丹', amount: 5 },
      { id: 'inv-recovery-1', resourceId: 'recovery_pill', name: '回灵丹', amount: 3 },
    ],

    techniques: [
      {
        id: 'tech-basic-sword-1',
        name: '基础剑法',
        templateId: 'basic_sword',
        category: 'attack',
        level: 1,
        maxLevel: 10,
        experience: 0,
        selfCreated: false,
        selfCreatedDescription: '',
        createdAt: now,
      },
    ],

    currentHp: 100,
    maxHp: 100,
    spiritPower: 0,
    maxSpiritPower: 0,

    combat: null,

    currentLocationId: 'qingxuan_outer',
    discoveredLocationIds: ['qingxuan_outer', 'qingxuan_rear_mountain'],
    worldDay: 1,

    sectContribution: 0,
    sectRank: '外门弟子',

    quests: [],

    karma: 0,
    tribulationProgress: 0,

    cultivationQueue: null,
    alchemyQueues: [],

    messages: [
      {
        id: 'msg-init',
        type: 'system',
        title: '仙途开启',
        timestamp: new Date(now).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }),
        text: '你站在青玄宗外门广场上，灵雾缭绕。传功长老的目光落在你身上，似乎看出了什么。修仙之途，从此开始。',
        tags: [{ label: '开始', tone: 'violet' }],
      },
    ],
    alerts: [],
  }
}
