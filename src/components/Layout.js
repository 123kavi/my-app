// Layout.js
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FashionPage from "./FashionPage";
import ContactUs from "./ContactUs";
const Layout = ({ toggleCartModal }) => {
  return (
    <div>
      {/* Header with Cart Button */}
      <Header toggleCartModal={toggleCartModal} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Fashion Page */}
      <FashionPage toggleCartModal={toggleCartModal} />
      <ContactUs />
    </div>
  );
};

export default Layout;
