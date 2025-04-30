import React from "react";
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

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="shop-card-section">
      <div className="shop-grid">
        {products.map((product, index) => (
          <div className="shop-card" key={index}>
            <div className="shop-image-wrapper">
              <img
                src={product?.image}
                alt={product.name}
                className="shop-image"
              />
            </div>
            <div className="shop-info">
              <h3 className="shop-title">{product.name}</h3>
              {product.description && (
                <p className="shop-description">{product.description}</p>
              )}
              <p className="shop-price">Price: {product.price}</p>
              <p className="shop-cart">
                Add to cart
                <img src={shopcart} alt="Cart" className="icon" />
              </p>
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
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
