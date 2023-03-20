import { Navigate, useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home/HomeLayout";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/page-not-found/PageNotFound";

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
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routing;
}
