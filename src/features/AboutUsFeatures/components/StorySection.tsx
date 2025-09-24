import "../styles/StorySection.scss";
import { useTranslation } from "react-i18next";

const StorySection = () => {
  const { t } = useTranslation();
  return (
    <section className="story">
      <h2>{t("story.intro")}</h2>
      <p>{t("story.description")}</p>
    </section>
  );
};

export default StorySection;
