import React from "react";
import Navbar from "../components/HomeNavbar";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.heading}>
        Trade <span style={styles.highlight}>Perpetuals</span>
      </h1>
      <p style={styles.paragraph}>
        Perpetual Dex is a decentralized perpetuals exchange
        <br />
        with best-in-class speed, liquidity, and price.
      </p>
      <Link to="/trade" style={styles.buttonLink}>
        Start Trading
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  highlight: {
    color: "#50D2C1",
  },
  paragraph: {
    fontSize: "24px",
    marginBottom: "30px",
  },
  buttonLink: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#50D2C1",
    color: "#16181D",
    textDecoration: "none",
    borderRadius: "50px",
    fontWeight: "500",
  },
};

export default Home;