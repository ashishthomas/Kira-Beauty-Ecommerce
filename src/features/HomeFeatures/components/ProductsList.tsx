import Button from "../../../components/common/Button/Button";
import { useEffect, useState } from "react";
import fetchCategories, { Category } from "../services/fetchCategories";
import "../styles/ProductsList.scss";

import carousel_fragrance from "../../../assets/jpeg/carousel_fragrance.jpeg";
import carousel_makeup from "../../../assets/jpeg/carousel_makeup.jpeg";
import carousel_skincare from "../../../assets/jpeg/carousel_skincare.jpeg";
import carousel_grooming from "../../../assets/jpeg/carousel_grooming.jpeg";

const imageMap: { [key: string]: string } = {
  carousel_fragrance,
  carousel_makeup,
  carousel_skincare,
  carousel_grooming,
};

const ProductsList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div className="our-products-section">
      <h2 className="section-title">Our Products</h2>
      <div className="products-grid">
        {categories.map((product, index) => {
          console.log(product.imageKey);
          console.log(imageMap[product.imageKey]);
          return (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                <img
                  src={imageMap[product.imageKey]}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                {product.description && (
                  <p className="product-description">{product.description}</p>
                )}

                <Button
                  className="shop-now-button"
                  variant="primary"
                  size="small"
                  onClick={() => console.log("Shop now clicked")}
                >
                  shop now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
