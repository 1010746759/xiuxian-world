import { z } from 'zod'
import type { GameSave } from '../types/save'
import { createInitialSave } from '../data/initialSave'

export const SAVE_VARIABLE_KEY = 'cultivationWorld'
export const SAVE_SCHEMA_VERSION = 1

type SaveSource = 'chat' | 'memory'

export interface SaveServiceStatus {
  state: 'loading' | 'ready' | 'saving' | 'error'
  source: SaveSource
  message: string
  variableKey: string
  savedAt: number | null
  migrated: boolean
}

const gameMessageSchema = z.object({
  id: z.string().catch('msg-unknown'),
  type: z.enum(['npc', 'user', 'system', 'alert']).catch('system'),
  title: z.string().catch('系统'),
  timestamp: z.string().catch('--:--'),
  text: z.string().catch(''),
  tags: z.array(z.object({
    label: z.string().catch(''),
    tone: z.enum(['cyan', 'amber', 'green', 'red', 'violet']).catch('cyan'),
  })).optional().catch([]),
})

const inventoryItemSchema = z.object({
  id: z.string().catch('inv-unknown'),
  resourceId: z.string().catch('unknown'),
  name: z.string().catch('未知物品'),
  amount: z.coerce.number().int().nonnegative().catch(0),
})

const techniqueSchema = z.object({
  id: z.string().catch('tech-unknown'),
  name: z.string().catch('未知功法'),
  templateId: z.string().catch(''),
  category: z.enum(['attack', 'defense', 'support', 'cultivation']).catch('attack'),
  level: z.coerce.number().int().min(1).max(10).catch(1),
  maxLevel: z.coerce.number().int().catch(10),
  experience: z.coerce.number().nonnegative().catch(0),
  selfCreated: z.coerce.boolean().catch(false),
  selfCreatedDescription: z.string().catch(''),
  createdAt: z.coerce.number().catch(() => Date.now()),
})

const combatStateSchema = z.object({
  enemyId: z.string(),
  enemyName: z.string(),
  enemyHp: z.number(),
  enemyMaxHp: z.number(),
  enemyRealm: z.string(),
  enemySpiritPower: z.number(),
  enemyMaxSpiritPower: z.number(),
  turn: z.number(),
  playerHp: z.number(),
  playerMaxHp: z.number(),
  playerSpiritPower: z.number(),
  playerMaxSpiritPower: z.number(),
  playerBuffs: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['dot', 'hot', 'stat_up', 'stat_down', 'shield']),
    value: z.number(),
    remainingTurns: z.number(),
  })),
  enemyBuffs: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['dot', 'hot', 'stat_up', 'stat_down', 'shield']),
    value: z.number(),
    remainingTurns: z.number(),
  })),
  logs: z.array(z.string()),
  status: z.enum(['active', 'victory', 'defeat', 'fled']),
}).nullable().catch(null)

const questProgressSchema = z.object({
  questId: z.string(),
  objectives: z.array(z.object({
    targetId: z.string(),
    current: z.coerce.number().nonnegative().catch(0),
    required: z.coerce.number().positive().catch(1),
  })),
  status: z.enum(['accepted', 'completed', 'failed']),
  acceptedAt: z.coerce.number().catch(0),
  completedAt: z.number().nullable().catch(null),
})

const gameSaveSchema = z.object({
  version: z.coerce.number().int().catch(SAVE_SCHEMA_VERSION),
  createdAt: z.coerce.number().catch(() => Date.now()),
  lastTickAt: z.coerce.number().catch(() => Date.now()),
  playerName: z.string().catch('无名修士'),
  realm: z.string().catch('mortal'),
  realmLayer: z.coerce.number().int().min(1).catch(1),
  cultivationProgress: z.coerce.number().min(0).max(100).catch(0),
  lifespan: z.coerce.number().nonnegative().catch(80),
  maxLifespan: z.coerce.number().positive().catch(80),
  spiritRoot: z.string().catch('未觉醒'),
  spiritStones: z.coerce.number().nonnegative().catch(100),
  inventory: z.array(inventoryItemSchema).catch([]),
  techniques: z.array(techniqueSchema).catch([]),
  currentHp: z.coerce.number().positive().catch(100),
  maxHp: z.coerce.number().positive().catch(100),
  spiritPower: z.coerce.number().nonnegative().catch(0),
  maxSpiritPower: z.coerce.number().nonnegative().catch(0),
  combat: combatStateSchema,
  currentLocationId: z.string().catch('qingxuan_outer'),
  discoveredLocationIds: z.array(z.string()).catch(['qingxuan_outer', 'qingxuan_rear_mountain']),
  worldDay: z.coerce.number().positive().catch(1),
  sectContribution: z.coerce.number().nonnegative().catch(0),
  sectRank: z.string().catch('外门弟子'),
  quests: z.array(questProgressSchema).catch([]),
  karma: z.coerce.number().catch(0),
  tribulationProgress: z.coerce.number().nonnegative().catch(0),
  cultivationQueue: z.object({
    id: z.string(),
    method: z.enum(['meditation', 'pill_assisted', 'location_bonus']),
    startedAt: z.number(),
    finishAt: z.number(),
    pillsUsed: z.array(z.string()),
  }).nullable().catch(null),
  alchemyQueues: z.array(z.object({
    id: z.string(),
    recipeId: z.string(),
    recipeName: z.string(),
    startedAt: z.number(),
    finishAt: z.number(),
    count: z.number(),
  })).catch([]),
  messages: z.array(gameMessageSchema).catch([]),
  alerts: z.array(z.object({
    id: z.string().catch(''),
    severity: z.enum(['warning', 'critical']).catch('warning'),
    text: z.string().catch(''),
  })).catch([]),
})

const saveEnvelopeSchema = z.object({
  schemaVersion: z.coerce.number().int().catch(SAVE_SCHEMA_VERSION),
  savedAt: z.coerce.number().catch(0),
  save: gameSaveSchema,
})

function cloneSave(save: GameSave): GameSave {
  return JSON.parse(JSON.stringify(save)) as GameSave
}

function chatVariablesAvailable(): boolean {
  return typeof getVariables === 'function' && typeof updateVariablesWith === 'function'
}

function getDefaultStatus(message: string, source: SaveSource): SaveServiceStatus {
  return {
    state: 'ready',
    source,
    message,
    variableKey: SAVE_VARIABLE_KEY,
    savedAt: null,
    migrated: false,
  }
}

function normalizeSave(raw: unknown, fallback: GameSave): { save: GameSave; migrated: boolean } | null {
  const parsed = gameSaveSchema.safeParse(raw)
  if (!parsed.success) return null

  const data = parsed.data
  return {
    save: {
      ...fallback,
      ...data,
      version: SAVE_SCHEMA_VERSION,
      messages: data.messages.length ? data.messages.slice(0, 80) : fallback.messages,
      alerts: data.alerts.length ? data.alerts : fallback.alerts,
      inventory: data.inventory.filter(i => i.amount > 0),
    },
    migrated: data.version !== SAVE_SCHEMA_VERSION,
  }
}

export async function loadGameSave(fallback: GameSave): Promise<{
  save: GameSave
  needsPersist: boolean
  status: SaveServiceStatus
}> {
  if (!chatVariablesAvailable()) {
    return { save: fallback, needsPersist: false, status: getDefaultStatus('未检测到酒馆变量接口，使用内存存档', 'memory') }
  }

  try {
    const variables = getVariables({ type: 'chat' })
    const raw = variables[SAVE_VARIABLE_KEY]

    let storedRaw: unknown = raw
    if (raw) {
      const envelope = saveEnvelopeSchema.safeParse(raw)
      if (envelope.success) {
        storedRaw = envelope.data.save
      }
    }

    const normalized = storedRaw ? normalizeSave(storedRaw, fallback) : null
    if (!normalized) {
      return { save: fallback, needsPersist: true, status: getDefaultStatus('未发现存档，已创建新存档', 'chat') }
    }
    return {
      save: normalized.save,
      needsPersist: normalized.migrated,
      status: {
        state: 'ready', source: 'chat',
        message: normalized.migrated ? '存档已读取并迁移' : '已读取存档',
        variableKey: SAVE_VARIABLE_KEY, savedAt: null, migrated: normalized.migrated,
      },
    }
  } catch (error) {
    return {
      save: fallback, needsPersist: false,
      status: { state: 'error', source: 'memory', message: `读取存档失败: ${error}`, variableKey: SAVE_VARIABLE_KEY, savedAt: null, migrated: false },
    }
  }
}

export function serializeGameSave(save: GameSave): string {
  return JSON.stringify({ schemaVersion: SAVE_SCHEMA_VERSION, savedAt: Date.now(), save: cloneSave(save) }, null, 2)
}

export function parseGameSaveImport(rawText: string, fallback: GameSave) {
  let parsed: unknown
  try { parsed = JSON.parse(rawText) } catch (e) { throw new Error(`JSON解析失败: ${e}`) }

  let saveData: unknown = parsed
  const envelope = saveEnvelopeSchema.safeParse(parsed)
  if (envelope.success) saveData = envelope.data.save

  const normalized = normalizeSave(saveData, fallback)
  if (!normalized) throw new Error('存档结构不符合修仙世界格式')
  return normalized
}

export async function persistGameSave(save: GameSave): Promise<SaveServiceStatus> {
  if (!chatVariablesAvailable()) {
    return getDefaultStatus('未检测到酒馆变量接口', 'memory')
  }
  const savedAt = Date.now()
  await updateVariablesWith(variables => {
    variables[SAVE_VARIABLE_KEY] = { schemaVersion: SAVE_SCHEMA_VERSION, savedAt, save: cloneSave(save) }
    return variables
  }, { type: 'chat' })
  return { state: 'ready', source: 'chat', message: '已保存', variableKey: SAVE_VARIABLE_KEY, savedAt, migrated: false }
}
