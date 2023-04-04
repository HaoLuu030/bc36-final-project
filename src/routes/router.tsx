import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import NoAuthGuard from "../guards/NoAuthGuard";
import HomeLayout from "../layouts/home/HomeLayout";

import Home from "../pages/home/Home";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import RoomByLocation from "../pages/room-by-location/RoomByLocation";
import RoomDetails from "../pages/room-details/RoomDetails";

import SignUpAndLogIn from "../pages/sign-up-and-log-in/SignUpAndLogIn";
import UserInfo from "../pages/user-info/UserInfo";
import RentedRoom from "../pages/rented-room/RentedRoom";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to={"/home"} />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/room-by-location/:locationId",
          element: <RoomByLocation />,
        },
        {
          path: "room-details/:roomId",
          element: <RoomDetails />,
        },
        {
          path: "/user-info",
          element: <AuthGuard />,
          children: [
            {
              path: "/user-info",
              element: <UserInfo />,
            },
          ],
        },
        {
          path: "/rented-room",
          element: <AuthGuard />,
          children: [
            {
              path: "/rented-room",
              element: <RentedRoom />,
            },
          ],
        },
      ],
    },
    {
      path: "/sign-up",
      element: <NoAuthGuard />,
      children: [
        {
          path: "/sign-up",
          element: <SignUpAndLogIn />,
        },
      ],
    },
    {
      path: "/log-in",
      element: <NoAuthGuard />,
      children: [
        {
          path: "/log-in",
          element: <SignUpAndLogIn />,
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routing;
}
