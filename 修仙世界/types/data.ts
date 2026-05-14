export interface RealmStage {
  id: string
  name: string
  layerCount: number
  lifespanBonus: number
  combatPowerMultiplier: number
  spiritPowerBonus: number
  breakthroughBaseChance: number
  cultivationHoursPerPercent: number
  description: string
}

export interface ResourceDef {
  id: string
  name: string
  category: 'currency' | 'pill' | 'herb' | 'ore' | 'material' | 'special'
  baseValue: number
  description: string
}

export interface LocationDef {
  id: string
  title: string
  zone: string
  description: string
  resources: { resourceId: string; gatherRate: number }[]
  enemies: string[]
  worldbookTags: string[]
  unlocked: boolean
  isSafe: boolean
}

export interface EnemyDef {
  id: string
  name: string
  realm: string
  hp: number
  attack: number
  defense: number
  spiritPower: number
  skills: EnemySkillDef[]
  loot: { resourceId: string; chance: number; amount: [number, number] }[]
  description: string
}

export interface EnemySkillDef {
  id: string
  name: string
  damageMultiplier: number
  spiritCost: number
  description: string
}

export interface PillRecipeDef {
  id: string
  name: string
  description: string
  ingredients: { resourceId: string; amount: number }[]
  refineTimeSeconds: number
  successBaseChance: number
}

export interface TechniqueTemplateDef {
  id: string
  name: string
  category: 'attack' | 'defense' | 'support' | 'cultivation'
  maxLevel: number
  description: string
}

export interface QuestDef {
  id: string
  name: string
  description: string
  type: 'main' | 'side' | 'daily'
  objectives: QuestObjectiveDef[]
  rewards: { resourceId: string; amount: number }[]
  sectContributionReward: number
  preQuestId: string | null
}

export interface QuestObjectiveDef {
  type: 'kill' | 'gather' | 'reach_realm' | 'talk_npc' | 'explore'
  targetId: string
  targetAmount: number
  description: string
}
