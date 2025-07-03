import "../styles/ShopFeatures.scss";
import shopBanner from "../../../assets/png/Valentino-1.png";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router";

const BannerSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-image banner-section">
      <img src={shopBanner} alt="Valentino Banner" />
      <div className="banner-text">
        <h1 className="banner-title">VALENTINO</h1>
        <p className="banner-offer">Enjoy a flat 15% off</p>
        <p className="banner-desc">on luxe scents</p>
        <Button className="banner-cta-button" onClick={() => navigate("/shop")}>
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default BannerSection;
