<script setup lang="ts">
import AppShell from './components/shell/AppShell.vue'
import { useGameStore } from './stores/gameStore'

defineProps<{ onExit?: () => void }>()

const game = useGameStore()
let tickTimer: number | null = null

onMounted(() => {
  void game.bootstrap()
  tickTimer = window.setInterval(() => {
    if (game.bootstrapped) game.tick()
  }, 15000)
})

onBeforeUnmount(() => {
  if (tickTimer !== null) {
    window.clearInterval(tickTimer)
    tickTimer = null
  }
})
</script>

<template>
  <AppShell :on-exit="onExit" />
</template>
