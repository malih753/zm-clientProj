import React from "react";
import Card from "../../../../Common/Popular Events Card/Card";
import { popularEventsCardData } from "../../../../Constants/PopularEventsCardData";

const PopularEvents = () => {
  return (
    <div className="py-10 xs:py-[60px] ">
      <h1 className="text-[26px] text-center text-dark-blue">
        Popular <span className="text-blue-color font-bold">Event Types</span>
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap px-[10px] justify-between sm:justify-center gap-[20px] mt-[30px]">
        {popularEventsCardData.map((item) => (
          <Card key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default PopularEvents;
