import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../../../../services/user";
import FormInput from "./components/form-input/FormInput";

function SignUp() {
  const navigate = useNavigate();
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = (event.target as HTMLFormElement).checkValidity();

    if (!isValid) {
      return;
    }
    try {
      await signUpApi({
        name: values.userName,
        email: values.email,
        password: values.password,
        phone: values.phone,
        birthday: values.dob,
        gender: Boolean(values.gender),
      });
      alert("Đăng ký thành công!");
      navigate("/log-in");
    } catch (error: any) {
      alert(error.response.data.content);
    }
  };

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
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "TranVanA@gmail.com",
      errorMessage: "Email không đúng định dạng",
      label: "Email",
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "0908765478",
      errorMessage: "Số điện thoại không đúng định dạng",
      label: "Điện thoại",
      pattern: "(84|0[3|5|7|8|9])+([0-9]{8})",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "123 đường A phường B quận C thành phố D",
      label: "Địa chỉ",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "text",
      placeholder: "TranVanA678123@",
      errorMessage:
        "Mật khẩu phải từ 8-20 ký tự vá phải chứa ít nhất 1 chữ cái, 1 chữ số và 1 ký tự đặc biệt",
      label: "Mật khẩu",
      pattern:
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$",
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "text",
      placeholder: "TranVanA678123@",
      errorMessage: "Mật khẩu không khớp",
      label: "Xác nhận mật khẩu",
      pattern: `^${values.password}$`,
      required: true,
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
    const { name, value } = event.target as
      | HTMLInputElement
      | HTMLSelectElement;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <form
      noValidate
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
          required?: boolean;
        }) => {
          return (
            <FormInput
              handleChange={handleChange}
              key={elem.id}
              {...elem}
              value={values[elem.name as keyof typeof values]}
              patternErrorMessage={elem.errorMessage}
              pattern={elem.pattern}
              required={elem.required}
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
