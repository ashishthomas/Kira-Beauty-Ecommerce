import BrandCard from "../../../components/common/BrandCard/BrandCard";
import "../styles/GroomingBrandsSection.scss";

const GroomingBrandsSection: React.FC = () => {
  interface BrandInfo {
    link: string;
    image: string;
    products: string[];
  }

  type BrandObject = Record<string, BrandInfo>;
  const groomingBrands: BrandObject[] = [
    {
      "The Man Company": {
        link: "/brands/grooming/the-man-company",
        image: "src/assets/brands/grooming/mancompany.jpeg",
        products: [
          "Beard Oil",
          "Face Wash",
          "Hair Gel",
          "Beard Wax",
          "Perfume",
          "Hair Serum",
        ],
      },
    },
    {
      Beardo: {
        link: "/brands/grooming/beardo",
        image: "src/assets/brands/grooming/beardo.jpeg",
        products: [
          "Beard Wax",
          "Perfume",
          "Hair Serum",
          "Beard Oil",
          "Face Wash",
          "Hair Gel",
        ],
      },
    },
    {
      UrbanGabru: {
        link: "/brands/grooming/urbangabru",
        image: "src/assets/brands/grooming/urbangabru.jpeg",
        products: [
          "Hair Wax",
          "Beard Oil",
          "Face Wash",
          "Shaving Foam",
          "Razor",
          "Beard Butter",
        ],
      },
    },
    {
      "Bombay Shaving Co.": {
        link: "/brands/grooming/bombay-shaving-co",
        image: "src/assets/brands/grooming/bombayshaving.jpeg",
        products: [
          "Shaving Foam",
          "Razor",
          "Beard Butter",
          "Hair Wax",
          "Beard Oil",
          "Face Wash",
        ],
      },
    },
    {
      Ustraa: {
        link: "/brands/grooming/ustraa",
        image: "src/assets/brands/grooming/ustraa.jpeg",
        products: [
          "Face Wash",
          "Beard Softener",
          "Hair Wax",
          "Shaving Razor",
          "Shaving Gel",
          "After Shave",
        ],
      },
    },
    {
      Gillette: {
        link: "/brands/grooming/gillette",
        image: "src/assets/brands/grooming/gillette.jpeg",
        products: [
          "Shaving Razor",
          "Shaving Gel",
          "After Shave",
          "Face Wash",
          "Beard Softener",
          "Hair Wax",
        ],
      },
    },
    {
      "Park Avenue": {
        link: "/brands/grooming/park-avenue",
        image: "src/assets/brands/grooming/parkavenue.jpeg",
        products: [
          "Deodorant",
          "Shaving Cream",
          "Talc",
          "Face Wash",
          "Beard Softener",
          "Hair Wax",
        ],
      },
    },
  ];

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
