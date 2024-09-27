import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import AsideNav from "./components/Aside Nav/AsideNav";
import MainItems from "./components/MainItems/MainItems";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import useSWR from "swr";
import { server } from "../../Constants/server";
import { fetcher } from "../../utils/fetcher";
const Venues = () => {
  const [queries, setQueries] = useState({
    venueName: "",
    venueAddress: "",
    venueCountry: "",
    venueMinPersonCapacity: "",
    venueMaxPersonCapacity: "",
    venueRequiredFacility: "",
  });

  const fetchBaseQueries = () => {
    let baseUrl = `${server}/venue/list?page=1&limit=10`;

    if (queries.venueName) {
      baseUrl = baseUrl + `&venueName=${queries.venueName}`;
    }
    if (queries.venueAddress) {
      baseUrl = baseUrl + `&venueAddress=${queries.venueAddress}`;
    }
    if (queries.venueCountry) {
      baseUrl = baseUrl + `&venueCountry=${queries.venueCountry}`;
    }
    if (queries.venueMinPersonCapacity) {
      baseUrl =
        baseUrl + `&venueMinPersonCapacity=${queries.venueMinPersonCapacity}`;
    }
    if (queries.venueMaxPersonCapacity) {
      baseUrl =
        baseUrl + `&venueMaxPersonCapacity=${queries.venueMaxPersonCapacity}`;
    }
    if (queries.venueRequiredFacility) {
      baseUrl =
        baseUrl + `&venueRequiredFacility=${queries.venueRequiredFacility}`;
    }

    return baseUrl;
  };

  const { data, error } = useSWR(fetchBaseQueries, fetcher);

  console.log("data", data);
  return (
    <div className=" px-[10px] xs:px-5 sm:px-[50px] min-h-screen py-[25px] flex justify-between gap-5 lg:flex-row flex-col relative">
      <div className="mb-4 lg:mb-0 flex lg:block justify-between items-center">
        {/* <BreadCrumb/> */}
        <div className="flex items-center mt-8 gap-1">
          <AsideNav queries={queries} setQueries={setQueries} />
        </div>
      </div>

      <div className="w-full xl:w-[75%]">
        <MainItems  venues={data?.data?.venues}/>
      </div>
    </div>
  );
};

export default Venues;
