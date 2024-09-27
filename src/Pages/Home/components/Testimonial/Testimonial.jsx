import React from "react";
import Button from "../../../../Common/Button/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className=" flex justify-center min-h-[65vh]">
      <div className="lg:w-[1160px] w-[90%] flex gap-[200px] lg:gap-[100px] flex-wrap lg:flex-nowrap items-center">
        {/* Left (Slider) */}
        <div className="self-start w-full">
          <div className="md:w-[568px] w-full h-[247px] relative bg-dark-blue xs:rounded-[20px] rounded-[12px]">
            <Slider/>
          </div>
        </div>

        {/* Right */}
        <div>
          <h1 className="text-dark-blue text-[26px] lg:text-[36px] lg:w-[320px]">
            What{" "}
            <span className="text-[26px] lg:text-[36px] font-bold text-[#005FEA]">
              Our Users
            </span>{" "}
            say about us
          </h1>
          <p className="mt-4 text-dark-blue text-xl lg:w-auto sm:w-1/2">
            User testimonies by ZoomVenues users have been compiled here, in
            order to best illustrate the quality of our services
          </p>
          <Button btnClass="mt-10 py-2 px-[10px] flex items-center justify-between">
            <span className="text-sm font-medium">View more</span>
            <MdKeyboardArrowRight className="text-white text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
