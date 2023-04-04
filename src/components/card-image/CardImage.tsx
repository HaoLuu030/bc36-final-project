import React from "react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartIcon } from "@heroicons/react/solid";
import "./index.scss";

function CardImage() {
  return (
    <div className="info-img">
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
    </div>
  );
}

export default CardImage;
