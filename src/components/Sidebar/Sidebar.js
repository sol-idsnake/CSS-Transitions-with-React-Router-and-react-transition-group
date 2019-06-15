import React from "react";
import { NavLink } from "react-router-dom";
import SidebarStyles from "./SidebarStyles";

const Sidebar = () => {
  return (
    <SidebarStyles className="sidebar">
      <p>
        Sidebar text <span>Whoa</span>
      </p>
      <NavLink to="/12345">To ID</NavLink>
    </SidebarStyles>
  );
};

export default Sidebar;
