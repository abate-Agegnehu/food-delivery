import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WellcomPage";
import SignIn from "./pages/auth/SignIn";
import SingUp from "./pages/auth/SignUp";
import ForgetPassword from "./pages/auth/ForgetPassword";
import { DarkModeProvider } from "./context/DarkModeContext";
import OtpVerification from "./pages/auth/OtpVerification";
import ForgetPasswordForm from "./pages/auth/ForgetPasswordForm";
import HomePage from "./pages/HomePage";
import Home from "./components/Home";
import PersonalInfo from "./components/PersonalInfo";
import Addresses from "./components/Adresses";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import Notification from "./components/Notification";
import PaymentMethod from "./components/PaymentMethod";
import MyOrders from "./components/MyOrder";
import FAQs from "./components/FAQs";
import UserReviews from "./components/UserReviews";
import Settings from "./components/Setting";
import Detail from "./components/Detail";
import ProfileEdit from "./components/ProfileEdit";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/layout" element={<HomePage />} />
            <Route path="/forget" element={<ForgetPassword />} />
            <Route path="/otp" element={<OtpVerification />} />
            <Route path="/forgetform" element={<ForgetPasswordForm />} />
            <Route path="home" element={<Home />} />
            <Route path="personalInfo" element={<PersonalInfo />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="favorites" element={<Favorite />} />
            <Route path="notification" element={<Notification />} />
            <Route path="paymentmethod" element={<PaymentMethod />} />
            <Route path="myorders" element={<MyOrders />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="userreviews" element={<UserReviews />} />
            <Route path="settings" element={<Settings />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/profile/:id" element={<ProfileEdit />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </div>
  );
}

export default App;
