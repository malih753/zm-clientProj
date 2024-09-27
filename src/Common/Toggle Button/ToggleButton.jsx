import { useAuth } from "../../Context/AuthContext";

const ToggleButton = () => {
  const { isMapOpen, handleToggleMap } = useAuth();

  return (
    <label className="relative inline-block w-11 hover:cursor-pointer h-6">
      {/* Control the checkbox's checked state with `isMapOpen` */}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isMapOpen} // Checkbox reflects `isMapOpen`
        onChange={handleToggleMap} // Trigger toggle when checkbox is changed
      />
      <div className="absolute inset-0 bg-[#E7F0FF] peer-focus:outline-none  rounded-full  transition-colors" />
      <div
        className={`absolute left-[2px] top-[2px] bg-white rounded-full h-5 w-5 transition-transform peer-checked:translate-x-full peer-checked:bg-[#005FEA] ${
          isMapOpen ? "translate-x-full bg-[#005FEA]" : ""
        }`}
      />
    </label>
  );
};

export default ToggleButton;
