import React from 'react';
import { FaHeart, FaShoppingBag, FaRecycle } from 'react-icons/fa';
import Header from "./Header";

const AboutUs = () => {
  // Inline styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
    },
    hero: {
      background: 'linear-gradient(135deg, #ff4081, #4caf50)',
      color: '#fff',
      padding: '100px 20px',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      marginBottom: '50px',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      animation: 'fadeIn 2s ease-out',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '20px',
      letterSpacing: '2px',
    },
    heroDescription: {
      fontSize: '1.2rem',
      lineHeight: '1.6',
      marginBottom: '30px',
    },
    valuesSection: {
      marginTop: '60px',
      padding: '40px 20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    },
    values: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px',
    },
    valueItem: {
      textAlign: 'center',
      flex: '1 1 30%',
      minWidth: '250px',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    },
    valueItemIcon: {
      marginBottom: '10px',
    },
    valueItemText: {
      fontSize: '1rem',
      color: '#333',
    },
    teamMembers: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px',
      marginTop: '40px',
    },
    teamMember: {
      textAlign: 'center',
      flex: '1 1 30%',
      minWidth: '250px',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
    },
    teamMemberImg: {
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      marginBottom: '10px',
      transition: 'transform 0.3s ease-in-out',
    },
    footer: {
      textAlign: 'center',
      marginTop: '60px',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      fontSize: '14px',
      color: '#555',
    },
    '@media(max-width: 768px)': {
      values: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      teamMembers: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      heroTitle: {
        fontSize: '2rem',
      },
      heroDescription: {
        fontSize: '1rem',
      },
    },
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Our Vision</h1>
            <p style={styles.heroDescription}>
              We are redefining fashion with a unique blend of creativity, style, and sustainability.
            </p>
          </div>
        </section>

        <section style={styles.valuesSection}>
          <h2>What We Stand For</h2>
          <div style={styles.values}>
            <div style={styles.valueItem}>
              <FaHeart size={60} color="#FF4081" style={styles.valueItemIcon} />
              <h3>Passion</h3>
              <p style={styles.valueItemText}>
                Our designs are driven by a deep passion for creating beauty and self-expression through fashion.
              </p>
            </div>
            <div style={styles.valueItem}>
              <FaRecycle size={60} color="#4CAF50" style={styles.valueItemIcon} />
              <h3>Sustainability</h3>
              <p style={styles.valueItemText}>
                We are committed to using eco-friendly materials, creating designs that last, and promoting ethical practices.
              </p>
            </div>
            <div style={styles.valueItem}>
              <FaShoppingBag size={60} color="#FFEB3B" style={styles.valueItemIcon} />
              <h3>Style</h3>
              <p style={styles.valueItemText}>
                Every piece is crafted with an eye for timeless elegance, offering a modern take on classic designs.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Meet Our Creative Minds</h2>
          <div style={styles.teamMembers}>
            <div style={styles.teamMember}>
              <img
                src="https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg"
                alt="Jane Doe"
                style={styles.teamMemberImg}
              />
              <h3>Jane Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div style={styles.teamMember}>
              <img
                src="https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg"
                alt="John Smith"
                style={styles.teamMemberImg}
              />
              <h3>John Smith</h3>
              <p>Lead Designer</p>
            </div>
            <div style={styles.teamMember}>
              <img
                src="https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg"
                alt="Alice Johnson"
                style={styles.teamMemberImg}
              />
              <h3>Alice Johnson</h3>
              <p>Marketing Lead</p>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <p>&copy; 2025 Fashion Design Co. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
