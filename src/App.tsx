import React from "react"
import Arena from "./components/Arena"
import { Units, createUnit } from "./helper/units"
import "./styles.css"

const testUnits: Units = {
    heroes: [createUnit({ name: "Gus", race: "human" })],
    enemies: [
        createUnit({ name: "Orc", race: "orc" }),
        createUnit({ name: "Goblin", race: "goblin" }),
        createUnit({ name: "Elf", race: "elf" })
    ]
}

const App = () => (
    <div className="App">
        <Arena units={testUnits} />
    </div>
)

export default App
