import { SearchIcon } from "@heroicons/react/solid";
import { useState, useEffect, useRef } from "react";

//CSS
import "./index.scss";
import { useNavigate } from "react-router-dom";
import LocationInput from "../location-input/LocationInput";

interface Props {
  isStartedSearch: boolean;
  setIsStartedSearch: (type: boolean) => void;
}
export default function SearchModule(props: Props) {
  const [isSearching, setIsSearching] = useState(false);

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

  return (
    <div
      ref={searchModuleRef}
      className={`pt-3 w-full bg-white search-form row-start-2 col-start-1 col-span-3 ${
        props.isStartedSearch ? "scale-100" : "scale-0"
      }`}
    >
      <form
        className={`w-full md:w-3/5 lg:w-full xl:w-5/6 mx-auto lg:mx-0 xl:mx-auto ${
          props.isStartedSearch ? "h-auto" : "h-0"
        }`}
      >
        <div
          className={`border rounded-full flex justify-between shadow-md form-item-container ${
            isSearching ? "before:opacity-100" : ""
          }`}
        >
          <LocationInput handleClick={handleClick} />

          <div className="hidden lg:flex items-center h-full justify-between rounded-full w-1/3">
            <div
              onClick={handleClick}
              className="hidden h-full cursor-pointer md:flex flex-col px-6 py-3 form-item flex-shrink w-1/2"
            >
              <label htmlFor="checkIn">Nhận phòng</label>
              <input
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
                placeholder="Thêm ngày"
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
              <label htmlFor="addGuest">Khách</label>
              <input
                placeholder="Thêm khách"
                className="bg-transparent hover:border-none outline-none"
                type="text"
                id="addGuest"
              />
            </div>
            <SearchIcon className="inline-flex h-10 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2" />
          </div>
        </div>
      </form>
    </div>
  );
}
