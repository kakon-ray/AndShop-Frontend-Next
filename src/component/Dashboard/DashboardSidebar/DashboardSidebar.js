"use client"
//import useState hook to create menu collapse state
import React, { useState } from "react";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./DashboardSidebar.css";
import Link from "next/link";

const DashboardSidebar = () => {

      //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  

  return (
    <div id="header">
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          <Link href="/dashboard">
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Dashboard
              </MenuItem>
            </Menu>
          </Link>
          <Link href="/dashboard/profile">
            <Menu iconShape="square">
              <MenuItem active={false} icon={<FiHome />}>
                Profile
              </MenuItem>
            </Menu>
          </Link>

          <Link href="/dashboard/review">
            <Menu iconShape="square">
              <MenuItem icon={<RiPencilLine />}>Review And Shop</MenuItem>
            </Menu>
          </Link>

          <Link href="/dashboard/sell">
            <Menu iconShape="square">
              <MenuItem icon={<BiCog />}>Sell On And Shop</MenuItem>
            </Menu>
          </Link>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default DashboardSidebar;
