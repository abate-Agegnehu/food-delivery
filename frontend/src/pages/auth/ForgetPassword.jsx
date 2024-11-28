import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext"; // Import the context

const ForgetPassword = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state

  const handleModeChange = () => {
    toggleDarkMode(); // Toggle dark mode on each click
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#333" : "#fff", // Change background based on mode
      height: "100vh", // Full viewport height to center vertically
      width: "100%", // Full width to center horizontally
    },
    card: {
      width: "100%",
      maxWidth: "480px",
      padding: "20px",
      backgroundColor: isDarkMode ? "#444" : "#fff", // Dark card background when dark mode is on
      borderRadius: "10px",
      textAlign: "center",
      color: isDarkMode ? "#fff" : "#333", // Text color changes based on mode
    },
    header: {
      marginBottom: "20px",
      position: "relative",
    },
    backIcon: {
      position: "absolute",
      top: "10px",
      left: "-10px",
      textDecoration: "none",
      color: isDarkMode ? "lightgray" : "gray", // Adjust icon color based on mode
    },
    icon: {
      fontSize: "30px",
    },
    title: {
      fontSize: "1.5rem",
      margin: "20px 0 10px",
      color: isDarkMode ? "#fff" : "#333", // Title color based on mode
    },
    subtitle: {
      fontSize: "0.9rem",
      color: isDarkMode ? "#bbb" : "#888", // Subtitle color based on mode
    },
    inputContainer: {
      marginBottom: "20px",
    },
    input: {
      width: "90%",
      padding: "10px",
      marginBottom: "10px",
      fontSize: "1rem",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: isDarkMode ? "#555" : "#fff", // Input background changes based on mode
      color: isDarkMode ? "#fff" : "#333", // Input text color
    },
    actions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    resetButton: {
      width: "94%",
      padding: "10px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#ff6600",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    // Media query for small screens
    "@media (max-width: 480px)": {
      container: {
        padding: "0", // Remove padding on small screens
        height: "100%",
        width: "100%", // Ensure full width
      },
      card: {
        height: "100%", // Cover full height
        width: "100%", // Cover full width
        padding: "0", // Remove card padding
        borderRadius: "0", // Remove border radius for full coverage
        boxShadow: "none", // Remove shadow for full width/height effect
      },
      title: {
        fontSize: "1.1rem",
      },
      subtitle: {
        fontSize: "0.7rem",
      },
      input: {
        fontSize: "0.8rem",
      },
      resetButton: {
        fontSize: "0.8rem",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <Link to="/login" style={styles.backIcon}>
            <ArrowCircleLeftIcon style={styles.icon} />
          </Link>
          <h2 style={styles.title}>Forgot Password</h2>
          <p style={styles.subtitle}>Enter your email to reset your password</p>
        </div>
        <div style={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>
        <div style={styles.actions}>
          <button style={styles.resetButton}>Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
