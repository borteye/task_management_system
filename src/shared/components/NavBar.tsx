import { useState } from "react";
import profile from "../../assets/images/Customer.png";
import {
  Bars3Icon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSideBarToggle,
  SET_NAVBAR_TOGGLE,
} from "../../redux/features/toggleSlice";
import ProfileModal from "../../pages/Dashboard/components/ProfileModal";

type Props = {};

const NavBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isProfileModalVisible, setIsProfileModalVisible] =
    useState<boolean>(false);

  const dispatch = useDispatch();

  const isSidebarToggled = useSelector(selectSideBarToggle);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);

    dispatch(SET_NAVBAR_TOGGLE(true));
  };

  const toggleProfileModal = () => {
    setIsProfileModalVisible((prev) => !prev);
  };

  return (
    <nav
      className={`w-full ${
        isSidebarToggled
          ? "md:w-navBarCollapsed md:left-auto left-0"
          : "md:w-navBarExpanded "
      } transition-all duration-300 font-poppins-regular flex items-center md:justify-between gap-x-8 md:gap-x-0 p-3 md:px-10 fixed top-0 right-0 z-10  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
    >
      <Bars3Icon className="size-8 md:hidden" onClick={toggleSidebar} />
      <div className="">
        <h1 className="text-nav-header font-poppins-semibold">Hello, Megko</h1>
        <p className="text-soft_gray text-sm md:text-base">Lets organize your Daily Tasks</p>
      </div>
    </nav>
  );
};

export default NavBar;
