import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ImageGallery from "../../Common/Image Gallery/ImageGallery";
import {
  imageGalleryData,
  imageGalleryData2,
} from "../../Constants/ImageGalleryData";
import { AreaIcon, LocationIcon } from "../../Common/Venues Card/Icons";
import DetailCard from "./components/DetailCard/DetailCard";
import Button from "../../Common/Button/Button";
import {
  CalenderIcon,
  ShareIcon,
  FavoriteIcon,
  ScreenIcon,
  ParkingIcon,
  AirIcon,
  ProjectIcon,
  BanquetsIcon,
  PartyIcon,
  AuditoriumsIcon,
} from "./Icons";
import { FaWifi } from "react-icons/fa6";
import RatingStats from "./components/Rating & Reviews/RatingStats";
import Reviews from "./components/Rating & Reviews/Reviews";
import EnquiryCard from "./components/Enquiry Card/EnquiryCard";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { server } from "../../Constants/server";

const VenueDetail = () => {
  const path = useLocation().pathname;
  console.log("Path", path);
  const params = useParams();

  const [isExpanded, setIsExpanded] = useState(false);
  const { data } = useSWR(`${server}/venue/${params.id}`, fetcher);

  console.log("Data", data);

  return (
    <div className="w-full px-[10px] gap-4 xs:px-5 sm:px-[50px] flex flex-wrap pt-20 lg:flex-nowrap">
      <div className="w-full lg:w-[1000px]">
        <ImageGallery
          images={
            data?.data?.venueFloorPlanDesign
          }
        />

        <div className="flex justify-between items-start mt-[26px] flex-wrap gap-4 lg:w-[1000px]">
          <div>
            <h1 className="text-dark-blue mb-[10px] sm:text-[26px] text-[22px] md:text-[36px] font-bold">
              {data?.data?.venueName}
            </h1>

            <div className="flex items-center flex-wrap gap-[10px] mb-[30px]">
              <div className="flex items-center gap-[10px]">
                <LocationIcon width={18} height={18} />
                <p className="text-[#74839C]">{data?.data?.venueAddress}</p>
              </div>
              <h5 className="text-[#005FEA] font-medium text-sm underline">
                Get Directions
              </h5>
            </div>

            <DetailCard
              area={data?.data?.venueDimension}
              persons={data?.data?.venueMaxPersonCapacity}
            />
          </div>

          <div>
            <Button btnClass="bg-white border-[0.5px] border-[#005FEA] py-[7px] px-[65px] rounded-[6px] flex items-center gap-2 justify-center">
              <AreaIcon width={18} height={18} color={"#005FEA"} />
              <span className="text-[#005FEA] text-xs font-medium">
                View Floor Plan
              </span>
            </Button>

            <div className="flex items-center gap-[10px] mt-3">
              <Button btnClass="bg-white border-[0.5px] border-[#005FEA] py-[7px] px-[32px] rounded-[6px] flex items-center gap-2 justify-center">
                <CalenderIcon />
                <span className="text-[#005FEA] text-xs font-medium">
                  Check Dates
                </span>
              </Button>
              <Button btnClass="bg-white border-[0.5px] border-[#AAB3C1] p-2  rounded-[6px] flex items-center gap-2 justify-center">
                <ShareIcon />
              </Button>
              <Button btnClass="bg-white border-[0.5px] border-[#AAB3C1] p-2  rounded-[6px] flex items-center gap-2 justify-center">
                <FavoriteIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          <h2 className="text-dark-blue font-medium text-[22px]">
            Description
          </h2>

          <p className="text-lg text-[#74839C] mt-3">
            {isExpanded
              ? data?.data?.venueDescription
              : data?.data?.venueDescription.substring(0, 250)}
            {data?.data?.venueDescription.length > 250 && (
              <span className="text-[#005FEA] underline text-lg">See more</span>
            )}
          </p>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-dark-blue font-medium text-xl mb-3">Amenities</h2>
          <div className="flex items-center flex-wrap gap-[14px]">
            {data?.data?.venueRequiredFacility?.map((item, index) => (
              <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
                {item === "wifi" && <FaWifi className="text-[#74839C]" />}
                {item === "free parking" && <ParkingIcon />}
                <h6 className="text-[#74839C] text-xs font-poppins font-normal capitalize">
                  {item}
                </h6>
              </div>
            ))}
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <ScreenIcon />
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Projector Screen
              </h6>
            </div>
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <ParkingIcon />
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Parking
              </h6>
            </div>
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <AirIcon />
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Air Conditioned
              </h6>
            </div>
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <ProjectIcon />
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Projector
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          <h2 className="text-dark-blue font-medium text-xl mb-3">
            Venue Type
          </h2>
          <div className="flex items-center flex-wrap gap-[14px]">
            {data?.data?.venueType?.map((item, index) => (
              <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
                {item === "Part Hall" && <PartyIcon />}

                <h6 className="text-[#74839C] text-xs font-poppins font-normal capitalize">
                  {item}
                </h6>
              </div>
            ))}
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <PartyIcon />
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Party Hall
              </h6>
            </div>
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <AuditoriumsIcon />
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Auditoriums
              </h6>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          <h2 className="text-dark-blue font-medium text-xl mb-3">
            Event Type
          </h2>
          <div className="flex flex-wrap items-center gap-[14px]">
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Wedding
              </h6>
            </div>
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Reception
              </h6>
            </div>
            <div className="flex items-center justify-center gap-[6px] bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] p-3 ">
              <h6 className="text-[#74839C] text-xs font-poppins font-normal">
                Other Ceremony
              </h6>
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-start mt-[30px] flex-wrap lg:flex-nowrap">
          <RatingStats />
          <Reviews />
        </div>
      </div>

      <EnquiryCard />
    </div>
  );
};

export default VenueDetail;
