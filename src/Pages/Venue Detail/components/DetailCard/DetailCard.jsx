import React from "react";
import { detailCardData } from "../../../../Constants/DetailCardData";

const DetailCard = ({ area,persons }) => {
  const newData = detailCardData.map((item) => {
    if (item.title === "Area (sqm)") {
      return {
        ...item,
        value: area && area[0]?.value,
      };
    }

    if (item.title === "Capacity") {
      return {
        ...item,
        value: persons && persons,
      };
    }
    return item;
  });

  // console.log("newData",newData);
  return (
    <div className="md:w-[550px] sm:h-[79px] py-4 xs:pl-5 pl-[10px] sm:pl-[33px] border-[0.5px] border-[#AAB3C1] bg-white rounded-[10px] flex flex-wrap gap-4 sm:gap-0 items-center justify-between pr-[10px] xs:pr-[25px] ">
      {newData?.map((item, index) => {
        return (
          <div
            key={item.title}
            className={`${item.title === "Reviews" && "mr-[30px] xs:mr-0"}`}
          >
            <h1 className="text-dark-blue text-sm mb-2">{item.title}</h1>
            <div className="flex gap-3 items-center">
              {item.Icon}
              <p className="text-[#005FEA] text-lg font-bold">{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailCard;
