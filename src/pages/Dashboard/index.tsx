import React from "react";
import SideBar from "../../shared/components/SideBar";
import NavBar from "../../shared/components/NavBar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <SideBar />
      <NavBar />
    </div>
  );
};

export default Dashboard;
