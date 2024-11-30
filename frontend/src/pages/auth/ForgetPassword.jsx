import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Link, useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext"; // Import the context
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state
  const [open, setOpen] = useState(false); // State to handle dialog visibility

  const handleOpen = () => {
    setOpen(true); // Show dialog
    
  };

  const handleClose = () => {
    setOpen(false); // Hide dialog
      navigate("/otp");
  
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#333" : "#fff", // Change background based on mode
      height: "100vh",
      width: "100%",
    },
    card: {
      width: "100%",
      maxWidth: "480px",
      padding: "20px",
      backgroundColor: isDarkMode ? "#444" : "#fff",
      borderRadius: "10px",
      textAlign: "center",
      color: isDarkMode ? "#fff" : "#333",
    },
    header: {
      marginBottom: "20px",
      position: "relative",
    },
    header: {
      marginBottom: "20px",
    },
    backIcon: {
      position: "absolute",
      left: "10px",
      top: "10px",
      textDecoration: "none",
      color: isDarkMode ? "lightgray" : "#ff6600",
    },
    icon: {
      fontSize: "30px",
    },
    title: {
      fontSize: "1.5rem",
      margin: "20px 0 10px",
      color: isDarkMode ? "#fff" : "#333",
    },
    subtitle: {
      fontSize: "0.9rem",
      color: isDarkMode ? "#bbb" : "#888",
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
      backgroundColor: isDarkMode ? "#555" : "#fff",
      color: isDarkMode ? "#fff" : "#333",
    },
    resetButton: {
      width: "94%",
      padding: "10px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#D66400",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    dialogIcon: {
      fontSize: "60px",
      color: "#ff6600",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link to="/login" style={styles.backIcon}>
          <ArrowCircleLeftIcon style={styles.icon} />
        </Link>
      </div>
      <div style={styles.card}>
        <div style={styles.header}>
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
          <button style={styles.resetButton} onClick={handleOpen}>
            Reset Password
          </button>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ textAlign: "center", padding: "20px" }}>
          <CheckCircleOutlineIcon style={styles.dialogIcon} />
          <Typography variant="h6" gutterBottom>
            Check Your Email
          </Typography>
          <Typography>
            We have sent password recovery instructions to your email.
          </Typography>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button onClick={handleClose} style={{ color: "#ff6600" }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ForgetPassword;
