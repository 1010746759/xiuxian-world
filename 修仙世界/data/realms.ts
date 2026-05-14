import type { RealmStage } from '../types/data'

export const realms: RealmStage[] = [
  {
    id: 'mortal',
    name: '凡人',
    layerCount: 1,
    lifespanBonus: 0,
    combatPowerMultiplier: 0.5,
    spiritPowerBonus: 0,
    breakthroughBaseChance: 100,
    cultivationHoursPerPercent: 1,
    description: '尚未踏入修仙之途的普通人',
  },
  {
    id: 'qi_refining',
    name: '练气期',
    layerCount: 9,
    lifespanBonus: 60,
    combatPowerMultiplier: 1,
    spiritPowerBonus: 50,
    breakthroughBaseChance: 60,
    cultivationHoursPerPercent: 2,
    description: '引天地灵气入体，淬炼经脉。每层提升灵气储量与肉身强度',
  },
  {
    id: 'foundation',
    name: '筑基期',
    layerCount: 3,
    lifespanBonus: 150,
    combatPowerMultiplier: 3,
    spiritPowerBonus: 200,
    breakthroughBaseChance: 35,
    cultivationHoursPerPercent: 6,
    description: '灵力凝实为基，开辟丹田世界。初/中/后期三层',
  },
  {
    id: 'golden_core',
    name: '金丹期',
    layerCount: 3,
    lifespanBonus: 400,
    combatPowerMultiplier: 8,
    spiritPowerBonus: 800,
    breakthroughBaseChance: 15,
    cultivationHoursPerPercent: 18,
    description: '丹田凝聚金丹，寿元大增，术法威力翻倍',
  },
]

export function getRealm(realmId: string): RealmStage {
  const realm = realms.find(r => r.id === realmId)
  if (!realm) throw new Error(`未知境界: ${realmId}`)
  return realm
}

export function getNextRealm(realmId: string): RealmStage | null {
  const index = realms.findIndex(r => r.id === realmId)
  if (index === -1 || index >= realms.length - 1) return null
  return realms[index + 1]
}

export function getRealmLayerText(realmId: string, layer: number): string {
  const realm = getRealm(realmId)
  if (realm.layerCount === 1) return realm.name
  if (realm.id === 'qi_refining') return `${realm.name}第${layer}层`
  const stageNames = ['初期', '中期', '后期', '圆满']
  return `${realm.name}${stageNames[Math.min(layer - 1, stageNames.length - 1)]}`
}
