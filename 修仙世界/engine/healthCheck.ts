import type { GameSave } from '../types/save'
import { realms } from '../data/realms'
import { locations } from '../data/locations'
import { resources } from '../data/resources'

export interface HealthReport {
  status: 'healthy' | 'warning' | 'critical'
  errors: string[]
  warnings: string[]
  errorCount: number
  warningCount: number
}

export function buildSaveHealthReport(
  save: GameSave,
  opts: { expectedSchemaVersion: number },
): HealthReport {
  const errors: string[] = []
  const warnings: string[] = []

  if (save.version !== opts.expectedSchemaVersion) {
    errors.push(`存档版本不匹配: ${save.version} !== ${opts.expectedSchemaVersion}`)
  }

  if (!realms.find(r => r.id === save.realm)) {
    errors.push(`当前境界 ${save.realm} 不存在于境界表中`)
  }

  if (!locations.find(l => l.id === save.currentLocationId)) {
    errors.push(`当前地点 ${save.currentLocationId} 不存在于地点表中`)
  }

  if (save.currentHp <= 0 && !save.combat) {
    errors.push('角色生命值为0且不在战斗中')
  }

  if (save.lifespan <= 0) {
    errors.push('寿元已耗尽')
  }

  for (const item of save.inventory) {
    if (!resources.find(r => r.id === item.resourceId)) {
      warnings.push(`物品栏中存在未知资源: ${item.resourceId}`)
    }
    if (item.amount <= 0) {
      warnings.push(`物品栏中 ${item.name} 数量为0或负数`)
    }
  }

  for (const tech of save.techniques) {
    if (tech.level > tech.maxLevel) {
      errors.push(`功法 ${tech.name} 等级 ${tech.level} 超过上限 ${tech.maxLevel}`)
    }
  }

  if (save.cultivationProgress < 0 || save.cultivationProgress > 100) {
    errors.push(`修炼进度异常: ${save.cultivationProgress}`)
  }

  for (const q of save.alchemyQueues) {
    if (q.finishAt < Date.now() - 1000 * 60 * 60 * 24) {
      warnings.push(`炼丹队列 ${q.recipeName} 已过期超过24小时`)
    }
  }

  const discovered = save.discoveredLocationIds.filter(id => !locations.find(l => l.id === id))
  if (discovered.length > 0) {
    warnings.push(`已探索地点中有 ${discovered.length} 个不存在于地点表`)
  }

  return {
    status: errors.length > 0 ? 'critical' : warnings.length > 0 ? 'warning' : 'healthy',
    errors,
    warnings,
    errorCount: errors.length,
    warningCount: warnings.length,
  }
}
