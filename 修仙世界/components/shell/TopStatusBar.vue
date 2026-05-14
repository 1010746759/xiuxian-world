<script setup lang="ts">
import { useGameStore } from '../../stores/gameStore'

defineProps<{ onExit?: () => void }>()
defineEmits<{ toggleDebug: [] }>()

const game = useGameStore()
</script>

<template>
  <header class="top-bar">
    <div class="bar-left">
      <span class="title">修仙世界</span>
      <span class="realm">{{ game.realmText }}</span>
      <span class="stat">寿元 {{ game.save.lifespan }}/{{ game.save.maxLifespan }}</span>
    </div>
    <div class="bar-center">
      <span class="stat">灵石 {{ game.save.spiritStones }}</span>
      <span class="stat">生命 {{ game.save.currentHp }}/{{ game.save.maxHp }}</span>
      <span class="stat">灵气 {{ game.save.spiritPower }}/{{ game.save.maxSpiritPower }}</span>
      <span class="stat">贡献 {{ game.save.sectContribution }}</span>
    </div>
    <div class="bar-right">
      <span :class="['save-status', game.persistence.state]">
        {{ game.persistence.state === 'saving' ? '保存中' : game.persistence.state === 'error' ? '异常' : '就绪' }}
      </span>
      <button class="icon-btn" @click="$emit('toggleDebug')" title="调试面板">D</button>
      <button class="exit-btn" @click="onExit?.()">退出</button>
    </div>
  </header>
</template>
