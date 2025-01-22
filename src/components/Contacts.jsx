import React, { useState } from "react";
import Header from "./Header";
const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same index is clicked
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <>
    <Header/>
      <div className="contact-us">
        <div className="contact-content">
          {/* Left Section: Contact Information */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions or need assistance? We're here to help! Reach out to
              us via our contact details or connect with us on social media.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="icon">📍</span>
                <span>123 Fashion Street, New York, NY 10001</span>
              </div>
              <div className="detail-item">
                <span className="icon">📞</span>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="detail-item">
                <span className="icon">✉️</span>
                <span>info@fashionstore.com</span>
              </div>
            </div>
            <div className="social-media">
              <a href="#" className="social-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                />
              </a>
              <a href="#" className="social-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>

          {/* Right Section: Side Image */}
          <div className="side-image">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Contact Us"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item" onClick={() => toggleFAQ(0)}>
            <h3 className="faq-question">
              What is your return policy?
              <span className={`faq-icon ${activeIndex === 0 ? "active" : ""}`}>
                {activeIndex === 0 ? "−" : "+"}
              </span>
            </h3>
            {activeIndex === 0 && (
              <p className="faq-answer">
                We offer a 30-day return policy for all items in their original
                condition.
              </p>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(1)}>
            <h3 className="faq-question">
              Do you offer international shipping?
              <span className={`faq-icon ${activeIndex === 1 ? "active" : ""}`}>
                {activeIndex === 1 ? "−" : "+"}
              </span>
            </h3>
            {activeIndex === 1 && (
              <p className="faq-answer">
                Yes, we ship internationally. Shipping fees may vary depending on
                your location.
              </p>
            )}
          </div>
          <div className="faq-item" onClick={() => toggleFAQ(2)}>
            <h3 className="faq-question">
              How can I track my order?
              <span className={`faq-icon ${activeIndex === 2 ? "active" : ""}`}>
                {activeIndex === 2 ? "−" : "+"}
              </span>
            </h3>
            {activeIndex === 2 && (
              <p className="faq-answer">
                Once your order is shipped, you'll receive a tracking number via
                email.
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-us {
          padding: 2rem 1.5rem;
          background:#FBF8F2;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          flex-direction: column;
        }

        .contact-content {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1200px;
          width: 100%;
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(0, 123, 255, 0.2); /* Blue shadow */
        }

        .contact-info {
          flex: 1;
          min-width: 300px;
        }

        .contact-info h2 {
          font-size: 2.4rem;
          margin-bottom: 20px;
          color: #333;
        }

        .contact-info p {
          font-size: 1.1rem;
          color: #777;
          margin-bottom: 30px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1rem;
          color: #555;
        }

        .detail-item .icon {
          font-size: 1.5rem;
        }

        .social-media {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        .social-icon img {
          width: 32px;
          height: 32px;
          transition: transform 0.3s ease;
        }

        .social-icon:hover img {
          transform: scale(1.2);
        }

        .side-image {
          flex: 1;
          min-width: 300px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 123, 255, 0.2); /* Blue shadow */
        }

        .side-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* FAQ Section */
        .faq-section {
          margin-top: 40px;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0, 123, 255, 0.2);
          width: 100%;
          max-width: 800px;
        }

        .faq-section h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
        }

        .faq-item {
          margin-bottom: 20px;
          cursor: pointer;
        }

        .faq-question {
          font-size: 1.2rem;
          color: #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-icon {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .faq-icon.active {
          transform: rotate(45deg);
        }

        .faq-answer {
          font-size: 1rem;
          color: #555;
          margin-top: 10px;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
            padding: 20px;
          }

          .contact-info,
          .side-image {
            min-width: 100%;
          }

          .side-image {
            order: -1; /* Move image to the top on mobile */
          }

          .faq-section {
            padding: 15px;
          }
        }

        @media (max-width: 480px) {
          .contact-info h2 {
            font-size: 2rem;
          }

          .contact-info p {
            font-size: 1rem;
          }

          .faq-question {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactUs;
