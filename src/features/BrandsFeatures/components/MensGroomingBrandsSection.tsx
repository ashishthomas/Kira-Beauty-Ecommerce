import { useEffect, useState } from "react";
import BrandCard from "../../../components/common/BrandCard/BrandCard";
import fetchGroomingBrands, {
  BrandObject,
} from "../services/fetchGroomingBrands";
import "../styles/GroomingBrandsSection.scss";
import { useTranslation } from "react-i18next";

const GroomingBrandsSection: React.FC = () => {
  const [groomingBrands, setGroomingBrands] = useState<BrandObject[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchGroomingBrands().then(setGroomingBrands);
  }, []);

  return (
    <div className="brand-section">
      <h1>{t("mensGrooming.title")}</h1>
      <div className="brand-grid">
        {groomingBrands.map((brandObj) => {
          const brandName = Object.keys(brandObj)[0];
          const brandInfo = brandObj[brandName];
          return (
            <BrandCard
              key={brandName}
              brandName={brandName}
              brandInfo={brandInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroomingBrandsSection;
