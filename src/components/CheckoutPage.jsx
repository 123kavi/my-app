import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext"; // Use the custom hook to access cart items
import HeaderHash from "./HeaderHash";
import Swal from "sweetalert2"; // Import SweetAlert2

const CheckoutPage = () => {
  const { selectedItem, updateCartItemQuantity } = useCart();

  // Local state to manage quantity and total price, setting default quantity as 1
  const [quantity, setQuantity] = useState(
    selectedItem ? selectedItem.quantity || 1 : 1
  );
  
  // Set total price based on initial quantity (default 1 if no quantity exists)
  const [totalPrice, setTotalPrice] = useState(
    selectedItem
      ? parseFloat(selectedItem.price.replace("$", "")) * (selectedItem.quantity || 1)
      : 0
  );

  // Update total price whenever the quantity changes
  useEffect(() => {
    if (selectedItem) {
      const price = parseFloat(selectedItem.price.replace("$", ""));
      setTotalPrice((price * quantity).toFixed(2)); // Update total price based on quantity
    }
  }, [quantity, selectedItem]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity); // Update local quantity state
      updateCartItemQuantity(selectedItem.id, newQuantity); // Update context with new quantity
    }
  };

  // Function to handle the "Buy Now" button click
  const handleBuyNow = () => {
    Swal.fire({
      title: "Contact Us",
      text: "Please contact us to complete your purchase.",
      icon: "info",
      confirmButtonText: "Okay",
    });
  };

  if (!selectedItem) {
    return <div style={{ padding: "20px", textAlign: "center" }}>No item selected for checkout.</div>;
  }

  return (
    <div>
      <HeaderHash />
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          backgroundColor: "#f4f4f4",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "90%",
            maxWidth: "900px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          {/* Left side: Large product image */}
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right side: Details */}
          <div
            style={{
              flex: "1",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {selectedItem.name}
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#777",
                  marginBottom: "20px",
                }}
              >
                High-quality product designed to meet your expectations.
              </p>

              {/* Product Details */}
              <ul
                style={{
                  marginBottom: "20px",
                  paddingLeft: "20px",
                  color: "#555",
                }}
              >
                <li>Made with premium materials</li>
                <li>Available in multiple sizes</li>
                <li>Durable and long-lasting</li>
                <li>Lightweight and easy to carry</li>
                <li>1-year warranty included</li>
              </ul>

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                Price: {selectedItem.price}
              </p>

              {/* Quantity control */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    backgroundColor: "#ddd",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
                  style={{
                    width: "60px",
                    textAlign: "center",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    backgroundColor: "#ddd",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <p
                style={{
                  fontSize: "18px",
                  color: "#444",
                }}
              >
                <strong>Total: ${totalPrice}</strong>
              </p>
            </div>

            {/* Buy Now Button */}
            <div>
              <button
                onClick={handleBuyNow}
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "16px",
                  backgroundColor: "#000", // Black button
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
