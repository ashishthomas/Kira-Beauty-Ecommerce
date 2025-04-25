import HeroSection from "./components/HeroSection";
import ProductDisplay from "./components/ProductDisplay";
import ProductsList from "./components/ProductsList";
import ShopByCategory from "./components/ShopByCategory";
import "./styles/HomeFeatures.scss";

const HomeFeatures = () => {
  return (
    <div>
      <HeroSection />
      <ShopByCategory />
      <ProductDisplay />
      <ProductsList />
    </div>
  );
};

export default HomeFeatures;
