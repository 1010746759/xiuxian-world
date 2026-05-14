<script setup lang="ts">
import { ref } from 'vue'
import TopStatusBar from './TopStatusBar.vue'
import DebugPanel from './DebugPanel.vue'
import { useGameStore } from '../../stores/gameStore'

const props = defineProps<{ onExit?: () => void }>()

const game = useGameStore()
const activeTab = ref<'cultivation' | 'combat' | 'alchemy' | 'world' | 'comms'>('world')
const showDebug = ref(false)

const tabs: { key: typeof activeTab.value; label: string }[] = [
  { key: 'world', label: '世界' },
  { key: 'cultivation', label: '修炼' },
  { key: 'combat', label: '战斗' },
  { key: 'alchemy', label: '炼丹' },
  { key: 'comms', label: '通讯' },
]
</script>

<template>
  <div class="app-root">
    <TopStatusBar :on-exit="props.onExit" @toggle-debug="showDebug = !showDebug" />

    <nav class="tab-bar">
      <button
        v-for="tab in tabs" :key="tab.key"
        :class="['tab-btn', { active: activeTab === tab.key }]"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </nav>

    <main class="main-content">
      <div v-if="activeTab === 'world'" class="panel">
        <h2>{{ game.currentLocation.title }}</h2>
        <p class="desc">{{ game.currentLocation.description }}</p>
        <div class="section">
          <h3>可到达地点</h3>
          <button
            v-for="loc in game.availableLocations" :key="loc.id"
            :class="['loc-btn', { current: loc.id === game.save.currentLocationId }]"
            @click="game.dispatch({ type: 'LOCATION_CHANGE', locationId: loc.id })"
          >
            {{ loc.title }}
            <span class="tag">{{ loc.isSafe ? '安全' : '野外' }}</span>
          </button>
        </div>
        <div class="section">
          <h3>背包</h3>
          <div v-if="game.inventoryDisplay.length === 0" class="empty">背包为空</div>
          <div v-for="item in game.inventoryDisplay" :key="item.id" class="item-row">
            <span>{{ item.name }}</span>
            <span class="amount">{{ item.displayAmount }}</span>
            <button
              v-if="item.resourceId === 'qi_gathering_pill' || item.resourceId === 'recovery_pill' || item.resourceId === 'healing_pill'"
              class="btn-sm"
              @click="game.dispatch({ type: 'USE_PILL', inventoryItemId: item.id })"
            >
              使用
            </button>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'cultivation'" class="panel">
        <h2>修炼</h2>
        <div class="stats">
          <p>当前境界: {{ game.realmText }}</p>
          <p>修炼进度: {{ game.cultivationProgress }}%</p>
          <p>突破成功率: {{ game.breakthroughChance }}%</p>
        </div>
        <div class="actions">
          <button
            v-if="!game.isCultivating"
            class="btn-primary"
            @click="game.dispatch({ type: 'CULTIVATION_START', method: 'meditation', pillIds: [] })"
          >
            开始修炼
          </button>
          <button v-else class="btn-warn" @click="game.dispatch({ type: 'CULTIVATION_STOP' })">
            中断修炼
          </button>
          <button
            class="btn-special"
            @click="game.dispatch({ type: 'BREAKTHROUGH_ATTEMPT' })"
          >
            尝试突破
          </button>
        </div>
        <div class="section">
          <h3>功法</h3>
          <div v-for="tech in game.save.techniques" :key="tech.id" class="item-row">
            <span>{{ tech.name }} {{ tech.selfCreated ? '(自创)' : '' }}</span>
            <span class="amount">Lv.{{ tech.level }}/{{ tech.maxLevel }}</span>
            <button class="btn-sm" @click="game.dispatch({ type: 'TECHNIQUE_UPGRADE', techniqueId: tech.id })">
              升级
            </button>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'combat'" class="panel">
        <h2>战斗</h2>
        <div v-if="game.isInCombat && game.save.combat" class="combat-active">
          <p><strong>{{ game.save.combat.enemyName }}</strong> ({{ game.save.combat.enemyRealm === 'foundation' ? '筑基级' : '练气级' }})</p>
          <p>敌人生命: {{ game.save.combat.enemyHp }}/{{ game.save.combat.enemyMaxHp }}</p>
          <p>你的生命: {{ game.save.combat.playerHp }}/{{ game.save.combat.playerMaxHp }}</p>
          <p>你的灵气: {{ game.save.combat.playerSpiritPower }}/{{ game.save.combat.playerMaxSpiritPower }}</p>
          <div class="actions">
            <button
              v-for="tech in game.attackTechniques" :key="tech.id"
              class="btn-primary"
              @click="game.dispatch({ type: 'COMBAT_ATTACK', techniqueId: tech.id })"
            >
              {{ tech.name }}
            </button>
            <button class="btn-secondary" @click="game.dispatch({ type: 'COMBAT_DEFEND' })">防御</button>
            <button class="btn-warn" @click="game.dispatch({ type: 'COMBAT_FLEE' })">逃跑</button>
          </div>
          <div class="section">
            <h3>使用丹药</h3>
            <button
              v-for="item in game.inventoryDisplay.filter(i => i.resourceId === 'healing_pill' || i.resourceId === 'recovery_pill')"
              :key="item.id"
              class="btn-sm"
              @click="game.dispatch({ type: 'COMBAT_USE_PILL', inventoryItemId: item.id })"
            >
              {{ item.name }}
            </button>
          </div>
        </div>
        <div v-else-if="!game.isInCombat" class="section">
          <h3>当前地点敌人</h3>
          <div v-if="game.currentLocationEnemies.length === 0" class="empty">这里没有敌人</div>
          <button
            v-for="enemy in game.currentLocationEnemies" :key="enemy.id"
            class="enemy-btn"
            @click="game.dispatch({ type: 'COMBAT_START', enemyId: enemy.id })"
          >
            <strong>{{ enemy.name }}</strong>
            <span>{{ enemy.realm === 'foundation' ? '筑基级' : '练气级' }}</span>
            <span>{{ enemy.description }}</span>
          </button>
        </div>
      </div>

      <div v-if="activeTab === 'alchemy'" class="panel">
        <h2>炼丹</h2>
        <div class="section">
          <h3>丹方</h3>
          <div v-for="recipe in game.data.pillRecipes" :key="recipe.id" class="recipe-card">
            <h4>{{ recipe.name }}</h4>
            <p>{{ recipe.description }}</p>
            <p class="mats">
              材料: {{ recipe.ingredients.map(i => {
                const r = game.data.resources.find(d => d.id === i.resourceId)
                return `${r?.name ?? i.resourceId} ×${i.amount}`
              }).join('、') }}
            </p>
            <p>成功率: {{ recipe.successBaseChance }}%</p>
            <button class="btn-primary" @click="game.dispatch({ type: 'ALCHEMY_REFINE', recipeId: recipe.id, count: 1 })">
              炼制
            </button>
          </div>
        </div>
        <div class="section">
          <h3>炼丹队列</h3>
          <div v-if="game.save.alchemyQueues.length === 0" class="empty">无进行中的炼丹</div>
          <div v-for="q in game.save.alchemyQueues" :key="q.id" class="item-row">
            <span>{{ q.recipeName }} × {{ q.count }}</span>
            <span class="amount">{{ q.finishAt > Date.now() ? '炼制中' : '完成' }}</span>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'comms'" class="panel">
        <h2>通讯</h2>
        <div class="message-log">
          <div v-for="msg in game.save.messages" :key="msg.id" class="msg" :class="msg.type">
            <div class="msg-header">
              <span class="msg-title">{{ msg.title }}</span>
              <span class="msg-time">{{ msg.timestamp }}</span>
            </div>
            <div class="msg-text">{{ msg.text }}</div>
            <div v-if="msg.tags" class="msg-tags">
              <span v-for="tag in msg.tags" :key="tag.label" :class="['tag', tag.tone]">
                {{ tag.label }}
              </span>
            </div>
          </div>
        </div>
        <div class="comms-input">
          <textarea
            v-model="commsText"
            placeholder="输入要说的话..."
            @keydown.enter.exact.prevent="send"
          />
          <button class="btn-primary" @click="send" :disabled="game.generation.state === 'generating'">
            {{ game.generation.state === 'generating' ? 'AI叙述中...' : '发送' }}
          </button>
        </div>
      </div>
    </main>

    <DebugPanel v-if="showDebug" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
const commsText = ref('')

function send() {
  if (!commsText.value.trim()) return
  const game = useGameStore()
  void game.sendComms(commsText.value)
  commsText.value = ''
}
</script>
