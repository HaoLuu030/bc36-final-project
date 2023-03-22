import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import "./index.scss";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { randomNumGenerator } from "../../../utils";
import moment from "moment";
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
    <div className="info-card w-11/12">
      <Swiper
        className="flex items-center relative mb-4"
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: false,
        }}
        navigation={{ enabled: true }}
      >
        <SwiperSlide className="info-card-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/372940fd-16f1-46bf-9ec0-f77c1f0bd160.jpg?im_w=720"
            alt="img 1"
            className="info-card-image"
          />
        </SwiperSlide>
        <SwiperSlide className="info-card-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/3d262be7-6c34-4151-9910-2ea684cc241c.jpg?im_w=720"
            alt="img 2"
            className="info-card-image"
          />
        </SwiperSlide>
        <SwiperSlide className="info-card-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/22259627-28aa-4d33-ba4f-6a167787550c.jpg?im_w=720"
            alt="img 3"
            className="info-card-image"
          />
        </SwiperSlide>
        <SwiperSlide className="info-card-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/31b573d7-f031-4958-a3fa-03276e53805e.jpg?im_w=720"
            alt="img 4"
            className="info-card-image"
          />
        </SwiperSlide>
        <SwiperSlide className="info-card-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/fce1bef6-ada1-4b16-8526-9670ff76f9e3.jpg?im_w=720"
            alt="img 5"
            className="info-card-image"
          />
        </SwiperSlide>
        <HeartIcon className="h-8 w-8 sm:h-6 sm:w-6 absolute z-50 top-4 right-4 opacity-80" />
      </Swiper>

      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold">
          Căn hộ ở {searchParams.get("location")}
        </h4>
        <p className="flex items-center text-xl font-bold">
          <StarIcon className="h-8 w-8 md:h-6 md:w-6 text-red-400" />
          {randomNumGenerator(1, 5)}
        </p>
      </div>
      <p className="info-text md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
        {props.name}
      </p>
      <p className="info-text">{props.bed} giường</p>
      <p className="info-text">
        {`${moment(searchParams.get("checkInDate")).format("DD/MM")} - ${moment(
          searchParams.get("checkOutDate")
        ).format("DD/MM")}`}
      </p>
      <p className="text-right">
        <strong className="text-2xl">${props.price}</strong>/đêm
      </p>
    </div>
  );
}

export default InfoCard;
