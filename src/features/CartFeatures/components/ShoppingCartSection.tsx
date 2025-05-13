import React from "react";
import "../styles/ShoppingCartSection.scss";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../slices/cartSlice";
import trash from "../../../assets/svg/trash.svg";
import { useDispatch } from "react-redux";
import Button from "../../../components/common/Button/Button";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
};

type ShoppingCartSectionProps = {
  cartItems: CartItem[];
};

const ShoppingCartSection: React.FC<ShoppingCartSectionProps> = ({
  cartItems,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="shopping-cart-wrapper">
      <div className="cart-left">
        <h1>Shopping Cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="image-cell">
                  <img src={item.image} alt={item.name} />
                  <div className="quantity-controls">
                    <Button
                      className="quantity-btn"
                      variant="secondary"
                      size="small"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </Button>

                    <Button
                      className="quantity-btn"
                      variant="secondary"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </Button>
                  </div>
                </td>

                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>

                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="remove-btn"
                  >
                    <img src={trash} alt="trash" className="trashicon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCartSection;
