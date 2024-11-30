import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WellcomPage";
import SignIn from "./pages/auth/SignIn";
import SingUp from "./pages/auth/SignUp";
import ForgetPassword from "./pages/auth/ForgetPassword";
import { DarkModeProvider } from "./context/DarkModeContext"; // Import the DarkModeProvider
import Home from "./pages/Home";
import OtpVerification from "./pages/auth/OtpVerification";
import ForgetPasswordForm from "./pages/auth/ForgetPasswordForm";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/otp" element={<OtpVerification />} />
            <Route path="/forgetform" element={<ForgetPasswordForm />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </div>
  );
}

export default App;
