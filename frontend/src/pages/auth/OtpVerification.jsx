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

const OtpVerification = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkModeContext(); // Access dark mode state
  const [otp, setOtp] = useState(["", "", "", ""]); // State for OTP digits
  const [open, setOpen] = useState(false); // State to handle dialog visibility

  const predefinedOtp = "8694"; // Replace with real backend OTP or API call

  // Handle OTP input changes
  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(0, 1); // Ensure only one digit is entered
    setOtp(updatedOtp);

    // Automatically focus the next input if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Open and close the dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/forgetform"); // Navigate to ForgetForm component
  };

  // Verify the OTP
  const handleVerify = () => {
    const enteredOtp = otp.join(""); // Combine all digits
    if (enteredOtp === predefinedOtp) {
      handleOpen(); // Show success dialog
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? "#333" : "#fff",
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
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      width: "50px",
      height: "50px",
      textAlign: "center",
      fontSize: "1.5rem",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: isDarkMode ? "#555" : "#fff",
      color: isDarkMode ? "#fff" : "#333",
    },
    verifyButton: {
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
      <div>
        <Link to="/login" style={styles.backIcon}>
          <ArrowCircleLeftIcon style={styles.icon} />
        </Link>
      </div>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>OTP Verification</h2>
          <p style={styles.subtitle}>
            Please check your email to see the verification code
          </p>
        </div>
        <div style={styles.inputContainer}>
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={styles.input}
            />
          ))}
        </div>
        <div>
          <button style={styles.verifyButton} onClick={handleVerify}>
            Verify
          </button>
        </div>
      </div>

      {/* Dialog for success */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{ textAlign: "center", padding: "20px" }}>
          <CheckCircleOutlineIcon style={styles.dialogIcon} />
          <Typography variant="h6" gutterBottom>
            OTP Verified
          </Typography>
          <Typography>Your OTP was successfully verified.</Typography>
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

export default OtpVerification;
