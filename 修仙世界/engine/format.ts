export function formatClock(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
}

export function formatAmount(value: number): string {
  if (Math.abs(value) >= 1000000) return `${(value / 1000000).toFixed(1)}M`
  if (Math.abs(value) >= 10000) return `${(value / 10000).toFixed(1)}万`
  if (Math.abs(value) >= 1000) return `${(value / 1000).toFixed(1)}k`
  if (Number.isInteger(value)) return `${value}`
  return `${value.toFixed(1)}`
}

export function formatDuration(totalSeconds: number): string {
  if (totalSeconds <= 0) return '0秒'
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)
  const parts: string[] = []
  if (hours > 0) parts.push(`${hours}小时`)
  if (minutes > 0) parts.push(`${minutes}分钟`)
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}秒`)
  return parts.join('')
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}
