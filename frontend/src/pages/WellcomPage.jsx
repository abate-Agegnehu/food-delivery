import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../context/DarkModeContext"; // Import the context
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import burger from "../assets/image/burger.jpg";

const WelcomePage = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state

  const handleModeChange = () => {
    toggleDarkMode(); // Toggle dark mode on each click
  };

  return (
    <div style={isDarkMode ? styles.containerDark : styles.containerLight}>
      {/* Mode Button */}
      <div style={styles.modeButtonContainer}>
        <button
          onClick={handleModeChange}
          style={styles.menuButton}
          title={isDarkMode ? "Turn on the light" : "Turn off the light"}
        >
          {isDarkMode ? (
            <LightModeIcon style={styles.icon} />
          ) : (
            <NightlightRoundIcon style={styles.icon} />
          )}
        </button>
      </div>

      {/* Welcome Content */}
      <div style={styles.iconContainer}>
        <Link to={"/login"}>
          <ArrowCircleRightIcon style={styles.icon} />
        </Link>
      </div>
      <div style={styles.textContainer}>
        <h3 style={styles.title}>Welcome To</h3>
        <p style={styles.subtitle}>
          <span style={styles.highlight}>Food</span> Delivery app
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img src={burger} alt="Delicious food" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  containerLight: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#333",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  containerDark: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#333",
    color: "#f9f9f9",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modeButtonContainer: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  menuButton: {
    padding: "10px",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#333",
    transition: "color 0.3s ease",
  },
  icon: {
    fontSize: "40px",
    color: "#D66400",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
  },
  textContainer: {
    marginBottom: "30px",
    padding: "0 20px",
  },
  title: {
    margin: 0,
    fontSize: "3rem",
    fontWeight: "bolder",
  },
  subtitle: {
    fontSize: "2rem",
  },
  highlight: {
    color: "#FF6600",
    fontWeight: "bold",
  },
  imageContainer: {
    height: "60%",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  },
};

export default WelcomePage;
