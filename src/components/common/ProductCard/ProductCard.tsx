import React, { JSX, useState } from "react";
import "./ProductCard.scss";
import Button from "../Button/Button";
import shopcart from "../../../assets/svg/shopcart.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/Store";
import { toast } from "react-toastify";
import LoginModal from "../../LoginModal/LoginModal";
import { imageMap } from "../../../features/ShopFeatures/constants/imageMap";
import { useLocation, useNavigate } from "react-router";
import { addToCart } from "../../../features/CartFeatures/slices/cartSlice";
import { useTranslation } from "react-i18next";

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
  const dispatch = useDispatch();
  const location = useLocation();
  const categoryFromPath = location.pathname.split("/")[2];

  const { t } = useTranslation();

  const handleAddToCart = (product: Product) => {
    if (!isLoggedIn) {
      toast.info(t("login_to_add_cart"));
      setShowLogin(true);
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: imageMap[product.imageKey],
        price: parseFloat(product.price.replace(/[^\d.]/g, "")),
        quantity: 1,
        category: categoryFromPath,
      })
    );

    navigate("/cart");

    toast.success(t("item_added_to_cart"));
  };

  const handleShopNow = (product: Product) => {
    if (!isLoggedIn) {
      toast.info(t("login_to_continue"));
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
                {/* Product Name — either dynamic or localized */}
                <h3 className="shop-title">
                  {t(`products.${product.id}.name`, { defaultValue: name })}
                </h3>

                {/* Product Description */}
                {description && (
                  <p className="shop-description">
                    {t(`products.${product.id}.description`, {
                      defaultValue: description,
                    })}
                  </p>
                )}

                {/* Price */}
                <p className="shop-price">
                  {t("price")}: ₹{price}
                </p>

                {/* Add to cart */}
                <p
                  className="shop-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  {t("add_to_cart")}
                  <img src={shopcart} alt="Cart" className="icon" />
                </p>

                {/* Shop Now button */}
                <Button
                  className="shop-now-button"
                  variant="primary"
                  size="small"
                  onClick={() => handleShopNow(product)}
                >
                  {t("shop_now")}
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
