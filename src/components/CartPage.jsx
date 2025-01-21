import React from "react";
import { useCart } from "./CartContext"; // Use the custom hook to access cart items

const CartPage = () => {
  const { cartItems } = useCart(); // Get cart items from context

  if (cartItems.length === 0) {
    return <h2>Your cart is empty!</h2>; // If the cart is empty, show a message
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} style={{ width: "50px" }} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Proceeding to checkout...")}>Checkout</button>
    </div>
  );
};

export default CartPage;
