import ListIcon from "@mui/icons-material/List";
import discountImage from "../assets/image/delivery.jpg";
import React, { useEffect, useState } from "react";
import {
  IconButton,
  Typography,
  Box,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import FoodCard from "./FoodCard";
import { useMediaQuery, useTheme } from "@mui/material";
import { useDarkModeContext } from "../context/DarkModeContext"; // Import the context
const Home = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [items, setItems] = useState([]);
  const [itemsType, setItemsType] = useState(["Breakfast", "Lunch", "Dinner"]);
  const [alignment, setAlignment] = useState("foods");
  const [isFullWidth, setIsFullWidth] = useState(!isLargeScreen);
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleFood = () => {
    setAlignment("foods");
    setItems(foods);
    setItemsType(foodType);
  };

  const handleDrink = () => {
    setAlignment("drinks");
    setItems(drinks);
    setItemsType(drinkType);
  };

  const handleItemClick = () => {
    setIsFullWidth(!isFullWidth);
  };
  const handleItemTypeClick = (item) => {
    setSelectedItem(item);
  };
  const foods = [
    {
      id: 1,
      name: "Ethio food",
      price: "$20",
      rating: 4.9,
      image: "https://via.placeholder.com/150",
      deliveryTime: "20 min",
    },
    {
      id: 2,
      name: "Breakfast",
      price: "$18",
      rating: 4.8,
      image: "https://via.placeholder.com/150",
      deliveryTime: "20 min",
    },
  ];

  const foodType = ["Breakfast", "Lunch", "Dinner"];
  const drinkType = ["Soft Drink", "Hard Drink"];

  const drinks = [
    {
      id: 1,
      name: "Coffee",
      price: "$5",
      rating: 4.9,
      image: "https://via.placeholder.com/150",
      deliveryTime: "10 min",
    },
    {
      id: 2,
      name: "Juice",
      price: "$4",
      rating: 4.8,
      image: "https://via.placeholder.com/150",
      deliveryTime: "12 min",
    },
  ];

  useEffect(() => {
    setItems(foods);
    if (isLargeScreen) {
      setIsFullWidth(false);
    }
  }, [isLargeScreen]);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: isDarkMode ? "#333" : "#fff",

          borderRadius: "8px",
          marginBottom: "16px",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "20px 0px", sm: "30px 0px" },
          fontSize: { xs: "1.1em", sm: "1.5", md: "2em" },
        }}
      >
        <img
          style={{
            width: "90%",
            borderRadius: "40px",
            height: isLargeScreen ? "400px" : "200px",
          }}
          src={discountImage}
          alt="Discount Image"
        />

        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            marginTop: "16px",
            textAlign: "center",
            color: isDarkMode ? "#fff" : "#333",
            display: "flex",
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
          }}
        >
          Get 20% Discount On First{" "}
          <Typography
            sx={{
              color: "#D66400",
              marginLeft: "8px",
              padding: "1px",
              fontSize: { xs: "1em", sm: "1.1em", md: "1em" },
            }}
          >
            Delivery
          </Typography>
        </Typography>
      </Box>

      <Box sx={{ padding: "16px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Category"
            sx={{
              justifyContent: "center",
              backgroundColor: "#D66400",
            }}
          >
            <ToggleButton
              value="foods"
              onClick={handleFood}
              sx={{
                backgroundColor: "#fff",
                color: "#D66400",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#fff",
                },
                "&.Mui-selected": {
                  backgroundColor: "#D66400",
                  color: "#fff",
                },
              }}
            >
              Food
            </ToggleButton>
            <ToggleButton
              value="drinks"
              onClick={handleDrink}
              sx={{
                backgroundColor: "#fff",
                color: "#D66400",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#fff",
                },
                "&.Mui-selected": {
                  backgroundColor: "#D66400",
                  color: "#fff",
                },
              }}
            >
              Drink
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {itemsType.map((item, index) => (
            <Typography
              key={index}
              onClick={() => handleItemTypeClick(item)}
              sx={{
                margin: "10px",
                color: selectedItem === item ? "#D66400" : "inherit",
                textDecoration: selectedItem === item ? "underline" : "none",
                transition: "all 0.1s ease",
                cursor: "pointer",
              }}
            >
              {item}
            </Typography>
          ))}

          {isSmallScreen && (
            <IconButton
              onClick={handleItemClick}
              sx={{
                color: "#D66400",
              }}
            >
              <ListIcon />
            </IconButton>
          )}
        </div>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          {items.map((item) => (
            <Grid
              item
              xs={isFullWidth ? 12 : 6}
              sm={isFullWidth ? 12 : 6}
              md={isFullWidth ? 12 : 4}
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <FoodCard
                item={item}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
