import React from "react";
import ReviewCard from "../../../../Common/Review Card/ReviewCard";
import { reviewData } from "../../../../Constants/ReviewsData";
import Button from "../../../../Common/Button/Button";

const Reviews = () => {
  return (
    <div className="w-full md:w-auto">
      <div className="border-l  border-l-[#AAB3C1] pl-5 ">
        <div className="flex items-center justify-between md:w-[610px]">
          <h2 className="text-black font-medium">Reviews</h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-[2px] ">
              <SortIcon />
              <h6 className="text-dark-blue text-sm">Sort by</h6>
            </div>
            <div className="flex items-center gap-[10px] ">
              <h6 className="text-[#005FEA] font-bold text-sm">Newest</h6>
              <DownArrowIcon />
            </div>
          </div>
        </div>

        <div className="mt-[21px]">
          {reviewData.map((i, index) => (
            <ReviewCard
              key={i.name}
              isLast={index === reviewData.length - 1}
              name={i.name}
              avatar={i.avatar}
              review={i.review}
              rating={i.rating}
            />
          ))}
        </div>
      </div>
      <div className="text-center">
        <Button
          btnClass="bg-white text-dark-blue hover:bg-dark-blue hover:text-white py-2 duration-300 px-[10px] text-sm"
          title="Show more"
        />
      </div>
    </div>
  );
};

const SortIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6H21M12 12H18M12 18H15M3 15.625L4.50518 17.3183C5.30076 18.2134 6.69924 18.2134 7.49482 17.3183L9 15.625M6 18V6"
      stroke="#28303F"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

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
      stroke="#005FEA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Reviews;
