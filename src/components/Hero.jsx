import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faTags, faTimes } from "@fortawesome/free-solid-svg-icons";

// Animations
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF8F2;  // Background color
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;  // Default text color
  }
`;

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSmallImageIndex, setCurrentSmallImageIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const mainImages = [
    "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3050085/3050085_32I8.png",
    "https://ae01.alicdn.com/kf/S20521f6e654d4cb29b92f9b525d12a00p.jpg?width=800&height=800&hash=1600",
    "https://ae01.alicdn.com/kf/S20521f6e654d4cb29b92f9b525d12a00p.jpg?width=800&height=800&hash=1600",
  ];

  const smallImages = [
    "https://assets.theplace.com/image/upload/t_pdp_img_m,f_auto,q_auto/v1/ecom/assets/products/tcp/3050085/3050085_32I8.png",
    "https://ae01.alicdn.com/kf/S20521f6e654d4cb29b92f9b525d12a00p.jpg?width=800&height=800&hash=1600",
    "https://ae01.alicdn.com/kf/S20521f6e654d4cb29b92f9b525d12a00p.jpg?width=800&height=800&hash=1600",
  ];

  useEffect(() => {
    const mainImageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 3000);

    const smallImageInterval = setInterval(() => {
      setCurrentSmallImageIndex((prevIndex) => (prevIndex + 1) % smallImages.length);
    }, 3000);

    return () => {
      clearInterval(mainImageInterval);
      clearInterval(smallImageInterval);
    };
  }, [mainImages.length, smallImages.length]);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <RedisShadowBox>
        {/* Gradient Background */}
        <GradientBackground />

        {/* Sale Badge */}
        <SaleBadge>
          <FontAwesomeIcon icon={faTags} /> 50% Off!
        </SaleBadge>
<br></br>
        {/* Content Wrapper for Text and Image Section */}
        <ContentWrapper>
          {/* Text Section */}
          <TextSection>
            <Heading>
              Elevate Your Style with <br />
              <Highlight>Timeless Elegance</Highlight>
            </Heading>
            <Paragraph>
              Step into a world where art meets fashion. Our collection is inspired
              by the beauty of diversity and the spirit of innovation. From bold
              patterns to subtle classics, we offer styles for every occasion.
            </Paragraph>
            <Button onClick={togglePopup}>
              <FontAwesomeIcon icon={faShoppingBag} /> Explore Collection
            </Button>
          </TextSection>

          {/* Image Section with Two Images */}
          <ImageWrapper>
            {/* Main Image */}
            <MainImage>
              <img
                src={mainImages[currentImageIndex]}
                alt="Main Hero"
              />
            </MainImage>

            {/* Smaller Image */}
            <SmallImage>
              <img
                src={smallImages[currentSmallImageIndex]}
                alt="Small Hero"
              />
            </SmallImage>
          </ImageWrapper>
        </ContentWrapper>

        {/* Popup Modal */}
        {isPopupVisible && (
          <PopupModal>
            <PopupContent>
              <CloseButton onClick={togglePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
              <h2>New Collection Alert!</h2>
              <p>
                Discover our latest collection of timeless fashion. Limited stock
                available, so grab your favorites before they're gone!
              </p>
              <PopupButton>Shop Now</PopupButton>
            </PopupContent>
          </PopupModal>
        )}
      </RedisShadowBox>
    </>
  );
}

export default Hero;

// Styled Components

const RedisShadowBox = styled.div`
  padding: 1rem 3rem;  // Padding for more space around content
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;  // Height adjusted for better space usage
  position: relative;
  overflow: hidden;
  border-radius: 20px;  // Rounded corners for modern design
  z-index: 2;
    margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;  // Increased gap for better spacing between elements
  max-width: 1200px;  // Wider content area
  width: 100%;
  justify-items: center;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(246, 236, 243, 0.9);  // Slight transparency with gradient animation
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  z-index: -1;
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ff6f61;
  color: #fff;
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 3;
  
  animation: ${fadeIn} 1s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);  // Added shadow to SaleBadge
`;

const TextSection = styled.div`
  text-align: left;
  max-width: 600px;
  color: #fff;
      margin-top: 2rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;  // Smaller font size for better balance
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  color: #000;
  animation: ${fadeIn} 1s ease-in-out;
  
  @media (max-width: 768px) {
    font-size: 2rem;  // Smaller font size for mobile view
  }
`;

const Highlight = styled.span`
  color: #ff6f61;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #ff6f61;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;  // Adjusted font size
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #ff6f61;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #ff4a3d;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const MainImage = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  animation: ${floatAnimation} 2s infinite ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const SmallImage = styled.div`
  width: 50%;
  max-width: 200px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  position: absolute;
  bottom: -50px;
  right: -50px;
  animation: ${floatAnimation} 6s infinite ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const PopupModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  max-width: 400px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PopupButton = styled.button`
  background-color: #ff6f61;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background-color: #ff4a3d;
  }
`;

