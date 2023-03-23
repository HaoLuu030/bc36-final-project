import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home/HomeLayout";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import RoomByLocation from "../pages/room-by-location/RoomByLocation";
import RoomDetails from "../pages/room-details/RoomDetails";

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
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routing;
}
