import React from "react";
import { FaStar } from "react-icons/fa6";

const ratings = [
  {
    rating: 5,
    value: 46,
  },
  {
    rating: 4,
    value: 26,
  },
  {
    rating: 3,
    value: 76,
  },
  {
    rating: 2,
    value: 10,
  },
  {
    rating: 1,
    value: 16,
  },
];
const RatingStats = () => {
  return (
    <div className="w-full md:w-[300px]">
      <h1 className="text-dark-blue font-medium text-xl">Ratings & Reviews</h1>

      <div className="flex items-center justify-between mt-3 ">
        <div>
          <h2 className="text-dark-blue mb-[10px]">Total Reviews</h2>

          <h1 className="text-[#005FEA] font-bold text-[30px]">10.0k</h1>
        </div>
        <span className="bg-[#AAB3C1] w-[1px] block h-[42px]"></span>
        <div>
          <h2 className="text-dark-blue mb-[10px]">Average Ratings</h2>

          <div className="flex items-center justify-between gap-[14px]">
            <h1 className="text-[#005FEA] font-bold text-[30px]">4.0</h1>
            <div className="flex items-center gap-1">
              <FaStar className="text-[#005FEA]" />
              <FaStar className="text-[#005FEA]" />
              <FaStar className="text-[#005FEA]" />
              <FaStar className="text-[#C8DEFE]" />
              <FaStar className="text-[#C8DEFE]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[36px]  space-y-3">
        {ratings.map((i) => (
          <div key={i.rating} className="flex items-center">
            {/* Star Icon (can be replaced with a star SVG or an icon from a library) */}
            <div className="flex items-center gap-2">
              <FaStar className="text-[#005FEA]" />
              <h6 className="text-dark-blue">{i.rating}</h6>
            </div>
            {/* Progress Bar Container */}
            <div className="ml-[14px] relative w-[244px] h-2 bg-white rounded-full overflow-hidden">
              {/* Progress Bar Fill */}
              <div
                className="absolute top-0 left-0 h-full rounded-[4px] bg-blue-600"
                style={{ width: i.value + "%" }}
              />
            </div>
            {/* Progress Percentage */}
            <div className="text-black font-medium text-xs ml-3">{i.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingStats;
