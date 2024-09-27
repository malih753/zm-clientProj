import React from "react";
import Button from "../../../../Common/Button/Button";

const Card = ({ title, value, description }) => {
  return (
    <div
      className={`min-h-[384px] rounded-[30px] px-6 py-[30px] ${
        title === "Promote + Feature + Landing Page Ads"
          ? "bg-boost-card-gradient"
          : "bg-white"
      }`}
    >
      <h2 className="text-dark-blue font-medium text-xl">{title}</h2>

      <h1 className="mt-4 text-[#005FEA] font-bold text-2xl sm:text-[36px]">
        100 AED <span className="text-[#64738E] text-base">per month</span>
      </h1>
      <p className="mt-6 text-[#64738E]">
        Promote your venue on our login page to stand out from the crowd. Reach
        a wider audience of potential customers.
      </p>
      <Button
        title="Join Now"
        btnClass={`w-full py-[15px] mt-12 duration-300 ${
          title === "Promote + Feature + Landing Page Ads"
            ? "hover:bg-transparent border border-[#005FEA] hover:text-[#005FEA] text-white "
            : "text-[#005FEA] border border-[#005FEA]  bg-transparent hover:bg-[#005FEA] hover:text-white"
        }`}
      />
      <h6 className="text-[#74839C] font-medium text-sm text-center mt-2.5">
        Min 3 Months
      </h6>
    </div>
  );
};

export default Card;
