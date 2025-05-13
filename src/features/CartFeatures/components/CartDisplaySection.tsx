import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/Store";
import ShoppingCartSection from "./ShoppingCartSection";
import CartTotalSection from "./CartTotalSection";
import "../styles/CartDisplaySection.scss";

const CartDisplaySection: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

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
