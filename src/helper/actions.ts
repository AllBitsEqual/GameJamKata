import { Item } from "./items"
import { Skill } from "./skills"
import { Spell } from "./spells"

export const actionCategories = ["spell", "skill", "item"] as const

export type ActionCategory = typeof actionCategories[number];
export type Action = Spell | Skill | Item;
