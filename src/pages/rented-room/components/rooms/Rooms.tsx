import { StarIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { bookingByUserApi } from "../../../../services/booking";
import RoomInfoCard from "../room-info-card/RoomInfoCard";

function Rooms() {
  const userState = useSelector((state: any) => state.userReducer);
  const [bookingInfo, setBookingInfo] = useState([]);
  const getBookingInfo = async () => {
    const result = await bookingByUserApi(userState.userInfo.id);
    setBookingInfo(result.data.content);
  };
  useEffect(() => {
    getBookingInfo();
  }, []);
  const renderRooms = () => {
    return bookingInfo.map(
      (elem: { maPhong: number; soLuongKhach: number }) => {
        return (
          <RoomInfoCard
            key={elem.maPhong}
            roomId={elem.maPhong}
            guestNum={elem.soLuongKhach}
          />
        );
      }
    );
  };
  return (
    <div className="w-full md:w-3/5">
      {/* title */}
      <h1 className="text-2xl font-bold">
        Xin chào, {userState.userInfo.name}
      </h1>
      <p className="text-gray-400">Tham gia vào năm 2021</p>
      <NavLink to={"/user-info"}>Chỉnh sửa hồ sơ</NavLink>
      <h2 className="text-3xl font-bold">Phòng đã thuê</h2>
      <div className="flex items-center pt-2">
        <StarIcon className="h-6 w-6" /> <p>0 Đánh giá</p>{" "}
      </div>
      {renderRooms()}
    </div>
  );
}

export default Rooms;
