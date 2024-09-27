import React from "react";
import Button from "../../../../Common/Button/Button";

const Properties = () => {
  return (
    <div className="pt-20 min-h-screen px-[10px] xs:px-5">
      <h1 className="text-2xl text-dark-blue font-medium mb-14 sm:text-[46px] sm:leading-[60px] text-center">
        Types of properties and services that can be listed
      </h1>

      <div className="flex justify-center flex-wrap gap-8  sm:gap-16">
        <div className="flex text-center items-center flex-col">
          <img src="/work.png" alt="work" />
          <h5 className="text-black font-medium sm:text-[26px] text-xl mt-5 mb-3">
            Work Venues
          </h5>
          <Button
            title="Start listing"
            btnClass="w-[200px] sm:w-[260px] py-2.5  sm:py-[15px] duration-300 text-[#005FEA] border border-[#005FEA] bg-transparent hover:bg-[#005FEA] hover:text-white"
          />
        </div>
        <div className="flex text-center items-center flex-col">
          <img src="/event-venue.png" alt="work" />
          <h5 className="text-black font-medium sm:text-[26px] text-xl mt-5 mb-3">
            Event Venues
          </h5>
          <Button
            title="Start listing"
            btnClass="w-[200px] sm:w-[260px] py-2.5  sm:py-[15px] duration-300 text-[#005FEA] border border-[#005FEA] bg-transparent hover:bg-[#005FEA] hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;
