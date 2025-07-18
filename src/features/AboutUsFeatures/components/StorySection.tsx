// import { STORY_CONSTANTS } from "../constants/ui-constants";
import "../styles/StorySection.scss";
import { useTranslation } from "react-i18next";

const StorySection = () => {
  const { t } = useTranslation();
  return (
    <section className="story">
      {/* <h2>{STORY_CONSTANTS.INTRO}</h2>
      <p>{STORY_CONSTANTS.DESCRIPTION}</p> */}
      <h2>{t("story.intro")}</h2>
      <p>{t("story.description")}</p>
    </section>
  );
};

export default StorySection;
