import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import "./index.scss";
import { useSearchParams } from "react-router-dom";
import { randomNumGenerator } from "../../../utils";
interface Props {
  price: number;
  bed: number;
  living: number;
  bedRoom: number;
  bathRoom: number;
  image: string;
  name: string;
}
function InfoCard(props: Props) {
  const [searchParams] = useSearchParams();
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover: opacity-80 hover:shadow-lg transition-none duration-200 ease-out first:border-t">
      <div className="relative w-60 h-30 overflow-hidden background flex-shrink rounded-lg">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-821938101321440797/original/293fd61c-841d-4dc5-a397-4559ea4cbdf3.jpeg?im_w=720"
          alt={props.name}
          className="object-fill w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="text-xs">
            Toàn bộ căn hộ dịch vụ tại {searchParams.get("location")}
          </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4>{props.name}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {props.bathRoom} phòng tắm, {props.bedRoom} phòng ngủ, {props.living}{" "}
          phòng khách, {props.bed} giường
        </p>
        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {randomNumGenerator(1, 5)}
          </p>
          <p className="font-semibold text-lg lg:text-2xl pb-2">
            ${props.price}/Đêm
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
