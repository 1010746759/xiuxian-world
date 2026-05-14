import type { GameSave } from '../types/save'

export interface AppendResult {
  ok: boolean
  message: string
}

export async function appendChatExchange(options: {
  save: GameSave
  userText: string
  assistantText: string
}): Promise<AppendResult> {
  if (typeof createChatMessages !== 'function') {
    return { ok: false, message: '未检测到聊天楼层接口，跳过写入' }
  }

  try {
    await createChatMessages([
      {
        role: 'user',
        name: options.save.playerName,
        message: options.userText,
        data: {},
        extra: {
          frontendCard: { type: 'player_input', savedAt: Date.now() },
        },
      },
      {
        role: 'assistant',
        name: '叙述者',
        message: options.assistantText,
        data: {},
        extra: {
          frontendCard: { type: 'ai_reply', savedAt: Date.now() },
        },
      },
    ])
    return { ok: true, message: '已写入酒馆楼层' }
  } catch (error) {
    return { ok: false, message: `写入楼层失败: ${error}` }
  }
}
