import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon
import { useCart } from "./CartContext"; // Use the custom hook to access cart state
import CartModal from "./CartModal"; // Import the CartModal component

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const { cartItems } = useCart(); // Get cart items from context

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <div>
  <div className="cart-container" onClick={toggleModal}>
    <FaShoppingCart className="cart-icon" />
    {cartItems.length > 0 && (
      <span
        className="cart-count"
        style={{
          backgroundColor: "red", // Red background
          color: "white", // White text
          borderRadius: "50%", // Circular shape
          padding: "0.2rem 0.6rem", // Padding to make it look like a badge
          fontSize: "0.8rem", // Adjust font size
          position: "absolute", // Position it over the cart icon
          top: "6px", // Adjust position as needed
          right: "50px", // Adjust position as needed
        }}
      >
        {cartItems.length}
      </span>
    )}
  </div>

  {isModalOpen && <CartModal onClose={toggleModal} />}
</div>

  );
};

export default Cart;
