export interface InventoryItem {
  id: string
  resourceId: string
  name: string
  amount: number
}

export interface PlayerTechnique {
  id: string
  name: string
  templateId: string
  category: 'attack' | 'defense' | 'support' | 'cultivation'
  level: number
  maxLevel: number
  experience: number
  selfCreated: boolean
  selfCreatedDescription: string
  createdAt: number
}

export interface CombatState {
  enemyId: string
  enemyName: string
  enemyHp: number
  enemyMaxHp: number
  enemyRealm: string
  enemySpiritPower: number
  enemyMaxSpiritPower: number
  turn: number
  playerHp: number
  playerMaxHp: number
  playerSpiritPower: number
  playerMaxSpiritPower: number
  playerBuffs: CombatBuff[]
  enemyBuffs: CombatBuff[]
  logs: string[]
  status: 'active' | 'victory' | 'defeat' | 'fled'
}

export interface CombatBuff {
  id: string
  name: string
  type: 'dot' | 'hot' | 'stat_up' | 'stat_down' | 'shield'
  value: number
  remainingTurns: number
}

export interface QuestProgress {
  questId: string
  objectives: { targetId: string; current: number; required: number }[]
  status: 'accepted' | 'completed' | 'failed'
  acceptedAt: number
  completedAt: number | null
}

export interface CultivationQueue {
  id: string
  method: 'meditation' | 'pill_assisted' | 'location_bonus'
  startedAt: number
  finishAt: number
  pillsUsed: string[]
}

export interface AlchemyQueue {
  id: string
  recipeId: string
  recipeName: string
  startedAt: number
  finishAt: number
  count: number
}

export interface GameMessage {
  id: string
  type: 'npc' | 'user' | 'system' | 'alert'
  title: string
  timestamp: string
  text: string
  tags?: { label: string; tone: 'cyan' | 'amber' | 'green' | 'red' | 'violet' }[]
}

export interface GameSave {
  version: number
  createdAt: number
  lastTickAt: number

  playerName: string
  realm: string
  realmLayer: number
  cultivationProgress: number
  lifespan: number
  maxLifespan: number
  spiritRoot: string

  spiritStones: number
  inventory: InventoryItem[]

  techniques: PlayerTechnique[]

  currentHp: number
  maxHp: number
  spiritPower: number
  maxSpiritPower: number

  combat: CombatState | null

  currentLocationId: string
  discoveredLocationIds: string[]
  worldDay: number

  sectContribution: number
  sectRank: string

  quests: QuestProgress[]

  karma: number
  tribulationProgress: number

  cultivationQueue: CultivationQueue | null
  alchemyQueues: AlchemyQueue[]

  messages: GameMessage[]
  alerts: { id: string; severity: 'warning' | 'critical'; text: string }[]
}
