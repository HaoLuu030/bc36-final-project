import React from "react";
import { useLocation } from "react-router-dom";

import LogIn from "./components/log-in/LogIn";
import SignUp from "./components/sign-up/SignUp";
import Title from "./components/title/Title";
import { useConfirmSignUp } from "../../hooks";
import SwitchButton from "./components/switch-button/SwitchButton";

function SignUpAndLogIn() {
  const location = useLocation();
  return (
    <div
      className="w-screen h-screen relative"
      style={{
        backgroundImage:
          "url('https://demo4.cybersoft.edu.vn/static/media/logo_login.a444f2681cc7b623ead2.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full p-5">
        <div className="min-w-[300px] max-w-[450px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white z-0 p-5">
          <Title />
          {useConfirmSignUp() ? <SignUp /> : <LogIn />}

          <SwitchButton />
        </div>
      </div>
    </div>
  );
}

export default SignUpAndLogIn;
