import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext"; // Import your dark mode context
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import food from "../../assets/image/food.png";
import thankuimage from "../../assets/image/thankuimage.png";

const SignUp = () => {
  const { isDarkMode } = useDarkModeContext(); // Access dark mode state
  const navigate = useNavigate(); // For navigation

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false); // State to show Thank You message

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");

      // Show the Thank You message
      setShowThankYou(true);

      // Redirect to Home page after 3 seconds
      setTimeout(() => {
        navigate("/layout");
      }, 3000);
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
    >
      {/* Show Thank You Modal */}
      {showThankYou ? (
        <div style={styles.thankYouContainer}>
          <div style={styles.thankYouModal}>
            <img
              src={thankuimage} // Replace with the correct path or import statement
              alt="Thank You"
              style={styles.thankYouImage}
            />
            <p style={styles.thankYouSubText}>Continue by using our app</p>
            <img
              src={food} // Replace with the correct path or import statement
              alt="Thank You"
              style={styles.thankYouImage}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            ...styles.card,
            backgroundColor: isDarkMode ? "#444" : "#fff",
          }}
        >
          <div style={styles.header}>
            <Link to="/login" style={styles.backIcon}>
              <ArrowCircleLeftIcon style={styles.icon} />
            </Link>
            <h2
              style={{ ...styles.title, color: isDarkMode ? "#fff" : "#333" }}
            >
              Sign up now
            </h2>
            <p
              style={{
                ...styles.subtitle,
                color: isDarkMode ? "#bbb" : "#888",
              }}
            >
              Please fill in the details and create an account
            </p>
          </div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                ...styles.input,
                backgroundColor: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                ...styles.input,
                backgroundColor: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                ...styles.input,
                backgroundColor: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              style={{
                ...styles.input,
                backgroundColor: isDarkMode ? "#555" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p style={styles.errorText}>{error}</p>}
          <div style={styles.actions}>
            <button style={styles.signUpButton} onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <div style={styles.signInContainer}>
            <p style={styles.text}>Already have an account?</p>
            <Link to={"/login"} style={styles.signInButton}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100%", // Full width
    position: "relative",
    padding: "0 20px", // Add some padding for smaller screens
    boxSizing: "border-box", // Ensures padding doesn't affect the layout
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxSizing: "border-box", // Ensures padding doesn't affect the layout
  },
  header: {
    marginBottom: "20px",
  },
  backIcon: {
    position: "absolute",
    left: "10px",
    top: "10px",
  },
  icon: {
    fontSize: "30px",
    color: "#D66400",
  },
  title: {
    fontSize: "1.8rem",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: "0.9rem",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  input: {
    width: "90%", // Make inputs take full width
    padding: "10px",
    marginBottom: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signUpButton: {
    width: "94%",
    padding: "10px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#D66400",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  signInContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    marginBottom: "15px",
  },
  signInButton: {
    background: "none",
    border: "none",
    color: "#D66400 ",
    fontSize: "0.9rem",
    cursor: "pointer",
    textDecoration: "none",
  },
  errorText: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "10px",
  },
  thankYouContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "10px",
    textAlign: "center",
  },
  thankYouModal: {
    maxWidth: "300px",
    margin: "0 auto",
  },
  thankYouImage: {
    width: "100%",
    height: "30%",
    objectFit: "cover",
  },
  thankYouSubText: {
    fontSize: "1rem",
    color: "#777",
  },
  "@media (max-width: 768px)": {
    card: {
      width: "100%",
      padding: "15px",
    },
    title: {
      fontSize: "1.6rem",
    },
    subtitle: {
      fontSize: "0.8rem",
    },
    input: {
      width: "100%",
    },
    signUpButton: {
      width: "100%",
    },
  },
  "@media (max-width: 480px)": {
    title: {
      fontSize: "1.4rem",
    },
    subtitle: {
      fontSize: "0.75rem",
    },
  },
};

export default SignUp;
