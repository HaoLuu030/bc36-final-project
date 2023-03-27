import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home/HomeLayout";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import RoomByLocation from "../pages/room-by-location/RoomByLocation";
import RoomDetails from "../pages/room-details/RoomDetails";
import LogIn from "../pages/sign-up-and-log-in/components/log-in/LogIn";
import SignUpAndLogIn from "../pages/sign-up-and-log-in/SignUpAndLogIn";
import SignUp from "../pages/sign-up-and-log-in/SignUpAndLogIn";

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
      ],
    },

    {
      path: "/sign-up",
      element: <SignUpAndLogIn />,
    },
    {
      path: "log-in",
      element: <SignUpAndLogIn />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routing;
}
