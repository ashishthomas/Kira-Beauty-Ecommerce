// import { QUALITY_CONSTANTS } from "../constants/ui-constants";
import "../styles/QualitySection.scss";
import { useTranslation } from "react-i18next";

const QualitySection = () => {
  const { t } = useTranslation();
  return (
    <section className="quality">
      {/* <h2>{QUALITY_CONSTANTS.INTRO}</h2>
      <p>{QUALITY_CONSTANTS.DESCRIPTION}</p> */}
      <h2>{t("quality.intro")}</h2>
      <p>{t("quality.description")}</p>
    </section>
  );
};

export default QualitySection;
