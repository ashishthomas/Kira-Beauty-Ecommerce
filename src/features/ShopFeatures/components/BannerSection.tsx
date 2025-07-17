import "../styles/ShopFeatures.scss";
import shopBanner from "../../../assets/png/Valentino-1.png";
import Button from "../../../components/common/Button/Button";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const BannerSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="hero-image banner-section">
      <img src={shopBanner} alt="Valentino Banner" />
      <div className="banner-text">
        <h1 className="banner-title">{t("shop.banner.title")}</h1>
        <p className="banner-offer">{t("shop.banner.offer")}</p>
        <p className="banner-desc">{t("shop.banner.description")}</p>
        <Button className="banner-cta-button" onClick={() => navigate("/shop")}>
          {t("shop.banner.buttonText")}
        </Button>
      </div>
    </div>
  );
};

export default BannerSection;
