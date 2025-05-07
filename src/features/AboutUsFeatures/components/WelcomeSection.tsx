import { WELCOME_CONSTANTS } from "../constants/ui-constants";
import "../styles/WelcomeSection.scss";
import welcome1 from "../../../assets/jpeg/Welcome_1.jpeg";
import welcome2 from "../../../assets/jpeg/Welcome_2.jpeg";

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <h1>{WELCOME_CONSTANTS.INTRO}</h1>
      <p>{WELCOME_CONSTANTS.DESCRIPTION}</p>
      <div className="welcome-image">
        <img src={welcome1} alt="Welcome 1" />
        <img src={welcome2} alt="Welcome 2" />
      </div>
    </section>
  );
};

export default WelcomeSection;
