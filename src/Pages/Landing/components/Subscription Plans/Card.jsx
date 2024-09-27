import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../../../Common/Button/Button";

const Card = ({ isPrime = false }) => {
  return (
    <div className="w-[433px]  border-[0.5px] border-[#AAB3C1] rounded-[20px] bg-[#F9FBFF] p-5 sm:p-9">
      <div className="pb-6 border-b border-b-[#B1CCF8]">
        <h2 className="text-[#005FEA] font-bold text-2xl mb-[17px]">
          {isPrime ? "ZV Prime" : "Starter Free Plan"}
        </h2>
        <p className="text-black text-sm">
          {isPrime
            ? "Unlock Premium Benefits and Maximize Your Visibility"
            : "Get Started with Essential Features at No Cost"}
        </p>
      </div>

      <div className="mt-[30px] mb-6">
        <h3 className="text-dark-blue font-medium ">BENEFITS</h3>
        <div className="space-y-4 mt-5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-dark-blue">
              <TickIcon />
            </div>
            <h6 className="font-medium text-dark-blue">
              Property Listing & Login
            </h6>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-dark-blue">
              <TickIcon />
            </div>
            <h6 className="font-medium text-dark-blue">
              One-time setup support
            </h6>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-dark-blue">
              <TickIcon />
            </div>
            <h6 className="font-medium text-dark-blue">Listing Venues</h6>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-dark-blue">
              <TickIcon />
            </div>
            <h6 className="font-medium text-dark-blue">
              Assign Venue Managers
            </h6>
          </div>
          <div className="flex items-center gap-2.5">
            <div
              className={`flex items-center justify-center w-4 h-4 rounded-full border ${
                isPrime ? "border-dark-blue" : "border-[#AAB3C1]"
              }`}
            >
              {isPrime ? <TickIcon /> : <CrossIcon />}
            </div>
            <h6
              className={`font-medium ${
                isPrime ? "text-dark-blue" : "text-[#AAB3C1] line-through"
              }`}
            >
              Promoted (1 Month)
            </h6>
          </div>
          <div className="flex items-center gap-2.5">
            <div
              className={`flex items-center justify-center w-4 h-4 rounded-full border ${
                isPrime ? "border-dark-blue" : "border-[#AAB3C1]"
              }`}
            >
              {isPrime ? <TickIcon /> : <CrossIcon />}
            </div>
            <h6
              className={`font-medium  ${
                isPrime ? "text-dark-blue" : "text-[#AAB3C1] line-through"
              }`}
            >
              Featured (1 Month)
            </h6>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-4 h-4 rounded-full border border-dark-blue">
              <TickIcon />
            </div>
            <h6 className="font-medium text-dark-blue">ZV Campaigns</h6>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-[#005FEA] cursor-pointer">
        <h4 className="text-sm font-medium">Show all</h4>
        <IoIosArrowDown />
      </div>

      <Button
        title="Get Started"
        btnClass={`w-full mt-7 py-[15px] duration-300 border ${
          isPrime
            ? "bg-[#005FEA] text-white hover:bg-transparent hover:text-[#005FEA] border-[#005FEA]"
            : "border-[#005FEA] text-[#005FEA] bg-transparent hover:bg-[#005FEA] hover:text-white"
        }`}
      />
    </div>
  );
};

const TickIcon = () => (
  <svg
    width={9}
    height={9}
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_762_312)">
      <path
        d="M1.57324 4.59251L3.38806 6.40732L7.01769 2.51843"
        stroke="#001942"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_762_312">
        <rect
          width="8.2963"
          height="8.2963"
          fill="white"
          transform="translate(0.147461 0.055481)"
        />
      </clipPath>
    </defs>
  </svg>
);

const CrossIcon = () => (
  <svg
    width={6}
    height={7}
    viewBox="0 0 6 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.7L5.2 1.5M1 1.5L5.2 5.7"
      stroke="#AAB3C1"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default Card;
