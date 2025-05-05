import React, { JSX } from "react";
import "./ProductCard.scss";
import Button from "../Button/Button";
import shopcart from "../../../assets/icons/shopcart.svg";

type Product = {
  name: string;
  image: string;
  price: string;
  description: string;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }): JSX.Element => {
  return (
    <div className="shop-card-section">
      <div className="shop-grid">
        {products.map((product: Product, index: number): JSX.Element => {
          const { name, description, price, image } = product;

          return (
            <div className="shop-card" key={index}>
              <div className="shop-image-wrapper">
                <img src={image} alt={name} className="shop-image" />
              </div>
              <div className="shop-info">
                <h3 className="shop-title">{name}</h3>
                {product.description && (
                  <p className="shop-description">{description}</p>
                )}
                <p className="shop-price">Price: {price}</p>
                <p className="shop-cart">
                  Add to cart
                  <img src={shopcart} alt="Cart" className="icon" />
                </p>
                <Button
                  className="shop-now-button"
                  variant="primary"
                  size="small"
                  onClick={() => {}}
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

export default ProductGrid;
