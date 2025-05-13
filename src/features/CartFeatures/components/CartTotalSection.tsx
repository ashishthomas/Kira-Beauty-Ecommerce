import React from "react";
import "../styles/CartTotalSection.scss";
import Button from "../../../components/common/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/Store";
import { updateShipping } from "../slices/cartSlice";
import { useEffect } from "react";

const CartTotalSection: React.FC = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);
  const shippingType = useSelector(
    (state: RootState) => state.cart.shippingType
  );

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isFreeShippingAvailable = subtotal >= 500;

  useEffect(() => {
    if (isFreeShippingAvailable && shippingType !== "free") {
      dispatch(updateShipping("free"));
    }
  }, [isFreeShippingAvailable, shippingType, dispatch]);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateShipping(e.target.value as "free" | "flat" | "pickup"));
  };

  const calculateShippingCost = () => {
    if (shippingType === "free" && isFreeShippingAvailable) return 0;
    if (shippingType === "pickup") return 0;
    if (items.length === 0) return 0;
    return 100;
  };

  const shipping = calculateShippingCost();
  const total = subtotal + shipping;

  return (
    <div className="cart-total-wrapper">
      <h2>Cart Totals</h2>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="summary-row shipping-options">
          <span>Shipping</span>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="shipping"
                value="free"
                checked={shippingType === "free"}
                onChange={handleShippingChange}
                disabled={!isFreeShippingAvailable}
              />
              Free Shipping{" "}
              {!isFreeShippingAvailable && (
                <p>(Available on orders above ₹500)</p>
              )}
            </label>

            <label>
              <input
                type="radio"
                name="shipping"
                value="flat"
                checked={shippingType === "flat"}
                onChange={handleShippingChange}
              />
              Flat Rate ₹100
            </label>

            <label>
              <input
                type="radio"
                name="shipping"
                value="pickup"
                checked={shippingType === "pickup"}
                onChange={handleShippingChange}
              />
              Pickup
            </label>
          </div>
        </div>

        <div className="summary-row total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <Button
          variant="primary"
          size="medium"
          className="checkout-btn"
          onClick={() => {}}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartTotalSection;
