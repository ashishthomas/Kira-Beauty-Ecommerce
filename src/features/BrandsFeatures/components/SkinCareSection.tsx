import { useEffect, useState } from "react";
import BrandCard from "../../../components/common/BrandCard/BrandCard";
import fetchSkinCareBrands, {
  BrandObject,
} from "../services/fetchSkinCareBrands";
import "../styles/skinCareSection.scss";

const SkinCareBrandsSection: React.FC = () => {
  const [skinCareBrands, setSkinCareBrands] = useState<BrandObject[]>([]);

  useEffect(() => {
    fetchSkinCareBrands().then(setSkinCareBrands);
  }, []);

  return (
    <div className="brand-section">
      <h1>Skin Care</h1>
      <div className="brand-grid">
        {skinCareBrands.map((brandObj, idx) => {
          const brandName = Object.keys(brandObj)[0];
          const brandInfo = brandObj[brandName];
          return (
            <BrandCard key={idx} brandName={brandName} brandInfo={brandInfo} />
          );
        })}
      </div>
    </div>
  );
};

export default SkinCareBrandsSection;
