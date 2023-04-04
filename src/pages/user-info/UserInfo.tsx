import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PersonalInfoItem from "./components/personal-info-item/PersonalInfoItem";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import ExtraInfo from "./components/extra-info/ExtraInfo";

function UserInfo() {
  const navigate = useNavigate();
  //show the border when user scroll down
  useEffect(() => {
    function modifyShadow() {
      if (window.scrollY !== 0) {
        document.querySelector(".back-button")?.classList.add("shadow-lg");
      } else {
        document.querySelector(".back-button")?.classList.remove("shadow-lg");
      }
    }
    window.addEventListener("scroll", modifyShadow);
    return () => {
      window.removeEventListener("scroll", modifyShadow);
    };
  }, [window.scrollY]);
  const userState = useSelector((state: any) => state.userReducer);
  const { birthday, email, name, phone } = userState.userInfo;
  return (
    <div className="pt-24 pb-10 px-5 max-w-4xl mx-auto">
      <div className="fixed w-full top-0 left-0 back-button z-50 bg-white flex items-center h-14 px-4 md:hidden">
        <ChevronLeftIcon
          onClick={() => {
            navigate("/home");
          }}
          className="w-6 h-6 text-gray-900 rounded-full bg-white cursor-pointer"
        />
      </div>
      <h1 className="text-2xl pb-10 font-bold">Thông tin người dùng</h1>
      <div className="block md:flex md:space-x-10">
        <div className="personal-info md:w-2/3">
          <PersonalInfoItem
            type="text"
            title="Họ tên"
            content={name}
            name="name"
            placeholder="Điền họ tên"
          />
          <PersonalInfoItem
            type="text"
            title="Email"
            content={email}
            name="email"
            placeholder="Điền email"
          />
          <PersonalInfoItem
            type="date"
            title="Ngày sinh"
            content={birthday}
            name="birthday"
            placeholder=""
          />
          <PersonalInfoItem
            type="string"
            title="Số điện thoại"
            content={phone}
            name="phone"
            placeholder="Điền số điện thoại"
          />
          <PersonalInfoItem
            type=""
            title="Chứng minh thư"
            content=""
            name="id"
            placeholder=""
          />
          <PersonalInfoItem
            type=""
            title="Địa chỉ"
            content=""
            name="address"
            placeholder=""
          />
          <PersonalInfoItem
            type=""
            title="Thông tin liên lạc khẩn cấp"
            content=""
            name="emergency-contact"
            placeholder=""
          />
        </div>
        <div className="extra-info hidden md:block w-1/3">
          <ExtraInfo />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
