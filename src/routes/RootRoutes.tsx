import { Navigate, RouteObject } from "react-router";
import AppLayout from "../components/AppLayout/AppLayout";
import HomePage from "../pages/Home/HomePage";
import AboutUs from "../pages/about us/AboutUs";

export const RootRoutes: RouteObject[] = [
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <div>Shop</div>,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "brand",
        element: <div>BRANDS</div>,
      },
    ],
  },
];
