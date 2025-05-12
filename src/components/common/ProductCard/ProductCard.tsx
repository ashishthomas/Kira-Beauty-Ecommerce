import React, { JSX, useState } from "react";
import "./ProductCard.scss";
import Button from "../Button/Button";
import shopcart from "../../../assets/svg/shopcart.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/Store";
import { toast } from "react-toastify";
import LoginModal from "../../LoginModal/LoginModal";
import { imageMap } from "../../../features/ShopFeatures/constants/imageMap";
import { useNavigate } from "react-router";

type Product = {
  id: number;
  name: string;
  brandName: string;
  imageKey: string;
  price: string;
  offerPrice: string;
  description: string;
  itemsLeft: number;
  category: string;
  details: string;
};

type ProductGridProps = {
  products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast.info("Please login to add to cart");
      setShowLogin(true);
      return;
    }

    toast.success("Item added to cart");
  };

  const handleShopNow = (product: Product) => {
    if (!isLoggedIn) {
      toast.info("Please login to continue");
      setShowLogin(true);
      return;
    }

    navigate(`/${product.category}/details/${product.id}`);
  };

  return (
    <div className="shop-card-section">
      <div className="shop-grid">
        {products.map((product: Product, index: number): JSX.Element => {
          const { name, description, price, imageKey } = product;

          return (
            <div className="shop-card" key={index}>
              <div className="shop-image-wrapper">
                <img
                  src={imageMap[imageKey]}
                  alt={name}
                  className="shop-image"
                />
              </div>
              <div className="shop-info">
                <h3 className="shop-title">{name}</h3>
                {description && (
                  <p className="shop-description">{description}</p>
                )}
                <p className="shop-price">Price: {`₹${price}`}</p>
                <p className="shop-cart" onClick={handleAddToCart}>
                  Add to cart
                  <img src={shopcart} alt="Cart" className="icon" />
                </p>
                <Button
                  className="shop-now-button"
                  variant="primary"
                  size="small"
                  onClick={() => handleShopNow(product)}
                >
                  shop now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default ProductGrid;
