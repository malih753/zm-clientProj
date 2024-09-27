import React from "react";
import Card from "./Card";
import { boostVenuesCardData } from "../../../../Constants/BoostVenuesCardData";

const BoostVenues = () => {
  return (
    <div className="min-h-screen mt-20 px-[10px] xs:px-5  sm:px-[50px] ">
      <div className="text-center mb-8 sm:mb-[60px]">
        <h1 className="text-dark-blue font-medium text-2xl sm:text-[30px] md:text-[46px] ">
          <span className="text-[#005FEA] font-medium">Boost</span> Your Venue’s
          Visibility
        </h1>
        <p className="text-dark-blue mt-4 font-medium text-sm sm:text-xl opacity-60">
          Gain More Exposure with Our Exclusive Promotion and Featured Listings
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
        {boostVenuesCardData.map((item, index) => (
          <Card
            title={item.title}
            value={item.value}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BoostVenues;
