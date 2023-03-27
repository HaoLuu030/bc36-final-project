import React from "react";
import { NavLink } from "react-router-dom";
interface Props {
  text: string;
  link: string;
  rounded: string;
  function: (() => void) | undefined;
}
function MenuItem(props: Props) {
  return (
    <li
      onClick={props.function}
      className={`p-2 cursor-pointer hover:bg-gray-100 flex-grow ${props.rounded}`}
    >
      <NavLink
        className={`w-full h-full block ${
          props.text.toLowerCase() === "đăng ký" ||
          props.text.toLowerCase() === "tài khoản" ||
          props.text.toLowerCase() === "tin nhắn" ||
          props.text.toLowerCase() === "phòng muốn thuê"
            ? "font-bold"
            : ""
        }`}
        to={props.link}
      >
        {props.text}
      </NavLink>
    </li>
  );
}

export default MenuItem;
