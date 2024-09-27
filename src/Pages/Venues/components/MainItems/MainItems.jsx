import React from "react";
import VenuesCard from "../../../../Common/Venues Card/VenuesCard";
import { mainItemsData } from "../../../../Constants/MainItemsData";
import TopNav from "../TopNav/TopNav";
import { useLocation } from "react-router-dom";
import { servicesVenuesData } from "../../../../Constants/ServicesVenuesData";
// import SimpleMap from "../../../Map/Map";
import MyMap from "../../../Map/Map";
import { useAuth } from "../../../../Context/AuthContext";

const MainItems = ({ venues }) => {
  const path = useLocation().pathname;
  const { isMapOpen } = useAuth();
  console.log("venues", venues);

  console.log("ismapopen", isMapOpen);
  return (
    <>
      {path === "/venues" && <TopNav />}
      <div className="flex gap-5">
        <div
          className={`grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-2  gap-5 ${
            isMapOpen && path === "/venues" ? "xl:grid-cols-2" : "xl:grid-cols-3"
          }`}
        >
          {path === "/venues"
            ? venues?.map((item, index) => {
                return (
                  <VenuesCard
                    key={item.id}
                    title={item.venueName}
                    image={item.venueSnapShot[0]}
                    location={item.venueAddress}
                    area={item.area}
                    rating={item.rating}
                    persons={item.venueMinPersonCapacity}
                    btnStyles={
                      item.title === "WO-RK by The Co-Spaces" &&
                      "bg-dark-blue text-white hover:bg-white hover:!text-dark-blue"
                    }
                    cardStyles={
                      item.title === "WO-RK by The Co-Spaces" &&
                      "shadow-venue-card-shadow"
                    }
                    id={item.id}
                  />
                );
              })
            : servicesVenuesData.map((item, index) => {
                return (
                  <VenuesCard
                    key={item.title}
                    title={item.title}
                    image={item.image}
                    location={item.location}
                    rating={item.rating}
                    price={item.price}
                    btnStyles={
                      item.title === "Lilac Morning" &&
                      "bg-dark-blue text-white hover:bg-white hover:!text-dark-blue"
                    }
                    cardStyles={`${
                      item.title === "Lilac Morning" &&
                      "shadow-venue-card-shadow"
                    } sm:min-h-[310px]`}
                  />
                );
              })}
        </div>

        {isMapOpen && path === "/venues" && <MyMap data={venues} />}
      </div>
    </>
  );
};

export default MainItems;
