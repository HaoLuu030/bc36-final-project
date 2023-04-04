import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import MenuItem from "../menu-item/MenuItem";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserInfoAction } from "../../store/action/userActions";
function DropDownMenu() {
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.userReducer);
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((show) => !show);
  };
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const eventHandler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", eventHandler);
    return () => {
      document.removeEventListener("mousedown", eventHandler);
    };
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(deleteUserInfoAction());
    alert("Đã đăng xuất");
  };
  return (
    <div className="menu-container relative" ref={menuRef}>
      <button
        onClick={handleShowMenu}
        className="flex items-center space-x-2 border-2 rounded-full p-2 cursor-pointer menu-trigger"
      >
        <MenuIcon className="h-6" />
        <UserCircleIcon className="h-6" />
      </button>
      <div
        className={`drop-down-menu absolute bg-white z-50 w-48 right-0 top-18 shadow-lg rounded-md mt-2 border-gray-200 border ${
          showMenu ? "visible" : "hidden"
        }`}
      >
        <ul className="w-full text-sm text-black">
          <div className="drop-down-menu-top border-b-gray-300 border-b w-full flex flex-col">
            {userState?.userInfo ? (
              <React.Fragment>
                <MenuItem
                  link="/user-info"
                  text="Tài khoản"
                  customStyle="rounded-t-md font-bold"
                  function={undefined}
                />
                <MenuItem
                  link="/rented-room"
                  text="Phòng đã thuê"
                  customStyle="font-bold"
                  function={undefined}
                />
                <MenuItem
                  link="#"
                  text="Phòng muốn thuê"
                  customStyle="font-bold"
                  function={undefined}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <MenuItem
                  link="/sign-up"
                  text="Đăng ký"
                  customStyle="rounded-t-md"
                  function={undefined}
                />
                <MenuItem
                  link="/log-in"
                  text="Đăng nhập"
                  customStyle="font-bold"
                  function={undefined}
                />
              </React.Fragment>
            )}
          </div>
          <div
            className={`drop-down-menu-bottom ${
              userState.userInfo ? "border-b" : ""
            }`}
          >
            <MenuItem
              link="/"
              text="Cho thuê nhà"
              customStyle=""
              function={undefined}
            />
            <MenuItem
              link="/"
              text="Tổ chức trải nghiệm"
              customStyle=""
              function={undefined}
            />
            <MenuItem
              link="/"
              text="Trợ giúp"
              customStyle={`${userState.userInfo ? "" : "rounded-b-md"}`}
              function={undefined}
            />
          </div>
          {userState.userInfo ? (
            <MenuItem
              link="/log-in"
              text="Đăng xuất"
              customStyle="rounded-b-md"
              function={handleLogOut}
            />
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
