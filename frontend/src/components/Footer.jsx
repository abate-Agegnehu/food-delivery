import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDarkModeContext } from "../context/DarkModeContext"; // Import the context

const Footer = () => {
  const { isDarkMode } = useDarkModeContext(); // Access dark mode state

  // Set the initial active icon to "home"
  const [active, setActive] = useState("home");

  const handleClick = (icon) => {
    setActive(icon);
  };

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
      }}
    >
      <IconButton
        sx={{
          color: isDarkMode ? "#f1c40f" : "#fff",
          border:
            active === "home"
              ? `5px solid ${isDarkMode ? "#BA7300" : "#fff"}`
              : "none",
          borderRadius: "50%",
          padding: "8px",
        }}
        onClick={() => handleClick("home")}
      >
        <HomeIcon />
      </IconButton>

      <IconButton
        sx={{
          color: isDarkMode ? "#f1c40f" : "#fff",
          border:
            active === "cart"
              ? `5px solid ${isDarkMode ? "#BA7300" : "#fff"}`
              : "none",
          borderRadius: "50%",
          padding: "8px",
        }}
        onClick={() => handleClick("cart")}
      >
        <ShoppingCartIcon />
      </IconButton>

      <IconButton
        sx={{
          color: isDarkMode ? "#f1c40f" : "#fff",
          border:
            active === "search"
              ? `5px solid ${isDarkMode ? "#BA7300" : "#fff"}`
              : "none",
          borderRadius: "50%",
          padding: "8px",
        }}
        onClick={() => handleClick("search")}
      >
        <SearchIcon />
      </IconButton>

      <IconButton
        sx={{
          color: isDarkMode ? "#f1c40f" : "#fff",
          border:
            active === "favorite"
              ? `5px solid ${isDarkMode ? "#BA7300" : "#fff"}`
              : "none",
          borderRadius: "50%",
          padding: "8px",
        }}
        onClick={() => handleClick("favorite")}
      >
        <FavoriteIcon />
      </IconButton>

      <IconButton
        sx={{
          color: isDarkMode ? "#f1c40f" : "#fff",
          border:
            active === "account"
              ? `5px solid ${isDarkMode ? "#BA7300" : "#fff"}`
              : "none",
          borderRadius: "50%",
          padding: "8px",
        }}
        onClick={() => handleClick("account")}
      >
        <AccountCircleIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
