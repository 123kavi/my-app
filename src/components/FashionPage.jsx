import React from "react";

function FashionPage() {
  const containerStyle = {
    padding: "4rem 1.5rem",
    backgroundColor: "#FBF8F2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "10vh",
  };

  const contentWrapperStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "3rem",
    maxWidth: "1200px",
    width: "100%",
    alignItems: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)", // #8686F7 shadow
  };

  const textSectionStyle = {
    textAlign: "left",
    maxWidth: "600px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    lineHeight: "1.2",
    color: "#2d3748",
    marginBottom: "1.5rem",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#4a5568",
    marginBottom: "2rem",
  };

  const buttonStyle = {
    backgroundColor: "#8686F7",
    color: "#fff",
    padding: "0.75rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(21, 21, 27, 0.3)", // #8686F7 shadow
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#6c6cd9", // Darker shade for hover
  };

  const shadowBoxStyle = {
    backgroundColor: "#F7B6BC", // White background for the box
    padding: "2rem",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(255, 86, 221, 0.3)", // #FF56D shadow
    marginBottom: "2rem",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        {/* Image Section */}
        <div>
          <img
            src="https://i5.walmartimages.com/asr/cb3ea73f-a96d-4194-b7a9-756fd7beef48.4e6928f4f2cd856cbe4ef4719ba1a89a.jpeg"
            alt="Fashion"
            style={imageStyle}
          />
        </div>

        {/* Text Section */}
        <div style={textSectionStyle}>
          {/* Shadow Box */}
          <div style={shadowBoxStyle}>
            <h1 style={headingStyle}>Discover Your Unique Style</h1>
            <p style={paragraphStyle}>
              Discover fashion that fits your personality. Crafted with passion,
              designed for impact—our pieces make you shine.
            </p>
          </div>

          {/* Buy Now Button */}
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "black")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FashionPage;