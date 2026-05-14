import { buildAIInjects } from './worldbookRouter'
import type { GameSave } from '../types/save'

export interface GenerateReplyOptions {
  save: GameSave
  userText: string
  onStream?: (text: string) => void
}

function sanitizeReply(text: string): string {
  return text
    .replace(/<thinking>[\s\S]*?<\/thinking>/gi, '')
    .replace(/<content>[\s\S]*?<\/content>/gi, '')
    .replace(/<UpdateVariable>[\s\S]*?<\/UpdateVariable>/gi, '')
    .replace(/<Analysis>[\s\S]*?<\/Analysis>/gi, '')
    .replace(/<JSONPatch>[\s\S]*?<\/JSONPatch>/gi, '')
    .trim()
}

export async function generateAIReply({ save, userText, onStream }: GenerateReplyOptions): Promise<string> {
  if (typeof generate !== 'function') {
    throw new Error('未检测到酒馆 generate 接口')
  }

  const generationId = `cultivation-${Date.now()}`
  const streamListener = (fullText: string, receivedId: string) => {
    if (receivedId !== generationId) return
    onStream?.(sanitizeReply(fullText))
  }

  const streamEvent = typeof eventOn === 'function'
    ? eventOn(iframe_events.STREAM_TOKEN_RECEIVED_FULLY, streamListener)
    : null

  try {
    const result = await generate({
      generation_id: generationId,
      user_input: userText,
      should_stream: true,
      max_chat_history: 24,
      overrides: { temperature: 0.8 },
      injects: buildAIInjects(save),
    })
    return sanitizeReply(result)
  } finally {
    streamEvent?.stop()
  }
}
