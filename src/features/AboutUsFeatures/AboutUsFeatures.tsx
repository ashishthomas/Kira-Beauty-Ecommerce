import BannerSection from "./components/BannerSection";
import DisplaySection from "./components/DisplaySection";
import QualitySection from "./components/QualitySection";
import StorySection from "./components/StorySection";
import WelcomeSection from "./components/WelcomeSection";

const AboutUsFeatures = () => {
  return (
    <div>
      <WelcomeSection />
      <StorySection />
      <QualitySection />
      <BannerSection />
      <DisplaySection />
    </div>
  );
};

export default AboutUsFeatures;
