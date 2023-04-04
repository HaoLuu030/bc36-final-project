import React, { useState, useEffect } from "react";

import CardImage from "../../../../components/card-image/CardImage";
import { fetchRoomById } from "../../../../services/room";
import { useSelector } from "react-redux";
import { fetchLocationById } from "../../../../services/location";
interface Props {
  roomId: number;
  guestNum: number;
}
function RoomInfoCard(props: Props) {
  const [roomInfo, setRoomInfo] = useState({
    tenPhong: "",
    giuong: 0,
    maViTri: 0,
    phongNgu: 0,
    phongTam: 0,
    dieuHoa: false,
    mayGiat: false,
    giaTien: 0,
  });
  const [location, setLocation] = useState("");
  const getRoomInfo = async () => {
    const room = await fetchRoomById(props.roomId.toString());
    setRoomInfo(room.data.content);
    const location = await fetchLocationById(roomInfo?.maViTri);
    setLocation(location.data.content.tenViTri);
  };

  useEffect(() => {
    getRoomInfo();
  }, []);

  return (
    <div className="flex flex-col my-5 md:flex-row gap-x-3">
      <div className="img-container md:w-1/3">
        <CardImage />
      </div>
      <div className="card-body flex-shrink lg:flex-col lg:justify-between lg:flex">
        <p className="text-gray-400">Toàn bộ căn hộ dịch vụ tại {location}</p>
        <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-lg font-bold md:whitespace-normal">
          {roomInfo?.tenPhong}
        </h3>
        <ul className="flex text-gray-400 flex-wrap gap-x-2">
          <li>{props.guestNum} Khách</li>
          <li>Phòng studio</li>
          <li>{roomInfo?.giuong} Giường</li>
          <li>{roomInfo?.phongNgu} Phòng ngủ</li>
          <li>{roomInfo?.phongTam} Phòng tắm</li>
          {roomInfo?.dieuHoa ? <li>Điều hòa</li> : <></>}
          {roomInfo?.mayGiat ? <li>Máy giặt</li> : <></>}
        </ul>
        <div className="flex justify-end">
          <p className="text-xl font-bold">${roomInfo?.giaTien}/ Đêm</p>
        </div>
      </div>
    </div>
  );
}

export default RoomInfoCard;
