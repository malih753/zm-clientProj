import React from "react";
import VenuesCard from "../../../../Common/Venues Card/VenuesCard";
import { venueCardsData } from "../../../../Constants/VenueCardsData";

const SavedVenues = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {venueCardsData.slice(0, 3).map((item, i) => (
        <VenuesCard
          key={item.title}
          title={item.title}
          image={item.image}
          location={item.location}
          area={item.area}
          rating={item.rating}
          persons={item.persons}
        />
      ))}
    </div>
  );
};

export default SavedVenues;
