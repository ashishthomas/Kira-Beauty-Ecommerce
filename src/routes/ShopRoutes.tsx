import { Navigate } from "react-router";
import Fragrance from "../features/ShopFeatures/components/FragranceSection";
import Skincare from "../features/ShopFeatures/components/SkinCareSection";
import Makeup from "../features/ShopFeatures/components/MakeUpSection";
import Mensgrooming from "../features/ShopFeatures/components/GroomingSection";
import Topbrands from "../features/ShopFeatures/components/TopBrandsSection";


export const ShopRoutes = [
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

        path: "grooming",
        element: <Mensgrooming/>
      },
      
      {

        path: "top-brands",
        element: <Topbrands/>
      }
]