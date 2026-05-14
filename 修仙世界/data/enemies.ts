import type { EnemyDef } from '../types/data'

export const enemies: EnemyDef[] = [
  {
    id: 'stone_spider',
    name: '石魔蛛',
    realm: 'qi_refining',
    hp: 80,
    attack: 12,
    defense: 5,
    spiritPower: 20,
    skills: [
      { id: 'web_shot', name: '蛛网喷射', damageMultiplier: 1.2, spiritCost: 8, description: '喷出粘稠蛛网攻击敌人' },
    ],
    loot: [
      { resourceId: 'spirit_herb', chance: 0.4, amount: [1, 3] },
      { resourceId: 'demon_core_low', chance: 0.2, amount: [1, 1] },
    ],
    description: '练气初期妖兽，外壳坚硬但行动迟缓。吐出的蛛网可以用来炼制法器',
  },
  {
    id: 'green_wolf',
    name: '青面妖狼',
    realm: 'qi_refining',
    hp: 150,
    attack: 20,
    defense: 8,
    spiritPower: 40,
    skills: [
      { id: 'wind_claw', name: '风狼爪', damageMultiplier: 1.5, spiritCost: 12, description: '裹挟风刃的利爪猛击' },
      { id: 'howl', name: '妖狼啸', damageMultiplier: 0.5, spiritCost: 10, description: '啸声震魂，降低对方防御2回合' },
    ],
    loot: [
      { resourceId: 'demon_core_low', chance: 0.5, amount: [1, 2] },
      { resourceId: 'spirit_herb', chance: 0.3, amount: [2, 4] },
      { resourceId: 'iron_ore', chance: 0.2, amount: [1, 1] },
    ],
    description: '练气中期妖兽，速度极快。狼啸能震慑心神，需要注意防御',
  },
  {
    id: 'black_serpent',
    name: '黑水玄蟒',
    realm: 'foundation',
    hp: 400,
    attack: 35,
    defense: 15,
    spiritPower: 100,
    skills: [
      { id: 'water_cannon', name: '黑水炮', damageMultiplier: 2.0, spiritCost: 25, description: '凝聚黑水之力轰击' },
      { id: 'poison_fog', name: '毒雾弥漫', damageMultiplier: 0.3, spiritCost: 20, description: '释放毒雾，3回合内每回合扣15血' },
      { id: 'coil', name: '玄蟒绞杀', damageMultiplier: 1.8, spiritCost: 30, description: '以巨力绞杀，无视部分防御' },
    ],
    loot: [
      { resourceId: 'demon_core_mid', chance: 0.6, amount: [1, 2] },
      { resourceId: 'thousand_year_herb', chance: 0.3, amount: [1, 1] },
      { resourceId: 'spirit_jade', chance: 0.2, amount: [1, 3] },
      { resourceId: 'karma_jade', chance: 0.05, amount: [1, 1] },
    ],
    description: '筑基级大妖，存活数百年。内丹是炼制结金丹的关键材料。需筑基以上方可挑战',
  },
]

export function getEnemy(id: string): EnemyDef {
  const enemy = enemies.find(e => e.id === id)
  if (!enemy) throw new Error(`未知敌人: ${id}`)
  return enemy
}

export function getEnemyLootChances(enemyId: string): { resourceId: string; name: string; chance: number }[] {
  const enemy = getEnemy(enemyId)
  return enemy.loot.map(l => ({
    resourceId: l.resourceId,
    name: l.resourceId,
    chance: l.chance,
  }))
}
