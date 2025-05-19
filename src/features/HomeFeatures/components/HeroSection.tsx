import Button from "../../../components/common/Button/Button";
import "../styles/HeroSection.scss";
import { HERO_CONSTANTS } from "../constants/ui-constants";
import heroOne from "../../../assets/png/Hero1.png";
import heroTwo from "../../../assets/jpeg/Hero3.jpeg";
import heroThree from "../../../assets/jpeg/Hero2.jpeg";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/Store";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const userName = useSelector((state: RootState) => state.auth.userName);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-text">
          {isLoggedIn && userName && (
            <p className="welcome-message">Welcome, {userName}</p>
          )}
          <h1>{HERO_CONSTANTS.INTRO}</h1>
          <p>{HERO_CONSTANTS.DESCRIPTION}</p>

          <Button
            variant="primary"
            size="medium"
            onClick={() => navigate("/about")}
          >
            {HERO_CONSTANTS.BUTTON_TEXT}
          </Button>
        </div>

        <div className="hero-images">
          <div className="left-images">
            <img src={heroOne} alt="Product 1" className="image-small" />
            <img src={heroTwo} alt="Product 2" className="image-small" />
          </div>
          <div className="right-image">
            <img src={heroThree} alt="Product 3" className="image-tall" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
