import type { GameSave, InventoryItem } from '../types/save'
import { getResource } from './selectors'

export function addItem(save: GameSave, resourceId: string, amount: number): void {
  if (amount <= 0) return
  const existing = save.inventory.find(i => i.resourceId === resourceId)
  if (existing) {
    existing.amount += amount
  } else {
    save.inventory.push({
      id: `inv-${resourceId}-${Date.now()}`,
      resourceId,
      name: getResource(resourceId).name,
      amount,
    })
  }
}

export function removeItem(save: GameSave, resourceId: string, amount: number): boolean {
  if (amount <= 0) return true
  const existing = save.inventory.find(i => i.resourceId === resourceId)
  if (!existing || existing.amount < amount) return false
  existing.amount -= amount
  if (existing.amount <= 0) {
    save.inventory = save.inventory.filter(i => i.id !== existing.id)
  }
  return true
}

export function countItem(save: GameSave, resourceId: string): number {
  return save.inventory
    .filter(i => i.resourceId === resourceId)
    .reduce((sum, i) => sum + i.amount, 0)
}

export function hasItems(save: GameSave, requirements: { resourceId: string; amount: number }[]): boolean {
  return requirements.every(req => countItem(save, req.resourceId) >= req.amount)
}

export function deductItems(save: GameSave, requirements: { resourceId: string; amount: number }[]): boolean {
  if (!hasItems(save, requirements)) return false
  for (const req of requirements) {
    removeItem(save, req.resourceId, req.amount)
  }
  return true
}

export function getItemByName(save: GameSave, itemId: string): InventoryItem | undefined {
  return save.inventory.find(i => i.id === itemId)
}

export function addSpiritStones(save: GameSave, amount: number): void {
  save.spiritStones += amount
}

export function spendSpiritStones(save: GameSave, amount: number): boolean {
  if (save.spiritStones < amount) return false
  save.spiritStones -= amount
  return true
}
