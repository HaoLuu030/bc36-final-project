import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRoomById } from "../../services/room";
import { StarIcon, ShareIcon, HeartIcon } from "@heroicons/react/solid";
import { randomNumGenerator } from "../../utils";

interface Room {
  tenPhong: string;
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
      <div className="w-screen">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-49936031/original/39d61fcc-c774-429f-bc79-f1c8360da98e.jpeg?im_w=720"
          alt="hello"
          className="w-full object-fill"
        />
      </div>
      <div className="pt-4 px-6">
        <h1>{room?.tenPhong}</h1>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <p className="flex items-center">
              <StarIcon className="w-4 h-4" />
              {randomNumGenerator(1, 5)}
            </p>
            <p>{randomNumGenerator(50, 100)} Đánh giá</p>
            <p></p>
          </div>
          <div className="flex space-x-4">
            <p className="flex items-center ">
              <ShareIcon className="w-6 h-6" /> Chia sẻ
            </p>
            <p className="flex items-center">
              <HeartIcon className="w-6 h-6" /> Lưu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
