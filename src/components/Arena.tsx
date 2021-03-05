import React from "react"
import Unit from "./Unit"
import { Units } from "../helper/units"

type ArenaProps = {
    units: Units;
};

const Arena = ({ units }: ArenaProps) => (
    <div>
        <div>
            {units.heroes.map((unit) => (
                <Unit key={unit.id} data={unit} />
            ))}
        </div>
        <div>
            {units.enemies.map((unit) => (
                <Unit key={unit.id} data={unit} />
            ))}
        </div>
    </div>
)

export default Arena
