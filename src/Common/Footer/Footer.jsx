import React from "react";
import Button from "../Button/Button";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-[10px] pt-[30px] xs:pt-[60px] sm:px-[50px] pb-[30px]">
      <div className="rounded-[14px] xs:rounded-[20px] sm:rounded-[30px] pt-[60px] overflow-hidden  border-[0.5px] bg-white border-[#AAB3C1]">
        <h1 className="text-[26px] xs:text-[36px] font-medium text-center text-black">
          Start your{" "}
          <span className="text-[#005FEA] font-bold">ZoomVenues</span> Journey
          today
        </h1>

        <div className="relative text-center mt-4">
          <Button
            title="Enquire now"
            btnClass="border-[#AAB3C1] border-[0.5px] rounded-[10px] py-2 pl-3 pr-[10px] bg-white text-[#005FEA] absolute left-1/2 top-1 -translate-x-1/2 font-bold"
          />
          <img src="/footer-img.png" alt="footer-img" />
        </div>

        {/* Columns */}
        <div className="bg-[#002754] py-[32px] xs:px-6 px-[10px]  sm:px-[54px] ">
          <div className="flex justify-between flex-wrap gap-8 xs:flex-row flex-col pb-[27px] border-b border-b-[#DCDCDC]">
            {/* Column 1 */}
            <div>
              <img src="/logo.png" alt="logo" className="h-[33px]" />

              <p className="text-white text-sm w-[268px] mt-[36px] mb-[50px] xs:mb-[70px]">
                Zoom Venues is your ultimate destination for discovering and
                connecting with the perfect venues and services for any event.
              </p>

              <div className="flex items-center gap-4">
                <IoLogoInstagram className="text-white text-2xl" />
                <FaFacebook className="text-white text-xl" />
                <FaTwitter className="text-white text-xl" />
                <FaLinkedin className="text-white text-xl" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="text-white">
              <h2 className="font-bold mb-[30px] text-lg">Pages</h2>
              <h6 className="text-sm">Venues</h6>
              <h6 className="text-sm my-4">Services</h6>
              <h6 className="text-sm">News</h6>
            </div>

            {/* Column 3 */}
            <div className="text-white">
              <h2 className="font-bold mb-[30px] text-lg">Countries</h2>
              <h6 className="text-sm">UAE</h6>
              <h6 className="text-sm my-4">Singapore</h6>
              <h6 className="text-sm">Yemen</h6>
              <h6 className="text-sm my-4">Qatar</h6>
              <h6 className="text-sm">Sri Lanka</h6>
            </div>

            {/* Column 4 */}
            <div className="text-white">
              <h2 className="font-bold mb-[30px] text-lg">Contact</h2>
              <h6 className="text-sm">info@zoomvenues.com</h6>
              <h6 className="text-sm my-4">+971 554538026</h6>
              <h6 className="text-sm w-[185px]">
                2nd Floor Suite 409, Oracle business Park Opposite Kalpataru
                Prime
              </h6>
            </div>

            {/* Column 5 */}

            <div className="text-white ">
              <h2 className="font-bold mb-[24px] w-[140px] text-lg">Want to partner with us?</h2>

             <Button title="List your Venue" btnClass="bg-white text-[#002754] font-medium py-2 px-4 rounded-lg text-sm"/>
            </div>
          </div>

          <div className="pt-[14px] text-white flex flex-wrap  sm:justify-between gap-0 items-center xs:gap-4 justify-center">
            <h6 className="text-sm font-medium opacity-60">
            Copyright 2021 © ZoomVenues
            </h6>
            <div className="flex items-center">
            <h6 className="text-sm underline font-medium opacity-60">
            User Terms & Conditions
            </h6>
            <h6 className="mx-1 font-medium opacity-60">
          I
            </h6>

             <h6 className="text-sm  underline font-medium opacity-60">
             Privacy Policy
            </h6>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
