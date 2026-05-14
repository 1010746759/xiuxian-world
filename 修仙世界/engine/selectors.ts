import { enemies } from '../data/enemies'
import { locations } from '../data/locations'
import { pillRecipes } from '../data/pillRecipes'
import { quests } from '../data/quests'
import { getRealm, realms } from '../data/realms'
import { resources } from '../data/resources'
import type { GameSave } from '../types/save'

export function getLocation(id: string) {
  return locations.find(l => l.id === id)!
}

export function getEnemy(id: string) {
  return enemies.find(e => e.id === id)!
}

export function getResource(id: string) {
  return resources.find(r => r.id === id)!
}

export function getPillRecipe(id: string) {
  return pillRecipes.find(r => r.id === id)!
}

export function getQuest(id: string) {
  return quests.find(q => q.id === id)!
}

export function getAvailableLocations(save: GameSave) {
  return locations.filter(l => save.discoveredLocationIds.includes(l.id))
}

export function getCurrentLocation(save: GameSave) {
  return getLocation(save.currentLocationId)
}

export function getLocationEnemies(locationId: string) {
  const loc = locations.find(l => l.id === locationId)
  if (!loc) return []
  return loc.enemies.map(id => getEnemy(id))
}

export function getCurrentRealm(save: GameSave) {
  return getRealm(save.realm)
}

export function getNextRealm(save: GameSave) {
  const index = realms.findIndex(r => r.id === save.realm)
  if (index === -1 || index >= realms.length - 1) return null
  return realms[index + 1]
}

export function getRealmLayerText(save: GameSave): string {
  const realm = getCurrentRealm(save)
  if (realm.layerCount === 1) return realm.name
  if (realm.id === 'qi_refining') return `${realm.name}第${save.realmLayer}层`
  const stageNames = ['初期', '中期', '后期', '圆满']
  return `${realm.name}${stageNames[Math.min(save.realmLayer - 1, stageNames.length - 1)]}`
}

export function getCombatPower(save: GameSave): number {
  const realm = getCurrentRealm(save)
  return Math.round(realm.combatPowerMultiplier * 100)
}

export function getInventoryItem(save: GameSave, itemId: string) {
  return save.inventory.find(i => i.id === itemId)
}

export function getTechnique(save: GameSave, techniqueId: string) {
  return save.techniques.find(t => t.id === techniqueId)
}

export function getQuestProgress(save: GameSave, questId: string) {
  return save.quests.find(q => q.questId === questId)
}
