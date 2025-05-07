import Button from "../../../components/common/Button/Button";
import "@src/features/HomeFeatures/styles/ProductDisplay.scss";
import { HOME_LABEL_CONSTANTS } from "../constants/ui-constants";
import display from "../../../assets/png/Display_Section_1.png";

const ProductDisplay = () => {
  return (
    <div className="product-section">
      <div className="product-text">
        <h3>{HOME_LABEL_CONSTANTS.INTRO}</h3>
        <p>{HOME_LABEL_CONSTANTS.DESCRIPTION}</p>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => console.log("Shop now clicked")}
        >
          {HOME_LABEL_CONSTANTS.BUTTON_TEXT}
        </Button>
      </div>
      <div className="product-image">
        <img src={display} alt="Kira Revitalizing Handwash" />
      </div>
    </div>
  );
};

export default ProductDisplay;
