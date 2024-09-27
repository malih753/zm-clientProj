import React from "react";
import { server } from "../../Constants/server";

const MapCard = ({ image, title, rating, location }) => {
  return (
    <div className="w-[128px] h-[115px] bg-white p-[2px] rounded-[10px]">
      <img src={`${server}${image}`} alt="" className="h-[67px] w-full rounded-[9px] object-cover" />
      <h1 className="text-xs text-dark-blue font-semibold mt-2">
        {title || "The LoLo House"}
      </h1>

      <p className="text-[10px] text-[#74839C] mt-1 mb-3">
        {location || "Al Mankhool - Dubai - UAE"}
      </p>
    </div>
  );
};

export default MapCard;
