export function teleportStyle(targetHead: HTMLHeadElement) {
  const styles = document.querySelectorAll('style, link[rel="stylesheet"]')
  styles.forEach(el => targetHead.appendChild(el.cloneNode(true)))
  return { destroy: () => {} }
}

export function replaceScriptButtons(buttons: { name: string; visible: boolean }[]) {}

export function eventOn(eventName: string, handler: (...args: unknown[]) => void) {}

export function getButtonEvent(name: string): string {
  return `button:${name}`
}

export function getScriptId(): string {
  return 'xiuxian-world'
}
