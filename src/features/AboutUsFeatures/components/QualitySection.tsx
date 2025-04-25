import { QUALITY_CONSTANTS } from "../constants/ui-constants";
import "../styles/QualitySection.scss";

const QualitySection = () => {
  return (
    <section className="quality">
      <h2>{QUALITY_CONSTANTS.INTRO}</h2>
      <p>{QUALITY_CONSTANTS.DESCRIPTION}</p>
    </section>
  );
};

export default QualitySection;
