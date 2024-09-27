import React from "react";
import { FaStar } from "react-icons/fa6";
import { AreaIcon, LocationIcon, UserIcon } from "./Icons";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { server } from "../../Constants/server";
const VenuesCard = ({
  title,
  image,
  location,
  area,
  rating,
  persons,
  isFeatured,
  btnStyles = "",
  cardStyles = "",
  price = 0,
  id,
}) => {
  return (
    <div
      className={`border-[#AAB3C1] w-full min-h-full sm:min-h-[342px] border-[0.5px] rounded-[12px] sm:rounded-[16px] relative ${cardStyles}`}
    >
      <img
        src={`${server}${image}`}
        alt=""
        className="w-full sm:h-[183px] object-cover rounded-[12px] sm:rounded-[16px]"
      />

      {isFeatured && (
        <span className="btn absolute top-[14px] left-[14px] py-[5px] px-[9px] text-xs">
          Featured
        </span>
      )}

      {/* Content */}
      <div className="py-[13px] px-[10px]">
        <div className="flex items-center justify-between">
          <NavLink
            to={`/${price ? "services" : "venues"}/${id}`}
            className="font-bold text-dark-blue w-[237px] truncate"
          >
            {title}
          </NavLink>

          <div className="text-dark-blue flex items-center gap-2">
            <FaStar className="text-base" />
            <h4 className=" font-medium">{rating}</h4>
          </div>
        </div>
        <div className="flex items-start gap-2 mt-[13px]">
          <LocationIcon />
          <h4 className="text-[#74839C] text-xs font-medium">{location}</h4>
        </div>
        {area && (
          <div className="flex items-start gap-2 mt-[9px]">
            <AreaIcon />
            <h4 className="text-[#74839C] text-xs font-medium">
              {area} Area (sqm)
            </h4>
          </div>
        )}
        {persons && (
          <div className="flex items-start gap-2 mt-[14px]">
            <UserIcon />
            <h4 className="text-[#74839C] text-xs font-medium">
              {persons} person capacity
            </h4>
          </div>
        )}
        {price && (
          <div className="flex items-start gap-2 mt-[14px]">
            <h4 className="text-dark-blue text-xs font-medium">
              Price{" "}
              <span className="font-normal text-[#74839C]">
                Starts from AED {price.toFixed(2)}
              </span>
            </h4>
          </div>
        )}
        <Button
          title="Enquire Now"
          btnClass={`outline-btn hover:bg-dark-blue hover:text-white duration-300 text-xs absolute bottom-[10px] right-[10px] ${btnStyles}`}
        />
      </div>
    </div>
  );
};

export default VenuesCard;
