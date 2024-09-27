import React, { lazy, useState } from "react";
import TabButtons from "./components/Tab Buttons/TabButtons";
const MyProfile = lazy(() => import("./components/My Profile/MyProfile"));
const SavedVenues = lazy(() => import("./components/Saved Venues/SavedVenues"));
const Enquiries = lazy(() => import("./components/Enquiries/Enquiries"));

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

 
  return (
    <div className="flex flex-col items-center gap-[33px] px-[10px] xs:px-5">
      <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="sm:min-w-[600px] w-[95%]  lg:w-[1049px] mb-4 sm:h-[725px] bg-white rounded-[10px] p-[10px] xs:p-5">
        {activeTab === 0 ? (
          <MyProfile />
        ) : activeTab === 1 ? (
          <SavedVenues />
        ) : (
          <Enquiries />
        )}
      </div>
    </div>
  );
};

export default Profile;
