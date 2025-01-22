import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import FashionPage from "./FashionPage";
import ContactUs from "./ContactUs";

const Layout = () => {
  const service1Ref = useRef(null);

  const location = useLocation();

  // Scroll to the appropriate section when the URL hash changes
  useEffect(() => {
    const hash = location.hash; // Get the current hash from the URL
    if (hash === "#service1" && service1Ref.current) {
      service1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]); // Run this effect when the URL hash changes

  return (
    <div>
      <Header cartCount={0} />

      <Hero />

      {/* Fashion Page with a ref for the service1 section */}
      <FashionPage service1Ref={service1Ref} />

      <ContactUs />
    </div>
  );
};

export default Layout;
