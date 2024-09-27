import { IoClose } from "react-icons/io5";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navLinks } from "../../Constants/NavLinks";

const NavMenu = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={`fixed sm:absolute left-0  w-[95%] sm:w-[630px] overflow-hidden bg-white duration-500 pl-[20px]  xs:pl-[50px] sm:h-auto h-screen overflow-y-auto z-[9999] lg:pl-[83px] pt-[33px] ${
        open ? "top-0" : "sm:-top-[120%] -top-[140%]"
      }`}
    >
      <div className="flex items-center gap-10">
        <IoClose
          className="text-3xl text-dark-blue hover:cursor-pointer"
          onClick={handleClose}
        />
        <img src="/logo.png" alt="logo" className="h-[25px] -mt-2" />
      </div>

      <div className="mt-[50px] xs:mt-[80px] items-start lg:mt-[112px] flex gap-[15px] xs:gap-[30px] md:gap-[100px] lg:gap-[143px] w-full justify-between xs:justify-normal">
        <div>
          <ul className="space-y-5 lg:space-y-10">
            {navLinks.map((link) => (
              <li
                key={link.link}
                className="text-[22px] xs:text-[26px] lg:text-[36px]"
              >
                <NavLink
                  to={link.path}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#005FEA] font-medium"
                      : "text-[#667AA0] font-normal"
                  }
                >
                  {link.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-[60px] mb-[50px] lg:mt-[190px] lg:mb-[87px]">
            <h5 className="font-bold text-dark-blue text-base xs:text-lg">
              Want to partner with us?
            </h5>
            <Button
              title="List your Venue"
              btnClass="mt-6 xs:px-4 px-2 py-2 font-medium text-xs xs:text-sm"
            />
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-[#005FEA] font-bold text-lg">Countries</h1>
            <ul className="mt-[30px] text-[#667AA0] space-y-4">
              <li className="text-sm">UAE</li>
              <li className="text-sm">Singapore</li>
              <li className="text-sm">Yemen</li>
              <li className="text-sm">Qatar</li>
              <li className="text-sm">Sri Lanka</li>
            </ul>
          </div>

          <div className="mt-[40px] lg:mt-[71px]">
            <h1 className="text-[#005FEA] font-bold text-lg">Contact</h1>
            <ul className="mt-[30px] space-y-4">
              <li className="text-[#667AA0] text-sm">info@zoomvenues.com</li>
              <li className="text-[#667AA0] text-sm">+971 554538026</li>
              <li className="text-[#667AA0] text-sm w-[185px]">
                2nd Floor Suite 409, Oracle business Park Opposite Kalpataru
                Prime
              </li>
            </ul>
          </div>

          <div className="mt-[40px] mb-5 lg:mb-0 lg:mt-[53px] flex items-center gap-4 text-[#667AA0]">
            <IoLogoInstagram className=" text-2xl" />
            <FaFacebook className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaLinkedin className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
