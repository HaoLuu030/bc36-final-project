import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import MenuItem from "../menu-item/MenuItem";
import { useEffect, useRef, useState } from "react";

function DropDownMenu() {
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
          <div className="drop-down-menu-top border-b-gray-300 border-b-2 w-full flex flex-col">
            <MenuItem link="/sign-up" text="Đăng ký" rounded="rounded-t-md" />
            <MenuItem link="/log-in" text="Đăng nhập" rounded="" />
          </div>
          <div className="drop-down-menu-bottom">
            <MenuItem link="/" text="Cho thuê nhà" rounded="" />
            <MenuItem link="/" text="Tổ chức trải nghiệm" rounded="" />
            <MenuItem link="/" text="Trợ giúp" rounded="rounded-b-md" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default DropDownMenu;
