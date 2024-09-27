import Button from "../../../../Common/Button/Button";
import { tabButtons } from "../../../../Constants/TabButtons";

const TabButtons = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (index) => {
    setActiveTab(index);
  }
  return (
    <div className="mt-[18px] flex items-center justify-center  flex-wrap gap-4">
      {tabButtons.map((item, index) => (
        <Button
          onClick={() => handleTabClick(index)}
          key={item.title}
          btnClass={`flex items-center gap-[14px]  py-3 px-[32px] ${
            activeTab === index ? "bg-[#EDF4FE] text-[#005FEA] font-medium" : "bg-transparent text-[#74839C] font-normal"
          }`}
        >
          <item.Icon width={20} height={20} color={activeTab === index ? "#005FEA" : "#74839C"}/>
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default TabButtons;
