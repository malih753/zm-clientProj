import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../../../../Common/Button/Button";
import VenuesCard from "../../../../Common/Venues Card/VenuesCard";
import { venueCardsData } from "../../../../Constants/VenueCardsData";

const tabs = [
  "Banquest",
  "Party Halls",
  "Convention Centre",
  "Farm Houses",
  "Roof Tops",
  "Auditoriums",
  "Yatch",
  "Palace",
  "Sports Complex",
  "Open Air Places",
];

const SocialVenues = () => {
  const [active, setActive] = useState("Banquest");

  const handleClick = (tab) => {
    setActive(tab);
  };

  return (
    <div className="pb-[30px] xs:pb-[60px] flex flex-col items-center">
      <h1 className="text-[26px] text-center text-dark-blue mb-4">
        <span className="text-blue-color font-bold">Social Venues </span>
        for all your needs
      </h1>

      <div className="lg:min-w-[980px] mx-2 min-w-[80%] lg:h-[48px] flex-wrap rounded-lg flex items-center justify-center lg:justify-between gap-6 xs:p-4 p-3 bg-white">
        {tabs.map((tab) => (
          <h5
            key={tab}
            onClick={() => handleClick(tab)}
            className={`text-sm cursor-pointer ${
              active === tab ? "font-bold text-dark-blue" : "text-grey-color "
            }`}
          >
            {tab}
          </h5>
        ))}
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-[10px] sm:px-5 lg:px-[50px] mt-[35px]  gap-x-3 lg:gap-y-0 gap-y-5">
        {venueCardsData.map((item) => (
          <VenuesCard
            key={item.title}
            title={item.title}
            image={item.image}
            location={item.location}
            area={item.area}
            rating={item.rating}
            persons={item.persons}
            isFeatured={item.isFeatured}
          />
        ))}
      </div>

      <Button btnClass="outline-btn mt-[30px] flex items-center gap-2 py-2 pl-3 pr-[10px] justify-between border-[#AAB3C1] rounded-[10px] hover:bg-dark-blue duration-300 group">
        <span className="text-dark-blue group-hover:text-white duration-300 font-medium text-sm">Show More</span>
        <MdKeyboardArrowRight className="text-dark-blue text-2xl group-hover:text-white duration-300" />
      </Button>
    </div>
  );
};

export default SocialVenues;
