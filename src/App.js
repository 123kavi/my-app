import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { CartProvider } from "./components/CartContext"; // Import CartProvider
import CheckoutPage from "./components/CheckoutPage"; // Import CheckoutPage
import CartModal from "./components/CartModal"; // Import CartModal
import Layout from "./components/Layout"; // Import Layout

const App = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false); // State to manage CartModal visibility

  // Function to toggle CartModal
  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  return (
    <CartProvider>
      <Router>
        <div>
          {/* Cart Modal */}
          {isCartModalOpen && <CartModal onClose={toggleCartModal} />}

          {/* Routing */}
          <Routes>
            {/* Main routes that include the layout */}
            <Route path="/" element={<Layout toggleCartModal={toggleCartModal} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* Add other routes if necessary */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;