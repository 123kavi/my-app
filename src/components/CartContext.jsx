import React, { createContext, useState, useContext } from "react";

// Create a Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // New state to store selected item

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to update item quantity
// Function to update item quantity
const updateCartItemQuantity = (itemId, newQuantity) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
  );
};

const removeItem = (itemId) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
};

  // Function to set the selected item for checkout
  const setSelectedItemForCheckout = (item) => {
    setSelectedItem(item);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        updateCartItemQuantity,
        selectedItem,
        setSelectedItemForCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
