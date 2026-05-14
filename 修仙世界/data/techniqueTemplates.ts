import type { TechniqueTemplateDef } from '../types/data'

export const techniqueTemplates: TechniqueTemplateDef[] = [
  {
    id: 'basic_sword',
    name: '基础剑法',
    category: 'attack',
    maxLevel: 10,
    description: '修仙者入门剑法，直刺横斩，朴实无华',
  },
  {
    id: 'flame_palm',
    name: '烈焰掌',
    category: 'attack',
    maxLevel: 8,
    description: '将灵力化为烈焰附着掌上，近身爆发力强',
  },
  {
    id: 'golden_body',
    name: '金刚体',
    category: 'defense',
    maxLevel: 10,
    description: '以灵力强化肉身防御，短时间内刀枪不入',
  },
  {
    id: 'healing_breath',
    name: '回春术',
    category: 'support',
    maxLevel: 8,
    description: '引导天地生机之力疗伤，战斗中恢复生命',
  },
  {
    id: 'spirit_boost',
    name: '灵气潮汐',
    category: 'support',
    maxLevel: 8,
    description: '在经脉中引发灵气潮汐，战斗中恢复灵气',
  },
  {
    id: 'heart_sutra',
    name: '清心诀',
    category: 'cultivation',
    maxLevel: 10,
    description: '稳定道心的基础心法，提升修炼效率并减少心魔',
  },
  {
    id: 'sword_intent',
    name: '剑意通明',
    category: 'attack',
    maxLevel: 10,
    description: '以神御剑，剑气外放。需要剑法基础',
  },
]

export function getTechniqueTemplate(id: string): TechniqueTemplateDef {
  const tmpl = techniqueTemplates.find(t => t.id === id)
  if (!tmpl) throw new Error(`未知功法模板: ${id}`)
  return tmpl
}
