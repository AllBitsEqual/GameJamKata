export const spells = [
    "haste", // air
    "fireball", // fire
    "regenerate", // earth
    "heal" // water
] as const

export type Spell = typeof spells[number];
