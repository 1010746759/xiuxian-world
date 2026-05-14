<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '../../stores/gameStore'

const game = useGameStore()
const importText = ref('')
const importResult = ref('')

async function handleExport() {
  const blob = new Blob([game.debugSaveJson], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `cultivation-save-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)
}

async function handleImport() {
  const result = await game.importSaveJson(importText.value)
  importResult.value = result.message
}
</script>

<template>
  <div class="debug-panel">
    <h3>调试面板</h3>
    <section>
      <h4>状态</h4>
      <pre>{{ game.debugStats }}</pre>
    </section>
    <section>
      <h4>世界书扫描文本</h4>
      <pre>{{ game.debugScanText }}</pre>
    </section>
    <section>
      <h4>AI注入预览</h4>
      <pre>{{ game.debugInjectPreview }}</pre>
    </section>
    <section>
      <h4>健康检查</h4>
      <pre :class="game.debugHealthReport.status">{{ game.debugHealthReport }}</pre>
    </section>
    <section>
      <h4>存档管理</h4>
      <button class="btn-secondary" @click="handleExport">导出存档</button>
      <textarea v-model="importText" placeholder="粘贴存档JSON..." />
      <button class="btn-secondary" @click="handleImport">导入存档</button>
      <p v-if="importResult">{{ importResult }}</p>
    </section>
    <section>
      <h4>存档JSON</h4>
      <pre class="save-json">{{ game.debugSaveJson }}</pre>
    </section>
  </div>
</template>
