import React from "react";
import ShieldIcon from "../shield-icon/ShieldIcon";
import LockIcon from "../lock-icon/LockIcon";
import EyeIcon from "../eye-icon/EyeIcon";

function ExtraInfo() {
  return (
    <div className="border-gray-400 rounded-md border py-4 px-6">
      <div className="border-bottom">
        <ShieldIcon />
        <h2 className="title-extra-info">
          Tại sao thông tin của tôi lại không hiện ở đây?
        </h2>
        <p className="content-extra-info">
          Chúng tôi đã ẩn đi một số thông tin nhằm bảo vệ danh tính của bạn
        </p>
      </div>
      <div className="pt-4 border-bottom">
        <LockIcon />
        <h2 className="title-extra-info">Tôi được sửa các thông tin nào?</h2>
        <p className="content-extra-info">
          Bạn không thể sửa các thông tin được Airbnb dùng để xác nhận danh tính
          của bạn. Bạn có thể sửa một số thông tin liên lạc và thông tin cá
          nhân, nhưng chúng tôi sẽ yêu cầu bạn xác nhận lại danh tính trong lần
          đặt phòng hay thuê phòng tới.
        </p>
      </div>
      <div className="pt-4">
        <EyeIcon />
        <h2 className="title-extra-info">
          Các thông tin nào sẽ được chia sẻ với bên khác
        </h2>
        <p className="content-extra-info">
          Airbnb chỉ tiết lộ thông tin của Chủ nhà và người thuê nhà sau khi
          hoàn thành xác nhận đặt phòng.
        </p>
      </div>
    </div>
  );
}

export default ExtraInfo;
