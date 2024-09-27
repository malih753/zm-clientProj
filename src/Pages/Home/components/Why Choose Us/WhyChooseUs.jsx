import React from "react";
import { GrowIcon, ReviewIcon, SignUpIcon } from "./Icons";

const WhyChooseUs = () => {
  return (
    <div className="flex justify-center pb-[30px] xs:pb-[60px] px-[10px] ">
      <div className="flex flex-col items-center w-full pb-[20px] lg:w-[1160px] lg:h-[351px] bg-light-blue-gradient rounded-[20px] sm:rounded-[30px]">
        <div className="my-[50px] text-center">
          <h1 className="text-dark-blue font-bold text-xl sm:text-[26px] ">
            {" "}
            Why Choose us?
          </h1>
          <p className="text-dark-blue text-lg sm:text-xl mt-4">
            Three Simple Steps to Your Perfect Event Venue
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center flex-wrap gap-5">
          <div className="w-[95%] xs:w-[350px] lg:w-[292px]  flex items-start gap-3 bg-white rounded-[20px] p-[18px] pr-0">
            <div>
              <SignUpIcon />
            </div>
            <div className="w-full lg:w-[219px]">
              <h2 className="text-lg font-bold text-[#005FEA]">SignUp</h2>
              <p className="text-sm w-full font-medium text-[#74839C] mt-[11px]">
                Signup now and search for number of different kinds of venues
                for your event and celebration
              </p>
            </div>
          </div>
          <div className="w-[95%] xs:w-[350px] lg:w-[292px] flex items-start gap-3 bg-white rounded-[20px] py-[26px] pl-5 pr-[18px] ">
            <div>
              <ReviewIcon />
            </div>
            <div className="">
              <h2 className="text-lg font-bold text-[#005FEA]">
                Add/Review Listing
              </h2>
              <p className="text-sm font-medium text-[#74839C] mt-[11px]">
                Venue owners can add your event venue or work venue here
              </p>
            </div>
          </div>
          <div className="w-[95%] xs:w-[350px] lg:w-[292px] flex items-start gap-3 bg-white rounded-[20px] py-[26px] pl-5 pr-[18px] ">
            <div>
              <GrowIcon />
            </div>
            <div className="">
              <h2 className="text-lg font-bold text-[#005FEA]">
                Grow your Business
              </h2>
              <p className="text-sm font-medium text-[#74839C] mt-[11px]">
                Join our business affiliate program and earn great commissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
