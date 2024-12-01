import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDarkModeContext } from "../context/DarkModeContext"; // Import the context
const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state

  return (
    <Box
      sx={{
        bgcolor: isDarkMode ? "#333" : "#BA7300",
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        alignItems: "center",
        boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <IconButton sx={{ color: isDarkMode ? "#BA7300" : "#fff" }}>
        <HomeIcon />
      </IconButton>
      <IconButton sx={{ color: isDarkMode ? "#BA7300" : "#fff" }}>
        <ShoppingCartIcon />
      </IconButton>
      <IconButton sx={{ color: isDarkMode ? "#BA7300" : "#fff" }}>
        <SearchIcon />
      </IconButton>
      <IconButton sx={{ color: isDarkMode ? "#BA7300" : "#fff" }}>
        <FavoriteIcon />
      </IconButton>
      <IconButton sx={{ color: isDarkMode ? "#BA7300" : "#fff" }}>
        <AccountCircleIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
