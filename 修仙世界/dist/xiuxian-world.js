(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("*{margin:0;padding:0;box-sizing:border-box}body{font-family:Segoe UI,Microsoft YaHei UI,system-ui,sans-serif;background:#0a0a10;color:#d4d4d8;overflow:hidden}.app-root{display:flex;flex-direction:column;height:100vh}.top-bar{display:flex;align-items:center;justify-content:space-between;padding:8px 16px;background:#141420;border-bottom:1px solid #27272a;flex-shrink:0}.bar-left,.bar-center,.bar-right{display:flex;align-items:center;gap:14px}.title{font-size:16px;font-weight:700;color:#c4b5fd}.realm{font-size:13px;color:#a78bfa;background:#8b5cf626;padding:2px 10px;border-radius:10px}.stat{font-size:12px;color:#a1a1aa}.save-status{font-size:11px;padding:2px 8px;border-radius:4px}.save-status.ready{color:#4ade80}.save-status.saving{color:#facc15}.save-status.error{color:#f87171}.save-status.loading{color:#60a5fa}.icon-btn{width:24px;height:24px;border:1px solid #3f3f46;border-radius:4px;background:#18181b;color:#a1a1aa;font-size:12px;cursor:pointer}.exit-btn{padding:4px 12px;border:1px solid rgba(248,113,113,.4);border-radius:4px;background:transparent;color:#f87171;font-size:12px;cursor:pointer}.tab-bar{display:flex;background:#18181b;border-bottom:1px solid #27272a;flex-shrink:0}.tab-btn{padding:10px 24px;border:none;background:transparent;color:#71717a;font-size:13px;cursor:pointer;border-bottom:2px solid transparent;transition:all .15s}.tab-btn:hover{color:#a1a1aa}.tab-btn.active{color:#c4b5fd;border-bottom-color:#8b5cf6}.main-content{flex:1;overflow-y:auto;padding:16px}.panel h2{font-size:18px;color:#c4b5fd;margin-bottom:8px}.panel h3{font-size:14px;color:#a1a1aa;margin:14px 0 6px}.desc{font-size:13px;color:#71717a;margin-bottom:12px}.section{margin-bottom:16px}.empty{font-size:13px;color:#52525b;padding:8px 0}.stats p{font-size:13px;color:#a1a1aa;line-height:1.8}.actions{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}.btn-primary{padding:6px 16px;border:1px solid #8b5cf6;border-radius:6px;background:#8b5cf626;color:#c4b5fd;font-size:13px;cursor:pointer;transition:all .15s}.btn-primary:hover{background:#8b5cf640}.btn-primary:disabled{opacity:.4;cursor:not-allowed}.btn-secondary{padding:6px 16px;border:1px solid #3f3f46;border-radius:6px;background:#18181b;color:#a1a1aa;font-size:13px;cursor:pointer}.btn-warn{padding:6px 16px;border:1px solid rgba(250,204,21,.4);border-radius:6px;background:#facc151a;color:#facc15;font-size:13px;cursor:pointer}.btn-special{padding:6px 16px;border:1px solid rgba(244,114,182,.4);border-radius:6px;background:#f472b61a;color:#f472b6;font-size:13px;cursor:pointer}.btn-sm{padding:2px 10px;border:1px solid #3f3f46;border-radius:4px;background:#18181b;color:#a1a1aa;font-size:11px;cursor:pointer}.loc-btn{display:block;width:100%;text-align:left;padding:8px 12px;margin:4px 0;border:1px solid #27272a;border-radius:6px;background:#18181b;color:#d4d4d8;font-size:13px;cursor:pointer}.loc-btn.current{border-color:#8b5cf6}.loc-btn .tag{font-size:11px;padding:1px 6px;border-radius:3px;background:#27272a;color:#a1a1aa;margin-left:8px}.item-row{display:flex;align-items:center;justify-content:space-between;padding:6px 10px;margin:2px 0;border-radius:4px;background:#18181b;font-size:13px;gap:8px}.item-row .amount{color:#a1a1aa;font-size:12px}.enemy-btn{display:flex;flex-direction:column;width:100%;text-align:left;padding:10px 14px;margin:4px 0;border:1px solid rgba(248,113,113,.3);border-radius:6px;background:#f871710d;color:#d4d4d8;font-size:13px;cursor:pointer;gap:2px}.enemy-btn:hover{background:#f871711a}.recipe-card{padding:10px 14px;margin:6px 0;border:1px solid #27272a;border-radius:6px;background:#18181b}.recipe-card h4{font-size:14px;color:#c4b5fd}.recipe-card p{font-size:12px;color:#a1a1aa;margin:2px 0}.recipe-card .mats{color:#d4d4d8}.msg{padding:8px 12px;margin:4px 0;border-radius:6px;background:#18181b}.msg.system{border-left:2px solid #8b5cf6}.msg.user{border-left:2px solid #22d3ee}.msg.npc{border-left:2px solid #a78bfa}.msg.alert{border-left:2px solid #f87171}.msg-header{display:flex;justify-content:space-between;margin-bottom:4px}.msg-title{font-size:12px;font-weight:600}.msg-time{font-size:11px;color:#52525b}.msg-text{font-size:13px;line-height:1.6;white-space:pre-wrap}.msg-tags{display:flex;gap:4px;margin-top:4px}.tag{font-size:10px;padding:1px 6px;border-radius:3px}.tag.cyan{background:#22d3ee26;color:#22d3ee}.tag.amber{background:#facc1526;color:#facc15}.tag.green{background:#4ade8026;color:#4ade80}.tag.red{background:#f8717126;color:#f87171}.tag.violet{background:#8b5cf626;color:#a78bfa}.comms-input{display:flex;gap:8px;margin-top:12px;position:sticky;bottom:0;background:#0a0a10;padding:12px 0}.comms-input textarea{flex:1;min-height:48px;padding:8px 12px;border:1px solid #27272a;border-radius:6px;background:#18181b;color:#d4d4d8;font-size:13px;font-family:inherit;resize:none}.debug-panel{position:fixed;bottom:0;left:0;right:0;height:50vh;overflow-y:auto;background:#0f0f1a;border-top:2px solid #8b5cf6;padding:16px;z-index:1000}.debug-panel h3{color:#c4b5fd}.debug-panel h4{color:#a1a1aa;font-size:12px;margin:10px 0 4px}.debug-panel pre{font-size:11px;background:#18181b;padding:8px;border-radius:4px;max-height:200px;overflow:auto;white-space:pre-wrap;word-break:break-all}.debug-panel pre.healthy{border-left:2px solid #4ade80}.debug-panel pre.warning{border-left:2px solid #facc15}.debug-panel pre.critical{border-left:2px solid #f87171}.debug-panel textarea{width:100%;min-height:60px;margin:6px 0;padding:6px;border:1px solid #27272a;border-radius:4px;background:#18181b;color:#d4d4d8;font-size:11px;font-family:monospace}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { ref as P, computed as k, defineComponent as re, openBlock as h, createElementBlock as y, createElementVNode as l, toDisplayString as d, unref as m, normalizeClass as N, withDirectives as be, vModelText as _e, createCommentVNode as w, createVNode as Ge, Fragment as S, renderList as A, createTextVNode as ce, withKeys as We, withModifiers as Ye, createBlock as ke, onMounted as Xe, onBeforeUnmount as Ze, createApp as et } from "https://testingcf.jsdelivr.net/npm/vue@3.4.0/dist/vue.esm-browser.js";
import { z as o } from "https://testingcf.jsdelivr.net/npm/zod@3.22.0/+esm";
import { defineStore as tt, createPinia as nt } from "https://testingcf.jsdelivr.net/npm/pinia@2.1.7/+esm";
function rt(e) {
  return document.querySelectorAll('style, link[rel="stylesheet"]').forEach((n) => e.appendChild(n.cloneNode(!0))), { destroy: () => {
  } };
}
function Z() {
  const e = Date.now();
  return {
    version: 1,
    createdAt: e,
    lastTickAt: e,
    playerName: "无名修士",
    realm: "mortal",
    realmLayer: 1,
    cultivationProgress: 0,
    lifespan: 80,
    maxLifespan: 80,
    spiritRoot: "未觉醒",
    spiritStones: 100,
    inventory: [
      { id: "inv-qi-pill-1", resourceId: "qi_gathering_pill", name: "聚气丹", amount: 5 },
      { id: "inv-recovery-1", resourceId: "recovery_pill", name: "回灵丹", amount: 3 }
    ],
    techniques: [
      {
        id: "tech-basic-sword-1",
        name: "基础剑法",
        templateId: "basic_sword",
        category: "attack",
        level: 1,
        maxLevel: 10,
        experience: 0,
        selfCreated: !1,
        selfCreatedDescription: "",
        createdAt: e
      }
    ],
    currentHp: 100,
    maxHp: 100,
    spiritPower: 0,
    maxSpiritPower: 0,
    combat: null,
    currentLocationId: "qingxuan_outer",
    discoveredLocationIds: ["qingxuan_outer", "qingxuan_rear_mountain"],
    worldDay: 1,
    sectContribution: 0,
    sectRank: "外门弟子",
    quests: [],
    karma: 0,
    tribulationProgress: 0,
    cultivationQueue: null,
    alchemyQueues: [],
    messages: [
      {
        id: "msg-init",
        type: "system",
        title: "仙途开启",
        timestamp: new Date(e).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 }),
        text: "你站在青玄宗外门广场上，灵雾缭绕。传功长老的目光落在你身上，似乎看出了什么。修仙之途，从此开始。",
        tags: [{ label: "开始", tone: "violet" }]
      }
    ],
    alerts: []
  };
}
const B = [
  {
    id: "mortal",
    name: "凡人",
    layerCount: 1,
    lifespanBonus: 0,
    combatPowerMultiplier: 0.5,
    spiritPowerBonus: 0,
    breakthroughBaseChance: 100,
    cultivationHoursPerPercent: 1,
    description: "尚未踏入修仙之途的普通人"
  },
  {
    id: "qi_refining",
    name: "练气期",
    layerCount: 9,
    lifespanBonus: 60,
    combatPowerMultiplier: 1,
    spiritPowerBonus: 50,
    breakthroughBaseChance: 60,
    cultivationHoursPerPercent: 2,
    description: "引天地灵气入体，淬炼经脉。每层提升灵气储量与肉身强度"
  },
  {
    id: "foundation",
    name: "筑基期",
    layerCount: 3,
    lifespanBonus: 150,
    combatPowerMultiplier: 3,
    spiritPowerBonus: 200,
    breakthroughBaseChance: 35,
    cultivationHoursPerPercent: 6,
    description: "灵力凝实为基，开辟丹田世界。初/中/后期三层"
  },
  {
    id: "golden_core",
    name: "金丹期",
    layerCount: 3,
    lifespanBonus: 400,
    combatPowerMultiplier: 8,
    spiritPowerBonus: 800,
    breakthroughBaseChance: 15,
    cultivationHoursPerPercent: 18,
    description: "丹田凝聚金丹，寿元大增，术法威力翻倍"
  }
];
function st(e) {
  const t = B.find((n) => n.id === e);
  if (!t) throw new Error(`未知境界: ${e}`);
  return t;
}
const F = [
  {
    id: "spirit_stone",
    name: "灵石",
    category: "currency",
    baseValue: 1,
    description: "修仙界通用货币，蕴含少量灵气，可直接吸收修炼"
  },
  {
    id: "qi_gathering_pill",
    name: "聚气丹",
    category: "pill",
    baseValue: 10,
    description: "加速灵气吸收，缩短修炼时间"
  },
  {
    id: "breakthrough_pill_low",
    name: "筑基丹",
    category: "pill",
    baseValue: 80,
    description: "练气突破至筑基的辅助丹药，提升突破成功率15%"
  },
  {
    id: "breakthrough_pill_mid",
    name: "结金丹",
    category: "pill",
    baseValue: 300,
    description: "筑基突破至金丹的辅助丹药，提升突破成功率10%"
  },
  {
    id: "recovery_pill",
    name: "回灵丹",
    category: "pill",
    baseValue: 5,
    description: "战斗中恢复灵气30点"
  },
  {
    id: "healing_pill",
    name: "疗伤丹",
    category: "pill",
    baseValue: 8,
    description: "战斗中恢复生命50点"
  },
  {
    id: "spirit_herb",
    name: "灵草",
    category: "herb",
    baseValue: 3,
    description: "常见灵药，丹药的基础材料"
  },
  {
    id: "thousand_year_herb",
    name: "千年灵草",
    category: "herb",
    baseValue: 50,
    description: "极珍贵的灵药，可炼制高级丹药"
  },
  {
    id: "iron_ore",
    name: "玄铁矿石",
    category: "ore",
    baseValue: 4,
    description: "炼制法器的基本矿石"
  },
  {
    id: "spirit_jade",
    name: "灵玉",
    category: "ore",
    baseValue: 30,
    description: "蕴含浓郁灵气的玉石，炼器上品材料"
  },
  {
    id: "demon_core_low",
    name: "妖兽内丹",
    category: "material",
    baseValue: 20,
    description: "低阶妖兽的内丹，炼丹炼器的重要材料"
  },
  {
    id: "demon_core_mid",
    name: "妖兽精核",
    category: "material",
    baseValue: 100,
    description: "筑基级妖兽的精核，蕴含大量妖力"
  },
  {
    id: "technique_scroll",
    name: "功法残卷",
    category: "special",
    baseValue: 200,
    description: "古老功法残篇，可用于自创或强化功法"
  },
  {
    id: "karma_jade",
    name: "因果玉",
    category: "special",
    baseValue: 500,
    description: "内含一缕因果之力，可抵消部分天劫"
  },
  {
    id: "sect_token",
    name: "宗门贡献令",
    category: "special",
    baseValue: 0,
    description: "宗门贡献的凭证，可在宗门兑换资源"
  }
];
function ot(e) {
  const t = F.find((n) => n.id === e);
  if (!t) throw new Error(`未知资源: ${e}`);
  return t;
}
const j = [
  {
    id: "qingxuan_outer",
    title: "青玄宗外门",
    zone: "中央神州·青玄山脉",
    description: "青玄宗外门弟子修行之所。灵气稀薄但安稳，有传功殿、丹房、任务堂等设施",
    resources: [],
    enemies: [],
    worldbookTags: ["青玄宗", "外门", "人族宗门", "安全区", "传功殿", "丹房", "任务堂"],
    unlocked: !0,
    isSafe: !0
  },
  {
    id: "qingxuan_rear_mountain",
    title: "青玄宗后山",
    zone: "中央神州·青玄山脉",
    description: "后山灵气充沛，是弟子闭关修炼的好去处。深处偶有灵草生长，也有低级妖兽出没",
    resources: [
      { resourceId: "spirit_herb", gatherRate: 0.5 },
      { resourceId: "thousand_year_herb", gatherRate: 0.02 }
    ],
    enemies: ["stone_spider"],
    worldbookTags: ["青玄宗", "后山", "闭关", "采药", "妖兽"],
    unlocked: !0,
    isSafe: !1
  },
  {
    id: "demon_forest",
    title: "妖兽密林",
    zone: "中央神州·东荒边缘",
    description: "青玄宗以东的原始密林，妖兽横行。深处据说有大妖蛰伏，但也有珍稀灵药和矿脉",
    resources: [
      { resourceId: "spirit_herb", gatherRate: 0.8 },
      { resourceId: "iron_ore", gatherRate: 0.3 },
      { resourceId: "demon_core_low", gatherRate: 0.2 },
      { resourceId: "thousand_year_herb", gatherRate: 0.05 }
    ],
    enemies: ["stone_spider", "green_wolf", "black_serpent"],
    worldbookTags: ["东荒", "密林", "妖兽", "探险", "采药", "矿脉"],
    unlocked: !1,
    isSafe: !1
  }
], Ie = [
  {
    id: "stone_spider",
    name: "石魔蛛",
    realm: "qi_refining",
    hp: 80,
    attack: 12,
    defense: 5,
    spiritPower: 20,
    skills: [
      { id: "web_shot", name: "蛛网喷射", damageMultiplier: 1.2, spiritCost: 8, description: "喷出粘稠蛛网攻击敌人" }
    ],
    loot: [
      { resourceId: "spirit_herb", chance: 0.4, amount: [1, 3] },
      { resourceId: "demon_core_low", chance: 0.2, amount: [1, 1] }
    ],
    description: "练气初期妖兽，外壳坚硬但行动迟缓。吐出的蛛网可以用来炼制法器"
  },
  {
    id: "green_wolf",
    name: "青面妖狼",
    realm: "qi_refining",
    hp: 150,
    attack: 20,
    defense: 8,
    spiritPower: 40,
    skills: [
      { id: "wind_claw", name: "风狼爪", damageMultiplier: 1.5, spiritCost: 12, description: "裹挟风刃的利爪猛击" },
      { id: "howl", name: "妖狼啸", damageMultiplier: 0.5, spiritCost: 10, description: "啸声震魂，降低对方防御2回合" }
    ],
    loot: [
      { resourceId: "demon_core_low", chance: 0.5, amount: [1, 2] },
      { resourceId: "spirit_herb", chance: 0.3, amount: [2, 4] },
      { resourceId: "iron_ore", chance: 0.2, amount: [1, 1] }
    ],
    description: "练气中期妖兽，速度极快。狼啸能震慑心神，需要注意防御"
  },
  {
    id: "black_serpent",
    name: "黑水玄蟒",
    realm: "foundation",
    hp: 400,
    attack: 35,
    defense: 15,
    spiritPower: 100,
    skills: [
      { id: "water_cannon", name: "黑水炮", damageMultiplier: 2, spiritCost: 25, description: "凝聚黑水之力轰击" },
      { id: "poison_fog", name: "毒雾弥漫", damageMultiplier: 0.3, spiritCost: 20, description: "释放毒雾，3回合内每回合扣15血" },
      { id: "coil", name: "玄蟒绞杀", damageMultiplier: 1.8, spiritCost: 30, description: "以巨力绞杀，无视部分防御" }
    ],
    loot: [
      { resourceId: "demon_core_mid", chance: 0.6, amount: [1, 2] },
      { resourceId: "thousand_year_herb", chance: 0.3, amount: [1, 1] },
      { resourceId: "spirit_jade", chance: 0.2, amount: [1, 3] },
      { resourceId: "karma_jade", chance: 0.05, amount: [1, 1] }
    ],
    description: "筑基级大妖，存活数百年。内丹是炼制结金丹的关键材料。需筑基以上方可挑战"
  }
], ve = [
  {
    id: "qi_gathering",
    name: "聚气丹",
    description: "基础修炼丹药，加速灵气吸收",
    ingredients: [
      { resourceId: "spirit_herb", amount: 3 },
      { resourceId: "spirit_stone", amount: 10 }
    ],
    refineTimeSeconds: 60,
    successBaseChance: 80
  },
  {
    id: "recovery",
    name: "回灵丹",
    description: "战斗中恢复灵气",
    ingredients: [
      { resourceId: "spirit_herb", amount: 2 },
      { resourceId: "spirit_stone", amount: 5 }
    ],
    refineTimeSeconds: 30,
    successBaseChance: 90
  },
  {
    id: "healing",
    name: "疗伤丹",
    description: "战斗中恢复生命",
    ingredients: [
      { resourceId: "spirit_herb", amount: 3 },
      { resourceId: "iron_ore", amount: 1 }
    ],
    refineTimeSeconds: 45,
    successBaseChance: 85
  },
  {
    id: "breakthrough_low",
    name: "筑基丹",
    description: "辅助练气突破至筑基，提升成功率",
    ingredients: [
      { resourceId: "spirit_herb", amount: 8 },
      { resourceId: "spirit_stone", amount: 50 },
      { resourceId: "demon_core_low", amount: 1 }
    ],
    refineTimeSeconds: 300,
    successBaseChance: 50
  },
  {
    id: "breakthrough_mid",
    name: "结金丹",
    description: "辅助筑基突破至金丹，大幅提升成功率",
    ingredients: [
      { resourceId: "thousand_year_herb", amount: 3 },
      { resourceId: "spirit_stone", amount: 200 },
      { resourceId: "demon_core_mid", amount: 1 },
      { resourceId: "spirit_jade", amount: 3 }
    ],
    refineTimeSeconds: 900,
    successBaseChance: 30
  }
];
function it(e) {
  const t = ve.find((n) => n.id === e);
  if (!t) throw new Error(`未知丹方: ${e}`);
  return t;
}
const $e = [
  {
    id: "basic_sword",
    name: "基础剑法",
    category: "attack",
    maxLevel: 10,
    description: "修仙者入门剑法，直刺横斩，朴实无华"
  },
  {
    id: "flame_palm",
    name: "烈焰掌",
    category: "attack",
    maxLevel: 8,
    description: "将灵力化为烈焰附着掌上，近身爆发力强"
  },
  {
    id: "golden_body",
    name: "金刚体",
    category: "defense",
    maxLevel: 10,
    description: "以灵力强化肉身防御，短时间内刀枪不入"
  },
  {
    id: "healing_breath",
    name: "回春术",
    category: "support",
    maxLevel: 8,
    description: "引导天地生机之力疗伤，战斗中恢复生命"
  },
  {
    id: "spirit_boost",
    name: "灵气潮汐",
    category: "support",
    maxLevel: 8,
    description: "在经脉中引发灵气潮汐，战斗中恢复灵气"
  },
  {
    id: "heart_sutra",
    name: "清心诀",
    category: "cultivation",
    maxLevel: 10,
    description: "稳定道心的基础心法，提升修炼效率并减少心魔"
  },
  {
    id: "sword_intent",
    name: "剑意通明",
    category: "attack",
    maxLevel: 10,
    description: "以神御剑，剑气外放。需要剑法基础"
  }
], te = [
  {
    id: "main_enter_sect",
    name: "初入仙门",
    description: "你来到青玄宗外门，传功长老听说你天资不错，让你先去后山采些灵草，再回外门修炼至练气第一层",
    type: "main",
    objectives: [
      { type: "gather", targetId: "spirit_herb", targetAmount: 5, description: "在后山采集灵草 x5" },
      { type: "reach_realm", targetId: "qi_refining", targetAmount: 1, description: "修炼至练气期第一层" }
    ],
    rewards: [
      { resourceId: "spirit_stone", amount: 50 },
      { resourceId: "qi_gathering_pill", amount: 3 }
    ],
    sectContributionReward: 20,
    preQuestId: null
  },
  {
    id: "main_slay_spider",
    name: "初试锋芒",
    description: "任务堂发布悬赏：后山的石魔蛛数量激增，已有同门受伤。请击杀3只石魔蛛",
    type: "main",
    objectives: [
      { type: "kill", targetId: "stone_spider", targetAmount: 3, description: "击杀石魔蛛 x3" }
    ],
    rewards: [
      { resourceId: "spirit_stone", amount: 100 },
      { resourceId: "recovery_pill", amount: 5 },
      { resourceId: "technique_scroll", amount: 1 }
    ],
    sectContributionReward: 50,
    preQuestId: "main_enter_sect"
  },
  {
    id: "main_breakthrough",
    name: "筑基之路",
    description: "你已修炼至练气第九层，筑基在即。传功长老建议你先去妖兽密林历练一番，收集筑基所需的材料",
    type: "main",
    objectives: [
      { type: "gather", targetId: "demon_core_low", targetAmount: 3, description: "收集妖兽内丹 x3" },
      { type: "reach_realm", targetId: "foundation", targetAmount: 1, description: "突破至筑基期" }
    ],
    rewards: [
      { resourceId: "spirit_stone", amount: 500 },
      { resourceId: "breakthrough_pill_low", amount: 2 },
      { resourceId: "sect_token", amount: 100 }
    ],
    sectContributionReward: 200,
    preQuestId: "main_slay_spider"
  },
  {
    id: "side_herb_collect",
    name: "采药日常",
    description: "丹房的采药童子说灵草供不应求，需要更多灵草来炼制聚气丹",
    type: "daily",
    objectives: [
      { type: "gather", targetId: "spirit_herb", targetAmount: 10, description: "采集灵草 x10" }
    ],
    rewards: [
      { resourceId: "spirit_stone", amount: 30 },
      { resourceId: "qi_gathering_pill", amount: 2 }
    ],
    sectContributionReward: 10,
    preQuestId: null
  },
  {
    id: "side_wolf_hunt",
    name: "猎妖令",
    description: "妖兽密林入口有巡逻弟子受伤，需要清理附近的青面妖狼",
    type: "side",
    objectives: [
      { type: "kill", targetId: "green_wolf", targetAmount: 2, description: "击杀青面妖狼 x2" }
    ],
    rewards: [
      { resourceId: "spirit_stone", amount: 200 },
      { resourceId: "healing_pill", amount: 3 },
      { resourceId: "iron_ore", amount: 5 }
    ],
    sectContributionReward: 40,
    preQuestId: null
  }
];
function D(e) {
  return j.find((t) => t.id === e);
}
function J(e) {
  return Ie.find((t) => t.id === e);
}
function at(e) {
  return F.find((t) => t.id === e);
}
function me(e) {
  return te.find((t) => t.id === e);
}
function ut(e) {
  return j.filter((t) => e.discoveredLocationIds.includes(t.id));
}
function lt(e) {
  return D(e.currentLocationId);
}
function ct(e) {
  const t = j.find((n) => n.id === e);
  return t ? t.enemies.map((n) => J(n)) : [];
}
function L(e) {
  return st(e.realm);
}
function ae(e) {
  const t = L(e);
  if (t.layerCount === 1) return t.name;
  if (t.id === "qi_refining") return `${t.name}第${e.realmLayer}层`;
  const n = ["初期", "中期", "后期", "圆满"];
  return `${t.name}${n[Math.min(e.realmLayer - 1, n.length - 1)]}`;
}
function de(e, t) {
  return e.techniques.find((n) => n.id === t);
}
function U(e, t, n) {
  if (n <= 0) return;
  const r = e.inventory.find((s) => s.resourceId === t);
  r ? r.amount += n : e.inventory.push({
    id: `inv-${t}-${Date.now()}`,
    resourceId: t,
    name: at(t).name,
    amount: n
  });
}
function mt(e, t) {
  return e.inventory.filter((n) => n.resourceId === t).reduce((n, r) => n + r.amount, 0);
}
function dt(e, t) {
  e.spiritStones += t;
}
function pt(e, t) {
  return e.spiritStones < t ? !1 : (e.spiritStones -= t, !0);
}
function ue(e) {
  return it(e);
}
function ft(e, t) {
  const n = ue(t);
  if (!n) return { ok: !1, reason: "未知丹方" };
  for (const r of n.ingredients) {
    const s = mt(e, r.resourceId);
    if (s < r.amount)
      return { ok: !1, reason: `${ot(r.resourceId).name}不足（需要${r.amount}，拥有${s}）` };
  }
  return { ok: !0, reason: "" };
}
function gt(e, t, n, r) {
  const s = ft(e, t);
  if (!s.ok) return { ok: !1, message: s.reason };
  const i = ue(t);
  for (const u of i.ingredients) {
    let g = u.amount * n;
    for (const _ of [...e.inventory]) {
      if (_.resourceId !== u.resourceId) continue;
      const x = Math.min(_.amount, g);
      if (_.amount -= x, g -= x, _.amount <= 0 && (e.inventory = e.inventory.filter((H) => H.id !== _.id)), g <= 0) break;
    }
  }
  const c = r + i.refineTimeSeconds * 1e3 * n;
  return e.alchemyQueues.push({
    id: `alchemy-${r}-${t}`,
    recipeId: t,
    recipeName: i.name,
    startedAt: r,
    finishAt: c,
    count: n
  }), { ok: !0, message: `${i.name} × ${n} 开始炼制，预计完成 ${new Date(c).toLocaleTimeString("zh-CN")}` };
}
function ht(e, t) {
  const n = e.alchemyQueues.filter((s) => s.finishAt <= t);
  if (n.length === 0) return;
  for (const s of n) {
    const i = ue(s.recipeId);
    if (!i) continue;
    let c = 0;
    for (let g = 0; g < s.count; g++)
      Math.random() * 100 <= i.successBaseChance && c++;
    if (c > 0) {
      const g = i.id === "qi_gathering" ? "qi_gathering_pill" : i.id === "recovery" ? "recovery_pill" : i.id === "healing" ? "healing_pill" : i.id === "breakthrough_low" ? "breakthrough_pill_low" : i.id === "breakthrough_mid" ? "breakthrough_pill_mid" : null;
      g && U(e, g, c);
    }
    const u = s.count - c, a = u > 0 ? `${c}成功, ${u}失败` : `全部${c}成功`;
    e.messages.unshift({
      id: `msg-${s.id}`,
      type: "system",
      title: "炼丹完成",
      timestamp: new Date(t).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 }),
      text: `${i.name}炼制完成: ${a}`,
      tags: [{ label: "炼丹", tone: "violet" }]
    });
  }
  const r = new Set(n.map((s) => s.id));
  e.alchemyQueues = e.alchemyQueues.filter((s) => !r.has(s.id));
}
function v(e) {
  return new Date(e).toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1
  });
}
function yt(e) {
  return Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e4 ? `${(e / 1e4).toFixed(1)}万` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : Number.isInteger(e) ? `${e}` : `${e.toFixed(1)}`;
}
function bt(e) {
  return `${Math.round(e)}%`;
}
function ne(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function _t(e) {
  let n = 1 / L(e).cultivationHoursPerPercent;
  const r = e.techniques.find((s) => s.templateId === "heart_sutra");
  return r && (n *= 1 + r.level * 0.05), n;
}
function kt(e, t) {
  if (!e.cultivationQueue) return;
  const n = e.cultivationQueue;
  if (Date.now() >= n.finishAt) {
    e.cultivationQueue = null;
    return;
  }
  const s = t / 3600, i = _t(e);
  e.cultivationProgress = ne(e.cultivationProgress + s * i * 100, 0, 100);
}
function It(e) {
  const t = L(e);
  return (t.id === "mortal" ? {} : (() => {
    const r = [
      { id: "mortal", name: "凡人" },
      { id: "qi_refining", name: "练气期" },
      { id: "foundation", name: "筑基期" },
      { id: "golden_core", name: "金丹期" }
    ], s = r.findIndex((i) => i.id === e.realm);
    return s < r.length - 1 ? r[s + 1] : null;
  })()) ? e.realm === "mortal" && e.cultivationProgress < 100 ? { ok: !1, reason: "修炼进度不足100%" } : e.realm !== "mortal" && e.realmLayer < t.layerCount ? { ok: !1, reason: `需要修炼至${t.name}第${t.layerCount}层` } : e.realm !== "mortal" && e.cultivationProgress < 100 ? { ok: !1, reason: "当前层修炼进度不足100%" } : { ok: !0, reason: "" } : { ok: !1, reason: "已至当前世界最高境界" };
}
function we(e) {
  let n = L(e).breakthroughBaseChance;
  (e.realm === "qi_refining" || e.realm === "mortal") && e.inventory.some((i) => i.resourceId === "breakthrough_pill_low" && i.amount > 0) && (n += 15), e.realm === "foundation" && e.inventory.some((i) => i.resourceId === "breakthrough_pill_mid" && i.amount > 0) && (n += 10);
  const r = e.techniques.find((s) => s.templateId === "heart_sutra");
  return r && (n += r.level * 2), ne(n, 1, 95);
}
function vt(e, t) {
  const n = we(e);
  if (Math.random() * 100 <= n) {
    if (e.realm === "mortal")
      e.realm = "qi_refining", e.realmLayer = 1;
    else {
      const u = ["qi_refining", "foundation", "golden_core"], a = u.indexOf(e.realm);
      if (a >= 0 && a < u.length - 1)
        e.realm = u[a + 1], e.realmLayer = 1;
      else
        return { success: !1, damage: 0, message: "无法确定下一境界" };
    }
    const c = L(e);
    if (e.maxLifespan += c.lifespanBonus, e.lifespan = e.maxLifespan, e.maxHp += 100 * c.combatPowerMultiplier, e.currentHp = e.maxHp, e.maxSpiritPower += c.spiritPowerBonus, e.spiritPower = e.maxSpiritPower, e.cultivationProgress = 0, e.tribulationProgress += 10, e.realm === "qi_refining" || e.realm === "foundation") {
      const u = e.realm === "qi_refining" ? "breakthrough_pill_low" : "breakthrough_pill_mid", a = e.inventory.find((g) => g.resourceId === u);
      a && a.amount > 0 && (a.amount -= 1, a.amount <= 0 && (e.inventory = e.inventory.filter((g) => g.id !== a.id)));
    }
    return {
      success: !0,
      damage: 0,
      message: `突破成功！晋升${L(e).name}`
    };
  }
  const i = Math.round(e.maxHp * 0.3);
  return e.currentHp = Math.max(1, e.currentHp - i), e.cultivationProgress = Math.max(0, e.cultivationProgress - 20), e.tribulationProgress += 5, {
    success: !1,
    damage: i,
    message: `突破失败！受到${i}点心魔反噬伤害，修炼进度倒退20%`
  };
}
const $t = 1e3 * 60 * 60 * 2;
function Q(e, t = Date.now()) {
  const n = Math.max(0, Math.min(t - e.lastTickAt, $t));
  if (n <= 0) return e;
  const r = n / 1e3;
  return kt(e, r), ht(e, t), e.lastTickAt = t, e.worldDay = 1 + Math.floor((t - e.createdAt) / (1e3 * 60 * 60 * 24)), e.lifespan <= 0 && e.alerts.push({
    id: `alert-death-${t}`,
    severity: "critical",
    text: "寿元耗尽！你的修仙之途已走到尽头。"
  }), e.messages = e.messages.slice(0, 80), e.alerts = e.alerts.slice(-20), e;
}
function wt(e) {
  const t = L(e);
  return Math.round(15 * t.combatPowerMultiplier);
}
function xe(e) {
  const t = L(e);
  return Math.round(5 * t.combatPowerMultiplier);
}
function xt(e, t) {
  if (e.combat) return { ok: !1, message: "已经在战斗中" };
  const n = J(t);
  return n ? (e.combat = {
    enemyId: t,
    enemyName: n.name,
    enemyHp: n.hp,
    enemyMaxHp: n.hp,
    enemyRealm: n.realm,
    enemySpiritPower: n.spiritPower,
    enemyMaxSpiritPower: n.spiritPower,
    turn: 0,
    playerHp: e.currentHp,
    playerMaxHp: e.maxHp,
    playerSpiritPower: e.spiritPower,
    playerMaxSpiritPower: e.maxSpiritPower,
    playerBuffs: [],
    enemyBuffs: [],
    logs: [`战斗开始！你遭遇了${n.name}（${n.realm === "foundation" ? "筑基级" : "练气级"}）`],
    status: "active"
  }, { ok: !0, message: `战斗开始！遭遇${n.name}` }) : { ok: !1, message: "未知敌人" };
}
function K(e) {
  e.playerBuffs = e.playerBuffs.filter((t) => (t.remainingTurns--, t.type === "dot" && (e.playerHp -= t.value), t.type === "hot" && (e.playerHp += t.value), t.remainingTurns > 0)), e.enemyBuffs = e.enemyBuffs.filter((t) => (t.remainingTurns--, t.type === "dot" && (e.enemyHp -= t.value), t.type === "hot" && (e.enemyHp += t.value), t.remainingTurns > 0)), e.playerHp = ne(e.playerHp, 0, e.playerMaxHp), e.enemyHp = ne(e.enemyHp, 0, e.enemyMaxHp);
}
function Ct(e, t) {
  if (!e.combat) return { ok: !1, message: "不在战斗中" };
  const n = e.combat;
  if (n.status !== "active") return { ok: !1, message: "战斗已结束" };
  const r = e.techniques.find((_) => _.id === t);
  if (!r) return { ok: !1, message: "未掌握的功法" };
  if (r.category !== "attack") return { ok: !1, message: "该功法不是攻击型功法" };
  const s = 5 + r.level * 2;
  if (n.playerSpiritPower < s) return { ok: !1, message: "灵气不足" };
  n.turn++, n.playerSpiritPower -= s;
  const i = wt(e), c = 1 + r.level * 0.15, u = 0.85 + Math.random() * 0.3;
  let a = Math.round(i * c * u);
  const g = J(n.enemyId);
  return a = Math.max(1, a - g.defense), n.enemyHp = Math.max(0, n.enemyHp - a), n.logs.unshift(`[第${n.turn}回合] 你使用${r.name}，造成${a}点伤害`), K(n), n.enemyHp <= 0 ? (n.status = "victory", n.logs.unshift(`${g.name}被击败！`), { ok: !0, message: `击败${g.name}！` }) : { ok: !0, message: `造成${a}点伤害` };
}
function St(e) {
  if (!e.combat) return { ok: !1, message: "不在战斗中" };
  const t = e.combat;
  return t.status !== "active" ? { ok: !1, message: "战斗已结束" } : (t.turn++, t.playerBuffs.push({
    id: `defend-${t.turn}`,
    name: "防御姿态",
    type: "shield",
    value: Math.round(xe(e) * 1.5),
    remainingTurns: 1
  }), t.playerSpiritPower = Math.min(t.playerMaxSpiritPower, t.playerSpiritPower + 10), t.logs.unshift(`[第${t.turn}回合] 你采取防御姿态，恢复10点灵气`), K(t), { ok: !0, message: "采取防御姿态" });
}
function At(e) {
  if (!e.combat) return { ok: !1, message: "不在战斗中" };
  const t = e.combat;
  return t.status !== "active" ? { ok: !1, message: "战斗已结束" } : Math.random() <= 0.6 ? (t.status = "fled", t.logs.unshift("你成功脱离了战斗"), { ok: !0, message: "成功逃离战斗" }) : (t.turn++, t.logs.unshift("逃离失败！"), K(t), { ok: !0, message: "逃离失败，继续战斗" });
}
function Pt(e, t) {
  if (!e.combat) return { ok: !1, message: "不在战斗中" };
  const n = e.combat;
  if (n.status !== "active") return { ok: !1, message: "战斗已结束" };
  const r = e.inventory.find((s) => s.id === t);
  return r ? (n.turn++, r.resourceId === "healing_pill" ? (n.playerHp = Math.min(n.playerMaxHp, n.playerHp + 50), r.amount -= 1, r.amount <= 0 && (e.inventory = e.inventory.filter((i) => i.id !== r.id)), n.logs.unshift(`[第${n.turn}回合] 使用${r.name}，恢复50点生命`), K(n), { ok: !0, message: "恢复50点生命" }) : r.resourceId === "recovery_pill" ? (n.playerSpiritPower = Math.min(n.playerMaxSpiritPower, n.playerSpiritPower + 30), r.amount -= 1, r.amount <= 0 && (e.inventory = e.inventory.filter((i) => i.id !== r.id)), n.logs.unshift(`[第${n.turn}回合] 使用${r.name}，恢复30点灵气`), K(n), { ok: !0, message: "恢复30点灵气" }) : { ok: !1, message: "该物品不能在战斗中使用" }) : { ok: !1, message: "物品不存在" };
}
function ee(e) {
  if (!e.combat || e.combat.status !== "active") return { acted: !1, message: "" };
  const t = e.combat, n = J(t.enemyId), r = n.skills[Math.floor(Math.random() * n.skills.length)];
  if (!r) return { acted: !1, message: "" };
  if (t.enemySpiritPower >= r.spiritCost)
    t.enemySpiritPower -= r.spiritCost;
  else
    return t.enemySpiritPower += 5, t.logs.unshift(`${n.name}蓄力恢复灵气`), { acted: !0, message: `${n.name}蓄力恢复灵气` };
  const s = t.playerBuffs.some((c) => c.type === "shield" && c.remainingTurns > 0);
  if (r.id === "howl" && !s)
    return t.playerBuffs.push({
      id: `howl-${t.turn}`,
      name: "震慑",
      type: "stat_down",
      value: 0.3,
      remainingTurns: 2
    }), t.logs.unshift(`${n.name}使用${r.name}，你的防御降低2回合`), { acted: !0, message: `${n.name}使用${r.name}` };
  let i = Math.round(n.attack * r.damageMultiplier * (0.85 + Math.random() * 0.3));
  if (s) {
    const c = t.playerBuffs.find((u) => u.type === "shield");
    if (c) {
      const u = Math.min(c.value, i);
      c.value -= u, i -= u, c.value <= 0 && (t.playerBuffs = t.playerBuffs.filter((a) => a.id !== c.id));
    }
  }
  return i = Math.max(1, i - Math.round(xe(e) * 0.5)), t.playerHp = Math.max(0, t.playerHp - i), t.logs.unshift(`${n.name}使用${r.name}，对你造成${i}点伤害`), r.id === "poison_fog" && t.playerBuffs.push({
    id: `poison-${t.turn}`,
    name: "中毒",
    type: "dot",
    value: 15,
    remainingTurns: 3
  }), t.playerHp <= 0 ? (t.status = "defeat", t.logs.unshift("你被击败了..."), { acted: !0, message: "你被击败了" }) : { acted: !0, message: `${n.name}造成${i}点伤害` };
}
function R(e) {
  if (!e.combat) return;
  const t = e.combat;
  if (t.status === "victory") {
    e.currentHp = t.playerHp, e.spiritPower = t.playerSpiritPower;
    const n = J(t.enemyId);
    for (const s of n.loot)
      if (Math.random() <= s.chance) {
        const i = s.amount[0] + Math.floor(Math.random() * (s.amount[1] - s.amount[0] + 1));
        U(e, s.resourceId, i);
      }
    const r = n.realm === "foundation" ? 30 : 10;
    for (const s of e.techniques)
      s.category === "attack" && s.level < s.maxLevel && (s.experience += r, s.experience >= s.level * 50 && (s.experience -= s.level * 50, s.level += 1));
  } else t.status === "defeat" ? (e.currentHp = Math.round(e.maxHp * 0.2), e.spiritPower = 0) : t.status === "fled" && (e.currentHp = t.playerHp, e.spiritPower = t.playerSpiritPower);
  e.combat = null;
}
function pe(e, t) {
  const n = Date.now();
  if (Q(e, n), t.type === "TICK_NOW")
    return { ok: !0, tone: "green", message: "时间已推进结算。" };
  if (t.type === "LOCATION_CHANGE") {
    const r = D(t.locationId);
    return r ? e.discoveredLocationIds.includes(t.locationId) ? e.combat ? { ok: !1, tone: "red", message: "战斗中无法转移地点" } : e.cultivationQueue ? { ok: !1, tone: "red", message: "修炼中无法转移地点" } : (e.currentLocationId = t.locationId, e.messages.unshift({
      id: `msg-${n}-location`,
      type: "system",
      title: "地点移动",
      timestamp: v(n),
      text: `你来到了${r.title}。${r.description}`,
      tags: [{ label: r.isSafe ? "安全区" : "野外", tone: r.isSafe ? "cyan" : "amber" }]
    }), { ok: !0, tone: r.isSafe ? "cyan" : "amber", message: `已到达${r.title}` }) : { ok: !1, tone: "amber", message: "该地点尚未探索" } : { ok: !1, tone: "red", message: "未知地点" };
  }
  if (t.type === "LOCATION_EXPLORE") {
    const r = D(t.locationId);
    return r ? r.unlocked ? { ok: !1, tone: "amber", message: "该地点已解锁" } : (e.discoveredLocationIds.push(t.locationId), e.messages.unshift({
      id: `msg-${n}-explore`,
      type: "system",
      title: "探索发现",
      timestamp: v(n),
      text: `你发现了新地点：${r.title}。${r.description}`,
      tags: [{ label: "探索", tone: "violet" }]
    }), { ok: !0, tone: "violet", message: `发现新地点：${r.title}` }) : { ok: !1, tone: "red", message: "未知地点" };
  }
  if (t.type === "CULTIVATION_START") {
    if (e.combat) return { ok: !1, tone: "red", message: "战斗中无法修炼" };
    if (e.cultivationQueue) return { ok: !1, tone: "amber", message: "已经在修炼中" };
    const r = L(e), s = r.cultivationHoursPerPercent * (100 - e.cultivationProgress), i = s * 3600 * 1e3, c = [];
    if (t.pillIds.length > 0)
      for (const a of t.pillIds) {
        const g = e.inventory.find((_) => _.id === a);
        g && g.resourceId === "qi_gathering_pill" && (g.amount -= 1, g.amount <= 0 && (e.inventory = e.inventory.filter((_) => _.id !== g.id)), c.push("聚气丹"));
      }
    e.cultivationQueue = {
      id: `cult-${n}`,
      method: t.method,
      startedAt: n,
      finishAt: n + i,
      pillsUsed: c
    };
    const u = c.length > 0 ? `（使用了${c.join("、")}加速）` : "";
    return e.messages.unshift({
      id: `msg-${n}-cult-start`,
      type: "system",
      title: "开始修炼",
      timestamp: v(n),
      text: `你开始修炼${r.name}，预计需要${Math.round(s * 10) / 10}小时${u}`,
      tags: [{ label: "修炼", tone: "cyan" }]
    }), { ok: !0, tone: "cyan", message: `开始修炼${r.name}` };
  }
  if (t.type === "CULTIVATION_STOP")
    return e.cultivationQueue ? (e.cultivationQueue = null, e.messages.unshift({
      id: `msg-${n}-cult-stop`,
      type: "system",
      title: "中断修炼",
      timestamp: v(n),
      text: "你中止了修炼",
      tags: [{ label: "修炼", tone: "amber" }]
    }), { ok: !0, tone: "amber", message: "修炼已中止" }) : { ok: !1, tone: "amber", message: "没有进行中的修炼" };
  if (t.type === "BREAKTHROUGH_ATTEMPT") {
    if (e.combat) return { ok: !1, tone: "red", message: "战斗中无法突破" };
    const r = It(e);
    if (!r.ok) return { ok: !1, tone: "amber", message: r.reason };
    const s = vt(e);
    return s.success ? (e.spiritRoot = e.realm === "qi_refining" ? "下品灵根(已觉醒)" : e.spiritRoot, e.messages.unshift({
      id: `msg-${n}-breakthrough`,
      type: "system",
      title: "突破成功",
      timestamp: v(n),
      text: s.message,
      tags: [{ label: "突破", tone: "violet" }]
    }), e.alerts = e.alerts.filter((i) => !i.id.startsWith("br-")), { ok: !0, tone: "violet", message: s.message, shouldAskAI: !0 }) : (e.messages.unshift({
      id: `msg-${n}-br-fail`,
      type: "alert",
      title: "突破失败",
      timestamp: v(n),
      text: s.message,
      tags: [{ label: "突破失败", tone: "red" }]
    }), e.alerts.push({
      id: `br-fail-${n}`,
      severity: "warning",
      text: "突破失败，需要恢复修炼进度后再尝试。"
    }), { ok: !0, tone: "red", message: s.message, shouldAskAI: !0 });
  }
  if (t.type === "COMBAT_START") {
    if (e.combat) return { ok: !1, tone: "red", message: "已经在战斗中" };
    e.cultivationQueue && (e.cultivationQueue = null);
    const r = xt(e, t.enemyId);
    return r.ok ? (e.messages.unshift({
      id: `msg-${n}-combat-start`,
      type: "system",
      title: "战斗开始",
      timestamp: v(n),
      text: r.message,
      tags: [{ label: "战斗", tone: "red" }]
    }), { ok: !0, tone: "red", message: r.message, shouldAskAI: !0 }) : { ok: !1, tone: "red", message: r.message };
  }
  if (t.type === "COMBAT_ATTACK") {
    const r = Ct(e, t.techniqueId);
    return r.ok ? e.combat && e.combat.status === "victory" ? (R(e), e.alerts = e.alerts.filter((s) => !s.id.startsWith("combat-")), { ok: !0, tone: "green", message: r.message, shouldAskAI: !0 }) : (ee(e), e.combat && e.combat.status === "defeat" ? (R(e), e.alerts.push({
      id: `combat-defeat-${n}`,
      severity: "critical",
      text: "战斗失败，已退回安全地点。生命和灵气已部分恢复。"
    }), e.currentLocationId = "qingxuan_outer", { ok: !0, tone: "red", message: "战斗失败！已退回青玄宗外门", shouldAskAI: !0 }) : { ok: !0, tone: "cyan", message: r.message }) : { ok: !1, tone: "red", message: r.message };
  }
  if (t.type === "COMBAT_DEFEND") {
    const r = St(e);
    return r.ok ? (ee(e), e.combat && e.combat.status === "defeat" ? (R(e), e.currentLocationId = "qingxuan_outer", { ok: !0, tone: "red", message: "战斗失败！已退回青玄宗外门", shouldAskAI: !0 }) : { ok: !0, tone: "cyan", message: r.message }) : { ok: !1, tone: "red", message: r.message };
  }
  if (t.type === "COMBAT_FLEE") {
    const r = At(e);
    return r.ok ? e.combat && e.combat.status === "fled" ? (R(e), { ok: !0, tone: "amber", message: r.message }) : (ee(e), e.combat && e.combat.status === "defeat" ? (R(e), e.currentLocationId = "qingxuan_outer", { ok: !0, tone: "red", message: "战斗失败！", shouldAskAI: !0 }) : { ok: !0, tone: "amber", message: r.message }) : { ok: !1, tone: "red", message: r.message };
  }
  if (t.type === "COMBAT_USE_PILL") {
    const r = Pt(e, t.inventoryItemId);
    return r.ok ? (ee(e), e.combat && e.combat.status === "defeat" ? (R(e), e.currentLocationId = "qingxuan_outer", { ok: !0, tone: "red", message: "战斗失败！", shouldAskAI: !0 }) : { ok: !0, tone: "cyan", message: r.message }) : { ok: !1, tone: "red", message: r.message };
  }
  if (t.type === "ALCHEMY_REFINE") {
    if (e.combat) return { ok: !1, tone: "red", message: "战斗中无法炼丹" };
    const r = gt(e, t.recipeId, t.count, n);
    return r.ok ? { ok: !0, tone: "violet", message: r.message } : { ok: !1, tone: "amber", message: r.message };
  }
  if (t.type === "HERB_GATHER") {
    const r = D(e.currentLocationId);
    let s = !1;
    for (const i of r.resources)
      Math.random() <= i.gatherRate && (U(e, i.resourceId, 1), s = !0);
    return s ? { ok: !0, tone: "green", message: "采集到了一些材料" } : { ok: !0, tone: "amber", message: "这次什么也没采到" };
  }
  if (t.type === "TECHNIQUE_CREATE") {
    const r = $e.find((u) => u.id === t.templateId);
    if (!r) return { ok: !1, tone: "red", message: "未知功法模板" };
    if (!e.inventory.some((u) => u.resourceId === "technique_scroll" && u.amount > 0)) return { ok: !1, tone: "red", message: "需要功法残卷才能自创功法" };
    if (e.techniques.find((u) => u.name === t.name)) return { ok: !1, tone: "amber", message: "已有同名功法" };
    const c = e.inventory.find((u) => u.resourceId === "technique_scroll");
    return c && (c.amount -= 1, c.amount <= 0 && (e.inventory = e.inventory.filter((u) => u.id !== c.id))), e.techniques.push({
      id: `tech-self-${n}`,
      name: t.name,
      templateId: t.templateId,
      category: r.category,
      level: 1,
      maxLevel: r.maxLevel,
      experience: 0,
      selfCreated: !0,
      selfCreatedDescription: t.description,
      createdAt: n
    }), e.messages.unshift({
      id: `msg-${n}-tech-create`,
      type: "system",
      title: "自创功法",
      timestamp: v(n),
      text: `你自创了功法「${t.name}」: ${t.description || "无详细描述"}`,
      tags: [{ label: "自创功法", tone: "violet" }]
    }), { ok: !0, tone: "violet", message: `自创功法「${t.name}」成功！`, shouldAskAI: !0 };
  }
  if (t.type === "TECHNIQUE_UPGRADE") {
    const r = de(e, t.techniqueId);
    if (!r) return { ok: !1, tone: "red", message: "未知功法" };
    if (r.level >= r.maxLevel) return { ok: !1, tone: "amber", message: "已达最高等级" };
    const s = r.level * 30;
    return e.spiritStones < s ? { ok: !1, tone: "red", message: `灵石不足（需要${s}）` } : (pt(e, s), r.level += 1, r.experience = 0, e.messages.unshift({
      id: `msg-${n}-tech-upgrade`,
      type: "system",
      title: "功法升级",
      timestamp: v(n),
      text: `「${r.name}」提升至第${r.level}层`,
      tags: [{ label: "功法", tone: "cyan" }]
    }), { ok: !0, tone: "cyan", message: `「${r.name}」升级至第${r.level}层` });
  }
  if (t.type === "TECHNIQUE_RENAME") {
    const r = de(e, t.techniqueId);
    if (!r) return { ok: !1, tone: "red", message: "未知功法" };
    if (!r.selfCreated) return { ok: !1, tone: "amber", message: "只能重命名自创功法" };
    const s = r.name;
    return r.name = t.newName, e.messages.unshift({
      id: `msg-${n}-tech-rename`,
      type: "system",
      title: "功法重命名",
      timestamp: v(n),
      text: `「${s}」已重命名为「${t.newName}」`,
      tags: [{ label: "功法", tone: "cyan" }]
    }), { ok: !0, tone: "cyan", message: `已重命名为「${t.newName}」` };
  }
  if (t.type === "QUEST_ACCEPT") {
    const r = me(t.questId);
    return r ? e.quests.some((s) => s.questId === r.id && s.status === "accepted") ? { ok: !1, tone: "amber", message: "已接取该任务" } : e.quests.some((s) => s.questId === r.id && s.status === "completed") ? { ok: !1, tone: "amber", message: "已完成该任务" } : r.preQuestId && !e.quests.some((i) => i.questId === r.preQuestId && i.status === "completed") ? { ok: !1, tone: "amber", message: "前置任务未完成" } : (e.quests.push({
      questId: r.id,
      objectives: r.objectives.map((s) => ({
        targetId: s.targetId,
        current: 0,
        required: s.targetAmount
      })),
      status: "accepted",
      acceptedAt: n,
      completedAt: null
    }), e.messages.unshift({
      id: `msg-${n}-quest-accept`,
      type: "system",
      title: "接取任务",
      timestamp: v(n),
      text: `接取任务: ${r.name}
${r.description}`,
      tags: [{ label: "任务", tone: "cyan" }]
    }), { ok: !0, tone: "cyan", message: `接取任务: ${r.name}` }) : { ok: !1, tone: "red", message: "未知任务" };
  }
  if (t.type === "QUEST_TURN_IN") {
    const r = e.quests.find((c) => c.questId === t.questId && c.status === "accepted");
    if (!r) return { ok: !1, tone: "amber", message: "没有进行中的该任务" };
    const s = me(t.questId);
    if (!r.objectives.every((c) => c.current >= c.required)) return { ok: !1, tone: "amber", message: "任务目标尚未完成" };
    r.status = "completed", r.completedAt = n;
    for (const c of s.rewards)
      c.resourceId === "spirit_stone" ? dt(e, c.amount) : U(e, c.resourceId, c.amount);
    return e.sectContribution += s.sectContributionReward, e.messages.unshift({
      id: `msg-${n}-quest-done`,
      type: "system",
      title: "任务完成",
      timestamp: v(n),
      text: `完成任务: ${s.name}。获得宗门贡献+${s.sectContributionReward}`,
      tags: [{ label: "任务完成", tone: "green" }]
    }), { ok: !0, tone: "green", message: `完成任务: ${s.name}`, shouldAskAI: !0 };
  }
  if (t.type === "SECT_SHOP_BUY") {
    const s = (t.resourceId === "qi_gathering_pill" ? 15 : t.resourceId === "recovery_pill" ? 8 : t.resourceId === "healing_pill" ? 12 : t.resourceId === "technique_scroll" ? 300 : 10) * t.amount;
    return e.sectContribution < s ? { ok: !1, tone: "red", message: `宗门贡献不足（需要${s}）` } : (e.sectContribution -= s, U(e, t.resourceId, t.amount), { ok: !0, tone: "green", message: `购买成功，消耗${s}宗门贡献` });
  }
  if (t.type === "USE_PILL") {
    const r = e.inventory.find((s) => s.id === t.inventoryItemId);
    if (!r) return { ok: !1, tone: "red", message: "物品不存在" };
    if (r.resourceId === "qi_gathering_pill")
      return e.combat ? { ok: !1, tone: "red", message: "战斗中不能使用修炼丹" } : (e.cultivationProgress = Math.min(100, e.cultivationProgress + 15), r.amount -= 1, r.amount <= 0 && (e.inventory = e.inventory.filter((s) => s.id !== r.id)), { ok: !0, tone: "green", message: "使用聚气丹，修炼进度+15%" });
    if (r.resourceId === "recovery_pill") {
      const s = Math.min(30, e.maxSpiritPower - e.spiritPower);
      return e.spiritPower += s, r.amount -= 1, r.amount <= 0 && (e.inventory = e.inventory.filter((i) => i.id !== r.id)), { ok: !0, tone: "green", message: `使用回灵丹，灵气+${s}` };
    }
    if (r.resourceId === "healing_pill") {
      const s = Math.min(50, e.maxHp - e.currentHp);
      return e.currentHp += s, r.amount -= 1, r.amount <= 0 && (e.inventory = e.inventory.filter((i) => i.id !== r.id)), { ok: !0, tone: "green", message: `使用疗伤丹，生命+${s}` };
    }
    return { ok: !1, tone: "red", message: "该物品不能直接使用" };
  }
  if (t.type === "COMMS_SEND") {
    const r = t.text.trim();
    return r ? (e.messages.unshift({
      id: `msg-${n}-comms`,
      type: "user",
      title: e.playerName,
      timestamp: v(n),
      text: r,
      tags: [{ label: "玩家", tone: "cyan" }]
    }), { ok: !0, tone: "cyan", message: "消息已发送", shouldAskAI: !0 }) : { ok: !1, tone: "red", message: "输入不能为空" };
  }
  return { ok: !1, tone: "red", message: "未知动作" };
}
function Tt(e, t) {
  const n = [], r = [];
  e.version !== t.expectedSchemaVersion && n.push(`存档版本不匹配: ${e.version} !== ${t.expectedSchemaVersion}`), B.find((i) => i.id === e.realm) || n.push(`当前境界 ${e.realm} 不存在于境界表中`), j.find((i) => i.id === e.currentLocationId) || n.push(`当前地点 ${e.currentLocationId} 不存在于地点表中`), e.currentHp <= 0 && !e.combat && n.push("角色生命值为0且不在战斗中"), e.lifespan <= 0 && n.push("寿元已耗尽");
  for (const i of e.inventory)
    F.find((c) => c.id === i.resourceId) || r.push(`物品栏中存在未知资源: ${i.resourceId}`), i.amount <= 0 && r.push(`物品栏中 ${i.name} 数量为0或负数`);
  for (const i of e.techniques)
    i.level > i.maxLevel && n.push(`功法 ${i.name} 等级 ${i.level} 超过上限 ${i.maxLevel}`);
  (e.cultivationProgress < 0 || e.cultivationProgress > 100) && n.push(`修炼进度异常: ${e.cultivationProgress}`);
  for (const i of e.alchemyQueues)
    i.finishAt < Date.now() - 1e3 * 60 * 60 * 24 && r.push(`炼丹队列 ${i.recipeName} 已过期超过24小时`);
  const s = e.discoveredLocationIds.filter((i) => !j.find((c) => c.id === i));
  return s.length > 0 && r.push(`已探索地点中有 ${s.length} 个不存在于地点表`), {
    status: n.length > 0 ? "critical" : r.length > 0 ? "warning" : "healthy",
    errors: n,
    warnings: r,
    errorCount: n.length,
    warningCount: r.length
  };
}
const E = "cultivationWorld", q = 1, Lt = o.object({
  id: o.string().catch("msg-unknown"),
  type: o.enum(["npc", "user", "system", "alert"]).catch("system"),
  title: o.string().catch("系统"),
  timestamp: o.string().catch("--:--"),
  text: o.string().catch(""),
  tags: o.array(o.object({
    label: o.string().catch(""),
    tone: o.enum(["cyan", "amber", "green", "red", "violet"]).catch("cyan")
  })).optional().catch([])
}), Mt = o.object({
  id: o.string().catch("inv-unknown"),
  resourceId: o.string().catch("unknown"),
  name: o.string().catch("未知物品"),
  amount: o.coerce.number().int().nonnegative().catch(0)
}), Et = o.object({
  id: o.string().catch("tech-unknown"),
  name: o.string().catch("未知功法"),
  templateId: o.string().catch(""),
  category: o.enum(["attack", "defense", "support", "cultivation"]).catch("attack"),
  level: o.coerce.number().int().min(1).max(10).catch(1),
  maxLevel: o.coerce.number().int().catch(10),
  experience: o.coerce.number().nonnegative().catch(0),
  selfCreated: o.coerce.boolean().catch(!1),
  selfCreatedDescription: o.string().catch(""),
  createdAt: o.coerce.number().catch(() => Date.now())
}), qt = o.object({
  enemyId: o.string(),
  enemyName: o.string(),
  enemyHp: o.number(),
  enemyMaxHp: o.number(),
  enemyRealm: o.string(),
  enemySpiritPower: o.number(),
  enemyMaxSpiritPower: o.number(),
  turn: o.number(),
  playerHp: o.number(),
  playerMaxHp: o.number(),
  playerSpiritPower: o.number(),
  playerMaxSpiritPower: o.number(),
  playerBuffs: o.array(o.object({
    id: o.string(),
    name: o.string(),
    type: o.enum(["dot", "hot", "stat_up", "stat_down", "shield"]),
    value: o.number(),
    remainingTurns: o.number()
  })),
  enemyBuffs: o.array(o.object({
    id: o.string(),
    name: o.string(),
    type: o.enum(["dot", "hot", "stat_up", "stat_down", "shield"]),
    value: o.number(),
    remainingTurns: o.number()
  })),
  logs: o.array(o.string()),
  status: o.enum(["active", "victory", "defeat", "fled"])
}).nullable().catch(null), Ht = o.object({
  questId: o.string(),
  objectives: o.array(o.object({
    targetId: o.string(),
    current: o.coerce.number().nonnegative().catch(0),
    required: o.coerce.number().positive().catch(1)
  })),
  status: o.enum(["accepted", "completed", "failed"]),
  acceptedAt: o.coerce.number().catch(0),
  completedAt: o.number().nullable().catch(null)
}), Ce = o.object({
  version: o.coerce.number().int().catch(q),
  createdAt: o.coerce.number().catch(() => Date.now()),
  lastTickAt: o.coerce.number().catch(() => Date.now()),
  playerName: o.string().catch("无名修士"),
  realm: o.string().catch("mortal"),
  realmLayer: o.coerce.number().int().min(1).catch(1),
  cultivationProgress: o.coerce.number().min(0).max(100).catch(0),
  lifespan: o.coerce.number().nonnegative().catch(80),
  maxLifespan: o.coerce.number().positive().catch(80),
  spiritRoot: o.string().catch("未觉醒"),
  spiritStones: o.coerce.number().nonnegative().catch(100),
  inventory: o.array(Mt).catch([]),
  techniques: o.array(Et).catch([]),
  currentHp: o.coerce.number().positive().catch(100),
  maxHp: o.coerce.number().positive().catch(100),
  spiritPower: o.coerce.number().nonnegative().catch(0),
  maxSpiritPower: o.coerce.number().nonnegative().catch(0),
  combat: qt,
  currentLocationId: o.string().catch("qingxuan_outer"),
  discoveredLocationIds: o.array(o.string()).catch(["qingxuan_outer", "qingxuan_rear_mountain"]),
  worldDay: o.coerce.number().positive().catch(1),
  sectContribution: o.coerce.number().nonnegative().catch(0),
  sectRank: o.string().catch("外门弟子"),
  quests: o.array(Ht).catch([]),
  karma: o.coerce.number().catch(0),
  tribulationProgress: o.coerce.number().nonnegative().catch(0),
  cultivationQueue: o.object({
    id: o.string(),
    method: o.enum(["meditation", "pill_assisted", "location_bonus"]),
    startedAt: o.number(),
    finishAt: o.number(),
    pillsUsed: o.array(o.string())
  }).nullable().catch(null),
  alchemyQueues: o.array(o.object({
    id: o.string(),
    recipeId: o.string(),
    recipeName: o.string(),
    startedAt: o.number(),
    finishAt: o.number(),
    count: o.number()
  })).catch([]),
  messages: o.array(Lt).catch([]),
  alerts: o.array(o.object({
    id: o.string().catch(""),
    severity: o.enum(["warning", "critical"]).catch("warning"),
    text: o.string().catch("")
  })).catch([])
}), Se = o.object({
  schemaVersion: o.coerce.number().int().catch(q),
  savedAt: o.coerce.number().catch(0),
  save: Ce
});
function Ae(e) {
  return JSON.parse(JSON.stringify(e));
}
function Pe() {
  return typeof getVariables == "function" && typeof updateVariablesWith == "function";
}
function ie(e, t) {
  return {
    state: "ready",
    source: t,
    message: e,
    variableKey: E,
    savedAt: null,
    migrated: !1
  };
}
function Te(e, t) {
  const n = Ce.safeParse(e);
  if (!n.success) return null;
  const r = n.data;
  return {
    save: {
      ...t,
      ...r,
      version: q,
      messages: r.messages.length ? r.messages.slice(0, 80) : t.messages,
      alerts: r.alerts.length ? r.alerts : t.alerts,
      inventory: r.inventory.filter((s) => s.amount > 0)
    },
    migrated: r.version !== q
  };
}
async function fe(e) {
  if (!Pe())
    return { save: e, needsPersist: !1, status: ie("未检测到酒馆变量接口，使用内存存档", "memory") };
  try {
    const n = getVariables({ type: "chat" })[E];
    let r = n;
    if (n) {
      const i = Se.safeParse(n);
      i.success && (r = i.data.save);
    }
    const s = r ? Te(r, e) : null;
    return s ? {
      save: s.save,
      needsPersist: s.migrated,
      status: {
        state: "ready",
        source: "chat",
        message: s.migrated ? "存档已读取并迁移" : "已读取存档",
        variableKey: E,
        savedAt: null,
        migrated: s.migrated
      }
    } : { save: e, needsPersist: !0, status: ie("未发现存档，已创建新存档", "chat") };
  } catch (t) {
    return {
      save: e,
      needsPersist: !1,
      status: { state: "error", source: "memory", message: `读取存档失败: ${t}`, variableKey: E, savedAt: null, migrated: !1 }
    };
  }
}
function Rt(e) {
  return JSON.stringify({ schemaVersion: q, savedAt: Date.now(), save: Ae(e) }, null, 2);
}
function Nt(e, t) {
  let n;
  try {
    n = JSON.parse(e);
  } catch (c) {
    throw new Error(`JSON解析失败: ${c}`);
  }
  let r = n;
  const s = Se.safeParse(n);
  s.success && (r = s.data.save);
  const i = Te(r, t);
  if (!i) throw new Error("存档结构不符合修仙世界格式");
  return i;
}
async function Bt(e) {
  if (!Pe())
    return ie("未检测到酒馆变量接口", "memory");
  const t = Date.now();
  return await updateVariablesWith((n) => (n[E] = { schemaVersion: q, savedAt: t, save: Ae(e) }, n), { type: "chat" }), { state: "ready", source: "chat", message: "已保存", variableKey: E, savedAt: t, migrated: !1 };
}
function Dt(e) {
  return [
    `境界: ${ae(e)}`,
    `修炼进度: ${bt(e.cultivationProgress)}`,
    `灵根: ${e.spiritRoot}`,
    `寿元: ${e.lifespan}/${e.maxLifespan}年`,
    `生命: ${e.currentHp}/${e.maxHp}`,
    `灵气: ${e.spiritPower}/${e.maxSpiritPower}`
  ].join(", ");
}
function jt(e) {
  return e.inventory.length === 0 ? "背包为空" : e.inventory.filter((t) => t.amount > 0).slice(0, 10).map((t) => `${t.name} × ${t.amount}`).join(", ");
}
function Ot(e) {
  return e.techniques.length === 0 ? "未掌握任何功法" : e.techniques.map((t) => `${t.name} Lv.${t.level}/${t.maxLevel}${t.selfCreated ? "(自创)" : ""}`).join(", ");
}
function Vt(e) {
  const t = e.quests.filter((n) => n.status === "accepted");
  return t.length === 0 ? "无进行中的任务" : t.map((n) => {
    const r = (() => {
      try {
        return require("../data/quests").getQuest(n.questId);
      } catch {
        return null;
      }
    })(), s = n.objectives.map((i) => `${i.current}/${i.required}`).join(" ");
    return `${(r == null ? void 0 : r.name) ?? n.questId} [${s}]`;
  }).join("; ");
}
function Qt(e) {
  if (!e.cultivationQueue) return "未在修炼";
  const t = e.cultivationQueue.finishAt - Date.now();
  return `修炼中, 剩余约${Math.round(t / 36e5 * 10) / 10}小时`;
}
function Ut(e) {
  return e.combat ? `战斗中: ${e.combat.enemyName} (HP ${e.combat.enemyHp}/${e.combat.enemyMaxHp})` : "未在战斗";
}
function zt(e) {
  const t = D(e.currentLocationId);
  return [
    `当前位置: ${t.title} (${t.zone}), ${t.isSafe ? "安全区" : "野外"}`,
    `玩家: ${e.playerName}`,
    Dt(e),
    `灵石: ${e.spiritStones}`,
    `宗门: ${e.sectRank}, 贡献: ${e.sectContribution}`,
    `背包: ${jt(e)}`,
    `功法: ${Ot(e)}`,
    `任务: ${Vt(e)}`,
    `修炼: ${Qt(e)}`,
    `战斗: ${Ut(e)}`,
    `因果: ${e.karma} | 天劫累积: ${e.tribulationProgress}`,
    `告警: ${e.alerts.map((n) => n.text).join("; ") || "无"}`
  ].join(`
`);
}
function Le(e) {
  const t = D(e.currentLocationId), n = [
    "[修仙世界]",
    `地点:${t.title}`,
    `区域:${t.zone}`,
    ...t.worldbookTags,
    `境界:${ae(e)}`,
    "门派:青玄宗",
    `身份:${e.sectRank}`,
    `安全:${t.isSafe ? "是" : "否"}`
  ];
  e.combat && n.push(`战斗:${e.combat.enemyName}`), e.cultivationQueue && n.push("修炼:进行中");
  for (const r of e.alerts)
    n.push(`告警:${r.severity}`);
  return Array.from(new Set(n)).join(`
`);
}
function Me(e) {
  const t = zt(e);
  return [
    {
      position: "none",
      depth: 0,
      role: "system",
      should_scan: !0,
      content: Le(e)
    },
    {
      position: "in_chat",
      depth: 0,
      role: "system",
      should_scan: !1,
      content: [
        "你作为这个修仙世界的叙述者，负责旁白描述、NPC对话、场景气氛和角色互动。",
        "你可以扮演所有非玩家角色：宗门长老、同门师兄弟、散修、妖兽、路人等。",
        "所有修炼进度、资源、战斗结果、任务状态都由前端脚本决定，你不能修改。",
        "你可以根据当前局势描述修炼体感、战斗画面、NPC态度、场景气氛。",
        "不要输出变量更新、JSON、MVU命令、函数调用或世界书编辑指令。",
        "不要输出思考过程、<thinking>、<content>或类似标签。",
        "最终回复保持自然的叙述或角色对话。",
        "",
        "当前权威局势:",
        t
      ].join(`
`)
    }
  ];
}
function ge(e) {
  return e.replace(/<thinking>[\s\S]*?<\/thinking>/gi, "").replace(/<content>[\s\S]*?<\/content>/gi, "").replace(/<UpdateVariable>[\s\S]*?<\/UpdateVariable>/gi, "").replace(/<Analysis>[\s\S]*?<\/Analysis>/gi, "").replace(/<JSONPatch>[\s\S]*?<\/JSONPatch>/gi, "").trim();
}
async function Ft({ save: e, userText: t, onStream: n }) {
  if (typeof generate != "function")
    throw new Error("未检测到酒馆 generate 接口");
  const r = `cultivation-${Date.now()}`, s = (c, u) => {
    u === r && (n == null || n(ge(c)));
  }, i = typeof eventOn == "function" ? eventOn(iframe_events.STREAM_TOKEN_RECEIVED_FULLY, s) : null;
  try {
    const c = await generate({
      generation_id: r,
      user_input: t,
      should_stream: !0,
      max_chat_history: 24,
      overrides: { temperature: 0.8 },
      injects: Me(e)
    });
    return ge(c);
  } finally {
    i == null || i.stop();
  }
}
async function Kt(e) {
  if (typeof createChatMessages != "function")
    return { ok: !1, message: "未检测到聊天楼层接口，跳过写入" };
  try {
    return await createChatMessages([
      {
        role: "user",
        name: e.save.playerName,
        message: e.userText,
        data: {},
        extra: {
          frontendCard: { type: "player_input", savedAt: Date.now() }
        }
      },
      {
        role: "assistant",
        name: "叙述者",
        message: e.assistantText,
        data: {},
        extra: {
          frontendCard: { type: "ai_reply", savedAt: Date.now() }
        }
      }
    ]), { ok: !0, message: "已写入酒馆楼层" };
  } catch (t) {
    return { ok: !1, message: `写入楼层失败: ${t}` };
  }
}
function he(e, t) {
  return { state: e, source: "memory", message: t, variableKey: E, savedAt: null, migrated: !1 };
}
const G = tt("cultivation-world", () => {
  const e = P(Z()), t = P(null), n = P(he("loading", "正在读取存档")), r = P({ state: "idle", message: "就绪", generationId: null }), s = P(!1);
  let i = 0;
  const c = k(() => lt(e.value)), u = k(() => ut(e.value)), a = k(() => ae(e.value)), g = k(() => {
    const p = B.findIndex((f) => f.id === e.value.realm);
    return p < B.length - 1 ? B[p + 1] : null;
  }), _ = k(() => ct(e.value.currentLocationId)), x = k(
    () => e.value.techniques.filter((p) => p.category === "attack")
  ), H = k(
    () => e.value.techniques.filter((p) => p.category === "support" || p.category === "defense")
  ), b = k(
    () => e.value.inventory.filter((p) => p.amount > 0).map((p) => {
      var f;
      return {
        ...p,
        displayAmount: yt(p.amount),
        category: ((f = F.find((I) => I.id === p.resourceId)) == null ? void 0 : f.category) ?? "material"
      };
    }).sort((p, f) => f.amount - p.amount)
  ), C = k(
    () => e.value.quests.filter((p) => p.status === "accepted").map((p) => {
      const f = te.find((I) => I.id === p.questId);
      return { ...p, name: (f == null ? void 0 : f.name) ?? p.questId, description: (f == null ? void 0 : f.description) ?? "" };
    })
  ), O = k(
    () => e.value.quests.filter((p) => p.status === "completed").map((p) => {
      const f = te.find((I) => I.id === p.questId);
      return { ...p, name: (f == null ? void 0 : f.name) ?? p.questId };
    })
  ), Ee = k(() => we(e.value)), qe = k(() => e.value.cultivationProgress), He = k(() => !!e.value.combat && e.value.combat.status === "active"), Re = k(() => !!e.value.cultivationQueue), Ne = k(() => Rt(e.value)), Be = k(() => Le(e.value)), De = k(
    () => Me(e.value).map(
      (p, f) => `#${f + 1} 位置=${p.position} 扫描=${p.should_scan}
${p.content}`
    ).join(`

---

`)
  ), W = k(
    () => Tt(e.value, { expectedSchemaVersion: q })
  ), je = k(() => ({
    schemaVersion: e.value.version,
    realm: a.value,
    location: c.value.title,
    healthStatus: W.value.status,
    errorCount: W.value.errorCount,
    warningCount: W.value.warningCount,
    messageCount: e.value.messages.length
  }));
  async function T(p = "auto") {
    const f = ++i;
    n.value = { ...n.value, state: "saving", message: "保存中..." };
    try {
      const I = await Bt(e.value);
      f === i && (n.value = I);
    } catch (I) {
      f === i && (n.value = { ...n.value, state: "error", source: "memory", message: `保存失败: ${I}` });
    }
  }
  function Oe(p) {
    e.value.messages.unshift(p), e.value.messages = e.value.messages.slice(0, 80);
  }
  function Y(p, f) {
    const I = e.value.messages.find((X) => X.id === p);
    I && Object.assign(I, f);
  }
  async function Ve() {
    if (s.value) return;
    const p = Z(), f = await fe(p);
    e.value = { ...Q(f.save) }, n.value = f.status, s.value = !0, f.needsPersist && T("auto");
  }
  function Qe() {
    e.value = { ...Q(e.value) }, T("auto");
  }
  function Ue() {
    T("manual");
  }
  async function ze() {
    n.value = he("loading", "重新读取存档");
    const p = await fe(Z());
    e.value = { ...Q(p.save) }, n.value = p.status, p.needsPersist && T("auto");
  }
  async function Fe(p) {
    if (!p.trim()) return { ok: !1, tone: "red", message: "导入内容为空" };
    try {
      const f = Nt(p, Z());
      return e.value = { ...Q(f.save) }, await T("manual"), { ok: !0, tone: f.migrated ? "amber" : "green", message: f.migrated ? "存档已导入并迁移" : "存档已导入" };
    } catch (f) {
      return { ok: !1, tone: "red", message: f instanceof Error ? f.message : String(f) };
    }
  }
  function Ke(p) {
    const f = pe(e.value, p);
    return e.value = { ...e.value }, t.value = f, f.ok && T("auto"), f;
  }
  async function Je(p) {
    var le;
    const f = p.trim();
    if (!f || r.value.state === "generating") return;
    const I = pe(e.value, { type: "COMMS_SEND", text: f });
    if (e.value = { ...e.value }, t.value = I, !I.ok || !I.shouldAskAI) return;
    const X = Date.now(), M = `msg-${X}-ai-stream`;
    Oe({
      id: M,
      type: "npc",
      title: "叙述者",
      timestamp: new Date(X).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 }),
      text: "正在观察局势...",
      tags: [{ label: "生成中", tone: "cyan" }, { label: "AIRP", tone: "violet" }]
    }), r.value = { state: "generating", message: "AI叙述中", generationId: M }, await T("auto");
    try {
      const V = await Ft({
        save: e.value,
        userText: f,
        onStream: (oe) => Y(M, { text: oe || "...", tags: [{ label: "流式生成", tone: "cyan" }] })
      });
      Y(M, { text: V || "无回复", tags: [{ label: "AI叙述", tone: "violet" }] });
      const se = await Kt({ save: e.value, userText: f, assistantText: V });
      Y(M, { tags: [...((le = e.value.messages.find((oe) => oe.id === M)) == null ? void 0 : le.tags) ?? [], { label: se.ok ? "已写入楼层" : "楼层跳过", tone: se.ok ? "green" : "amber" }] }), r.value = { state: "idle", message: se.message, generationId: null };
    } catch (V) {
      Y(M, { type: "alert", title: "生成失败", text: String(V), tags: [{ label: "错误", tone: "red" }] }), r.value = { state: "error", message: String(V), generationId: null };
    }
    await T("auto");
  }
  return {
    save: e,
    lastResult: t,
    persistence: n,
    generation: r,
    bootstrapped: s,
    currentLocation: c,
    availableLocations: u,
    realmText: a,
    nextRealm: g,
    currentLocationEnemies: _,
    attackTechniques: x,
    supportTechniques: H,
    inventoryDisplay: b,
    activeQuests: C,
    completedQuests: O,
    breakthroughChance: Ee,
    cultivationProgress: qe,
    isInCombat: He,
    isCultivating: Re,
    debugSaveJson: Ne,
    debugScanText: Be,
    debugInjectPreview: De,
    debugHealthReport: W,
    debugStats: je,
    data: { realms: B, resources: F, locations: j, enemies: Ie, pillRecipes: ve, techniqueTemplates: $e, quests: te },
    bootstrap: Ve,
    tick: Qe,
    saveNow: Ue,
    reloadFromChat: ze,
    importSaveJson: Fe,
    dispatch: Ke,
    sendComms: Je,
    persist: T
  };
}), Jt = { class: "top-bar" }, Gt = { class: "bar-left" }, Wt = { class: "realm" }, Yt = { class: "stat" }, Xt = { class: "bar-center" }, Zt = { class: "stat" }, en = { class: "stat" }, tn = { class: "stat" }, nn = { class: "stat" }, rn = { class: "bar-right" }, sn = /* @__PURE__ */ re({
  __name: "TopStatusBar",
  props: {
    onExit: { type: Function }
  },
  emits: ["toggleDebug"],
  setup(e) {
    const t = G();
    return (n, r) => (h(), y("header", Jt, [
      l("div", Gt, [
        r[2] || (r[2] = l("span", { class: "title" }, "修仙世界", -1)),
        l("span", Wt, d(m(t).realmText), 1),
        l("span", Yt, "寿元 " + d(m(t).save.lifespan) + "/" + d(m(t).save.maxLifespan), 1)
      ]),
      l("div", Xt, [
        l("span", Zt, "灵石 " + d(m(t).save.spiritStones), 1),
        l("span", en, "生命 " + d(m(t).save.currentHp) + "/" + d(m(t).save.maxHp), 1),
        l("span", tn, "灵气 " + d(m(t).save.spiritPower) + "/" + d(m(t).save.maxSpiritPower), 1),
        l("span", nn, "贡献 " + d(m(t).save.sectContribution), 1)
      ]),
      l("div", rn, [
        l("span", {
          class: N(["save-status", m(t).persistence.state])
        }, d(m(t).persistence.state === "saving" ? "保存中" : m(t).persistence.state === "error" ? "异常" : "就绪"), 3),
        l("button", {
          class: "icon-btn",
          onClick: r[0] || (r[0] = (s) => n.$emit("toggleDebug")),
          title: "调试面板"
        }, "D"),
        l("button", {
          class: "exit-btn",
          onClick: r[1] || (r[1] = (s) => {
            var i;
            return (i = e.onExit) == null ? void 0 : i.call(e);
          })
        }, "退出")
      ])
    ]));
  }
}), on = { class: "debug-panel" }, an = { key: 0 }, un = { class: "save-json" }, ln = /* @__PURE__ */ re({
  __name: "DebugPanel",
  setup(e) {
    const t = G(), n = P(""), r = P("");
    async function s() {
      const c = new Blob([t.debugSaveJson], { type: "application/json" }), u = URL.createObjectURL(c), a = document.createElement("a");
      a.href = u, a.download = `cultivation-save-${Date.now()}.json`, a.click(), URL.revokeObjectURL(u);
    }
    async function i() {
      const c = await t.importSaveJson(n.value);
      r.value = c.message;
    }
    return (c, u) => (h(), y("div", on, [
      u[7] || (u[7] = l("h3", null, "调试面板", -1)),
      l("section", null, [
        u[1] || (u[1] = l("h4", null, "状态", -1)),
        l("pre", null, d(m(t).debugStats), 1)
      ]),
      l("section", null, [
        u[2] || (u[2] = l("h4", null, "世界书扫描文本", -1)),
        l("pre", null, d(m(t).debugScanText), 1)
      ]),
      l("section", null, [
        u[3] || (u[3] = l("h4", null, "AI注入预览", -1)),
        l("pre", null, d(m(t).debugInjectPreview), 1)
      ]),
      l("section", null, [
        u[4] || (u[4] = l("h4", null, "健康检查", -1)),
        l("pre", {
          class: N(m(t).debugHealthReport.status)
        }, d(m(t).debugHealthReport), 3)
      ]),
      l("section", null, [
        u[5] || (u[5] = l("h4", null, "存档管理", -1)),
        l("button", {
          class: "btn-secondary",
          onClick: s
        }, "导出存档"),
        be(l("textarea", {
          "onUpdate:modelValue": u[0] || (u[0] = (a) => n.value = a),
          placeholder: "粘贴存档JSON..."
        }, null, 512), [
          [_e, n.value]
        ]),
        l("button", {
          class: "btn-secondary",
          onClick: i
        }, "导入存档"),
        r.value ? (h(), y("p", an, d(r.value), 1)) : w("", !0)
      ]),
      l("section", null, [
        u[6] || (u[6] = l("h4", null, "存档JSON", -1)),
        l("pre", un, d(m(t).debugSaveJson), 1)
      ])
    ]));
  }
}), cn = { class: "app-root" }, mn = { class: "tab-bar" }, dn = ["onClick"], pn = { class: "main-content" }, fn = {
  key: 0,
  class: "panel"
}, gn = { class: "desc" }, hn = { class: "section" }, yn = ["onClick"], bn = { class: "tag" }, _n = { class: "section" }, kn = {
  key: 0,
  class: "empty"
}, In = { class: "amount" }, vn = ["onClick"], $n = {
  key: 1,
  class: "panel"
}, wn = { class: "stats" }, xn = { class: "actions" }, Cn = { class: "section" }, Sn = { class: "amount" }, An = ["onClick"], Pn = {
  key: 2,
  class: "panel"
}, Tn = {
  key: 0,
  class: "combat-active"
}, Ln = { class: "actions" }, Mn = ["onClick"], En = { class: "section" }, qn = ["onClick"], Hn = {
  key: 1,
  class: "section"
}, Rn = {
  key: 0,
  class: "empty"
}, Nn = ["onClick"], Bn = {
  key: 3,
  class: "panel"
}, Dn = { class: "section" }, jn = { class: "mats" }, On = ["onClick"], Vn = { class: "section" }, Qn = {
  key: 0,
  class: "empty"
}, Un = { class: "amount" }, zn = {
  key: 4,
  class: "panel"
}, Fn = { class: "message-log" }, Kn = { class: "msg-header" }, Jn = { class: "msg-title" }, Gn = { class: "msg-time" }, Wn = { class: "msg-text" }, Yn = {
  key: 0,
  class: "msg-tags"
}, Xn = { class: "comms-input" }, Zn = ["onKeydown"], er = ["disabled"], z = P("");
function ye() {
  if (!z.value.trim()) return;
  G().sendComms(z.value), z.value = "";
}
const tr = /* @__PURE__ */ re({
  __name: "AppShell",
  props: {
    onExit: { type: Function }
  },
  setup(e) {
    const t = e, n = G(), r = P("world"), s = P(!1), i = [
      { key: "world", label: "世界" },
      { key: "cultivation", label: "修炼" },
      { key: "combat", label: "战斗" },
      { key: "alchemy", label: "炼丹" },
      { key: "comms", label: "通讯" }
    ];
    return (c, u) => (h(), y("div", cn, [
      Ge(sn, {
        "on-exit": t.onExit,
        onToggleDebug: u[0] || (u[0] = (a) => s.value = !s.value)
      }, null, 8, ["on-exit"]),
      l("nav", mn, [
        (h(), y(S, null, A(i, (a) => l("button", {
          key: a.key,
          class: N(["tab-btn", { active: r.value === a.key }]),
          onClick: (g) => r.value = a.key
        }, d(a.label), 11, dn)), 64))
      ]),
      l("main", pn, [
        r.value === "world" ? (h(), y("div", fn, [
          l("h2", null, d(m(n).currentLocation.title), 1),
          l("p", gn, d(m(n).currentLocation.description), 1),
          l("div", hn, [
            u[7] || (u[7] = l("h3", null, "可到达地点", -1)),
            (h(!0), y(S, null, A(m(n).availableLocations, (a) => (h(), y("button", {
              key: a.id,
              class: N(["loc-btn", { current: a.id === m(n).save.currentLocationId }]),
              onClick: (g) => m(n).dispatch({ type: "LOCATION_CHANGE", locationId: a.id })
            }, [
              ce(d(a.title) + " ", 1),
              l("span", bn, d(a.isSafe ? "安全" : "野外"), 1)
            ], 10, yn))), 128))
          ]),
          l("div", _n, [
            u[8] || (u[8] = l("h3", null, "背包", -1)),
            m(n).inventoryDisplay.length === 0 ? (h(), y("div", kn, "背包为空")) : w("", !0),
            (h(!0), y(S, null, A(m(n).inventoryDisplay, (a) => (h(), y("div", {
              key: a.id,
              class: "item-row"
            }, [
              l("span", null, d(a.name), 1),
              l("span", In, d(a.displayAmount), 1),
              a.resourceId === "qi_gathering_pill" || a.resourceId === "recovery_pill" || a.resourceId === "healing_pill" ? (h(), y("button", {
                key: 0,
                class: "btn-sm",
                onClick: (g) => m(n).dispatch({ type: "USE_PILL", inventoryItemId: a.id })
              }, " 使用 ", 8, vn)) : w("", !0)
            ]))), 128))
          ])
        ])) : w("", !0),
        r.value === "cultivation" ? (h(), y("div", $n, [
          u[10] || (u[10] = l("h2", null, "修炼", -1)),
          l("div", wn, [
            l("p", null, "当前境界: " + d(m(n).realmText), 1),
            l("p", null, "修炼进度: " + d(m(n).cultivationProgress) + "%", 1),
            l("p", null, "突破成功率: " + d(m(n).breakthroughChance) + "%", 1)
          ]),
          l("div", xn, [
            m(n).isCultivating ? (h(), y("button", {
              key: 1,
              class: "btn-warn",
              onClick: u[2] || (u[2] = (a) => m(n).dispatch({ type: "CULTIVATION_STOP" }))
            }, " 中断修炼 ")) : (h(), y("button", {
              key: 0,
              class: "btn-primary",
              onClick: u[1] || (u[1] = (a) => m(n).dispatch({ type: "CULTIVATION_START", method: "meditation", pillIds: [] }))
            }, " 开始修炼 ")),
            l("button", {
              class: "btn-special",
              onClick: u[3] || (u[3] = (a) => m(n).dispatch({ type: "BREAKTHROUGH_ATTEMPT" }))
            }, " 尝试突破 ")
          ]),
          l("div", Cn, [
            u[9] || (u[9] = l("h3", null, "功法", -1)),
            (h(!0), y(S, null, A(m(n).save.techniques, (a) => (h(), y("div", {
              key: a.id,
              class: "item-row"
            }, [
              l("span", null, d(a.name) + " " + d(a.selfCreated ? "(自创)" : ""), 1),
              l("span", Sn, "Lv." + d(a.level) + "/" + d(a.maxLevel), 1),
              l("button", {
                class: "btn-sm",
                onClick: (g) => m(n).dispatch({ type: "TECHNIQUE_UPGRADE", techniqueId: a.id })
              }, " 升级 ", 8, An)
            ]))), 128))
          ])
        ])) : w("", !0),
        r.value === "combat" ? (h(), y("div", Pn, [
          u[13] || (u[13] = l("h2", null, "战斗", -1)),
          m(n).isInCombat && m(n).save.combat ? (h(), y("div", Tn, [
            l("p", null, [
              l("strong", null, d(m(n).save.combat.enemyName), 1),
              ce(" (" + d(m(n).save.combat.enemyRealm === "foundation" ? "筑基级" : "练气级") + ")", 1)
            ]),
            l("p", null, "敌人生命: " + d(m(n).save.combat.enemyHp) + "/" + d(m(n).save.combat.enemyMaxHp), 1),
            l("p", null, "你的生命: " + d(m(n).save.combat.playerHp) + "/" + d(m(n).save.combat.playerMaxHp), 1),
            l("p", null, "你的灵气: " + d(m(n).save.combat.playerSpiritPower) + "/" + d(m(n).save.combat.playerMaxSpiritPower), 1),
            l("div", Ln, [
              (h(!0), y(S, null, A(m(n).attackTechniques, (a) => (h(), y("button", {
                key: a.id,
                class: "btn-primary",
                onClick: (g) => m(n).dispatch({ type: "COMBAT_ATTACK", techniqueId: a.id })
              }, d(a.name), 9, Mn))), 128)),
              l("button", {
                class: "btn-secondary",
                onClick: u[4] || (u[4] = (a) => m(n).dispatch({ type: "COMBAT_DEFEND" }))
              }, "防御"),
              l("button", {
                class: "btn-warn",
                onClick: u[5] || (u[5] = (a) => m(n).dispatch({ type: "COMBAT_FLEE" }))
              }, "逃跑")
            ]),
            l("div", En, [
              u[11] || (u[11] = l("h3", null, "使用丹药", -1)),
              (h(!0), y(S, null, A(m(n).inventoryDisplay.filter((a) => a.resourceId === "healing_pill" || a.resourceId === "recovery_pill"), (a) => (h(), y("button", {
                key: a.id,
                class: "btn-sm",
                onClick: (g) => m(n).dispatch({ type: "COMBAT_USE_PILL", inventoryItemId: a.id })
              }, d(a.name), 9, qn))), 128))
            ])
          ])) : m(n).isInCombat ? w("", !0) : (h(), y("div", Hn, [
            u[12] || (u[12] = l("h3", null, "当前地点敌人", -1)),
            m(n).currentLocationEnemies.length === 0 ? (h(), y("div", Rn, "这里没有敌人")) : w("", !0),
            (h(!0), y(S, null, A(m(n).currentLocationEnemies, (a) => (h(), y("button", {
              key: a.id,
              class: "enemy-btn",
              onClick: (g) => m(n).dispatch({ type: "COMBAT_START", enemyId: a.id })
            }, [
              l("strong", null, d(a.name), 1),
              l("span", null, d(a.realm === "foundation" ? "筑基级" : "练气级"), 1),
              l("span", null, d(a.description), 1)
            ], 8, Nn))), 128))
          ]))
        ])) : w("", !0),
        r.value === "alchemy" ? (h(), y("div", Bn, [
          u[16] || (u[16] = l("h2", null, "炼丹", -1)),
          l("div", Dn, [
            u[14] || (u[14] = l("h3", null, "丹方", -1)),
            (h(!0), y(S, null, A(m(n).data.pillRecipes, (a) => (h(), y("div", {
              key: a.id,
              class: "recipe-card"
            }, [
              l("h4", null, d(a.name), 1),
              l("p", null, d(a.description), 1),
              l("p", jn, " 材料: " + d(a.ingredients.map((g) => {
                const _ = m(n).data.resources.find((x) => x.id === g.resourceId);
                return `${(_ == null ? void 0 : _.name) ?? g.resourceId} ×${g.amount}`;
              }).join("、")), 1),
              l("p", null, "成功率: " + d(a.successBaseChance) + "%", 1),
              l("button", {
                class: "btn-primary",
                onClick: (g) => m(n).dispatch({ type: "ALCHEMY_REFINE", recipeId: a.id, count: 1 })
              }, " 炼制 ", 8, On)
            ]))), 128))
          ]),
          l("div", Vn, [
            u[15] || (u[15] = l("h3", null, "炼丹队列", -1)),
            m(n).save.alchemyQueues.length === 0 ? (h(), y("div", Qn, "无进行中的炼丹")) : w("", !0),
            (h(!0), y(S, null, A(m(n).save.alchemyQueues, (a) => (h(), y("div", {
              key: a.id,
              class: "item-row"
            }, [
              l("span", null, d(a.recipeName) + " × " + d(a.count), 1),
              l("span", Un, d(a.finishAt > Date.now() ? "炼制中" : "完成"), 1)
            ]))), 128))
          ])
        ])) : w("", !0),
        r.value === "comms" ? (h(), y("div", zn, [
          u[17] || (u[17] = l("h2", null, "通讯", -1)),
          l("div", Fn, [
            (h(!0), y(S, null, A(m(n).save.messages, (a) => (h(), y("div", {
              key: a.id,
              class: N(["msg", a.type])
            }, [
              l("div", Kn, [
                l("span", Jn, d(a.title), 1),
                l("span", Gn, d(a.timestamp), 1)
              ]),
              l("div", Wn, d(a.text), 1),
              a.tags ? (h(), y("div", Yn, [
                (h(!0), y(S, null, A(a.tags, (g) => (h(), y("span", {
                  key: g.label,
                  class: N(["tag", g.tone])
                }, d(g.label), 3))), 128))
              ])) : w("", !0)
            ], 2))), 128))
          ]),
          l("div", Xn, [
            be(l("textarea", {
              "onUpdate:modelValue": u[6] || (u[6] = (a) => z.value = a),
              placeholder: "输入要说的话...",
              onKeydown: We(Ye(ye, ["exact", "prevent"]), ["enter"])
            }, null, 40, Zn), [
              [_e, z.value]
            ]),
            l("button", {
              class: "btn-primary",
              onClick: ye,
              disabled: m(n).generation.state === "generating"
            }, d(m(n).generation.state === "generating" ? "AI叙述中..." : "发送"), 9, er)
          ])
        ])) : w("", !0)
      ]),
      s.value ? (h(), ke(ln, { key: 0 })) : w("", !0)
    ]));
  }
}), nr = /* @__PURE__ */ re({
  __name: "App",
  props: {
    onExit: { type: Function }
  },
  setup(e) {
    const t = G();
    let n = null;
    return Xe(() => {
      t.bootstrap(), n = window.setInterval(() => {
        t.bootstrapped && t.tick();
      }, 15e3);
    }), Ze(() => {
      n !== null && (window.clearInterval(n), n = null);
    }), (r, s) => (h(), ke(tr, { "on-exit": e.onExit }, null, 8, ["on-exit"]));
  }
});
$(() => {
  const e = nt(), t = window.parent.document;
  let n = null, r = null, s = null, i = null;
  const c = [];
  function u(b) {
    b.key === "Escape" && (b.preventDefault(), x());
  }
  function a(b) {
    !b || c.includes(b) || (b.addEventListener("keydown", u, !0), c.push(b));
  }
  function g() {
    c.forEach((b) => b.removeEventListener("keydown", u, !0)), c.length = 0, i && (i.remove(), i = null);
  }
  function _() {
    if (i) return;
    const b = t.createElement("button");
    b.textContent = "退出仙途", b.style.cssText = "position:fixed;top:10px;right:10px;z-index:100000;padding:6px 14px;border:1px solid rgba(139,92,246,.5);border-radius:6px;background:rgba(5,8,16,.9);color:#c4b5fd;font:12px/1 sans-serif;cursor:pointer", b.addEventListener("click", x), t.body.appendChild(b), i = b, a(t), a(window.parent);
  }
  function x() {
    n && (n.unmount(), n = null), s && (s(), s = null), r && (r.remove(), r = null), g();
  }
  function H() {
    if (n || r) return;
    _();
    const b = document.createElement("iframe");
    b.setAttribute("script_id", getScriptId()), b.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:99999;border:none;background:#0a0a10", b.addEventListener("load", () => {
      const C = b.contentDocument;
      if (!(C != null && C.body)) return;
      a(C), a(b.contentWindow);
      const { destroy: O } = rt(C.head);
      s = O, n = et(nr, { onExit: x }).use(e), n.mount(C.body);
    }), r = b, t.body.appendChild(b), window.setTimeout(() => {
      var C;
      if ((C = b.contentDocument) != null && C.body) {
        const O = new Event("load");
        b.dispatchEvent(O);
      }
    }, 0);
  }
  replaceScriptButtons([{ name: "进入仙途", visible: !0 }]), eventOn(getButtonEvent("进入仙途"), H), H(), $(window).on("pagehide", () => x());
});
