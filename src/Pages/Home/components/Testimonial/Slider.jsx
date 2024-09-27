import React, { useRef } from "react";
import SlideCard from "./SlideCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Slider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative top-[59px] left-[20px] sm:left-[38px]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
        breakpoints={{

          640: {
            slidesPerView: 2,
          },

        }}
      >
        {/* Add multiple SwiperSlide components as needed */}
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <SlideCard />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="absolute z-[99999] -bottom-1 flex right-5 sm:right-0  items-center ">
        <MdKeyboardArrowLeft
          onClick={() => swiperRef.current.slidePrev()}
          className="text-2xl hover:cursor-pointer"
        />
        <MdKeyboardArrowRight
          onClick={() => swiperRef.current.slideNext()}
          className="text-2xl hover:cursor-pointer "
        />
      </div>
    </div>
  );
};

export default Slider;
