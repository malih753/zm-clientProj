import React from "react";
import RangeSlider from "../../../../../Common/Range Slider/RangeSlider";

const PrefferedArea = ({queries, setQueries}) => {
  return (
    <div className="mt-4 border-b border-b-[#D8E0F0] pb-3">

      <RangeSlider queries={queries} setQueries={setQueries}/>
    </div>
  );
};

export default PrefferedArea;
