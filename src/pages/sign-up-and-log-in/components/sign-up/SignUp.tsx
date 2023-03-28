import React, { useState } from "react";
import FormInput from "./components/form-input/FormInput";

function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const [values, setValues] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    dob: "",
    gender: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Trần Văn A",
      label: "Tên người dùng",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "TranVanA@gmail.com",
      label: "Email",
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "0908765478",
      label: "Điện thoại",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "TranVanA678123",
      label: "Mật khẩu",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "TranVanA678123",
      label: "Xác nhận mật khẩu",
    },
    {
      id: 6,
      name: "address",
      type: "text",
      placeholder: "123 đường A phường B quận C thành phố D",
      label: "Địa chỉ",
    },
    {
      id: 7,
      name: "dob",
      type: "date",
      label: "Ngày sinh",
    },
  ];
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    setValues({...values, [event.target.name]: event.target.value})
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="pt-2 grid grid-cols-1 md:grid-cols-2 md:gap-4"
    >
      {inputs.map(
        (elem: {
          placeholder?: string;
          id: number;
          name: string;
          type: string;
          label: string;
        }) => {
          return <FormInput onChange={handleChange} key={elem.id} {...elem} />;
        }
      )}
      <div className="form-item-sign-up">
        <label htmlFor="gender" className="form-label">
          Giới tính
        </label>
        <select id="gender" className="form-input-sign-up">
          <option value={1}>Nam</option>
          <option value={0}>Nữ</option>
        </select>
      </div>
      <div className="w-full flex justify-center mt-4">
        <button type="submit" className="sign-up-button">
          Đăng ký
        </button>
      </div>
    </form>
  );
}

export default SignUp;
