import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={styles.navbar}>
            <Link href="/" style={styles.logoLink}>
                <img src="/perpetual-logo.webp" alt="Logo" style={styles.logo} />
            </Link>
            <p>Connect Wallet</p>
        </div>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        padding: "60px 70px",
        backgroundColor: "transparent",
        position: "absolute",
        width: "100%",
        top: "0",
        left: "0",
        right: "0",
    },
    logoLink: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
    },
    logo: {
        width: "60px",
        height: "60px",
    },
    button: {
        width: "200px",
        padding: "10px 0",
        backgroundColor: "#16181D",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "box-shadow 0.3s ease",
        boxShadow: "0 0 25px rgba(80, 210, 193, 0.3)",
    },
};

export default Navbar;