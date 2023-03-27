import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { logInApi } from "../../../../services/user";
import { setUserInfoAction } from "../../../../store/action/userActions";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await logInApi({
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value,
      });
      localStorage.setItem(
        "USER_INFO_KEY",
        JSON.stringify(result.data.content.user)
      );
      dispatch(setUserInfoAction(result.data.content.user));
      alert("Đăng nhập thành công");
      navigate("/home");
    } catch (error: any) {
      alert(error.response.data.content);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="form-item-sign-up">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          required
          className="form-input-sign-up"
          type="text"
          id="email"
          ref={emailRef}
        />
      </div>
      <div className="form-item-sign-up">
        <label className="form-label" htmlFor="password">
          Mật khẩu
        </label>
        <input
          required
          className="form-input-sign-up"
          type="password"
          id="password"
          ref={passwordRef}
        />
      </div>
      <div className="w-full flex items-center justify-center md:pt-4">
        <a
          href="#"
          className="text-rose-700 hover:text-rose-500 hover:underline underline-offset-4 duration-200 block w-1/2 flex-shrink-0"
        >
          Quên mật khẩu?
        </a>
        <button type="submit" className="sign-up-button block w-1/2">
          Đăng nhập
        </button>
      </div>
    </form>
  );
}

export default LogIn;
