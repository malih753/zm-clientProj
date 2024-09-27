import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">
      <BreadCrumb />

      <Outlet />
    </div>
  );
};

export default Layout;
