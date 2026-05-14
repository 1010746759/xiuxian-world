import type { LocationDef } from '../types/data'

export const locations: LocationDef[] = [
  {
    id: 'qingxuan_outer',
    title: '青玄宗外门',
    zone: '中央神州·青玄山脉',
    description: '青玄宗外门弟子修行之所。灵气稀薄但安稳，有传功殿、丹房、任务堂等设施',
    resources: [],
    enemies: [],
    worldbookTags: ['青玄宗', '外门', '人族宗门', '安全区', '传功殿', '丹房', '任务堂'],
    unlocked: true,
    isSafe: true,
  },
  {
    id: 'qingxuan_rear_mountain',
    title: '青玄宗后山',
    zone: '中央神州·青玄山脉',
    description: '后山灵气充沛，是弟子闭关修炼的好去处。深处偶有灵草生长，也有低级妖兽出没',
    resources: [
      { resourceId: 'spirit_herb', gatherRate: 0.5 },
      { resourceId: 'thousand_year_herb', gatherRate: 0.02 },
    ],
    enemies: ['stone_spider'],
    worldbookTags: ['青玄宗', '后山', '闭关', '采药', '妖兽'],
    unlocked: true,
    isSafe: false,
  },
  {
    id: 'demon_forest',
    title: '妖兽密林',
    zone: '中央神州·东荒边缘',
    description: '青玄宗以东的原始密林，妖兽横行。深处据说有大妖蛰伏，但也有珍稀灵药和矿脉',
    resources: [
      { resourceId: 'spirit_herb', gatherRate: 0.8 },
      { resourceId: 'iron_ore', gatherRate: 0.3 },
      { resourceId: 'demon_core_low', gatherRate: 0.2 },
      { resourceId: 'thousand_year_herb', gatherRate: 0.05 },
    ],
    enemies: ['stone_spider', 'green_wolf', 'black_serpent'],
    worldbookTags: ['东荒', '密林', '妖兽', '探险', '采药', '矿脉'],
    unlocked: false,
    isSafe: false,
  },
]

export function getLocation(id: string): LocationDef {
  const loc = locations.find(l => l.id === id)
  if (!loc) throw new Error(`未知地点: ${id}`)
  return loc
}
