import { useEffect, useState } from "react";
import BrandCard from "../../../components/common/BrandCard/BrandCard";
import fetchFragranceBrands, {
  BrandObject,
} from "../services/fetchFrangranceBrands";
import "../styles/fragranceBrandsSection.scss";
import { useTranslation } from "react-i18next";

const FragranceBrandsSection: React.FC = () => {
  const [fragranceBrands, setFragranceBrands] = useState<BrandObject[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchFragranceBrands().then(setFragranceBrands);
  }, []);

  return (
    <div className="brand-section">
      {/* <h1>Fragrance</h1> */}
      <h1>{t("fragrance.title")}</h1>
      <div className="brand-grid">
        {fragranceBrands.map((brandObj, idx) => {
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

export default FragranceBrandsSection;
