import type { ResourceDef } from '../types/data'

export const resources: ResourceDef[] = [
  {
    id: 'spirit_stone',
    name: '灵石',
    category: 'currency',
    baseValue: 1,
    description: '修仙界通用货币，蕴含少量灵气，可直接吸收修炼',
  },
  {
    id: 'qi_gathering_pill',
    name: '聚气丹',
    category: 'pill',
    baseValue: 10,
    description: '加速灵气吸收，缩短修炼时间',
  },
  {
    id: 'breakthrough_pill_low',
    name: '筑基丹',
    category: 'pill',
    baseValue: 80,
    description: '练气突破至筑基的辅助丹药，提升突破成功率15%',
  },
  {
    id: 'breakthrough_pill_mid',
    name: '结金丹',
    category: 'pill',
    baseValue: 300,
    description: '筑基突破至金丹的辅助丹药，提升突破成功率10%',
  },
  {
    id: 'recovery_pill',
    name: '回灵丹',
    category: 'pill',
    baseValue: 5,
    description: '战斗中恢复灵气30点',
  },
  {
    id: 'healing_pill',
    name: '疗伤丹',
    category: 'pill',
    baseValue: 8,
    description: '战斗中恢复生命50点',
  },
  {
    id: 'spirit_herb',
    name: '灵草',
    category: 'herb',
    baseValue: 3,
    description: '常见灵药，丹药的基础材料',
  },
  {
    id: 'thousand_year_herb',
    name: '千年灵草',
    category: 'herb',
    baseValue: 50,
    description: '极珍贵的灵药，可炼制高级丹药',
  },
  {
    id: 'iron_ore',
    name: '玄铁矿石',
    category: 'ore',
    baseValue: 4,
    description: '炼制法器的基本矿石',
  },
  {
    id: 'spirit_jade',
    name: '灵玉',
    category: 'ore',
    baseValue: 30,
    description: '蕴含浓郁灵气的玉石，炼器上品材料',
  },
  {
    id: 'demon_core_low',
    name: '妖兽内丹',
    category: 'material',
    baseValue: 20,
    description: '低阶妖兽的内丹，炼丹炼器的重要材料',
  },
  {
    id: 'demon_core_mid',
    name: '妖兽精核',
    category: 'material',
    baseValue: 100,
    description: '筑基级妖兽的精核，蕴含大量妖力',
  },
  {
    id: 'technique_scroll',
    name: '功法残卷',
    category: 'special',
    baseValue: 200,
    description: '古老功法残篇，可用于自创或强化功法',
  },
  {
    id: 'karma_jade',
    name: '因果玉',
    category: 'special',
    baseValue: 500,
    description: '内含一缕因果之力，可抵消部分天劫',
  },
  {
    id: 'sect_token',
    name: '宗门贡献令',
    category: 'special',
    baseValue: 0,
    description: '宗门贡献的凭证，可在宗门兑换资源',
  },
]

export function getResource(id: string): ResourceDef {
  const res = resources.find(r => r.id === id)
  if (!res) throw new Error(`未知资源: ${id}`)
  return res
}

export function getResourceName(id: string): string {
  return resources.find(r => r.id === id)?.name ?? id
}
