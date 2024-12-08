import React, { useEffect } from "react";
import { SIDEBAR1 } from "../utils/SidebarConstants";
import { SIDEBAR2 } from "../utils/SidebarConstants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = () => {
      if (mediaQuery.matches) {
        if (isMenuOpen) dispatch(toggleMenu());
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className={`fixed md:static h-full bg-white shadow-2xl md:shadow-none text-sm ${
        isMenuOpen ? "block" : "hidden"
      } md:ml-2 md:mr-3 -mt-5 pt-3`}
    >
      <div className="border-b-[1px]">
        {SIDEBAR1.map(({ id, title, icon }) => {
          return (
            <div
              key={id}
              className="flex md:flex-col lg:flex-row items-center m-2 gap-x-3 cursor-pointer hover:bg-gray-200 py-[6px] rounded-lg px-2"
            >
              <span className="text-2xl">{icon}</span>
              <span className="inline-block text-xs lg:text-base text-center">
                {title}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-b-[1px]">
        {SIDEBAR2.map(({ id, title, icon }) => {
          return (
            <div
              key={id}
              className="flex md:flex-col lg:flex-row items-center m-2 gap-x-3 cursor-pointer hover:bg-gray-200 py-[6px] rounded-lg px-2"
            >
              <span className="text-2xl">{icon}</span>
              <span className="inline-block text-xs lg:text-base text-left md:text-center lg:text-left">
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
