import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";
import NavBar from "../shared/components/NavBar";
import { useSelector } from "react-redux";
import { selectSideBarToggle } from "../redux/features/toggleSlice";

const Layout = () => {
  const isSidebarToggled = useSelector(selectSideBarToggle);
  return (
    <div className="flex max-h-screen overflow-y-auto justify-end bg-foreground_color">
      <SideBar />
      <div
        className={`w-full ${
          isSidebarToggled
            ? "md:w-contentCollapsed "
            : "md:w-contentExpanded "
        } transition-all duration-300 relative`}
      >
        <NavBar />
        <div className="h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
