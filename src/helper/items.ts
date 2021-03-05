export const items = ["potion", "high potion", "grenade"] as const

export type Item = typeof items[number];
