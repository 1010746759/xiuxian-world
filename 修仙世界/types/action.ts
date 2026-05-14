export type GameAction =
  | { type: 'LOCATION_CHANGE'; locationId: string }
  | { type: 'LOCATION_EXPLORE'; locationId: string }
  | { type: 'CULTIVATION_START'; method: 'meditation' | 'pill_assisted'; pillIds: string[] }
  | { type: 'CULTIVATION_STOP' }
  | { type: 'BREAKTHROUGH_ATTEMPT' }
  | { type: 'COMBAT_START'; enemyId: string }
  | { type: 'COMBAT_ATTACK'; techniqueId: string }
  | { type: 'COMBAT_DEFEND' }
  | { type: 'COMBAT_FLEE' }
  | { type: 'COMBAT_USE_PILL'; inventoryItemId: string }
  | { type: 'ALCHEMY_REFINE'; recipeId: string; count: number }
  | { type: 'HERB_GATHER' }
  | { type: 'TECHNIQUE_CREATE'; name: string; templateId: string; description: string }
  | { type: 'TECHNIQUE_UPGRADE'; techniqueId: string }
  | { type: 'TECHNIQUE_RENAME'; techniqueId: string; newName: string }
  | { type: 'QUEST_ACCEPT'; questId: string }
  | { type: 'QUEST_TURN_IN'; questId: string }
  | { type: 'SECT_SHOP_BUY'; resourceId: string; amount: number }
  | { type: 'USE_PILL'; inventoryItemId: string }
  | { type: 'COMMS_SEND'; text: string }
  | { type: 'TICK_NOW' }

export interface ActionResult {
  ok: boolean
  tone: 'cyan' | 'amber' | 'green' | 'red' | 'violet'
  message: string
  shouldAskAI?: boolean
}
