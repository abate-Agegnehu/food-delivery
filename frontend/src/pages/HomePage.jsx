import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import InputAdornment from "@mui/material/InputAdornment";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  TextField,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  LocationOn as LocationOnIcon,
  Payment as PaymentIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Reorder as ReorderIcon,
  HelpOutline as HelpOutlineIcon,
  Try as TryIcon,
} from "@mui/icons-material";
import { useDarkModeContext } from "../context/DarkModeContext"; // Import the context
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";
import PersonalInfo from "../components/PersonalInfo";
import Addresses from "../components/Adresses";
import Cart from "../components/Cart";
import Favorite from "../components/Favorite";
import Notification from "../components/Notification";
import PaymentMethod from "../components/PaymentMethod";
import MyOrders from "../components/MyOrder";
import FAQs from "../components/FAQs";
import UserReviews from "../components/UserReviews";
import Settings from "../components/Setting";
import Footer from "../components/Footer";
const menuItem1 = [
  { text: "Home", key: "home", icon: <HomeIcon /> },
  { text: "Personal Info", key: "personalInfo", icon: <PersonIcon /> },
  { text: "Addresses", key: "addresses", icon: <LocationOnIcon /> },
];
const menuItem2 = [
  { text: "Cart", key: "cart", icon: <ShoppingCartIcon /> },
  { text: "Favorites", key: "favorites", icon: <FavoriteIcon /> },
  { text: "Notification", key: "notification", icon: <NotificationsIcon /> },
  { text: "Payment Method", key: "paymentmethod", icon: <PaymentIcon /> },
  { text: "My Orders", key: "myorders", icon: <ReorderIcon /> },
];
const menuItem3 = [
  { text: "FAQs", key: "faqs", icon: <HelpOutlineIcon /> },
  { text: "User Reviews", key: "userreviews", icon: <TryIcon /> },
  { text: "Settings", key: "settings", icon: <SettingsIcon /> },
  { text: "Logout", key: "login", icon: <LogoutIcon /> },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState("home"); // Store current content to display
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderContent = () => {
    switch (currentContent) {
      case "home":
        return <Home />;
      case "personalInfo":
        return <PersonalInfo />;
      case "addresses":
        return <Addresses />;
      case "cart":
        return <Cart />;
      case "favorites":
        return <Favorite />;
      case "notification":
        return <Notification />;
      case "paymentmethod":
        return <PaymentMethod />;
      case "myorders":
        return <MyOrders />;
      case "faqs":
        return <FAQs />;
      case "userreviews":
        return <UserReviews />;
      case "settings":
        return <Settings />;
      case "login":
        return navigate("/login");
      default:
        return <Home />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#fff", // Set background color based on dark mode
        color: isDarkMode ? "#fff" : "#000", // Set text color based on dark mode
        minHeight: "100vh", // Ensure full height for the background color to cover the entire screen
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: isDarkMode ? "#333" : "#fff", // Adjust AppBar color
          width: "96%",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <IconButton
            edge="start"
            sx={{ color: isDarkMode ? "#fff" : "#D66400" }} // Change icon color based on dark mode
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              maxWidth: "400px",
              margin: "0 16px",
            }}
          >
            <TextField
              placeholder="Search Food"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: isDarkMode ? "#fff" : "#D66400" }}
                    />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                  backgroundColor: isDarkMode ? "#555" : "#fff", // Change input background color
                  color: isDarkMode ? "#fff" : "#000", // Change input text color
                },
              }}
            />
          </Box>

          <IconButton sx={{ color: isDarkMode ? "#fff" : "#D66400" }}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {menuItem1.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  setCurrentContent(item.key);
                  setDrawerOpen(!drawerOpen);
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isDarkMode ? "#fff" : "#BA7300", // Change icon color based on dark mode
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <Divider />
            {menuItem2.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  setCurrentContent(item.key);
                  setDrawerOpen(!drawerOpen);
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isDarkMode ? "#fff" : "#BA7300",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
            <Divider />
            {menuItem3.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  setCurrentContent(item.key);
                  setDrawerOpen(!drawerOpen);
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isDarkMode ? "#fff" : "#BA7300",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ padding: "16px" }}>
        {renderContent()} {/* Render the current content */}
      </Box>
      <Footer/>
    </div>
  );
};

export default HomePage;
