import React, { useState } from "react";
import { Link } from "react-router";
import "./BrandsPage.scss";

interface BrandInfo {
  link: string;
  image: string;
  products: string[];
}

type BrandObject = Record<string, BrandInfo>;

const beautyBrands: BrandObject[] = [
  {
    Lakmé: {
      link: "/brands/beauty/lakme",
      image: "src/assets/brands/beauty/lakme.png",
      products: ["Nail Polish", "Kajal", "Lipstick"],
    },
  },
  {
    "L'Oréal": {
      link: "/brands/beauty/loreal",
      image: "src/assets/brands/beauty/loreal.jpeg",
      products: ["Foundation", "Serum", "Mascara"],
    },
  },
  {
    MAC: {
      link: "/brands/beauty/mac",
      image: "src/assets/brands/beauty/Mac.jpeg",
      products: ["Lipstick", "Primer", "Eyeshadow"],
    },
  },
  {
    Revlon: {
      link: "/brands/beauty/revlon",
      image: "src/assets/brands/beauty/revlon.jpeg",
      products: ["Foundation", "Blush", "Concealer"],
    },
  },
  {
    Colorbar: {
      link: "/brands/beauty/colorbar",
      image: "src/assets/brands/beauty/colorbar.jpeg",
      products: ["Lip Gloss", "Eyeliner", "Compact Powder"],
    },
  },
  {
    "Faces Canada": {
      link: "/brands/beauty/faces-canada",
      image: "src/assets/brands/beauty/faces.jpeg",
      products: ["BB Cream", "Highlighter", "Lip Crayon"],
    },
  },
  {
    Sugar: {
      link: "/brands/beauty/sugar",
      image: "src/assets/brands/beauty/sugar.jpeg",
      products: ["Lipstick", "Kohl", "Setting Spray"],
    },
  },
];

const cosmeticsBrands: BrandObject[] = [
  {
    Maybelline: {
      link: "/brands/cosmetics/maybelline",
      image: "src/assets/brands/cosmetics/maybelline.jpeg",
      products: ["Lip Balm", "Mascara", "Kajal"],
    },
  },
  {
    NYX: {
      link: "/brands/cosmetics/nyx",
      image: "src/assets/brands/cosmetics/nyx.png",
      products: ["Lip Cream", "Eyeshadow Palette", "Setting Spray"],
    },
  },
  {
    "e.l.f": {
      link: "/brands/cosmetics/elf",
      image: "src/assets/brands/cosmetics/elf.jpeg",
      products: ["Primer", "Concealer", "Blush"],
    },
  },
  {
    "Wet n Wild": {
      link: "/brands/cosmetics/wetnwild",
      image: "src/assets/brands/cosmetics/wetnwild.jpeg",
      products: ["Foundation", "Lipstick", "Highlighter"],
    },
  },
  {
    Essence: {
      link: "/brands/cosmetics/essence",
      image: "src/assets/brands/cosmetics/essence.png",
      products: ["Mascara", "Eyeliner", "BB Cream"],
    },
  },
  {
    "Swiss Beauty": {
      link: "/brands/cosmetics/swiss-beauty",
      image: "src/assets/brands/cosmetics/swissbeauty.jpeg",
      products: ["Liquid Eyeshadow", "Lip Liner", "Compact Powder"],
    },
  },
  {
    Chambor: {
      link: "/brands/cosmetics/chambor",
      image: "src/assets/brands/cosmetics/chambor.jpeg",
      products: ["Lipstick", "Kajal", "Foundation"],
    },
  },
];

const groomingBrands: BrandObject[] = [
  {
    "The Man Company": {
      link: "/brands/grooming/the-man-company",
      image: "src/assets/brands/grooming/mancompany.jpeg",
      products: ["Beard Oil", "Face Wash", "Hair Gel"],
    },
  },
  {
    Beardo: {
      link: "/brands/grooming/beardo",
      image: "src/assets/brands/grooming/beardo.jpeg",
      products: ["Beard Wax", "Perfume", "Hair Serum"],
    },
  },
  {
    UrbanGabru: {
      link: "/brands/grooming/urbangabru",
      image: "src/assets/brands/grooming/urbangabru.jpeg",
      products: ["Hair Wax", "Beard Oil", "Face Wash"],
    },
  },
  {
    "Bombay Shaving Co.": {
      link: "/brands/grooming/bombay-shaving-co",
      image: "src/assets/brands/grooming/bombayshaving.jpeg",
      products: ["Shaving Foam", "Razor", "Beard Butter"],
    },
  },
  {
    Ustraa: {
      link: "/brands/grooming/ustraa",
      image: "src/assets/brands/grooming/ustraa.jpeg",
      products: ["Face Wash", "Beard Softener", "Hair Wax"],
    },
  },
  {
    Gillette: {
      link: "/brands/grooming/gillette",
      image: "src/assets/brands/grooming/gillette.jpeg",
      products: ["Shaving Razor", "Shaving Gel", "After Shave"],
    },
  },
  {
    "Park Avenue": {
      link: "/brands/grooming/park-avenue",
      image: "src/assets/brands/grooming/parkavenue.jpeg",
      products: ["Deodorant", "Shaving Cream", "Talc"],
    },
  },
];

const topBrands: BrandObject[] = [
  {
    Lakmé: {
      link: "/brands/beauty/lakme",
      image: "src/assets/brands/beauty/lakme.png",
      products: ["Kajal", "Blush", "Lipstick"],
    },
  },
  {
    Maybelline: {
      link: "/brands/cosmetics/maybelline",
      image: "src/assets/brands/cosmetics/maybelline.jpeg",
      products: ["Mascara", "Lip Balm", "Kajal"],
    },
  },
  {
    "The Man Company": {
      link: "/brands/grooming/the-man-company",
      image: "src/assets/brands/grooming/mancompany.jpeg",
      products: ["Beard Oil", "Face Wash", "Hair Gel"],
    },
  },
  {
    UrbanGabru: {
      link: "/brands/grooming/urbangabru",
      image: "src/assets/brands/grooming/urbangabru.jpeg",
      products: ["Hair Wax", "Beard Oil", "Face Wash"],
    },
  },
  {
    Beardo: {
      link: "/brands/grooming/beardo",
      image: "src/assets/brands/grooming/beardo.jpeg",
      products: ["Beard Wax", "Perfume", "Hair Serum"],
    },
  },
  {
    "Bombay Shaving Co.": {
      link: "/brands/grooming/bombay-shaving-co",
      image: "src/assets/brands/grooming/bombayshaving.jpeg",
      products: ["Shaving Foam", "Razor", "Beard Butter"],
    },
  },
  {
    "e.l.f": {
      link: "/brands/cosmetics/elf",
      image: "src/assets/brands/cosmetics/elf.jpeg",
      products: ["Concealer", "Primer", "Setting Spray"],
    },
  },
];

interface BrandCardProps {
  brandName: string;
  brandInfo: BrandInfo;
}

const BrandCard: React.FC<BrandCardProps> = ({ brandName, brandInfo }) => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="brand-card">
      <Link to={brandInfo.link}>
        <img src={brandInfo.image} alt={brandName} className="brand-image" />
        <p className="brand-name">{brandName}</p>
      </Link>
      <button
        className="toggle-btn"
        onClick={() => setShowProducts((prev) => !prev)}
      >
        {showProducts ? "Hide Products" : "View Products"}
      </button>
      {showProducts && (
        <ul className="product-dropdown">
          {brandInfo.products.map((product, idx) => (
            <li key={idx}>{product}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const renderBrands = (title: string, brandArray: BrandObject[]) => (
  <div className="brand-section" key={title}>
    <h1>{title}</h1>
    <div className="brand-grid">
      {brandArray.map((brandObj, idx) => {
        const brandName = Object.keys(brandObj)[0];
        console.log(brandName);
        const brandInfo = brandObj[brandName];
        return (
          <BrandCard key={idx} brandName={brandName} brandInfo={brandInfo} />
        );
      })}
    </div>
  </div>
);

const BrandPage: React.FC = () => {
  return (
    <div className="brand-page">
      {renderBrands("Beauty", beautyBrands)}
      {renderBrands("Cosmetics", cosmeticsBrands)}
      {renderBrands("Grooming", groomingBrands)}
      {renderBrands("Top Brands", topBrands)}
    </div>
  );
};

export default BrandPage;
