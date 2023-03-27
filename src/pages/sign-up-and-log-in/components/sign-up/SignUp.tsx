import React from "react";

function SignUp() {
  return (
    <form className="pt-2 grid grid-cols-1 md:grid-cols-2 md:gap-4">
      <div className="form-item-sign-up">
        <label htmlFor="name" className="form-label">
          Tên người dùng
        </label>
        <input
          type="text"
          className="form-input-sign-up"
          id="name"
          placeholder="Trần Văn A"
        />
      </div>
      <div className="form-item-sign-up">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input-sign-up"
          placeholder="TranVanA@email.com"
        />
      </div>
      <div className="form-item-sign-up">
        <label htmlFor="phone" className="form-label">
          Số điện thoại
        </label>
        <input
          type="tel"
          className="form-input-sign-up"
          id="phone"
          placeholder="0908876432"
        />
      </div>
      <div className="form-item-sign-up">
        <label htmlFor="password" className="form-label">
          Mật khẩu
        </label>
        <input
          type="password"
          id="password"
          className="form-input-sign-up"
          placeholder="Chứa ít nhất 8 ký tự"
        />
      </div>
      <div className="form-item-sign-up">
        {" "}
        <label htmlFor="address" className="form-label">
          Địa chỉ
        </label>
        <input
          type="text"
          className="form-input-sign-up"
          id="address"
          placeholder="12/3/4 đường A phường B quận C, thành phố D"
        />
      </div>
      <div className="form-item-sign-up">
        <label htmlFor="dob" className="form-label">
          Ngày sinh
        </label>
        <input type="date" className="form-input-sign-up" id="dob" />
      </div>
      <div className="form-item-sign-up">
        <label htmlFor="gender" className="form-label">
          Giới tính
        </label>
        <select className="form-input-sign-up">
          <option value={1}>Nam</option>
          <option value={0}>Nữ</option>
        </select>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button className="sign-up-button">Đăng ký</button>
      </div>
    </form>
  );
}

export default SignUp;
