import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Tooltip from "./Tooltip";

import { useDispatch, useSelector } from "react-redux";
import {
  selectNavBarToggle,
  SET_EDIT_TASK_TOGGLE,
  SET_NAVBAR_TOGGLE,
  SET_SIDEBAR_TOGGLE,
} from "../../redux/features/toggleSlice";
import profile from "../../assets/images/Customer.png";
import { useNavigate } from "react-router-dom";
import BackDrop from "./BackDrop";
import { CLEAR_USER, selectUsername } from "../../redux/features/userSlice";
import capitalize from "../utils/capitalize";
import { CLEAR_TOKEN } from "../../redux/features/tokenSlice";
import { toast } from "sonner";
import { Routes } from "./constants";
import { CLEAR_TASKS } from "../../redux/features/tasksSlice";
import { CLEAR_EDIT_TASK } from "../../redux/features/editTaskSlice";
import { CLEAR_ALL_USERS } from "../../redux/features/allUsersSlice";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const { pathname } = window.location;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isNavbarToggled = useSelector(selectNavBarToggle);
  const username = useSelector(selectUsername);

  const navigateToLocation = (location: string | undefined) => {
    if (location) {
      navigate(location);
    }
  };

  const toggleSidebarExpansion = () => {
    setIsExpanded((prev) => !prev);

    dispatch(SET_SIDEBAR_TOGGLE(!isExpanded));
  };

  const toggleNavbarHidden = () => {
    dispatch(SET_NAVBAR_TOGGLE(false));
  };

  const handleSignOut = () => {
    dispatch(CLEAR_USER());
    dispatch(CLEAR_TASKS());
    dispatch(CLEAR_EDIT_TASK())
    dispatch(CLEAR_ALL_USERS())
    dispatch(SET_SIDEBAR_TOGGLE(false));
    dispatch(SET_NAVBAR_TOGGLE(false));
    dispatch(SET_EDIT_TASK_TOGGLE(false))
    dispatch(CLEAR_TOKEN());

    toast.success("Signed out successfully", {
      position: "top-right",
    });

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <>
      {isNavbarToggled && <BackDrop close={toggleNavbarHidden} screen="md" />}
      <aside
        className={` ${isNavbarToggled ? "flex" : "hidden"} ${
          isExpanded
            ? "w-sideBarExpanded flex"
            : `md:w-sideBarCollapsed ${
                isNavbarToggled && "w-sideBarExpanded"
              }  md:flex`
        } 
       h-screen h- fixed left-0 bg-white transition-all duration-300 md:flex flex-col gap-y-10 px-4 py-8  z-custom-1000 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
      >
        <div className={`flex items-center justify-between`}>
          <div
            className={`${
              !isExpanded
                ? "md:hidden flex"
                : `flex ${isNavbarToggled && "block "}`
            }  items-center gap-x-6 `}
          >
            <img
              src={profile}
              alt="profile picture"
              className="w-12 h-12 md:w-14 md:h-14  object-cover rounded-full"
            />
            <p className={`font-poppins-semibold md:text-xl `}>
              {username && capitalize(username)}
            </p>
          </div>

          <div
            onClick={toggleSidebarExpansion}
            className={`bg-black w-fit z-10 hidden md:block text-white p-1 rounded-lg ml-11 cursor-pointer transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : `${isNavbarToggled && "rotate-180"}`
            }`}
          >
            <ChevronRightIcon className="size-6" />
          </div>
        </div>
        <ul className="flex flex-col gap-y-7 text-iconColor mt-9 md:mt-0">
          {Routes?.map((item) => {
            const isHovered = hoveredLabel === item.label;
            return (
              <li
                key={item.label}
                onClick={() => navigateToLocation(item.path)}
                className={`flex items-center ${
                  isExpanded
                    ? "justify-between"
                    : `md:justify-center ${
                        isNavbarToggled && "justify-between"
                      }`
                } font-poppins-medium cursor-pointer text-base ${
                  item.path === pathname
                    ? "bg-black text-white"
                    : "bg-none text-black"
                } hover:bg-black hover:text-white py-2 px-3 rounded-xl `}
                onMouseEnter={() => setHoveredLabel(item.label)}
                onMouseLeave={() => setHoveredLabel(null)}
              >
                <div
                  className={`${
                    !isExpanded ? "justify-center" : ""
                  } flex items-center gap-x-3 transition-all duration-300 relative`}
                >
                  {item.path === pathname ? (
                    <item.activeIcon className="size-6" />
                  ) : (
                    <item.inactiveIcon className="size-6" />
                  )}

                  <p
                    className={`transition-opacity duration-300 ${
                      !isExpanded
                        ? "md:hidden"
                        : `md:block ${isNavbarToggled && "block"} `
                    }`}
                  >
                    {item.label}
                  </p>
                  {!isExpanded && (
                    <Tooltip text={item.label} visible={isHovered} />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <XMarkIcon
          onClick={toggleNavbarHidden}
          className="size-8 cursor-pointer absolute top-4 right-4 md:hidden"
        />
        <div
          onClick={handleSignOut}
          className="cursor-pointer flex items-center gap-x-2 absolute bottom-4 left-7 font-poppins-semibold"
        >
          <ArrowRightStartOnRectangleIcon className="size-6 " />
          <p
            className={`${
              !isExpanded
                ? `md:hidden ${isNavbarToggled && "block"} `
                : `block `
            }`}
          >
            Sign Out
          </p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
