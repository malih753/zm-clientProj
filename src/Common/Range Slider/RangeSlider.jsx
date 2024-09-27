import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const RangeSlider = () => {
  const [values, setValues] = useState([250, 800]); // Initial range values
  const MIN = 10;
  const MAX = 1000;

  // console.log(values);

  return (
    <div className="w-full ">
      <div className="flex items-center mb-[4px] justify-between">
        <h1 className="text-dark-blue font-medium">Preffered Area</h1>
        <h6 className="text-[#005FEA] text-xs font-medium">
          {values[0]} - {values[1]}
        </h6>
      </div>
      <div className="flex justify-center relative">
        <img src="/graph.png" alt="graph" />
      </div>
      <Range
        step={10}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            key={props.key}
            className="h-1 w-full rounded-full "
            style={{
              background: getTrackBackground({
                values,
                colors: ["#E2EAF2", "#005FEA", "#E2EAF2"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`h-4  w-4 rounded-full bg-white border-4 border-[#005FEA] focus:outline-none focus:ring-4 ${
              isDragged ? "shadow-md relative z-10" : ""
            }`}
          />
        )}
      />
      <div className="flex justify-between font-medium text-xs text-[#7D899F] mt-2">
        <span>{MIN}</span>
        <span>{MAX}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
