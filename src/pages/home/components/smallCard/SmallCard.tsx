import React from "react";
import { randomNumGenerator } from "../../../../utils";
interface Props {
  location: {
    id: number;
    tinhThanh: string;
    hinhAnh: string;
  };
}
function SmallCard(props: Props) {
  return (
    <div className="flex items-center space-x-4 mt-3 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-150 ease-out">
      <div className="relative h-16 w-16">
        <img
          className="rounded-lg h-full object-cover"
          src={props.location.hinhAnh}
          alt=""
        />
      </div>
      <div>
        <h2>{props.location.tinhThanh}</h2>
        <h3 className="text-gray-500">
          {randomNumGenerator(15, 120)} phút chạy xe
        </h3>
      </div>
    </div>
  );
}

export default SmallCard;
