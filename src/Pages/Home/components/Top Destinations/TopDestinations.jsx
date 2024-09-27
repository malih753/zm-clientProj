import Card from "../../../../Common/Popular Events Card/Card";
import { topDestinationsCardData } from "../../../../Constants/TopDestinationsCardData";

const TopDestinations = () => {
  return (
    <div className="pt-[60px] px-[10px] pb-5 sm:px-[50px]">
      <div className="text-center mb-[35px]">
        <h1 className="text-[26px] xs:text-[36px] font-bold text-center text-[#0259FF] mb-4">
          Top Destinations
        </h1>
        <p className="text-dark-blue text-lg
         xs:text-xl">
          Stay Updated with the Latest Events and Venue Insights
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-[26px] w-full flex-wrap">
        {topDestinationsCardData.map((dest) => (
          <Card
            key={dest.title}
            title={dest.title}
            classes="h-[300px] bg-destinations-gradient w-[202px]"
            image={dest.image}
            titleClasses="text-lg"
            contentClasses="bottom-[14px] px-[14px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
