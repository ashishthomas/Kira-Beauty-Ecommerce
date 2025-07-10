import Button from "../../../components/common/Button/Button";
import "@src/features/HomeFeatures/styles/ProductDisplay.scss";
import { HOME_LABEL_CONSTANTS } from "../constants/ui-constants";
import display from "../../../assets/png/Display_Section_1.png";
import { useNavigate } from "react-router";

const ProductDisplay = () => {
  const navigate = useNavigate();
  return (
    <div className="product-section">
      <div className="product-text">
        <h3>{HOME_LABEL_CONSTANTS.INTRO}</h3>
        <p>{HOME_LABEL_CONSTANTS.DESCRIPTION}</p>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => navigate("/shop")}
        >
          {HOME_LABEL_CONSTANTS.BUTTON_TEXT}
        </Button>
      </div>
      <div className="product-image">
        <img src={display} alt="Display Image" />
      </div>
    </div>
  );
};

export default ProductDisplay;
