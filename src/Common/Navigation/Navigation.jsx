import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MessageIcon, TicketIcon, LocationIcon } from "./Icons";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Button from "../Button/Button";
const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <nav className="flex justify-between px-[10px] xs:px-[20px] sm:px-[83px] py-[26px] items-center">
        <div className="flex items-center gap-4 sm:gap-9">
          <HiMenuAlt1
            className="text-dark-blue text-2xl hover:cursor-pointer"
            onClick={handleOpen}
          />
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-[20px] xs:h-[26px] mt-[-10px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-[14px]">
          {!user ? (
            <>
              <NavLink to="/login" className="text-[#0259FF] font-bold text-sm mr-4">
                Login
              </NavLink>

              <NavLink to="/landing">
                <Button
                  title="List your Venue"
                  btnClass="xs:px-4 px-2 py-2 font-medium text-xs xs:text-sm"
                />
              </NavLink>
            </>
          ) : (
            <>
              <div className="nav-icon">
                <MessageIcon />
              </div>
              <div className="nav-icon">
                <TicketIcon />
              </div>
              <div className="nav-icon">
                <LocationIcon />
              </div>
              <NavLink to={"/profile"}>
                <img
                  src="/avatar.jfif"
                  alt="avatar"
                  className="h-[33px] w-[33px] rounded-lg ml-[10px] sm:ml-[55px]"
                />
              </NavLink>
            </>
          )}
        </div>
      </nav>
      <NavMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navigation;
