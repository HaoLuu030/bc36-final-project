import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRoomById } from "../../services/room";
import RoomImageSmallScreen from "./components/room-image-small-screen/RoomImageSmallScreen";
import Amenities from "./components/amenities/Amenities";
import Title from "./components/title/Title";
import Overview from "./components/overview/Overview";
import FeaturedInfo from "./components/featured-info/FeaturedInfo";
import AirCover from "./components/aircover/AirCover";
import Description from "./components/description/Description";
import BookingModule from "./components/booking-module/BookingModule";
import Comment from "./components/comment/Comment";
import RoomImageBigScreen from "./components/room-image-big-screen/RoomImageBigScreen";

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
    <>
      <RoomImageSmallScreen />
      <div className="container mx-auto">
        <div className="pt-4 px-4 md:px-8 xl:px-36">
          <Title tenPhong={room?.tenPhong} />
          <RoomImageBigScreen />
          <div className="md:flex">
            <div className="md:w-2/3 xl:flex-grow">
              <Overview room={room} />
              <FeaturedInfo />
              <AirCover />
              <Description moTa={room?.moTa} />
              <Amenities room={room} />
            </div>

            <div className="md:ml-4 flex-shrink-0 min-w-[250px] max-w-[500px]">
              <div className="sticky top-20">
                <BookingModule giaTien={room?.giaTien} />
              </div>
            </div>
          </div>
          <Comment roomId={room?.id} />
        </div>
      </div>
    </>
  );
}

export default RoomDetails;
