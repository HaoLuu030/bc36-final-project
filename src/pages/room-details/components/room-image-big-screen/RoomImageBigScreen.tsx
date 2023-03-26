import React from "react";

function RoomImageBigScreen() {
  return (
    <>
      {/* img big screen */}
      <div className="hidden md:grid grid-cols-2 gap-2">
        <div className="left">
          <img
            src="https://a0.muscache.com/im/pictures/372940fd-16f1-46bf-9ec0-f77c1f0bd160.jpg?im_w=720"
            alt="main img"
            className="rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <div className="right grid-cols-2 grid gap-2">
          <img
            src="https://a0.muscache.com/im/pictures/3d262be7-6c34-4151-9910-2ea684cc241c.jpg?im_w=720"
            alt="img 02"
          />
          <img
            src=" https://a0.muscache.com/im/pictures/22259627-28aa-4d33-ba4f-6a167787550c.jpg?im_w=720"
            alt="img 03"
            className="rounded-tr-2xl"
          />
          <img
            src=" https://a0.muscache.com/im/pictures/31b573d7-f031-4958-a3fa-03276e53805e.jpg?im_w=720"
            alt="img 04"
          />
          <img
            src="https://a0.muscache.com/im/pictures/fce1bef6-ada1-4b16-8526-9670ff76f9e3.jpg?im_w=720"
            alt="img 05"
            className="rounded-br-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default RoomImageBigScreen;
