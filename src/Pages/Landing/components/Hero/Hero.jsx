import React from "react";
import Button from "../../../../Common/Button/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
const Hero = () => {
  return (
    <div className="min-h-screen flex justify-between items-center px-[10px]  flex-wrap gap-10 sm:px-[83px] ">
      <div>
        <h6 className="text-[#0068FF] font-medium mb-2.5">
          Start Listing today for free!
        </h6>
        <h1 className="text-[30px] sm:text-[40px]  md:text-[56px] font-semibold text-dark-blue  md:w-[597px]">
          Expand Your Reach with{" "}
          <span className="text-[#005FEA] font-semibold">Zoom Venues</span>
        </h1>
        <p className="twext-sm sm:text-lg text-[#778F9D] mt-[14px] sm:w-[500px]">
          Whether you offer a stunning event space, catering, decor, or
          entertainment services, we provide the tools and exposure you need to
          grow your business.
        </p>
        <div className="mt-6 sm:mt-10 flex items-center gap-4 xs:gap-6">
          <Button btnClass="flex items-center gap-1 rounded-full py-3 xs:py-[18px] px-5 text-xs xs:text-base xs:px-[36px] hover:bg-transparent hover:text-[#005FEA] duration-300 hover:border hover:border-[#005FEA]">
            <span className="font-poppins">Get Started</span>
            <MdKeyboardArrowRight className="text-2xl" />
          </Button>
          <h4 className="text-[#002052] text-sm font-medium font-poppins underline">
            Discover Benefits
          </h4>
        </div>
      </div>
      <div className="w-[500px]">
        <img src="/landing-img.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
