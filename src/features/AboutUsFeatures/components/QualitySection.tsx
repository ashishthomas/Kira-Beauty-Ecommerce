import "../styles/QualitySection.scss";
import { useTranslation } from "react-i18next";

const QualitySection = () => {
  const { t } = useTranslation();
  return (
    <section className="quality">
      <h2>{t("quality.intro")}</h2>
      <p>{t("quality.description")}</p>
    </section>
  );
};

export default QualitySection;
