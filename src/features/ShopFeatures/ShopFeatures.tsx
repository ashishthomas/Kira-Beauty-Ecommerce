import React from "react";
import { Outlet } from "react-router";
import BannerSection from "./components/BannerSection.tsx";
import NavigateCategorySection from "./components/NavigateCategorySection.tsx";

const ShopFeatures: React.FC = () => {
  return (
    <div>
      <BannerSection />
      <NavigateCategorySection />
      <Outlet />
    </div>
  );
};

export default ShopFeatures;
