import { WELCOME_CONSTANTS } from "../constants/ui-constants";
import "../styles/WelcomeSection.scss";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <h1>{WELCOME_CONSTANTS.INTRO}</h1>
      <p>{WELCOME_CONSTANTS.DESCRIPTION}</p>
      <div className="welcome-image">
        <img src="src/assets/Welcome_Images/Welcome_1.jpeg" alt="Welcome 1" />
        <img src="src/assets/Welcome_Images/Welcome_2.jpeg" alt="Welcome 2" />
      </div>
    </section>
  );
};

export default WelcomeSection;
