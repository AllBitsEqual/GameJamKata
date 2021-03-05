import { Resistance } from "./majik"

export const raceNames = ["human", "elf", "orc", "goblin"] as const
export type RaceName = typeof raceNames[number];

export type RaceData = {
    name: RaceName;
    hp: number;
    interval: number;
    resistance?: Resistance;
};

export type RaceConfig = {
    [key in RaceName]: RaceData;
};

const raceData: RaceConfig = {
    human: {
        name: "human",
        hp: 100,
        interval: 50
    },
    elf: {
        name: "elf",
        hp: 80,
        interval: 40,
        resistance: {
            air: 20
        }
    },
    orc: {
        name: "orc",
        hp: 140,
        interval: 80
    },
    goblin: {
        name: "goblin",
        hp: 60,
        interval: 50,
        resistance: {
            fire: -30
        }
    }
}

export const getRaceData = (race: RaceName): RaceData => raceData[race]
