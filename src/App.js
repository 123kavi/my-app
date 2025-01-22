import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext"; // Import CartProvider
import CheckoutPage from "./components/CheckoutPage"; // Import CheckoutPage
import CartModal from "./components/CartModal"; // Import CartModal
import Layout from "./components/Layout"; // Import Layout
import Contacts from "./components/Contacts";
import AboutUs from "./components/AboutUs";

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
            <Route path="/" element={<Layout toggleCartModal={toggleCartModal} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reviews1" element={<Layout section="reviews1" />} />
            <Route path="/service1" element={<Layout section="service1" />} />
            {/* Add other routes if necessary */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
