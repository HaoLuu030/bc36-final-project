import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  SearchIcon,
  HeartIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

function MobileNavBarLoggedIn() {
  return (
    <ul className="grid grid-cols-5 p-4 shadow-lg">
      <li className="nav-item cursor-pointer">
        <NavLink to={"/home"}>
          <SearchIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Khám phá</p>
        </NavLink>
      </li>
      <li className="nav-item cursor-pointer">
        <NavLink to={"/being-updated"} className="text-center">
          <HeartIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Wishlists</p>
        </NavLink>
      </li>
      <li className="nav-item cursor-pointer">
        <NavLink to={"/rented-room"} className="text-center">
          <HomeIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Phòng</p>
        </NavLink>
      </li>
      <li className="nav-item cursor-pointer">
        <NavLink to={"/being-updated"} className="text-center">
          <InboxIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Inbox</p>
        </NavLink>
      </li>
      <li className="nav-item cursor-pointer">
        <NavLink to={"/user-info"} className="text-center">
          <UserIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Profile</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileNavBarLoggedIn;
