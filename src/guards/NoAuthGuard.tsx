import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

function NoAuthGuard() {
  const userState = useSelector((state: any) => state.userReducer);

  return (
    <React.Fragment>
      {userState.userInfo ? <Navigate to={"/home"} /> : <Outlet />}
    </React.Fragment>
  );
}

export default NoAuthGuard;
