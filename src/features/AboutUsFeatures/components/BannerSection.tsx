// import { BANNER_CONSTANTS } from "../constants/ui-constants";
import "../styles/BannerSection.scss";
import banner from "../../../assets/jpeg/bannerImage.jpeg";
import { useTranslation } from "react-i18next";

const BannerSection = () => {
  const { t } = useTranslation();
  return (
    <section className="banner-product">
      <div className="banner-product-image">
        <img src={banner} alt="Kira Product" />
      </div>
      <div className="banner-product-content">
        {/* <h2>{BANNER_CONSTANTS.INTRO}</h2>
        <p>{BANNER_CONSTANTS.DESCRIPTION}</p> */}
        <h2>{t("banner.intro")}</h2>
        <p>{t("banner.description")}</p>
      </div>
    </section>
  );
};

export default BannerSection;
