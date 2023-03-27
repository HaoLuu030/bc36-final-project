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
  console.log(userState);
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
                  link="/account"
                  text="Tài khoản"
                  rounded="rounded-t-md"
                  function={undefined}
                />
                <MenuItem
                  link="#"
                  text="Tin nhắn"
                  rounded=""
                  function={undefined}
                />
                <MenuItem
                  link="#"
                  text="Phòng muốn thuê"
                  rounded=""
                  function={undefined}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <MenuItem
                  link="/sign-up"
                  text="Đăng ký"
                  rounded="rounded-t-md"
                  function={undefined}
                />
                <MenuItem
                  link="/log-in"
                  text="Đăng nhập"
                  rounded=""
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
              rounded=""
              function={undefined}
            />
            <MenuItem
              link="/"
              text="Tổ chức trải nghiệm"
              rounded=""
              function={undefined}
            />
            <MenuItem
              link="/"
              text="Trợ giúp"
              rounded={`${userState.userInfo ? "" : "rounded-b-md"}`}
              function={undefined}
            />
          </div>
          {userState.userInfo ? (
            <MenuItem
              link="/log-in"
              text="Đăng xuất"
              rounded="rounded-b-md"
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
