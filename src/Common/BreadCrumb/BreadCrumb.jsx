import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const path = useLocation();
  console.log("Path", path.pathname);
  const newPath = path.pathname.split("/");
  console.log("newPath", newPath);
  return (
    <div className="flex items-center gap-2 lg:mb-4 absolute top-[25px] left-[10px] xs:left-5 z-10 sm:left-[50px]">
      <NavLink to="/" className="text-[#AAB3C1] text-sm xs:text-base">
        Home
      </NavLink>
      <MdKeyboardArrowRight className="text-[#AAB3C1] text-xl" />
      <NavLink
        to={`/${newPath[1]}`}
        className={`${
          newPath.length > 2 ? "text-[#AAB3C1]" : "text-dark-blue font-medium"
        } text-sm xs:text-base`}
      >
        {(newPath[1] === "venues" && "Corporate Venues") || newPath[1] === "services" && "Services" } 
      </NavLink>

      {newPath.length > 2 && (
        <MdKeyboardArrowRight className="text-[#AAB3C1] text-xl" />
      )}
      {newPath.length > 2 && (
        <h6
          // to={`/${newPath[1]}/${newPath[2]}`}
          className={`${
            newPath.length > 3 ? "text-[#AAB3C1]" : "text-dark-blue font-medium"
          } text-sm xs:text-base`}
        >
          {decodeURIComponent(newPath[2])}
        </h6>
      )}
    </div>
  );
};

export default BreadCrumb;
