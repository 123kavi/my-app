import React from "react";

const FashionPage = () => {
  const imageURL =
    "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3050085/3050085_32I8.png";

  // Sample data for carousel items
  const carouselItems = [
    { id: 1, name: "Item 1", price: "$49.99", image: imageURL },
    { id: 2, name: "Item 2", price: "$59.99", image: imageURL },
    { id: 3, name: "Item 3", price: "$39.99", image: imageURL },
    { id: 4, name: "Item 4", price: "$69.99", image: imageURL },
  ];

  // Sample data for features
  const features = [
    {
      title: "Premium Quality",
      text: "Our products are made with the finest materials to ensure durability and comfort.",
    },
    {
      title: "Affordable Prices",
      text: "We offer high-quality fashion at prices that won't break the bank.",
    },
    {
      title: "Fast Shipping",
      text: "Get your order delivered to your doorstep in record time.",
    },
  ];

  // Sample data for reviews
  const reviews = [
    {
      name: "Jane Doe",
      text: "Absolutely love the quality and style of the clothes! Will definitely shop again.",
      rating: "5/5",
    },
    {
      name: "John Smith",
      text: "Great prices for such amazing products. The delivery was super fast too!",
      rating: "4.5/5",
    },
    {
      name: "Emily Johnson",
      text: "The designs are so trendy, and the fit is perfect. Highly recommend!",
      rating: "5/5",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Fashion Page Section */}
      <div style={styles.fashionSection}>
        <div style={styles.fashionContent}>
          <img
            src="https://i5.walmartimages.com/asr/cb3ea73f-a96d-4194-b7a9-756fd7beef48.4e6928f4f2cd856cbe4ef4719ba1a89a.jpeg"
            alt="Fashion"
            style={styles.fashionImage}
          />
          <div style={styles.fashionText}>
            <div style={styles.shadowBox}>
              <h1 style={styles.fashionHeading}>Discover Your Unique Style</h1>
              <p style={styles.fashionParagraph}>
                Discover fashion that fits your personality. Crafted with passion,
                designed for impact—our pieces make you shine.
              </p>
              <button
              style={styles.buyNowButton}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = styles.backgroundColor)
              }
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#8686F7")}
            >
              Buy Now
            </button>
            </div>
            
          </div>
        </div>
      </div>

      <h2 style={styles.additionalHeading}>Products</h2>
      <div style={styles.reviewsWrapper}>
        {carouselItems.map(item => (
          <div style={styles.review1Card} key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.cardImage}
            />
            <p style={styles.itemPrice}>{item.price}</p>
            <div style={styles.buttonGroup}>
              <button style={styles.shopNowButton}>Shop Now &rarr;</button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Content to Fill the Page */}
      <div style={styles.additionalContent}>
        <h2 style={styles.additionalHeading}>Why Choose Us?</h2>
        <div style={styles.reviewsWrapper}>
          {features.map((feature, index) => (
            <div style={styles.featureCard} key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.additionalHeading}>Customer Reviews</h2>
        <div style={styles.reviewsWrapper}>
          {reviews.map((review, index) => (
            <div style={styles.reviewCard} key={index}>
              <h3>{review.name}</h3>
              <p>"{review.text}"</p>
              <p style={styles.reviewRating}>Rating: {review.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: "0 1rem",
    backgroundColor: "#FBF8F2", // Added background color to the container
  },

  additionalHeading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#2d3748",
    marginBottom: "2rem",
    textAlign: "center",
  },

  reviewsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  review1Card: {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "280px",
  },

  cardImage: {
    width: "100%",
    maxHeight: "250px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "0.75rem",
  },

  shopNowButton: {
    backgroundColor: "#8686F7",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  featureCard: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "20px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },

  fashionSection: {
    marginBottom: "4rem",
  },

  fashionContent: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  fashionImage: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)",
  },

  fashionText: {
    flex: "1",
    maxWidth: "600px",
    textAlign: "left",
  },

  shadowBox: {
    backgroundColor: "rgba(28, 3, 21, 0.9)",
    color: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(134, 134, 247, 0.3)",
  },

  fashionHeading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },

  fashionParagraph: {
    fontSize: "1.2rem",
  },

  buyNowButton: {
    backgroundColor: "#8686F7",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },

  reviewCard: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },

  reviewRating: {
    marginTop: "1rem",
    fontWeight: "600",
    color: "#ff6b6b",
  },
};

export default FashionPage;
