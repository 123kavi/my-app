import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link
import "./Header.css";
import Cart from "./Cart";

const Header = ({ cartCount }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <div className="logo">ShopNow</div>
      
        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link to="#home">Home</Link> {/* Change to Link */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Update to use Link */}
            </li>
            <li>
              <Link to="#services">Services</Link>
            </li>
            <li>
              <Link to="#shop">Shop</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Header right (Cart and Hamburger Menu) */}
        <div className="header-right">
          {/* Cart Icon with Badge */}
          <div className="cart-container">
            <Cart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>

          {/* Hamburger Menu Icon */}
          <button className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
      </header>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* Close button */}
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        {/* Sidebar navigation */}
        <ul>
          <li>
            <Link to="#home" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="#services" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="#shop" onClick={toggleSidebar}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="#contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
          <li >
          
          </li>
        </ul>

        
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Header;
