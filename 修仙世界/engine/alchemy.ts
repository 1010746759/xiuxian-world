import type { GameSave } from '../types/save'
import { getPillRecipe } from '../data/pillRecipes'
import { getResource } from '../data/resources'
import { addItem, countItem } from './inventory'

function getRecipe(id: string) {
  return getPillRecipe(id)
}

export function canRefine(save: GameSave, recipeId: string): { ok: boolean; reason: string } {
  const recipe = getRecipe(recipeId)
  if (!recipe) return { ok: false, reason: '未知丹方' }

  for (const ing of recipe.ingredients) {
    const have = countItem(save, ing.resourceId)
    if (have < ing.amount) {
      const res = getResource(ing.resourceId)
      return { ok: false, reason: `${res.name}不足（需要${ing.amount}，拥有${have}）` }
    }
  }

  return { ok: true, reason: '' }
}

export function startRefine(save: GameSave, recipeId: string, count: number, now: number): { ok: boolean; message: string } {
  const check = canRefine(save, recipeId)
  if (!check.ok) return { ok: false, message: check.reason }

  const recipe = getRecipe(recipeId)

  for (const ing of recipe.ingredients) {
    const remaining = ing.amount * count
    let toRemove = remaining
    for (const item of [...save.inventory]) {
      if (item.resourceId !== ing.resourceId) continue
      const take = Math.min(item.amount, toRemove)
      item.amount -= take
      toRemove -= take
      if (item.amount <= 0) save.inventory = save.inventory.filter(i => i.id !== item.id)
      if (toRemove <= 0) break
    }
  }

  const finishAt = now + recipe.refineTimeSeconds * 1000 * count
  save.alchemyQueues.push({
    id: `alchemy-${now}-${recipeId}`,
    recipeId,
    recipeName: recipe.name,
    startedAt: now,
    finishAt,
    count,
  })

  return { ok: true, message: `${recipe.name} × ${count} 开始炼制，预计完成 ${new Date(finishAt).toLocaleTimeString('zh-CN')}` }
}

export function runAlchemy(save: GameSave, now: number): void {
  const finished = save.alchemyQueues.filter(q => q.finishAt <= now)
  if (finished.length === 0) return

  for (const queue of finished) {
    const recipe = getRecipe(queue.recipeId)
    if (!recipe) continue

    let successCount = 0
    for (let i = 0; i < queue.count; i++) {
      if (Math.random() * 100 <= recipe.successBaseChance) {
        successCount++
      }
    }

    if (successCount > 0) {
      const outputId = recipe.id === 'qi_gathering' ? 'qi_gathering_pill'
        : recipe.id === 'recovery' ? 'recovery_pill'
        : recipe.id === 'healing' ? 'healing_pill'
        : recipe.id === 'breakthrough_low' ? 'breakthrough_pill_low'
        : recipe.id === 'breakthrough_mid' ? 'breakthrough_pill_mid'
        : null

      if (outputId) {
        addItem(save, outputId, successCount)
      }
    }

    const failedCount = queue.count - successCount
    const detail = failedCount > 0
      ? `${successCount}成功, ${failedCount}失败`
      : `全部${successCount}成功`

    save.messages.unshift({
      id: `msg-${queue.id}`,
      type: 'system',
      title: '炼丹完成',
      timestamp: new Date(now).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }),
      text: `${recipe.name}炼制完成: ${detail}`,
      tags: [{ label: '炼丹', tone: 'violet' }],
    })
  }

  const finishedIds = new Set(finished.map(q => q.id))
  save.alchemyQueues = save.alchemyQueues.filter(q => !finishedIds.has(q.id))
}
