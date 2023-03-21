import { SearchIcon } from "@heroicons/react/solid";
import { useState, useEffect, useRef } from "react";

import "./index.scss";
import { useNavigate, createSearchParams } from "react-router-dom";
import LocationInput from "../location-input/LocationInput";
import moment from "moment";

interface Props {
  isStartedSearch: boolean;
  setIsStartedSearch: (type: boolean) => void;
}

export default function SearchModule(props: Props) {
  const today = moment(new Date()).format("YYYY-MM-DD");
  const [isSearching, setIsSearching] = useState(false);
  const [locationInput, setLocationInput] = useState("");
  const [locationList, setLocationList] = useState([]);
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(today);
  const [numOfGuest, setNumOfGuest] = useState("1");
  console.log({ checkInDate, checkOutDate });
  const navigate = useNavigate();
  //highlight the form item being chosen
  const handleClick = (e: any): void => {
    setIsSearching(true);
    document.querySelectorAll(".form-item").forEach((elem) => {
      elem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const searchModuleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const eventHandler = (e: any) => {
      if (!searchModuleRef.current?.contains(e.target)) {
        props.setIsStartedSearch(false);
      }
    };
    document.addEventListener("mousedown", eventHandler);
  }, []);
  const handleSearch = (): void => {
    if (!locationInput) {
      alert("Vui lòng nhập địa điểm cần đến");
      return;
    }
    //look for location id
    const idx = locationList.findIndex((elem: { tenViTri: string }) => {
      return locationInput === elem.tenViTri;
    });
    if (idx === -1) {
      alert("Không tìm thấy vị trí");
      return;
    }
    if (!checkInDate) {
      setCheckInDate(today);
    }
    if (!checkOutDate) {
      setCheckOutDate(today);
    }
    if (checkOutDate < checkInDate) {
      alert("Không chọn ngày trả phòng trước ngày nhận phòng");
      return;
    }
    if (!numOfGuest) {
      setNumOfGuest("1");
    }
    const locationId = locationList[idx]["id"];
    navigate({
      pathname: `/room-by-location/${locationId}`,
      search: `?${createSearchParams({
        location: locationInput,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numOfGuest: numOfGuest,
      })}`,
    });
  };
  return (
    <div
      ref={searchModuleRef}
      className={`pt-3 w-full bg-white search-form row-start-2 col-start-1 col-span-3 ${
        props.isStartedSearch ? "scale-100" : "scale-0"
      }`}
    >
      <form
        autoComplete="off"
        className={`w-full md:w-3/5 lg:w-full xl:w-5/6 mx-auto lg:mx-0 xl:mx-auto ${
          props.isStartedSearch ? "h-auto" : "h-0"
        }`}
      >
        <div
          className={`border rounded-full flex justify-between shadow-md form-item-container ${
            isSearching ? "before:opacity-100" : ""
          }`}
        >
          <LocationInput
            handleClick={handleClick}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            locationList={locationList}
            setLocationList={setLocationList}
            handleSearch={handleSearch}
          />

          <div className="hidden lg:flex items-center h-full justify-between rounded-full w-1/3">
            <div
              onClick={handleClick}
              className="hidden h-full cursor-pointer md:flex flex-col px-6 py-3 form-item flex-shrink w-1/2"
            >
              <label htmlFor="checkIn">Nhận phòng</label>
              <input
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                }}
                min={today}
                value={checkInDate}
                placeholder="Thêm ngày"
                className="bg-transparent outline-none"
                type="date"
                id="checkIn"
              />
            </div>
            <div
              onClick={handleClick}
              className="hidden h-full cursor-pointer md:flex flex-col px-6 py-3 form-item w-1/2"
            >
              <label htmlFor="checkOut">Trả phòng</label>
              <input
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                }}
                min={checkInDate}
                value={checkOutDate}
                className="bg-transparent hover:border-none outline-none"
                type="date"
                id="checkOut"
              />
            </div>
          </div>

          <div
            onClick={handleClick}
            className="hidden lg:flex justify-between items-center cursor-pointer form-item flex-grow"
          >
            <div className="h-full flex flex-col rounded-full px-6 py-3 ">
              <label htmlFor="addGuest">Thêm Khách</label>
              <input
                onChange={(e) => {
                  setNumOfGuest(e.target.value);
                }}
                value={numOfGuest}
                placeholder="Thêm khách"
                className="bg-transparent hover:border-none outline-none"
                type="text"
                id="addGuest"
              />
            </div>
            <SearchIcon
              onClick={handleSearch}
              className="inline-flex h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
