import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext"; // Import the context
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const SignUp = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state

  const handleModeChange = () => {
    toggleDarkMode(); // Toggle dark mode on each click
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(""); // Proceed with sign-up logic here
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? "#333" : "#fff",
      }}
    >
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
          <h2 style={{ ...styles.title, color: isDarkMode ? "#fff" : "#333" }}>
            Sign up now
          </h2>
          <p
            style={{ ...styles.subtitle, color: isDarkMode ? "#bbb" : "#888" }}
          >
            Please fill the details and create an account
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
          <div style={styles.passwordContainer}>
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
          </div>
          <div style={styles.passwordContainer}>
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
        </div>
        {error && <p style={styles.errorText}>{error}</p>}
        <div style={styles.actions}>
          <button style={styles.signUpButton} onClick={handleSubmit}>
            Sign Up
          </button>
          <div style={styles.signInContainer}>
            <p style={styles.text}>
              Already have an account?{" "}
              <Link to="/login" style={styles.link}>
                Sign in
              </Link>
            </p>
          </div>
          <div style={styles.orContainer}>
            <p style={styles.text}>Or</p>
          </div>
          <div style={styles.googleButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              style={styles.googleIcon}
            />
          </div>
          {/* Button to toggle dark mode */}
          <button style={styles.toggleModeButton} onClick={handleModeChange}>
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  errorText: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "15px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height to center vertically
    width: "100%", // Full width to center horizontally
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  header: {
    marginBottom: "20px",
  },
  backIcon: {
    position: "absolute",
    top: "10px",
    left: "-10px",
    textDecoration: "none",
    color: "lightgray",
  },
  icon: {
    fontSize: "30px",
  },
  title: {
    fontSize: "1.5rem",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: "0.9rem",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  passwordContainer: {
    position: "relative",
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
    backgroundColor: "#ff6600",
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
  link: {
    color: "#ff6600",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "5px",
  },
  text: {
    fontSize: "0.9rem",
    color: "#888",
  },
  orContainer: {
    marginBottom: "15px",
  },
  googleButton: {
    cursor: "pointer",
  },
  googleIcon: {
    width: "30px",
    height: "30px",
  },
  toggleModeButton: {
    marginTop: "20px",
    padding: "10px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#333",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SignUp;
