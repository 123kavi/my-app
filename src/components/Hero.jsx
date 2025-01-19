import React, { useState, useEffect } from "react";

// Hero Component
function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSmallImageIndex, setCurrentSmallImageIndex] = useState(0);

  // List of images for the main and small image sections
  const mainImages = [
    "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3050085/3050085_32I8.png",
    "https://dynamic.zacdn.com/T99nA1njR3RpeBWgIoNt8glSR70=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/a-in-girls-4260-6056321-1.jpg",
    "https://dynamic.zacdn.com/T99nA1njR3RpeBWgIoNt8glSR70=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/a-in-girls-4260-6056321-1.jpg",
  ];

  const smallImages = [
    "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3050085/3050085_32I8.png",
    "https://dynamic.zacdn.com/T99nA1njR3RpeBWgIoNt8glSR70=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/a-in-girls-4260-6056321-1.jpg",
    "https://dynamic.zacdn.com/T99nA1njR3RpeBWgIoNt8glSR70=/filters:quality(70):format(webp)/https://static-sg.zacdn.com/p/a-in-girls-4260-6056321-1.jpg",
  ];

  // Function to change images every 3 seconds
  useEffect(() => {
    const mainImageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 3000);

    const smallImageInterval = setInterval(() => {
      setCurrentSmallImageIndex((prevIndex) => (prevIndex + 1) % smallImages.length);
    }, 3000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(mainImageInterval);
      clearInterval(smallImageInterval);
    };
  }, [mainImages.length, smallImages.length]);

  const containerStyle = {
    padding: "6rem 1.5rem 2rem",
    backgroundColor: "#FBF8F2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    position: "relative",
    overflow: "hidden",
  };

  const contentWrapperStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3rem",
    maxWidth: "1200px",
    width: "100%",
    justifyItems: "center",
    position: "relative",
    zIndex: 2,
  };

  const textSectionStyle = {
    textAlign: "left",
    maxWidth: "600px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    lineHeight: "1.2",
    color: "#2d3748",
    marginBottom: "1.5rem",
    background: "linear-gradient(45deg, #f25f5c, #ff7f50)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    position: "relative",
  };

  const underlineStyle = {
    position: "relative",
    display: "inline-block",
  };

  const pinkLineStyle = {
    position: "absolute",
    bottom: "-10px",
    left: "0",
    width: "100%",
    height: "4px",
    backgroundColor: "#f25f5c",
    borderRadius: "2px",
  };

  const unknownAlphaStyle = {
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#f25f5c",
    animation: "slide 5s infinite linear",
  };

  const spanStyle = {
    color: "#f25f5c", // Define the spanStyle object
  };

  const paragraphStyle = {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#4a5568",
  };

  const imageWrapperStyle = {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    transform: "translateY(0)",
    animation: "float 4s infinite ease-in-out",
  };

  const smallImageStyle = {
    width: "50%",
    maxWidth: "200px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
    position: "absolute",
    bottom: "-50px",
    right: "-50px",
    animation: "float 6s infinite ease-in-out",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
    zIndex: 1,
  };

  const blackLineStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "40px", // Adjust the height to make the line bigger
    backgroundColor: "#000000", // Black color
  };

  // Keyframes for animations
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    @keyframes slide {
      0% {
        transform: translateX(-50%) translateY(0);
      }
      50% {
        transform: translateX(-50%) translateY(-10px);
      }
      100% {
        transform: translateX(-50%) translateY(0);
      }
    }
  `, styleSheet.cssRules.length);

  return (
    <div>
      <div style={containerStyle}>
        {/* Overlay for modern gradient effect */}
        <div style={overlayStyle}></div>

        {/* Content Wrapper for Text and Image Section */}
        <div style={contentWrapperStyle}>
          {/* Text Section */}
          <div style={textSectionStyle}>
            <h1 style={headingStyle}>
              <div style={underlineStyle}>
                Elevate Your Style with <br />
                <span style={spanStyle}>Timeless </span> Elegance.
                <div style={pinkLineStyle}></div>
                <div style={unknownAlphaStyle}>Unknown Alpha</div>
              </div>
            </h1>
            <p style={paragraphStyle}>
              Step into a world where art meets fashion. Our collection is
              inspired by the beauty of diversity and the spirit of innovation.
              From bold patterns to subtle classics, we offer styles for every
              occasion. Designed with the finest materials and an eye for detail,
              our creations bring out the best version of you. Elevate your look
              with designs that turn heads and spark conversations.
            </p>
          </div>

          {/* Image Section with Two Images */}
          <div style={imageWrapperStyle}>
            {/* Main Image */}
            <div style={imageStyle}>
              <img
                src={mainImages[currentImageIndex]}
                alt="Main Hero"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Smaller Image */}
            <div style={smallImageStyle}>
              <img
                src={smallImages[currentSmallImageIndex]}
                alt="Small Hero"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

   
      </div>
    </div>
  );
}

export default Hero;