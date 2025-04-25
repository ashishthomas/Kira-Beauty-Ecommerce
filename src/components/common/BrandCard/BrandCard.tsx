import { Link } from "react-router";
import Button from "../Button/Button";
import './BrandCard.scss'

type BrandInfo = {
  link: string;
  image: string;
  products: string[];
}

interface BrandCardProps {
  brandName: string;
  brandInfo: BrandInfo;
}

const BrandCard: React.FC<BrandCardProps> = ({ brandName, brandInfo }) => {
  return (
    <div className="brand-card">
      <Link to={brandInfo.link}>
        <img src={brandInfo.image} alt={brandName} className="brand-image" />
        <p className="brand-name">{brandName}</p>
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
        <Button variant="text">View Products ▼</Button>
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
