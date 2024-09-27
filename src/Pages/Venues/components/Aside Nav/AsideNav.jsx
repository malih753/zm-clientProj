import Button from "../../../../Common/Button/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import ToggleButton from "../../../../Common/Toggle Button/ToggleButton";
import Facilities from "./Filters Options/Facilities";
import PrefferedArea from "./Filters Options/PrefferedArea";
import PropertiesRating from "./Filters Options/PropertiesRating";
import TimeSlots from "./Filters Options/TimeSlots";
import { IoIosFunnel } from "react-icons/io";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { DownArrowIcon } from "../../../Venue Detail/components/Enquiry Card/Icons";

const AsideNav = ({queries, setQueries}) => {
  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;
  console.log("Path", path);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        onClick={handleOpen}
        className="flex items-center gap-1 lg:hidden absolute  top-[25px] right-[10px] xs:right-5 sm:right-[50px]"
      >
        <IoIosFunnel className="text-dark-blue text-xl" />
        <h6 className="text-dark-blue font-medium">Filter</h6>
      </div>
      <div
        className="fixed lg:static right-0 top-0 bg-white lg:bg-transparent z-20 sm:w-[400px] lg:w-fit lg:px-0 lg:py-0 px-[10px] xs:px-4 py-5 h-screen lg:h-auto overflow-y-auto md:hover:overflow-y-auto duration-300"
        style={{ right: open ? "0px" : "-400px" }}
      >
        <IoClose
          className="text-3xl lg:hidden block text-dark-blue hover:cursor-pointer mb-3"
          onClick={handleClose}
        />
        <h1 className="text-xl font-bold text-dark-blue pb-3 border-b border-b-[#D8E0F0]">
          Showing 2411 Venues
        </h1>

        {path === "/venues" && (
          <div className="my-[10px] bg-white rounded-[10px] border-[0.5px] border-[#AAB3C1] h-10 flex px-[10px] items-center justify-between">
            <div className="flex gap-[10px] items-center">
              <MapIcon />
              <h6 className="text-xs text-[#005FEA] font-medium">Map View</h6>
            </div>

            <ToggleButton />
          </div>
        )}

        {/* Filter Options */}

        <div className="my-[10px] min-h-[728px] border-[0.5px] border-[#AAB3C1] bg-[#F8FAFF] rounded-[10px] p-[14px]">
          <h2 className="text-sm pb-3 border-b border-b-[#D8E0F0] text-black ">
            Filters
          </h2>
          {path === "/services" && (
            <div>
              <h1 className="text-dark-blue font-medium mt-3 mb-[10px]">Categories</h1>
              <div className="relative flex justify-between bg-white border-[0.5px] border-[#AAB3C1] rounded-[10px] py-[16px] pl-[9px] h-[45px] items-center pr-[18px] hover:cursor-pointer">
                <h5 className="text-black text-sm">Flowers & Decor</h5>
                <DownArrowIcon />
              </div>
            </div>
          )}
          {path === "/venues" && <Facilities queries={queries} setQueries={setQueries} />}
          <PrefferedArea />
          <PropertiesRating path={path} />
          {path === "/venues" && <TimeSlots />}

          <div className="text-center mt-5">
            <Button
              title="Search"
              btnClass="text-[#005FEA] py-2 px-[66px] bg-white border-[#005FEA] border text-sm hover:bg-[#005FEA] hover:text-white duration-300 "
            />
          </div>
        </div>
        {/* Overlay */}
      </div>
      <div
        onClick={handleClose}
        className="fixed z-10 left-0 top-0 bg-[#00000080] w-full h-screen"
        style={{ display: open ? "block" : "none" }}
      ></div>
    </>
  );
};

const MapIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_306_107)">
      <path
        d="M18.75 2.1875C18.75 2.10462 18.7171 2.02513 18.6585 1.96653C18.5999 1.90792 18.5204 1.875 18.4375 1.875H4.0625V0.625C4.0625 0.54212 4.02958 0.462634 3.97097 0.404029C3.91237 0.345424 3.83288 0.3125 3.75 0.3125H2.5C1.92004 0.313162 1.36403 0.543842 0.953935 0.953935C0.543842 1.36403 0.313162 1.92004 0.3125 2.5V15.625C0.313162 16.205 0.543842 16.761 0.953935 17.1711C1.36403 17.5812 1.92004 17.8118 2.5 17.8125H9.88188C10.8287 18.8708 12.1412 19.5314 13.5554 19.6612C14.9695 19.791 16.3804 19.3804 17.504 18.5121C18.6277 17.6438 19.3809 16.3822 19.6121 14.9811C19.8433 13.5799 19.5352 12.1432 18.75 10.96V2.1875ZM15.3125 8.5825V5.9375H18.125V10.1825C17.3648 9.38479 16.3867 8.82835 15.3125 8.5825ZM8.5825 12.8125H7.5825L9.31594 7.8125H13.4375V8.47437C12.2788 8.60605 11.1895 9.09407 10.3199 9.87109C9.45028 10.6481 8.84323 11.6758 8.5825 12.8125ZM13.75 7.1875H9.09375C9.02881 7.18748 8.96547 7.20769 8.91255 7.24533C8.85962 7.28296 8.81974 7.33615 8.79844 7.3975L6.84844 13.0225C6.83209 13.0696 6.82724 13.1199 6.8343 13.1693C6.84136 13.2186 6.86013 13.2656 6.88903 13.3062C6.91794 13.3468 6.95614 13.3799 7.00045 13.4028C7.04476 13.4256 7.0939 13.4375 7.14375 13.4375H8.47437C8.45055 13.645 8.43824 13.8536 8.4375 14.0625H6.70937C6.64443 14.0625 6.5811 14.0827 6.52817 14.1203C6.47525 14.158 6.43536 14.2112 6.41406 14.2725L5.4025 17.1875H4.50187L6.86719 10.3713C6.89158 10.3011 6.89016 10.2245 6.86319 10.1552C6.83621 10.086 6.78545 10.0286 6.72 9.99344L4.0625 8.5625V7.71062L6.88 9.22813C6.92551 9.25269 6.97641 9.26557 7.02812 9.26562C7.09307 9.26565 7.1564 9.24543 7.20933 9.2078C7.26225 9.17016 7.30214 9.11697 7.32344 9.05562L9.5975 2.5H10.5L9.23438 6.1475C9.21807 6.19447 9.2132 6.24466 9.22018 6.29388C9.22716 6.34311 9.24579 6.38997 9.27452 6.43055C9.30324 6.47113 9.34124 6.50428 9.38535 6.52722C9.42946 6.55017 9.4784 6.56227 9.52812 6.5625H13.75C13.8329 6.5625 13.9124 6.52958 13.971 6.47097C14.0296 6.41237 14.0625 6.33288 14.0625 6.25V2.5H14.6875V4.375C14.6875 4.45788 14.7204 4.53737 14.779 4.59597C14.8376 4.65458 14.9171 4.6875 15 4.6875H18.125V5.3125H15C14.9171 5.3125 14.8376 5.34542 14.779 5.40403C14.7204 5.46263 14.6875 5.54212 14.6875 5.625V8.47437C14.48 8.45055 14.2714 8.43824 14.0625 8.4375V7.5C14.0625 7.41712 14.0296 7.33763 13.971 7.27903C13.9124 7.22042 13.8329 7.1875 13.75 7.1875ZM11.16 2.5H13.4375V5.9375H9.96875L11.16 2.5ZM18.125 4.0625H15.3125V2.5H18.125V4.0625ZM8.9375 2.5L6.85313 8.50375L4.0625 7V2.5H8.9375ZM0.9375 2.5C0.937996 2.08575 1.10278 1.68861 1.39569 1.39569C1.68861 1.10278 2.08575 0.937996 2.5 0.9375H3.4375V13.4375H2.5C2.20872 13.4375 1.92038 13.4958 1.65201 13.609C1.38365 13.7223 1.14069 13.8882 0.9375 14.0969V2.5ZM0.9375 15.625C0.937996 15.2108 1.10278 14.8136 1.39569 14.5207C1.68861 14.2278 2.08575 14.063 2.5 14.0625H3.75C3.83288 14.0625 3.91237 14.0296 3.97097 13.971C4.02958 13.9124 4.0625 13.8329 4.0625 13.75V9.27312L6.18937 10.4178L3.84031 17.1875H2.5C2.08575 17.187 1.68861 17.0222 1.39569 16.7293C1.10278 16.4364 0.937996 16.0392 0.9375 15.625ZM6.06406 17.1875L6.93156 14.6875H8.47437C8.57329 15.5823 8.88698 16.44 9.38875 17.1875H6.06406ZM14.0625 19.0625C13.0736 19.0625 12.1069 18.7693 11.2846 18.2198C10.4624 17.6704 9.82154 16.8895 9.4431 15.9759C9.06466 15.0623 8.96565 14.057 9.15857 13.087C9.3515 12.1171 9.8277 11.2262 10.527 10.527C11.2262 9.8277 12.1171 9.3515 13.087 9.15857C14.057 8.96565 15.0623 9.06466 15.9759 9.4431C16.8895 9.82154 17.6704 10.4624 18.2198 11.2846C18.7693 12.1069 19.0625 13.0736 19.0625 14.0625C19.0609 15.3881 18.5336 16.659 17.5963 17.5963C16.659 18.5336 15.3881 19.0609 14.0625 19.0625Z"
        fill="#005FEA"
      />
      <path
        d="M15.4413 14.0625C15.6586 13.527 15.6841 12.9328 15.5134 12.3806C15.3427 11.8285 14.9863 11.3524 14.5046 11.033C14.0229 10.7136 13.4456 10.5706 12.8705 10.6283C12.2955 10.686 11.7581 10.9407 11.3494 11.3494C10.9407 11.7581 10.686 12.2955 10.6283 12.8705C10.5706 13.4456 10.7136 14.0229 11.033 14.5046C11.3524 14.9863 11.8285 15.3427 12.3806 15.5134C12.9328 15.6841 13.527 15.6586 14.0625 15.4413L15.8356 17.2144C15.9262 17.305 16.0337 17.3768 16.1521 17.4258C16.2704 17.4748 16.3972 17.5001 16.5253 17.5001C16.6534 17.5001 16.7802 17.4748 16.8986 17.4258C17.0169 17.3768 17.1244 17.305 17.215 17.2144C17.3056 17.1238 17.3774 17.0163 17.4264 16.898C17.4755 16.7796 17.5007 16.6528 17.5007 16.5247C17.5007 16.3966 17.4755 16.2698 17.4264 16.1514C17.3774 16.0331 17.3056 15.9256 17.215 15.835L15.4413 14.0625ZM11.25 13.125C11.25 12.7542 11.36 12.3917 11.566 12.0833C11.772 11.775 12.0649 11.5346 12.4075 11.3927C12.7501 11.2508 13.1271 11.2137 13.4908 11.286C13.8545 11.3584 14.1886 11.537 14.4508 11.7992C14.7131 12.0614 14.8916 12.3955 14.964 12.7592C15.0363 13.1229 14.9992 13.4999 14.8573 13.8425C14.7154 14.1852 14.475 14.478 14.1667 14.684C13.8584 14.89 13.4958 15 13.125 15C12.6279 14.9995 12.1513 14.8018 11.7997 14.4503C11.4482 14.0988 11.2505 13.6221 11.25 13.125ZM16.5247 16.875C16.4787 16.8751 16.4331 16.8661 16.3906 16.8485C16.348 16.8309 16.3094 16.8051 16.2769 16.7725L14.625 15.1203C14.8125 14.9793 14.9793 14.8125 15.1203 14.625L16.7725 16.2772C16.8214 16.3262 16.8547 16.3886 16.8682 16.4565C16.8817 16.5245 16.8747 16.5949 16.8482 16.6588C16.8217 16.7228 16.7768 16.7775 16.7192 16.816C16.6616 16.8544 16.5939 16.875 16.5247 16.875Z"
        fill="#005FEA"
      />
    </g>
    <defs>
      <clipPath id="clip0_306_107">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default AsideNav;
