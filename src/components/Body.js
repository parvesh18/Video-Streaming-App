import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <div className="">
      <Header />
      <div className="flex w-full mt-20 relative">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
