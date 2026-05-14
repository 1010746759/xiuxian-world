import { teleportStyle } from '@util/script'
import App from './App.vue'
import './styles/global.css'

$(() => {
  const pinia = createPinia()
  const parentDoc = window.parent.document
  let app: ReturnType<typeof createApp> | null = null
  let iframeEl: HTMLIFrameElement | null = null
  let styleDestroy: (() => void) | null = null
  let escapeButtonEl: HTMLButtonElement | null = null
  const escapeKeyTargets: EventTarget[] = []

  function handleEscapeKey(event: Event) {
    if ((event as KeyboardEvent).key === 'Escape') {
      event.preventDefault()
      unmountConsole()
    }
  }

  function addEscapeKeyTarget(target: EventTarget | null | undefined) {
    if (!target || escapeKeyTargets.includes(target)) return
    target.addEventListener('keydown', handleEscapeKey, true)
    escapeKeyTargets.push(target)
  }

  function removeEscapeControls() {
    escapeKeyTargets.forEach(t => t.removeEventListener('keydown', handleEscapeKey, true))
    escapeKeyTargets.length = 0
    if (escapeButtonEl) { escapeButtonEl.remove(); escapeButtonEl = null }
  }

  function mountEscapeControls() {
    if (escapeButtonEl) return
    const button = parentDoc.createElement('button')
    button.textContent = '退出仙途'
    button.style.cssText = 'position:fixed;top:10px;right:10px;z-index:100000;padding:6px 14px;border:1px solid rgba(139,92,246,.5);border-radius:6px;background:rgba(5,8,16,.9);color:#c4b5fd;font:12px/1 sans-serif;cursor:pointer'
    button.addEventListener('click', unmountConsole)
    parentDoc.body.appendChild(button)
    escapeButtonEl = button
    addEscapeKeyTarget(parentDoc)
    addEscapeKeyTarget(window.parent)
  }

  function unmountConsole() {
    if (app) { app.unmount(); app = null }
    if (styleDestroy) { styleDestroy(); styleDestroy = null }
    if (iframeEl) { iframeEl.remove(); iframeEl = null }
    removeEscapeControls()
  }

  function mountConsole() {
    if (app || iframeEl) return
    mountEscapeControls()

    const iframe = document.createElement('iframe')
    iframe.setAttribute('script_id', getScriptId())
    iframe.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;z-index:99999;border:none;background:#0a0a10'
    iframe.addEventListener('load', () => {
      const iframeDoc = iframe.contentDocument
      if (!iframeDoc?.body) return
      addEscapeKeyTarget(iframeDoc)
      addEscapeKeyTarget(iframe.contentWindow)
      const { destroy } = teleportStyle(iframeDoc.head)
      styleDestroy = destroy
      app = createApp(App, { onExit: unmountConsole }).use(pinia)
      app.mount(iframeDoc.body)
    })
    iframeEl = iframe
    parentDoc.body.appendChild(iframe)
    window.setTimeout(() => { if (iframe.contentDocument?.body) { const e = new Event('load'); iframe.dispatchEvent(e) } }, 0)
  }

  replaceScriptButtons([{ name: '进入仙途', visible: true }])
  eventOn(getButtonEvent('进入仙途'), mountConsole)
  mountConsole()
  $(window).on('pagehide', () => unmountConsole())
})
