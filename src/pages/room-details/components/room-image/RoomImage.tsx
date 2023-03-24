import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ShareIcon, ChevronLeftIcon, HeartIcon } from "@heroicons/react/solid";
//swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

function RoomImage() {
  return (
    <div className="w-screen relative">
      <div className="flex justify-between absolute left-0 right-0 top-3 px-2 z-50">
        <ChevronLeftIcon className="w-6 h-6 rounded-full bg-white p-0 cursor-pointer" />
        <div className="flex space-x-2">
          <ShareIcon className="w-6 h-6 rounded-full bg-white p-1 cursor-pointer" />
          <HeartIcon className="w-6 h-6 rounded-full bg-white p-1 cursor-pointer" />
        </div>
      </div>
      <LightGallery
        plugins={[lgZoom, lgThumbnail]}
        mode="lg-fade"
        elementClassNames="img-gallery"
      >
        <a href="https://a0.muscache.com/im/pictures/372940fd-16f1-46bf-9ec0-f77c1f0bd160.jpg?im_w=720">
          <Swiper
            className="flex items-center"
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
              clickable: false,
            }}
          >
            <SwiperSlide className="">
              <img
                src="https://a0.muscache.com/im/pictures/372940fd-16f1-46bf-9ec0-f77c1f0bd160.jpg?im_w=720"
                alt="img 1"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="https://a0.muscache.com/im/pictures/3d262be7-6c34-4151-9910-2ea684cc241c.jpg?im_w=720"
                alt="img 2"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="https://a0.muscache.com/im/pictures/22259627-28aa-4d33-ba4f-6a167787550c.jpg?im_w=720"
                alt="img 3"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="https://a0.muscache.com/im/pictures/31b573d7-f031-4958-a3fa-03276e53805e.jpg?im_w=720"
                alt="img 4"
                className=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src="https://a0.muscache.com/im/pictures/fce1bef6-ada1-4b16-8526-9670ff76f9e3.jpg?im_w=720"
                alt="img 5"
                className=""
              />
            </SwiperSlide>
          </Swiper>
        </a>
        <a
          href="https://a0.muscache.com/im/pictures/3d262be7-6c34-4151-9910-2ea684cc241c.jpg?im_w=720"
          className="hidden"
        >
          <img
            src="https://a0.muscache.com/im/pictures/3d262be7-6c34-4151-9910-2ea684cc241c.jpg?im_w=720"
            alt="img 2"
            className="w-full object-fill"
          />
        </a>
        <a
          href="https://a0.muscache.com/im/pictures/22259627-28aa-4d33-ba4f-6a167787550c.jpg?im_w=720"
          className="hidden"
        >
          <img
            src="https://a0.muscache.com/im/pictures/22259627-28aa-4d33-ba4f-6a167787550c.jpg?im_w=720"
            alt="img 3"
            className="w-full object-fill"
          />
        </a>
        <a
          href="https://a0.muscache.com/im/pictures/31b573d7-f031-4958-a3fa-03276e53805e.jpg?im_w=720"
          className="hidden"
        >
          <img
            src="https://a0.muscache.com/im/pictures/31b573d7-f031-4958-a3fa-03276e53805e.jpg?im_w=720"
            alt="img 4"
            className="w-full object-fill"
          />
        </a>
        <a
          href="https://a0.muscache.com/im/pictures/fce1bef6-ada1-4b16-8526-9670ff76f9e3.jpg?im_w=720"
          className="hidden"
        >
          <img
            src="https://a0.muscache.com/im/pictures/fce1bef6-ada1-4b16-8526-9670ff76f9e3.jpg?im_w=720"
            alt="img 5"
            className="w-full object-fill"
          />
        </a>
      </LightGallery>
    </div>
  );
}

export default RoomImage;
