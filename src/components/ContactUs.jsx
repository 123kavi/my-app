import React from "react";

const ContactUs = () => {
  return (
    <>
  
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
      </div>

      <style>{`
        .contact-us {
          padding: 1rem 1.5rem;
          background:#FBF8F2;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 10vh;
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
          max-width: 500px;
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
          font-size: 1.2rem;
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
          max-width: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 123, 255, 0.2); /* Blue shadow */
        }

        .side-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .contact-content {
            flex-direction: column;
            padding: 20px;
          }

          .contact-info,
          .side-image {
            max-width: 100%;
          }

          .side-image {
            order: -1; /* Move image to the top on mobile */
          }
        }
      `}</style>
    </>
  );
};

export default ContactUs;