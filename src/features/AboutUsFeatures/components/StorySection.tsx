import { STORY_CONSTANTS } from "../constants/ui-constants";
import "../styles/StorySection.scss";

const StorySection = () => {
  return (
    <section className="story">
      <h2>{STORY_CONSTANTS.INTRO}</h2>
      <p>{STORY_CONSTANTS.DESCRIPTION}</p>
    </section>
  );
};

export default StorySection;
