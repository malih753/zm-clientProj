import React from "react";
import Button from "../../../../Common/Button/Button";

const LatestNews = () => {
  return (
    <div className="pt-[60px] px-[10px]">
      <div className="text-center mb-[35px]">
        <h1 className="text-[26px] xs:text-[36px] font-bold text-center text-[#0259FF] mb-4">
          Our Latest News
        </h1>
        <p className="text-dark-blue text-xl">
          Stay Updated with the Latest Events and Venue Insights
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-center flex-wrap  gap-[25px]">
        <div className="border-[#AAB3C1] md:w-[370px]  md:min-h-[322px] border-[0.5px] rounded-[16px] relative bg-[#F9FBFF]">
          <img
            src={"/news-1.jfif"}
            alt=""
            className="w-full md:h-[208px] object-cover rounded-[14px]"
          />

          {/* Content */}
          <div className="xs:px-5 px-3 pt-4 pb-5 ">
            <div className="">
              <h1 className="font-bold text-dark-blue text-lg">
                Unparalleled caliber and scale all in one room
              </h1>

              <p className="text-sm mt-4 mb-6">
                {" HITEC Dubai, taking place at The Hotel Show Dubai, offers an intensive education programme planned by an Advisory Council comprised of world-renowned hospitality technologists from some of the region’s best hotels and resorts. The HITEC Dubai".substring(
                  0,
                  300
                ) + "..."}
              </p>
            </div>

            <Button
              title="Read More"
              btnClass="outline-btn text-xs font-medium hover:bg-dark-blue hover:text-white duration-300 p-2"
            />
          </div>
        </div>
        <div className="border-[#AAB3C1] md:w-[370px]  md:min-h-[322px] border-[0.5px] rounded-[16px] relative bg-[#F9FBFF]">
          <img
            src={"/news-2.jfif"}
            alt=""
            className="w-full md:h-[208px] object-cover rounded-[14px]"
          />

          {/* Content */}
          <div className="xs:px-5 px-3 pt-4 pb-5 ">
            <div className="">
              <h1 className="font-bold text-dark-blue text-lg">
                Dubai: All expats working for govt must enrol in savings scheme
                from July 1
              </h1>

              <p className="text-sm mt-4 mb-6">
                {" Barring a few categories, all expat employees working in the Dubai government will have to be enrolled into the saving scheme  DEWS by their employers, said a senior official. The scheme was conceptualized after the Dubai".substring(
                  0,
                  300
                ) + "..."}
              </p>
            </div>

            <Button
              title="Read More"
              btnClass="outline-btn text-xs font-medium p-2 hover:bg-dark-blue hover:text-white duration-300"
            />
          </div>
        </div>
        <div className="border-[#AAB3C1] md:w-[370px]  md:min-h-[322px] border-[0.5px] rounded-[16px] relative bg-[#F9FBFF] shadow-news-card-shadow">
          <img
            src={"/news-3.jfif"}
            alt=""
            className="w-full md:h-[208px] object-cover rounded-[14px]"
          />

          {/* Content */}
          <div className="xs:px-5 px-3 pt-4 pb-5 ">
            <div className="">
              <h1 className="font-bold text-dark-blue text-lg">
                Unparalleled caliber and scale all in one room
              </h1>

              <p className="text-sm mt-4 mb-6">
                {"About 40 per cent of all jobs are expected to become obsolete in the next 10 years, a study commissioned by the UAE’s Ministry of Human Resources and Emiratisation has found. These jobs would become automated or replaced by".substring(
                  0,
                  300
                ) + "..."}
              </p>
            </div>

            <Button
              title="Read More"
              btnClass="outline-btn bg-dark-blue hover:bg-transparent hover:text-dark-blue duration-300 text-white text-xs font-medium p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
