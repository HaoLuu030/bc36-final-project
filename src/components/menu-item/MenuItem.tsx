import React from "react";
import { NavLink } from "react-router-dom";
interface Props {
  text: string;
  link: string;
  rounded: string;
}
function MenuItem(props: Props) {
  return (
    <li
      className={`p-2 cursor-pointer hover:bg-gray-100 flex-grow ${props.rounded}`}
    >
      <NavLink className="w-full h-full block" to={props.link}>
        {props.text}
      </NavLink>
    </li>
  );
}

export default MenuItem;
