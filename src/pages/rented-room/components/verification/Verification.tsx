import React from "react";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
function Verification() {
  const userState = useSelector((state: any) => state.userReducer);
  console.log(userState);
  return (
    <div className="hidden md:flex border border-gray-400 rounded-md h-fit py-5 px-10 flex-col max-w-sm w-1/4">
      <img
        src={
          userState.userInfo.avatar
            ? userState.userInfo.avatar
            : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        }
        alt="placeholder"
        className="h-32 w-32 rounded-full mx-auto"
      />
      <button className="underline font-bold mt-2 text-center block">
        Cập nhật ảnh
      </button>
      <div className="mt-4 border-bottom">
        <CheckCircleIcon className="h-8 w-8" />
        <h2 className="font-bold py-2">Xác minh danh tính</h2>
        <p>Xác minh danh tính của bạn với huy hiệu xác minh danh tính</p>
        <button className="rounded-md w-32 h-10 block border-2 border-black mt-4 active:scale-90 transition duration-200 ease-out">
          Nhận huy hiệu
        </button>
      </div>
      <div className="pt-4">
        <h2 className="font-bold text-lg pb-2">
          {userState.userInfo.name} đã xác nhận
        </h2>
        <div className="flex items-center space-x-1">
          <CheckIcon className="h-5 w-5" />
          <p>Địa chỉ email</p>
        </div>
        <div className="flex items-center space-x-1">
          <CheckIcon className="h-5 w-5" />
          <p>Số điện thoại</p>
        </div>
      </div>
    </div>
  );
}

export default Verification;
