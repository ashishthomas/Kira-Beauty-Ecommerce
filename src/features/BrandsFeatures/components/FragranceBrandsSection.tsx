import BrandCard from "../../../components/common/BrandCard/BrandCard";
import "../styles/fragranceBrandsSection.scss";

const FragranceBrandsSection: React.FC = () => {
  interface BrandInfo {
    link: string;
    image: string;
    products: string[];
  }

  type BrandObject = Record<string, BrandInfo>;

  const fragranceBrands: BrandObject[] = [
    {
      "The Body Shop": {
        link: "/brands/fragrance/the-body-shop",
        image: "src/assets/brands/fragrance/bodyshop.jpeg",
        products: [
          "Body Mist",
          "Eau De Toilette",
          "Perfume Oil",
          "Deodorant",
          "Fragrance Mist",
          "Roll-On",
        ],
      },
    },
    {
      Engage: {
        link: "/brands/fragrance/engage",
        image: "src/assets/brands/fragrance/engage.jpeg",
        products: [
          "Deodorant",
          "Perfume Spray",
          "Body Mist",
          "Pocket Perfume",
          "Roll-On",
          "Eau De Parfum",
        ],
      },
    },
    {
      Fogg: {
        link: "/brands/fragrance/fogg",
        image: "src/assets/brands/fragrance/fogg.jpeg",
        products: [
          "Deodorant",
          "Perfume Spray",
          "Body Spray",
          "Pocket Perfume",
          "Fragrance Mist",
          "Eau De Parfum",
        ],
      },
    },
    {
      Nivea: {
        link: "/brands/fragrance/nivea",
        image: "src/assets/brands/fragrance/nivea.jpeg",
        products: [
          "Roll-On",
          "Deodorant",
          "Perfume",
          "Body Mist",
          "Pocket Deo",
          "Fresh Mist",
        ],
      },
    },
    {
      Denver: {
        link: "/brands/fragrance/denver",
        image: "src/assets/brands/fragrance/denver.jpeg",
        products: [
          "Deodorant",
          "Perfume Spray",
          "Eau De Parfum",
          "Body Spray",
          "Pocket Perfume",
          "Roll-On",
        ],
      },
    },
    {
      Skinn: {
        link: "/brands/fragrance/skinn",
        image: "src/assets/brands/fragrance/skinn.jpeg",
        products: [
          "Perfume",
          "Eau De Parfum",
          "Body Mist",
          "Fragrance Mist",
          "Mini Perfume",
          "Pocket Perfume",
        ],
      },
    },
    {
      Layer : {
        link: "/brands/fragrance/layer",
        image: "src/assets/brands/fragrance/layerr.jpeg",
        products: [
          "Body Spray",
          "Perfume",
          "Deodorant",
          "Fragrance Mist",
          "Pocket Perfume",
          "Roll-On",
        ],
      },
    },
  ];
  

  return (
    <div className="brand-section">
      <h1>Fragrance</h1>
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
