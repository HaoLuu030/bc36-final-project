import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRoomById } from "../../services/room";
import RoomImage from "./components/room-image/RoomImage";
import Amenities from "./components/amenities/Amenities";
import Title from "./components/title/Title";
import Overview from "./components/overview/Overview";
import FeaturedInfo from "./components/featured-info/FeaturedInfo";
import AirCover from "./components/aircover/AirCover";
import Description from "./components/description/Description";
import BookingModule from "./components/booking-module/BookingModule";
import Comment from "./components/comment/Comment";

interface Room {
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  bep: boolean;
  dieuHoa: boolean;
  doXe: boolean;
  hoBoi: boolean;
  mayGiat: boolean;
  tivi: boolean;
  wifi: boolean;
  giaTien: number;
  id: number;
}
function RoomDetails() {
  const params = useParams();
  const [room, setRoom] = useState<Room>();
  const getRoom = async () => {
    const result = await fetchRoomById(params.roomId);
    setRoom(result.data.content);
  };
  useEffect(() => {
    getRoom();
  }, []);
  return (
    <div>
      <RoomImage />
      <div className="pt-4 px-4">
        <Title tenPhong={room?.tenPhong} />
        <Overview room={room} />
        <FeaturedInfo />
        <AirCover />
        <Description moTa={room?.moTa} />
        <Amenities room={room} />
        <BookingModule giaTien={room?.giaTien} />
        <Comment roomId={room?.id} />
      </div>
    </div>
  );
}

export default RoomDetails;
