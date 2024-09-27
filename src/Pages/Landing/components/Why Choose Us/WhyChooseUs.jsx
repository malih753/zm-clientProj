import React from "react";
import { GrowIcon, ReviewIcon, SignUpIcon } from "./Icons";

const WhyChooseUs = () => {
  return (
    <div className="flex justify-center pb-[30px] xs:pb-[60px] px-[10px] ">
      <div className="flex flex-col items-center w-full pb-[20px] lg:w-[1160px]  bg-light-blue-gradient rounded-[20px] sm:rounded-[30px]">
        <div className="my-[50px] text-center">
          <h1 className="text-dark-blue font-bold text-xl sm:text-[26px] ">
            <span className="text-[#005FEA] font-bold">A TECOM</span> innovation
            hub-In5 company
          </h1>
          <p className="text-dark-blue  text-left mt-4 ">
            Expand your business with our easily accessible services
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center flex-wrap gap-5">
          <div className="w-[95%] xs:w-[350px] lg:w-[333px]  flex items-center flex-col text-center h-[150px]  gap-2 bg-white rounded-[20px] p-[18px] ">
            <SignUpIcon />

            <h2 className="text-lg font-bold text-[#005FEA]">Access Leads</h2>
            <p className="text-sm w-full font-medium text-[#74839C] ">
              Easy access to leads, prospects, and customers for your business
              across the world.
            </p>
          </div>
          <div className="w-[95%] xs:w-[350px] lg:w-[333px] flex  gap-2 bg-white rounded-[20px] p-[18px]   flex-col items-center text-center">
            <ReviewIcon />

            <h2 className="text-lg font-bold text-[#005FEA]">Free Listing</h2>
            <p className="text-sm font-medium text-[#74839C] ">
              List your venue, property and services for free, and get noticed
              online by thousands of clients.
            </p>
          </div>
          <div className="w-[95%] xs:w-[350px] lg:w-[333px] flex items-center flex-col gap-2 bg-white rounded-[20px] p-[18px] h-[150px] text-center">
            <GrowIcon />

            <h2 className="text-lg font-bold text-[#005FEA]">
            Expand Your Business
            </h2>
            <p className="text-sm font-medium text-[#74839C] ">
            Raise your visibility and generate more revenue by attracting a larger number of customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
