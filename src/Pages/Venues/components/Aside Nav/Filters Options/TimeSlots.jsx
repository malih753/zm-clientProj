import React from "react";
import { timeSlots } from "../../../../../Constants/TimeSlots";

const TimeSlots = () => {
  return (
    <div className="mt-3">
      <h1 className="text-dark-blue font-medium">Time Slots</h1>

      <div className=" space-y-[10px] mt-[10px] border-b border-b-[#D8E0F0] pb-3">
        {timeSlots.map((item) => {
          return (
            <div
              key={item}
              className="flex items-center gap-2 select-none"
            >
              <input
                type="checkbox"
                id={item.toLocaleLowerCase()}
                value={item}
                className=" cursor-pointer accent-[#005FEA]"
              />
              <label
                htmlFor={item.toLocaleLowerCase()}
                className="text-[#7D899F] text-xs font-medium select-none cursor-pointer"
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSlots;
