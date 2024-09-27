import { facilitiesData } from "../../../../../Constants/FacilitiesData";

const Facilities = ({ queries, setQueries }) => {
  const handleFacilities = (e) => {
    setQueries({
      ...queries,
      venueRequiredFacility: [...queries.venueRequiredFacility, e.target.value],
    });
  };

  console.log("queries", queries);
  return (
    <div className="mt-3">
      <h1 className="text-dark-blue font-medium">Facilities</h1>

      <div className="grid grid-cols-2 gap-y-[10px] gap-x-3 mt-[10px] border-b border-b-[#D8E0F0] pb-3">
        {facilitiesData.map((item) => {
          return (
            <div key={item} className="flex items-center gap-2 select-none">
              <input
                type="checkbox"
                id={item.toLocaleLowerCase()}
                value={item}
                className=" cursor-pointer accent-[#005FEA]"
                onChange={handleFacilities}
              />
              <label
                htmlFor={item.toLocaleLowerCase()}
                className="text-[#7D899F] text-xs font-medium select-none cursor-pointer"
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
