import "../styles/ShopFeatures.scss";
import shopBanner from "../../../assets/png/Valentino.png";

const BannerSection: React.FC = () => {
  return (
    <div className="hero-image">
      <img src={shopBanner} alt="Valentino Banner" />
    </div>
  );
};

export default BannerSection;
