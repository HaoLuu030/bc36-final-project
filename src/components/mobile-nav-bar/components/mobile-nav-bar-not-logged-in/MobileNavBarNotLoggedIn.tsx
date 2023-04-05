import React, { MouseEventHandler } from "react";
import {
  SearchIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import "./index.scss";

function MobileNavBarNotLoggedIn() {
  return (
    <ul className="flex justify-center space-x-4">
      <li className="nav-item cursor-pointer selected">
        <NavLink to={"/home"}>
          <SearchIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Khám phá</p>
        </NavLink>
      </li>
      <li className="nav-item cursor-pointer">
        <NavLink to={"/being-updated"}>
          <HeartIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Wishlists</p>
        </NavLink>
      </li>
      <li className="nav-item cursor-pointer">
        <NavLink to={"/log-in"}>
          <UserCircleIcon className="w-8 h-8 mx-auto nav-icon" />
          <p className="text-sm">Đăng nhập</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileNavBarNotLoggedIn;
