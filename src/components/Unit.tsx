import React from "react"
import { UnitData } from "../helper/units"

type UnitProps = {
    data: UnitData;
    isActive?: boolean;
    isTarget?: boolean;
    touchHandler?: (id: string) => void;
};

const Unit = ({
                  data: { name, id, hp, status },
                  isActive = false,
                  isTarget = false,
                  touchHandler = () => null
              }: UnitProps) => (
    <div
        onClick={() => touchHandler(id)}
        data-active={isActive}
        data-target={isTarget}
    >
        <div>{name}</div>
        <div>{`HP: ${hp.current}/${hp.max}`}</div>
        {/*
    <ul>
      {status.map(({ type, duration }) => (
        <li key={type}>{`${type} (${duration})`}</li>
      ))}
    </ul>
    */}
    </div>
)

export default Unit
