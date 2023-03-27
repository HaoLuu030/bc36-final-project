import React from "react";
import { NavLink } from "react-router-dom";
import { useConfirmSignUp } from "../../../../hooks";
function SwitchButton() {
  return (
    <React.Fragment>
      {useConfirmSignUp() ? (
        <NavLink to={"/log-in"} className="switch-button block text-center">
          Đăng nhập ngay
        </NavLink>
      ) : (
        <p className="pt-2 w-full text-center">
          Chưa có tài khoản?{" "}
          <span>
            <NavLink className="switch-button" to={"/sign-up"}>
              Đăng ký ngay
            </NavLink>
          </span>
        </p>
      )}
    </React.Fragment>
  );
}

export default SwitchButton;
