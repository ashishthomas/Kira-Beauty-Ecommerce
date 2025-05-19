import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/Store";
import ShoppingCartSection from "./ShoppingCartSection";
import CartTotalSection from "./CartTotalSection";
import "../styles/CartDisplaySection.scss";
import { useNavigate } from "react-router";

const CartDisplaySection: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();


   useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="cart-display">
        <ShoppingCartSection cartItems={cartItems} />
        <CartTotalSection />
      </div>
    </>
  );
};

export default CartDisplaySection;
