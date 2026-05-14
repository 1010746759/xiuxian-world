import type { GameSave } from '../types/save'
import { formatClock } from './format'
import { runAlchemy } from './alchemy'
import { runCultivation } from './cultivation'

const OFFLINE_LIMIT_MS = 1000 * 60 * 60 * 2

export function tickSave(save: GameSave, now = Date.now()): GameSave {
  const elapsedMs = Math.max(0, Math.min(now - save.lastTickAt, OFFLINE_LIMIT_MS))
  if (elapsedMs <= 0) return save

  const elapsedSeconds = elapsedMs / 1000

  runCultivation(save, elapsedSeconds)
  runAlchemy(save, now)

  save.lastTickAt = now
  save.worldDay = 1 + Math.floor((now - save.createdAt) / (1000 * 60 * 60 * 24))

  if (save.lifespan <= 0) {
    save.alerts.push({
      id: `alert-death-${now}`,
      severity: 'critical',
      text: '寿元耗尽！你的修仙之途已走到尽头。',
    })
  }

  save.messages = save.messages.slice(0, 80)
  save.alerts = save.alerts.slice(-20)
  return save
}
