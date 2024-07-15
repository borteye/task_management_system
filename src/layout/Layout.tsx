import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/components/SideBar";
import NavBar from "../shared/components/NavBar";
import { useSelector } from "react-redux";
import { selectSideBarToggle } from "../redux/features/toggleSlice";

const Layout = () => {
  const isSidebarToggled = useSelector(selectSideBarToggle);
  return (
    <div className="flex h-full justify-end">
      <SideBar />
      <div
        className={`w-full ${
          isSidebarToggled
            ? "md:w-contentCollapsed md:left-auto left-0"
            : "md:w-contentExpanded "
        } transition-all duration-300 relative`}
      >
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
