import { Navigate, RouteObject } from "react-router";
import AppLayout from "../components/AppLayout/AppLayout";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import BrandPage from "../pages/BrandsPage";
import ShopPage from "../pages/ShopPage";
import Fragrance from "../features/ShopFeatures/components/FragranceSection";
import Skincare from "../features/ShopFeatures/components/SkinCareSection";
import Makeup from "../features/ShopFeatures/components/MakeUpSection";
import Mensgrooming from "../features/ShopFeatures/components/GroomingSection";
import Topbrands from "../features/ShopFeatures/components/TopBrandsSection";

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
        element: <ShopPage/>,
        children: [
          {
            path: "",
            element: <Navigate to="fragrance" replace />,
          },
          {

            path: "fragrance",
            element: <Fragrance/>
          },
          {

            path: "skincare",
            element: <Skincare/>
          },
          {

            path: "makeup",
            element: <Makeup/>
          },
          {

            path: "mens-grooming",
            element: <Mensgrooming/>
          },
          
          {

            path: "top-brands",
            element: <Topbrands/>
          }

        ]
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
