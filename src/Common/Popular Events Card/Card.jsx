import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card = ({ classes = "", title, image, titleClasses = "" ,contentClasses = ""}) => {
  return (
    <div
      className={`relative before:w-full before:h-full before:bg-event-card-gradient w-full  sm:w-[181px] h-[198px] before:absolute before:block overflow-hidden rounded-[10px] ${classes}`}
    >
      <img src={image} alt="event" className=" w-full h-full object-cover" />
      <div className={`mt-3 flex absolute bottom-4 left-0 px-4 items-center justify-between text-white w-full ${contentClasses}`}>
        <h5 className={`text-sm font-medium ${titleClasses}`}>{title}</h5>
        <MdKeyboardArrowRight className="text-2xl" />
      </div>
    </div>
  );
};

export default Card;
