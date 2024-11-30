import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext"; // Import the context

const SignIn = () => {
  const navigate=useNavigate()
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state

  const handleModeChange = () => {
    toggleDarkMode(); // Toggle dark mode on each click
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
    } else {
      setError(""); // Proceed with sign-in logic here
      navigate("/home")
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
          <h4 style={{ ...styles.title, color: isDarkMode ? "#fff" : "#333" }}>
            Sign in now
          </h4>
          <p
            style={{ ...styles.subtitle, color: isDarkMode ? "#bbb" : "#888" }}
          >
            Please sign in to continue our app
          </p>
        </div>
        <div style={styles.inputContainer}>
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
        </div>
        {error && <p style={styles.errorText}>{error}</p>}
        <div style={styles.actions}>
          <Link to={"/forget"} style={styles.forget}>
            Forget Password?
          </Link>
          <button style={styles.signInButton} onClick={handleSubmit}>
            Sign In
          </button>
          <div style={styles.signUpContainer}>
            <p style={styles.text}>Don't have an account?</p>
            <Link to={"/signup"} style={styles.signUpButton}>
              Sign Up
            </Link>
          </div>

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
  forget: {
    display: "flex",
    color: "#ff6600",
    textDecoration: "none",
    marginBottom: "10px",
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
  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signInButton: {
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
  signUpContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    marginBottom: "15px",
  },
  signUpButton: {
    background: "none",
    border: "none",
    color: "#ff6600",
    fontSize: "0.9rem",
    cursor: "pointer",
    textDecoration: "none",
  },
  text: {
    fontSize: "0.9rem",
    color: "#888",
  },
 
  // Responsive Design
  "@media (max-width: 768px)": {
    card: {
      width: "100%",
      padding: "15px",
      borderRadius: "5px",
    },
    title: {
      fontSize: "1.3rem",
    },
    subtitle: {
      fontSize: "0.8rem",
    },
    input: {
      fontSize: "0.9rem",
    },
    signInButton: {
      fontSize: "0.9rem",
    },
    link: {
      fontSize: "0.8rem",
    },
    text: {
      fontSize: "0.8rem",
    },
  },
  "@media (max-width: 480px)": {
    card: {
      width: "100%",
      padding: "10px",
      borderRadius: "0", // Remove border radius for full width look
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
    signInButton: {
      fontSize: "0.8rem",
    },
    link: {
      fontSize: "0.7rem",
    },
    text: {
      fontSize: "0.7rem",
    },

  },
};

export default SignIn;
