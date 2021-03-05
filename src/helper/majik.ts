export const elements = [
    "air",
    "fire",
    "earth",
    "water",
    "void",
    "aether"
] as const

export type Element = typeof elements[number];

export const statusEffects = [
    "burning",
    "poisoned",
    "slowed",
    "hasted",
    "sleeping",
    "regenerating",
    "meditating"
] as const
export type StatusEffect = typeof statusEffects[number];

export type Influence = {
    type: "damage" | "healing";
    element: Element;
    baseValue: number;
};

export type Effect = {
    type: StatusEffect;
    duration: number;
    influence: Influence | null;
};

export type Resistance = {
    [key in Element]?: number;
};
