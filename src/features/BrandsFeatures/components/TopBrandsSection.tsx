import { useEffect, useState } from "react";
import BrandCard from "../../../components/common/BrandCard/BrandCard";
import fetchTopBrands, { BrandObject } from "../services/fetchTopBrands";
import "../styles/topBrandsSection.scss";
import { useTranslation } from "react-i18next";

const TopBrandsSection: React.FC = () => {
  const [topBrands, setTopBrands] = useState<BrandObject[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchTopBrands().then(setTopBrands);
  }, []);

  return (
    <div className="brand-section">
      {/* <h1>Top Brands</h1> */}
      <h1>{t("topBrands.title")}</h1>
      <div className="brand-grid">
        {topBrands.map((brandObj, idx) => {
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

export default TopBrandsSection;
