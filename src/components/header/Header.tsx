import { SearchIcon, GlobeAltIcon } from "@heroicons/react/solid";
import { Fragment, ReactElement, useState } from "react";
import DropDownMenu from "../drop-down-menu/DropDownMenu";
import React from "react";

import SearchModule from "../search-module/SearchModule";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
import { useLocation } from "react-router-dom";
import AirBnbIcon from "../airbnb-icon/AirBnbIcon";

function Header() {
  const location = useLocation();
  const [isStartedSearch, setIsStartedSearch] = useState(false);
  const [searchParams] = useSearchParams();
  const searchBarContent = (): ReactElement => {
    if (location.pathname.includes("home")) {
      return (
        <React.Fragment>
          <p className="search-info border-r pr-2">Địa điểm bất kỳ</p>
          <p className="search-info border-r ml-2 pr-2">Tuần bất kỳ</p>
          <p className="search-info ml-2">Thêm khách</p>
        </React.Fragment>
      );
    }
    if (location.pathname.includes("/room-by-location")) {
      return (
        <Fragment>
          <p className="search-info border-r pr-2">
            {searchParams.get("location")}
          </p>
          <p className="search-info border-r ml-2 pr-2">
            {moment(searchParams.get("checkInDate")).format("DD/MM")} -
            {moment(searchParams.get("checkOutDate")).format("DD/MM")}
          </p>
          <p className="search-info ml-2">
            {searchParams.get("numOfGuest")} khách
          </p>
        </Fragment>
      );
    }
    return <p className="font-bold">Bắt đầu tìm kiếm</p>;
  };
  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-md p-2 pt-4 md:px-10 flex-wrap justify-between ${
        location.pathname.includes("/room-details") ? "hidden md:grid" : ""
      } ${location.pathname !== "/user-info" ? "flex" : "hidden md:flex"}`}
    >
      {/* left */}

      <AirBnbIcon />

      {/* middle - search*/}

      {/* search button */}
      {isStartedSearch ? (
        <div
          onClick={() => {
            setIsStartedSearch(false);
          }}
          className="hidden sm:flex justify-center items-center text-xs lg:text-base cursor-pointer space-x-2"
        >
          <p className="whitespace-nowrap text-ellipsis overflow-hidden">
            Chỗ ở
          </p>
          <p className="whitespace-nowrap text-ellipsis overflow-hidden">
            Trải nghiệm
          </p>
          <p className="whitespace-nowrap text-ellipsis overflow-hidden">
            Trải nghiệm trực tuyến
          </p>
        </div>
      ) : (
        <div
          onClick={() => {
            setIsStartedSearch(!isStartedSearch);
          }}
          className={`items-center border-2 rounded-full py-2 md:shadow-sm justify-between search-button min-w-fit max-w-md cursor-pointer mx-auto ${
            location.pathname !== "/user-info" ? "flex" : "hidden"
          }`}
        >
          <div className="flex justify-center flex-grow px-4">
            {searchBarContent()}
          </div>
          <SearchIcon className="inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
        </div>
      )}
      {/* right */}
      <div className="hidden sm:flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Trở thành chủ nhà</p>
        <GlobeAltIcon className="h-6 hidden lg:block" />
        <DropDownMenu />
      </div>
      {/* search module */}
      <SearchModule
        isStartedSearch={isStartedSearch}
        setIsStartedSearch={setIsStartedSearch}
      />
    </header>
  );
}

export default Header;
