import Button from "../../../components/common/Button/Button";
import "../styles/ProductDisplay.scss";
import display from "../../../assets/png/Display_Section_1.png";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ProductDisplay = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="product-section">
      <div className="product-text">
        <h3>{t("productDisplay.intro")}</h3>
        <p>{t("productDisplay.description")}</p>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => navigate("/shop")}
        >
          {t("productDisplay.buttonText")}
        </Button>
      </div>
      <div className="product-image">
        <img src={display} alt="Display Image" />
      </div>
    </div>
  );
};

export default ProductDisplay;
