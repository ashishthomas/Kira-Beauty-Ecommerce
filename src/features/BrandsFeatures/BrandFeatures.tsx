import FragranceBrandsSection from "./components/FragranceBrandsSection";
import MakeUpBrandsSection from "./components/MakeUpBrandsSection";
import GroomingBrandsSection from "./components/MensGroomingBrandsSection";
import TopBrandsSection from "./components/TopBrandsSection";
import SkinCareBrandsSection from "./components/SkinCareSection";

const BrandFeatures = () => {
  return (
    <div>
      <TopBrandsSection />
      <FragranceBrandsSection />
      <MakeUpBrandsSection />
      <SkinCareBrandsSection />
      <GroomingBrandsSection />
    </div>
  );
};

export default BrandFeatures;
