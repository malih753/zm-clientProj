import React from "react";
import Card from "./Card";

const SubscriptionPlans = () => {
  return (
    <div className="min-h-screen  sm:px-[50px] xs:px-5 px-[10px]">
      <div className="bg-white rounded-[30px] py-5 sm:py-[50px] w-full h-full px-[10px]">
        <div className="text-center mb-8 sm:mb-[60px]">
          <h1 className="text-dark-blue font-medium text-2xl sm:text-[30px] md:text-[46px] ">
            Choose the
            <span className="text-[#005FEA] font-medium">
              {" "}
              Perfect Plan
            </span>{" "}
            for Your Business
          </h1>
          <p className="text-dark-blue mt-4 font-medium text-sm sm:text-xl opacity-60">
            Flexible Subscription Options to Showcase Your Venue and Services
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 items-center">
          <Card />
          <Card isPrime={true} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
