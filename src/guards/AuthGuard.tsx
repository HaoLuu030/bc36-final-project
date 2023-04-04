import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthGuard() {
  const userState = useSelector((state: any) => state.userReducer);
  return (
    <React.Fragment>
      {userState.userInfo ? <Outlet /> : <Navigate to={"/log-in"} />}
    </React.Fragment>
  );
}

export default AuthGuard;
