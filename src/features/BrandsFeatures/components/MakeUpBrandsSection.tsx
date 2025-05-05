import { useEffect, useState } from "react";
import BrandCard from "../../../components/common/BrandCard/BrandCard";
import fetchMakeUpBrands, { BrandObject } from "../services/fetchMakeUpBrands";
import "../styles/MakeUpBrandsSection.scss";

const MakeUpBrandsSection: React.FC = () => {
  const [makeUpBrands, setMakeUpBrands] = useState<BrandObject[]>([]);

  useEffect(() => {
    fetchMakeUpBrands().then(setMakeUpBrands);
  }, []);

  return (
    <div className="brand-section">
      <h1>Makeup</h1>
      <div className="brand-grid">
        {makeUpBrands.map((brandObj, idx) => {
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

export default MakeUpBrandsSection;
