import React, { FormEvent, useState } from "react";
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
      name: "userName",
      type: "text",
      placeholder: "Trần Văn A",
      errorMessage:
        "Tên người dùng phải từ 3-16 ký tự, và không được chứa ký tữ đặc biệt",
      label: "Tên người dùng",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      // required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "TranVanA@gmail.com",
      errorMessage: "Email không đúng định dạng",
      label: "Email",
      pattern: `^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",
      label: "Email`,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "0908765478",
      errorMessage: "Số điện thoại không đúng định dạng",
      label: "Điện thoại",
      pattern: "(84|0[3|5|7|8|9])+([0-9]{8})",
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "123 đường A phường B quận C thành phố D",
      label: "Địa chỉ",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "TranVanA678123@",
      errorMessage:
        "Mật khẩu phải từ 8-20 ký tự vá phải chứa ít nhất 1 chữ cái, 1 chữ số và 1 ký tự đặc biệt",
      label: "Mật khẩu",
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "TranVanA678123@",
      errorMessage: "Mật khẩu không khớp",
      label: "Xác nhận mật khẩu",
      pattern: values.password,
    },

    {
      id: 7,
      name: "dob",
      type: "date",
      label: "Ngày sinh",
    },
  ];
  const handleChange = (
    event: React.FormEvent<HTMLInputElement> | FormEvent<HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [(event.target as HTMLInputElement | HTMLSelectElement).name]: [
        (event.target as HTMLInputElement | HTMLSelectElement).value,
      ],
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="pt-2 grid grid-cols-1 md:grid-cols-2 md:gap-2"
    >
      {inputs.map(
        (elem: {
          placeholder?: string;
          id: number;
          name: string;
          type: string;
          label: string;
          errorMessage?: string;
          pattern?: string;
        }) => {
          return (
            <FormInput
              handleChange={handleChange}
              key={elem.id}
              {...elem}
              value={values[elem.name as keyof typeof values]}
              errorMessage={elem.errorMessage}
              pattern={elem.pattern}
            />
          );
        }
      )}
      <div className="form-item-sign-up space-y-2">
        <label htmlFor="gender" className="form-label">
          Giới tính
        </label>
        <select
          onChange={handleChange}
          id="gender"
          className="form-input-sign-up"
        >
          <option value={1}>Nam</option>
          <option value={0}>Nữ</option>
        </select>
      </div>
      <div className="w-full flex justify-center mt-4 col-span-2">
        <button type="submit" className="sign-up-button">
          Đăng ký
        </button>
      </div>
    </form>
  );
}

export default SignUp;
