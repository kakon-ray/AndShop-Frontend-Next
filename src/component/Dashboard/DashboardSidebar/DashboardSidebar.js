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
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

const DashboardSidebar = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const { push } = useRouter();
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast('Log out')
    push('/login');

  }

  return (
    <div id="header">
      {/* collapsed props to change menu size using menucollapse state */}
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          <Link href="/dashboard" className="navmenue">
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Dashboard
              </MenuItem>
            </Menu>
          </Link>
          <Link href="/dashboard/profile" className="navmenue">
            <Menu iconShape="square">
              <MenuItem active={false} icon={<FiHome />}>
                Profile
              </MenuItem>
            </Menu>
          </Link>

          <Link href="/dashboard/sell" className="navmenue">
            <Menu iconShape="square">
              <MenuItem icon={<BiCog />}>Vendor Request</MenuItem>
            </Menu>
          </Link>

          <Link href="/dashboard/product" className="navmenue">
            <Menu iconShape="square">
              <MenuItem icon={<BiCog />}>Manage Product</MenuItem>
            </Menu>
          </Link>

          <Link href="/dashboard/review" className="navmenue">
            <Menu iconShape="square">
              <MenuItem icon={<RiPencilLine />}>Review on And Shop</MenuItem>
            </Menu>
          </Link>


        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />} onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default DashboardSidebar;
