import React, { useState, useRef, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, RangeKeyDict } from "react-date-range";
import moment from "moment";

interface Props {
  giaTien: number | undefined;
}

function BookingModule(props: Props) {
  const dateRangeRef = useRef<any>();
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [numOfNight, setNumOfNight] = useState(1);

  const [isChoosingDate, setIsChoosingDate] = useState(false);
  const [guestNum, setGuestNum] = useState(0);
  const handleGuestNum = (add: boolean) => {
    if (add) {
      setGuestNum(guestNum + 1);
    } else {
      if (guestNum > 0) {
        setGuestNum(guestNum - 1);
      }
    }
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict): void => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };
  useEffect(() => {
    if (startDate && endDate) {
      //change from milisecond to day
      setNumOfNight(
        (endDate?.getTime() - startDate?.getTime()) / 1000 / 60 / 60 / 24 + 1
      );
    } else {
      setNumOfNight(0);
    }
  }, [startDate, endDate]);
  const handleCloseCalendar = () => {
    setIsChoosingDate(false);
  };
  return (
    <div className="border-bottom relative sm:w-2/3 sm:mx-auto md:w-full">
      <div className="border shadow-md rounded-md p-4 text-center">
        <div className="grid-cols-2 grid p-0 border rounded-md">
          <div
            onClick={() => {
              setIsChoosingDate(true);
            }}
            className="border-r cursor-pointer"
          >
            <p>Nhận phòng</p>
            <p>{moment(startDate).format("DD-MM-YYYY")}</p>
          </div>
          <div
            onClick={() => {
              setIsChoosingDate(true);
            }}
            className="cursor-pointer"
          >
            <p>Trả phòng</p>
            <p>{moment(endDate).format("DD-MM-YYYY")}</p>
          </div>
          <div className="col-span-2 border-t p-4">
            <p className="text-left">Khách</p>
            <div className="flex justify-between pt-2 items-center">
              <button
                onClick={() => {
                  handleGuestNum(false);
                }}
                className="modify-guest"
              >
                -
              </button>
              <p>{guestNum} Khách</p>
              <button
                onClick={() => {
                  handleGuestNum(true);
                }}
                className="modify-guest"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          className="w-full h-14 rounded-lg mt-4 text-white font-bold active:scale-90 transition duration-150 ease-out"
          style={{
            background:
              "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
          }}
        >
          Đặt Phòng
        </button>
        <p className="text-base text-gray-400 pt-2">Bạn chưa bị trừ tiền</p>
        <div className="price border-bottom">
          <div className="flex justify-between">
            <p>
              ${props.giaTien} x {numOfNight} Đêm
            </p>
            <p>$ {props.giaTien ? props.giaTien * numOfNight : 0}</p>
          </div>
          <div className="flex justify-between">
            <p>Phí dịch vụ</p>
            <p>$0</p>
          </div>
        </div>
        <p className="text-2xl text-center font-bold">
          Tổng trước thuế ${props.giaTien ? props.giaTien * numOfNight : 0}
        </p>
      </div>
      {isChoosingDate ? (
        <div className="absolute top-5 left-0 z-50 bg-white border p-2 rounded-lg">
          <div className="flex justify-between px-4 py-2 items-center">
            <div>
              <p className="font-bold">{numOfNight} Đêm</p>
              <p className="text-sm text-gray-400">{`${moment(startDate).format(
                "DD/MM/YYYY"
              )} - ${moment(endDate).format("DD/MM/YYYY")}`}</p>
            </div>
            <button
              onClick={handleCloseCalendar}
              className="bg-gray-300 p-2 rounded-lg text-red-400 font-bold active:scale-90 transition duration-150 ease-out"
            >
              close
            </button>
          </div>
          <DateRange
            ref={dateRangeRef}
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BookingModule;
