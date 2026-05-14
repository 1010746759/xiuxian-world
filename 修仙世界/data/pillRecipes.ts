import type { PillRecipeDef } from '../types/data'

export const pillRecipes: PillRecipeDef[] = [
  {
    id: 'qi_gathering',
    name: '聚气丹',
    description: '基础修炼丹药，加速灵气吸收',
    ingredients: [
      { resourceId: 'spirit_herb', amount: 3 },
      { resourceId: 'spirit_stone', amount: 10 },
    ],
    refineTimeSeconds: 60,
    successBaseChance: 80,
  },
  {
    id: 'recovery',
    name: '回灵丹',
    description: '战斗中恢复灵气',
    ingredients: [
      { resourceId: 'spirit_herb', amount: 2 },
      { resourceId: 'spirit_stone', amount: 5 },
    ],
    refineTimeSeconds: 30,
    successBaseChance: 90,
  },
  {
    id: 'healing',
    name: '疗伤丹',
    description: '战斗中恢复生命',
    ingredients: [
      { resourceId: 'spirit_herb', amount: 3 },
      { resourceId: 'iron_ore', amount: 1 },
    ],
    refineTimeSeconds: 45,
    successBaseChance: 85,
  },
  {
    id: 'breakthrough_low',
    name: '筑基丹',
    description: '辅助练气突破至筑基，提升成功率',
    ingredients: [
      { resourceId: 'spirit_herb', amount: 8 },
      { resourceId: 'spirit_stone', amount: 50 },
      { resourceId: 'demon_core_low', amount: 1 },
    ],
    refineTimeSeconds: 300,
    successBaseChance: 50,
  },
  {
    id: 'breakthrough_mid',
    name: '结金丹',
    description: '辅助筑基突破至金丹，大幅提升成功率',
    ingredients: [
      { resourceId: 'thousand_year_herb', amount: 3 },
      { resourceId: 'spirit_stone', amount: 200 },
      { resourceId: 'demon_core_mid', amount: 1 },
      { resourceId: 'spirit_jade', amount: 3 },
    ],
    refineTimeSeconds: 900,
    successBaseChance: 30,
  },
]

export function getPillRecipe(id: string): PillRecipeDef {
  const recipe = pillRecipes.find(r => r.id === id)
  if (!recipe) throw new Error(`未知丹方: ${id}`)
  return recipe
}
