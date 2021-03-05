import { RaceName, getRaceData } from "./races"
import { Effect } from "./majik"

type UnitBaseData = {
    hp: {
        current: number;
        max: number;
    };
    status: Effect[] | [];
    interval: number;
};

export type UnitData = UnitBaseData & {
    name: string;
    id: string;
    race: RaceName;
};

export type Units = {
    heroes: UnitData[];
    enemies: UnitData[];
};

export type UnitInitiative = {
    name: string;
    unitId: string;
    timer: number;
};

type CreateUnitDataProps = {
    name: string;
    race: RaceName;
};

export const createUnit = ({ name, race }: CreateUnitDataProps): UnitData => {
    const { hp, interval } = getRaceData(race)
    return {
        name,
        race,
        id: "someString",
        hp: {
            current: hp,
            max: hp
        },
        interval,
        status: []
    }
}
