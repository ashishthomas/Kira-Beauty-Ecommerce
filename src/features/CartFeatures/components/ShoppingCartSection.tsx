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
            {cartItems.map(({ id, name, price, quantity, image }) => (
              <tr key={id}>
                <td className="image-cell">
                  <img src={image} alt={name} />
                  <div className="quantity-controls">
                    <Button
                      className="quantity-btn"
                      variant="secondary"
                      size="small"
                      onClick={() => dispatch(decreaseQuantity(id))}
                    >
                      -
                    </Button>

                    <Button
                      className="quantity-btn"
                      variant="secondary"
                      onClick={() => dispatch(increaseQuantity(id))}
                    >
                      +
                    </Button>
                  </div>
                </td>

                <td>{name}</td>
                <td>₹{price}</td>
                <td>{quantity}</td>

                <td>₹{price * quantity}</td>
                <td>
                  <button
                    onClick={() => dispatch(removeFromCart(id))}
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
