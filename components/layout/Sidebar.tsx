import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Sidebarlogo from "./Sidebarlogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "../../hooks/useCurrentUser";
import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const session = useSession();

  const menus = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      auth: true,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <>
            <Sidebarlogo />
            {menus.map((menu) => {
              return (
                <SidebarItem
                  key={menu.href}
                  href={menu.href}
                  label={menu.label}
                  icon={menu.icon}
                  auth={menu.auth}
                  alert={menu.alert}
                />
              );
            })}
            {currentUser && (
              <SidebarItem
                onClick={() => {
                  signOut();
                }}
                icon={BiLogOut}
                label="Logout"
              />
            )}

            <SidebarTweetButton />
          </>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
