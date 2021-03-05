import { Action, ActionCategory } from "./actions"
import { StatusEffect } from "./majik"

export const targets = [
    "self",
    "ally",
    "enemy",
    "current",
    "leader",
    "leaderCurrent"
] as const
export type Target = typeof targets[number];

export const percentages = [
    0,
    1,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75,
    80,
    85,
    90,
    95,
    99,
    100
] as const
export type Percentage = typeof percentages[number];

export const comparisonOperators = ["lt", "lte", "eq", "gte", "gt"] as const
export type ComparisonOperator = typeof comparisonOperators[number];

export type PercentageComparison = [ComparisonOperator, Percentage];

export type StatusComparison = [boolean, StatusEffect];

export type TargetComparison =
    | ["hp", PercentageComparison]
    | ["mp", PercentageComparison]
    | ["status", StatusComparison];

export type TriggerCondition = [Target, TargetComparison];

export type TargetAction = [ActionCategory, Action];

export type TriggerAction = [Target, TargetAction];

export type Gambit = {
    triggerCondition: TriggerCondition;
    triggerAction: TriggerAction;
};

const test: Gambit = {
    triggerCondition: ["self", ["hp", ["lt", 50]]],
    triggerAction: ["self", ["spell", "heal"]]
}

/*
  EXAMPLE 1
  TriggerCondition:
    Target: self
    Condition: hp < 50%
  TriggerAction:
    Target: self
    Action: Spell (healing)
*/

/*
 *
 *
 *
 *
 *
 *
 *
 */
console.log(test)

export type TargetComparisonA = {
    hp?: PercentageComparison;
    mp?: PercentageComparison;
    status?: StatusComparison;
};

export type ConditionA = {
    [key in Target]?: TargetComparisonA;
};

const test1: PercentageComparison = ["lt", 10]

const test2: ConditionA = {
    self: {
        hp: ["lt", 50],
        mp: ["gte", 80],
        status: [false, "regenerating"]
    }
}
