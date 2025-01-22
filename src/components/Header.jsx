import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import "./css/Header.css";
import Cart from "./Cart";
import logoImage from "./FD-PROJECT.png"; // Adjust the path according to your folder structure

const Header = ({ cartCount, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleShopClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (onNavigate) {
      onNavigate("reviews"); // Navigate to the reviews section
    }
    setIsSidebarOpen(false); // Close the sidebar
  };


  const handleServiceClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (onNavigate) {
      onNavigate("services"); // Navigate to the reviews section
    }
    setIsSidebarOpen(false); // Close the sidebar
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
         <div className="logo">
          <img src={logoImage} alt="ShopNow" style={{ width: 'auto', height: '40px' }} />
        </div>
        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
                {/* Shop link with onClick for navigation */}
                <a href="/service1" >
                Service
              </a>
            </li>
            <li>
              {/* Shop link with onClick for navigation */}
              <a href="/reviews1">
                Shop
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
          <span className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </span>
        </div>
      </header>

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        {/* Close button */}
        <span className="close-btn" onClick={toggleSidebar}>
          &times;
        </span>
        {/* Sidebar navigation */}
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/service1" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li>
            {/* Shop link in the sidebar */}
            <a href="/reviews1" onClick={toggleSidebar}>
              Shop
            </a>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Header;
