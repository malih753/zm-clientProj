import React from "react";
import Button from "../../../../Common/Button/Button";

const Hero = () => {
  return (
    <div className="px-[10px] xs:px-[20px] sm:px-[50px] pb-5 relative">
      <img
        src="/hero.jfif"
        alt="hero-image"
        className="rounded-[10px] xs:rounded-[15px] sm:rounded-[30px] h-[450px] z-10 relative sm:h-[626px] w-full object-cover"
      />

      {/* Content */}
      <div className="absolute z-20 top-[50%]  w-full xl:w-[70%] px-2 xs:px-5 left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h1 className="text-center text-white text-[24px] xs:text-[30px] sm:text-[40px] md:text-[57px] font-bold leading-[30px] xs:leading-[40px] lg:w-[90%] md:leading-[67px] w-full">
          Discover Stunning Venues for Every Occasion
        </h1>
        <div className="flex justify-center ">
        <div className="bg-blur-gradient py-2 px-2 sm:px-[38px] backdrop-blur-sm rounded-[10px] mt-[10px] mx-1 w-full xs:w-[80%]">
          <p className=" text-white text-sm sm:text-base md:text-lg lg:text-xl lg:whitespace-nowrap">
            Explore thousands of venues for weddings, conferences, parties, and
            more.
          </p>
        </div>
        </div>
        <div className=" xl:w-[900px] w-[90%] mx-auto">
        <div className="mt-[60px] gap-4 flex-wrap sm:flex-nowrap sm:h-[74px] bg-white rounded-[10px] p-2 xs:p-4 w-full flex xs:items-center justify-between items-start">
          <div className="lg:w-[295px] w-[140px] sm:w-auto text-start">
            <h2 className="text-dark-blue font-bold mb-[6px]">Location</h2>
            <h6 className="text-sm text-grey-color">
              All Manhattan, Upper Manhattan
            </h6>
          </div>
          <div className="lg:w-[206px] text-start px-2 md:px-4 border-l border-l-[#E6E6E6]">
            <h2 className="text-dark-blue font-bold mb-[6px]">Event Type</h2>
            <div className="flex items-center hover:cursor-pointer justify-between">
              <h6 className="text-sm text-grey-color">Wedding</h6>
              <DownArrowIcon />
            </div>
          </div>
          <div className="lg:w-[142px] text-start pl-2 xs:pl-4 border-l border-l-[#E6E6E6]">
            <h2 className="text-dark-blue font-bold mb-[6px]">Guests</h2>
            <h6 className="text-sm text-grey-color">180</h6>
          </div>
          <div className=" text-start pl-0 xs:pl-4 border-none xs:border-l border-l-[#E6E6E6]">
            <Button title="Browse 1,245 Listings" btnClass="text-sm hover:bg-transparent hover:text-[#0259FF] hover:border-[#0259FF] duration-300 border"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

const DownArrowIcon = () => (
  <svg
    width={13}
    height={7}
    viewBox="0 0 13 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.61705 0.883704L6.49868 5.99933L11.6143 1.1177"
      stroke="#7D899F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Hero;
