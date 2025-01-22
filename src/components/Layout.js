import React, { useEffect, useRef } from "react";
import Header from "./Header";  // Header Component
import Hero from "./Hero";      // Hero Section Component
import FashionPage from "./FashionPage"; // FashionPage Component
import ContactUs from "./ContactUs";     // ContactUs Component

const Layout = ({ section }) => {
  // Create refs for the sections
  const reviews1Ref = useRef(null);
  const service1Ref = useRef(null);

  // Scroll to the appropriate section based on the URL (using section prop)
  useEffect(() => {
    if (section === "reviews1" && reviews1Ref.current) {
      reviews1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "service1" && service1Ref.current) {
      service1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [section]);

  return (
    <div>
      {/* Header with navigation functionality */}
      <Header />

      {/* Main content */}
      <Hero />

      {/* FashionPage with refs for reviews and service */}
      <FashionPage reviews1Ref={reviews1Ref} service1Ref={service1Ref} />

      {/* ContactUs section */}
      <ContactUs />
    </div>
  );
};

export default Layout;
