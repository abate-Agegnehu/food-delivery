import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WellcomPage";
import SignIn from "./pages/auth/SignIn";
import SingUp from "./pages/auth/SignUp";
import ForgetPassword from "./pages/auth/ForgetPassword";
import { DarkModeProvider } from "./context/DarkModeContext"; // Import the DarkModeProvider

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/forget" element={<ForgetPassword />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </div>
  );
}

export default App;
