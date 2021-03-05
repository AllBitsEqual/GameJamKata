export const skills = ["slash", "stab", "slam"] as const

export type Skill = typeof skills[number];
