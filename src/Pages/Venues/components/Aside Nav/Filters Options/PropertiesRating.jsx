import React from "react";
import { propertyRatingData } from "../../../../../Constants/PropertyRatingData";

const PropertiesRating = ({ path }) => {
  return (
    <div className="mt-3">
      <h1 className="text-dark-blue font-medium">
        {path === "/venues" && "Property"} Rating
      </h1>

      <div className="grid grid-cols-2 gap-y-[10px] gap-x-3 mt-[10px] border-b border-b-[#D8E0F0] pb-3">
        {propertyRatingData.map((item) => {
          return (
            <div
              style={{
                display:
                  path === "/services" && item.title === "Boutique"
                    ? "none"
                    : "flex",
              }}
              key={item.title}
              className="flex items-center gap-2 select-none"
            >
              <input
                type="checkbox"
                id={item.title.toLocaleLowerCase()}
                value={item.rating}
                className=" cursor-pointer accent-[#005FEA]"
              />
              <label
                htmlFor={item.title.toLocaleLowerCase()}
                className="text-[#7D899F] text-xs font-medium select-none cursor-pointer"
              >
                {item.title}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertiesRating;
