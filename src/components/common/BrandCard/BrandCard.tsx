import { Link } from "react-router";
import Button from "../Button/Button";
import "./BrandCard.scss";
import { imageMap } from "../../../features/BrandsFeatures/constants/imageMap";
import { useTranslation } from "react-i18next";

type BrandInfo = {
  link: string;
  imageKey: string;
  products: string[];
};

interface BrandCardProps {
  brandName: string;
  brandInfo: BrandInfo;
}

const BrandCard: React.FC<BrandCardProps> = ({ brandName, brandInfo }) => {
  const { t } = useTranslation();
  return (
    <div className="brand-card">
      <Link to={brandInfo.link}>
        <img
          src={imageMap[brandInfo.imageKey]}
          alt={brandName}
          className="brand-image"
        />
        {/* <p className="brand-name">{brandName}</p> */}
        <p className="brand-name">{t(brandName)}</p>
      </Link>
      <div
        onMouseEnter={(e) => {
          const dropdown = e.currentTarget.querySelector(".product-dropdown");
          dropdown?.classList.add("show");
        }}
        onMouseLeave={(e) => {
          const dropdown = e.currentTarget.querySelector(".product-dropdown");
          dropdown?.classList.remove("show");
        }}
      >
        {/* <Button variant="text">View Products ▼</Button> */}
        <Button variant="text">{t("View Products ▼")}</Button>
        <ul className="product-dropdown">
          {brandInfo?.products?.map((product, idx) => (
            <li key={idx}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrandCard;
