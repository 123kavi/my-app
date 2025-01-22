import React from "react";
import { useCart } from "./CartContext"; // Use the custom hook to access cart items
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./css/CartModal.css"; // Updated styling

const CartModal = ({ onClose }) => {

  const { cartItems, setSelectedItemForCheckout, removeItem } = useCart(); // Get removeItem function from context
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleCheckout = (item) => {
    setSelectedItemForCheckout(item); // Set the selected item in the context
    navigate("/checkout"); // Navigate to checkout page
  };

 const handleRemoveItem = (item) => {
    removeItem(item.id); // Call removeItem to remove the item from the cart
  };


  if (cartItems.length === 0) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Your cart is empty!</h2>
          <button className="close-modal" onClick={onClose}>×</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Your Cart</h2>
        <button className="close-modal" onClick={onClose}>×</button>
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>{item.price}</span>
                <button onClick={() => handleCheckout(item)}>Checkout</button>
                <button className="remove-btn" onClick={() => handleRemoveItem(item)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartModal;
