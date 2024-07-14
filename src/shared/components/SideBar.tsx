import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Tooltip from "./Tooltip";
import { Routes } from "../constants/sidebar-links";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNavBarToggle,
  SET_NAVBAR_TOGGLE,
  SET_SIDEBAR_TOGGLE,
} from "../../redux/features/toggleSlice";
import profile from "../../assets/images/Customer.png";
import { useNavigate } from "react-router-dom";
import BackDrop from "./BackDrop";

type Props = {};

const { pathname } = window.location;

const SideBar = (props: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isNavbarToggled = useSelector(selectNavBarToggle);

  const navigateToLocation = (location: string | undefined) => {
    if (location) navigate(location);
    dispatch(SET_SIDEBAR_TOGGLE(false));
  };

  const toggleSidebarExpansion = () => {
    setIsExpanded((prev) => !prev);

    dispatch(SET_SIDEBAR_TOGGLE(!isExpanded));
  };

  const toggleNavbarHidden = () => {
    dispatch(SET_NAVBAR_TOGGLE(false));
  };

  return (
    <>
      {isNavbarToggled && <BackDrop onClick={toggleNavbarHidden} screen="md" />}
      <aside
        className={` ${isNavbarToggled ? "flex" : "hidden"} ${
          isExpanded
            ? "w-sideBarExpanded flex"
            : `md:w-sideBarCollapsed ${
                isNavbarToggled && "w-sideBarExpanded"
              }  md:flex`
        } 
       h-screen bg-white transition-all duration-300 md:flex flex-col gap-y-10 px-4 py-8 relative z-custom-1000 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
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
              Gabriel <br /> Borteye
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
                onClick={() => {
                  navigateToLocation(item.path);
                }}
                className={`flex items-center ${
                  isExpanded
                    ? "justify-between"
                    : `md:justify-center ${
                        isNavbarToggled && "justify-between"
                      }`
                } font-poppins-medium cursor-pointer text-base ${
                  item.path === pathname ? "bg-black text-white" : ""
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
        <div className="cursor-pointer flex items-center gap-x-2 absolute bottom-4 left-7 font-poppins-semibold">
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
