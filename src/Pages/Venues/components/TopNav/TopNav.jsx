import React from "react";
import Button from "../../../../Common/Button/Button";
import { FiSearch } from "react-icons/fi";
const TopNav = () => {
  return (
    <div className="flex justify-between w-full lg:h-[74px] rounded-[10px] bg-white mb-[20px]">
      <div className="w-full gap-4 flex-wrap md:flex-nowrap lg:h-[74px] bg-white rounded-[10px] p-2 xs:p-4 flex xs:items-center justify-between items-start">
        <div className="lg:w-[255px] w-[140px] sm:w-auto text-start">
          <h2 className="text-grey-color text-sm mb-[6px]">Location</h2>
          <h6 className=" text-dark-blue font-bold ">
            All Manhattan, Upper Manhattan
          </h6>
        </div>
        <div className="lg:w-[151px] text-start px-2 md:pl-[14px] border-l border-l-[#E6E6E6]">
          <h2 className="text-sm text-grey-color mb-[6px]">Event Type</h2>
          <div className="flex gap-2 items-center hover:cursor-pointer justify-between">
            <h6 className="text-dark-blue font-bold">Wedding</h6>
            <DownArrowIcon />
          </div>
        </div>
        <div className="lg:w-[153px] text-start px-2 md:pl-[14px] border-l border-l-[#E6E6E6]">
          <h2 className="text-sm text-grey-color mb-[6px]">Venue Category</h2>
          <div className="flex items-center hover:cursor-pointer justify-between">
            <h6 className="text-dark-blue font-bold">Corporate</h6>
            <DownArrowIcon />
          </div>
        </div>
        <div className="lg:w-[112px] text-start px-2 md:pl-[14px] border-l border-l-[#E6E6E6]">
          <h2 className="text-sm text-grey-color mb-[6px]">Event Date</h2>

          <h6 className="text-dark-blue font-bold">07/11/2024</h6>
        </div>
        <div className="lg:w-[80px] text-start pl-2 xs:pl-[14px] border-l border-l-[#E6E6E6]">
          <h2 className="text-sm text-grey-color  mb-[6px]">Guests</h2>
          <h6 className="text-dark-blue font-bold">180</h6>
        </div>
        <div className=" text-start pl-0 xs:pl-4 border-l-none xs:border-l border-l-[#E6E6E6]">
          <Button btnClass="text-2xl hover:bg-transparent hover:text-[#0259FF] hover:border-[#0259FF] duration-300 border w-[42px] h-[42px] rounded-[10px] flex items-center justify-center p-[10px]">
            <FiSearch />
          </Button>
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
      stroke="#001942"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TopNav;
