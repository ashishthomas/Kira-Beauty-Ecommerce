import { useEffect, useState } from "react";
import BrandCard from "../../../components/common/BrandCard/BrandCard";
import fetchGroomingBrands, {
  BrandObject,
} from "../services/fetchGroomingBrands";
import "../styles/GroomingBrandsSection.scss";

const GroomingBrandsSection: React.FC = () => {
  const [groomingBrands, setGroomingBrands] = useState<BrandObject[]>([]);

  useEffect(() => {
    fetchGroomingBrands().then(setGroomingBrands);
  }, []);

  return (
    <div className="brand-section">
      <h1>Men's Grooming</h1>
      <div className="brand-grid">
        {groomingBrands.map((brandObj, idx) => {
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

export default GroomingBrandsSection;
