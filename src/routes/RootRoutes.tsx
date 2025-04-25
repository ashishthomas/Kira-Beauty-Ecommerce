import { Navigate, RouteObject } from "react-router";
import AppLayout from "../components/AppLayout/AppLayout";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import BrandPage from "../pages/BrandsPage";

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
        element: <AboutUsPage />,
      },
      {
        path: "brand",
        element: <BrandPage />,
      },
    ],
  },
];
