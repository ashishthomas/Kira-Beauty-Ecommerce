import BrandCard from "../../../components/common/BrandCard/BrandCard";
import "../styles/MakeUpBrandsSection.scss";

const MakeUpBrandsSection: React.FC = () => {
  interface BrandInfo {
    link: string;
    image: string;
    products: string[];
  }

  type BrandObject = Record<string, BrandInfo>;
  const cosmeticsBrands: BrandObject[] = [
    {
      Maybelline: {
        link: "/brands/cosmetics/maybelline",
        image: "src/assets/brands/cosmetics/maybelline.jpeg",
        products: [
          "Lip Balm",
          "Mascara",
          "Kajal",
          "Lip Cream",
          "Eyeshadow Palette",
          "Setting Spray",
        ],
      },
    },
    {
      NYX: {
        link: "/brands/cosmetics/nyx",
        image: "src/assets/brands/cosmetics/nyx.png",
        products: [
          "Lip Cream",
          "Eyeshadow Palette",
          "Setting Spray",
          "Lip Balm",
          "Mascara",
          "Kajal",
        ],
      },
    },
    {
      "e.l.f": {
        link: "/brands/cosmetics/elf",
        image: "src/assets/brands/cosmetics/elf.jpeg",
        products: [
          "Primer",
          "Concealer",
          "Blush",
          "Foundation",
          "Lipstick",
          "Highlighter",
        ],
      },
    },
    {
      "Wet n Wild": {
        link: "/brands/cosmetics/wetnwild",
        image: "src/assets/brands/cosmetics/wetnwild.jpeg",
        products: [
          "Foundation",
          "Lipstick",
          "Highlighter",
          "Primer",
          "Concealer",
          "Blush",
        ],
      },
    },
    {
      Essence: {
        link: "/brands/cosmetics/essence",
        image: "src/assets/brands/cosmetics/essence.png",
        products: [
          "Mascara",
          "Eyeliner",
          "BB Cream",
          "Liquid Eyeshadow",
          "Lip Liner",
          "Compact Powder",
        ],
      },
    },
    {
      "Swiss Beauty": {
        link: "/brands/cosmetics/swiss-beauty",
        image: "src/assets/brands/cosmetics/swissbeauty.jpeg",
        products: [
          "Liquid Eyeshadow",
          "Lip Liner",
          "Compact Powder",
          "Mascara",
          "Eyeliner",
          "BB Cream",
        ],
      },
    },
    {
      Chambor: {
        link: "/brands/cosmetics/chambor",
        image: "src/assets/brands/cosmetics/chambor.jpeg",
        products: [
          "Lipstick",
          "Kajal",
          "Foundation",
          "Lipstick",
          "Highlighter",
        ],
      },
    },
  ];

  return (
    <div className="brand-section">
      <h1>Makeup</h1>
      <div className="brand-grid">
        {cosmeticsBrands.map((brandObj, idx) => {
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
