import { createInitialSave } from '../data/initialSave'
import { realms } from '../data/realms'
import { resources as resourceDefs } from '../data/resources'
import { locations as locationDefs } from '../data/locations'
import { enemies as enemyDefs } from '../data/enemies'
import { pillRecipes } from '../data/pillRecipes'
import { techniqueTemplates } from '../data/techniqueTemplates'
import { quests } from '../data/quests'
import { dispatchGameAction } from '../engine/dispatcher'
import { tickSave } from '../engine/tick'
import { formatAmount, formatDuration } from '../engine/format'
import { buildSaveHealthReport } from '../engine/healthCheck'
import {
  getAvailableLocations,
  getCurrentLocation,
  getCurrentRealm,
  getRealmLayerText,
  getLocationEnemies,
  getCombatPower,
  getTechnique,
} from '../engine/selectors'
import { countItem } from '../engine/inventory'
import { getBreakthroughChance } from '../engine/cultivation'
import {
  loadGameSave,
  persistGameSave,
  parseGameSaveImport,
  serializeGameSave,
  SAVE_SCHEMA_VERSION,
  SAVE_VARIABLE_KEY,
  type SaveServiceStatus,
} from '../services/saveService'
import { generateAIReply } from '../services/tavernGeneration'
import { appendChatExchange } from '../services/tavernChat'
import { buildWorldbookScanText, buildAIInjects } from '../services/worldbookRouter'
import type { ActionResult, GameAction } from '../types/action'
import type { GameSave, GameMessage } from '../types/save'

function createStatus(state: SaveServiceStatus['state'], message: string): SaveServiceStatus {
  return { state, source: 'memory', message, variableKey: SAVE_VARIABLE_KEY, savedAt: null, migrated: false }
}

type GenState = { state: 'idle' | 'generating' | 'error'; message: string; generationId: string | null }

export const useGameStore = defineStore('cultivation-world', () => {
  const save = ref<GameSave>(createInitialSave())
  const lastResult = ref<ActionResult | null>(null)
  const persistence = ref<SaveServiceStatus>(createStatus('loading', '正在读取存档'))
  const generation = ref<GenState>({ state: 'idle', message: '就绪', generationId: null })
  const bootstrapped = ref(false)
  let persistSerial = 0

  const currentLocation = computed(() => getCurrentLocation(save.value))
  const availableLocations = computed(() => getAvailableLocations(save.value))
  const realmText = computed(() => getRealmLayerText(save.value))
  const nextRealm = computed(() => {
    const idx = realms.findIndex(r => r.id === save.value.realm)
    return idx < realms.length - 1 ? realms[idx + 1] : null
  })
  const currentLocationEnemies = computed(() => getLocationEnemies(save.value.currentLocationId))
  const attackTechniques = computed(() =>
    save.value.techniques.filter(t => t.category === 'attack'),
  )
  const supportTechniques = computed(() =>
    save.value.techniques.filter(t => t.category === 'support' || t.category === 'defense'),
  )
  const inventoryDisplay = computed(() =>
    save.value.inventory
      .filter(i => i.amount > 0)
      .map(i => ({
        ...i,
        displayAmount: formatAmount(i.amount),
        category: resourceDefs.find(r => r.id === i.resourceId)?.category ?? 'material',
      }))
      .sort((a, b) => b.amount - a.amount),
  )
  const activeQuests = computed(() =>
    save.value.quests.filter(q => q.status === 'accepted').map(q => {
      const def = quests.find(d => d.id === q.questId)
      return { ...q, name: def?.name ?? q.questId, description: def?.description ?? '' }
    }),
  )
  const completedQuests = computed(() =>
    save.value.quests.filter(q => q.status === 'completed').map(q => {
      const def = quests.find(d => d.id === q.questId)
      return { ...q, name: def?.name ?? q.questId }
    }),
  )
  const breakthroughChance = computed(() => getBreakthroughChance(save.value))
  const cultivationProgress = computed(() => save.value.cultivationProgress)
  const isInCombat = computed(() => !!save.value.combat && save.value.combat.status === 'active')
  const isCultivating = computed(() => !!save.value.cultivationQueue)

  const debugSaveJson = computed(() => serializeGameSave(save.value))
  const debugScanText = computed(() => buildWorldbookScanText(save.value))
  const debugInjectPreview = computed(() =>
    buildAIInjects(save.value).map((inj, i) =>
      `#${i + 1} 位置=${inj.position} 扫描=${inj.should_scan}\n${inj.content}`,
    ).join('\n\n---\n\n'),
  )
  const debugHealthReport = computed(() =>
    buildSaveHealthReport(save.value, { expectedSchemaVersion: SAVE_SCHEMA_VERSION }),
  )
  const debugStats = computed(() => ({
    schemaVersion: save.value.version,
    realm: realmText.value,
    location: currentLocation.value.title,
    healthStatus: debugHealthReport.value.status,
    errorCount: debugHealthReport.value.errorCount,
    warningCount: debugHealthReport.value.warningCount,
    messageCount: save.value.messages.length,
  }))

  async function persist(reason = 'auto') {
    const serial = ++persistSerial
    persistence.value = { ...persistence.value, state: 'saving', message: '保存中...' }
    try {
      const status = await persistGameSave(save.value)
      if (serial === persistSerial) persistence.value = status
    } catch (error) {
      if (serial === persistSerial) {
        persistence.value = { ...persistence.value, state: 'error', source: 'memory', message: `保存失败: ${error}` }
      }
    }
  }

  function pushMessage(message: GameMessage) {
    save.value.messages.unshift(message)
    save.value.messages = save.value.messages.slice(0, 80)
  }

  function updateMessage(messageId: string, patch: Partial<GameMessage>) {
    const target = save.value.messages.find(m => m.id === messageId)
    if (target) Object.assign(target, patch)
  }

  async function bootstrap() {
    if (bootstrapped.value) return
    const fallback = createInitialSave()
    const result = await loadGameSave(fallback)
    save.value = { ...tickSave(result.save) }
    persistence.value = result.status
    bootstrapped.value = true
    if (result.needsPersist) void persist('auto')
  }

  function tick() {
    save.value = { ...tickSave(save.value) }
    void persist('auto')
  }

  function saveNow() { void persist('manual') }

  async function reloadFromChat() {
    persistence.value = createStatus('loading', '重新读取存档')
    const result = await loadGameSave(createInitialSave())
    save.value = { ...tickSave(result.save) }
    persistence.value = result.status
    if (result.needsPersist) void persist('auto')
  }

  async function importSaveJson(rawText: string): Promise<ActionResult> {
    if (!rawText.trim()) return { ok: false, tone: 'red', message: '导入内容为空' }
    try {
      const parsed = parseGameSaveImport(rawText, createInitialSave())
      save.value = { ...tickSave(parsed.save) }
      await persist('manual')
      return { ok: true, tone: parsed.migrated ? 'amber' : 'green', message: parsed.migrated ? '存档已导入并迁移' : '存档已导入' }
    } catch (error) {
      return { ok: false, tone: 'red', message: error instanceof Error ? error.message : String(error) }
    }
  }

  function dispatch(action: GameAction): ActionResult {
    const result = dispatchGameAction(save.value, action)
    save.value = { ...save.value }
    lastResult.value = result
    if (result.ok) void persist('auto')
    return result
  }

  async function sendComms(text: string) {
    const trimmed = text.trim()
    if (!trimmed || generation.value.state === 'generating') return

    const result = dispatchGameAction(save.value, { type: 'COMMS_SEND', text: trimmed })
    save.value = { ...save.value }
    lastResult.value = result
    if (!result.ok || !result.shouldAskAI) return

    const now = Date.now()
    const draftId = `msg-${now}-ai-stream`
    pushMessage({
      id: draftId, type: 'npc', title: '叙述者',
      timestamp: new Date(now).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }),
      text: '正在观察局势...',
      tags: [{ label: '生成中', tone: 'cyan' }, { label: 'AIRP', tone: 'violet' }],
    })

    generation.value = { state: 'generating', message: 'AI叙述中', generationId: draftId }
    await persist('auto')

    try {
      const reply = await generateAIReply({
        save: save.value,
        userText: trimmed,
        onStream: streamText => updateMessage(draftId, { text: streamText || '...', tags: [{ label: '流式生成', tone: 'cyan' }] }),
      })
      updateMessage(draftId, { text: reply || '无回复', tags: [{ label: 'AI叙述', tone: 'violet' }] })
      const chatResult = await appendChatExchange({ save: save.value, userText: trimmed, assistantText: reply })
      updateMessage(draftId, { tags: [...(save.value.messages.find(m => m.id === draftId)?.tags ?? []), { label: chatResult.ok ? '已写入楼层' : '楼层跳过', tone: chatResult.ok ? 'green' : 'amber' }] })
      generation.value = { state: 'idle', message: chatResult.message, generationId: null }
    } catch (error) {
      updateMessage(draftId, { type: 'alert', title: '生成失败', text: String(error), tags: [{ label: '错误', tone: 'red' }] })
      generation.value = { state: 'error', message: String(error), generationId: null }
    }
    await persist('auto')
  }

  return {
    save, lastResult, persistence, generation, bootstrapped,
    currentLocation, availableLocations, realmText, nextRealm,
    currentLocationEnemies, attackTechniques, supportTechniques,
    inventoryDisplay, activeQuests, completedQuests,
    breakthroughChance, cultivationProgress,
    isInCombat, isCultivating,
    debugSaveJson, debugScanText, debugInjectPreview, debugHealthReport, debugStats,
    data: { realms, resources: resourceDefs, locations: locationDefs, enemies: enemyDefs, pillRecipes, techniqueTemplates, quests },
    bootstrap, tick, saveNow, reloadFromChat, importSaveJson,
    dispatch, sendComms, persist,
  }
})
