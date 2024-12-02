import ListIcon from "@mui/icons-material/List";
import discountImage from "../assets/image/delivery.jpg";
import React, { useEffect, useState } from "react";
import makiato from "../assets/image/makiato.jpg";
import ethiofood from "../assets/image/ethiofood.jpg";
import breakfast from "../assets/image/breakfast.jpg";
import rum from "../assets/image/rum.jpg";
import pasta from "../assets/image/pasta.jpg";
import pizza from "../assets/image/pizza.jpg";
import burger from "../assets/image/burger.jpg";
import sushi from "../assets/image/sushi.jpg";
import salad from "../assets/image/salad.jpg";
import sandwich from "../assets/image/sandwich.jpg";
import steak from "../assets/image/steak.jpg";
import tacos from "../assets/image/tacos.jpg";

import latte from "../assets/image/latte.jpg";
import espresso from "../assets/image/espresso.jpg";
import cappuccino from "../assets/image/cappuccino.jpg";
import icedtea from "../assets/image/icedtea.jpg";
import mojito from "../assets/image/mojito.jpg";
import lemonade from "../assets/image/lemonade.jpg";
import smoothie from "../assets/image/smoothie.jpg";
import coconutwater from "../assets/image/coconutwater.jpg";

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
import { useNavigate } from "react-router-dom";
const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
  const handleFoodCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const foods = [
    {
      id: 1,
      name: "Ethio Food",
      price: "$20",
      rating: 4.9,
      image: ethiofood, // Replace with your image path
      deliveryTime: "20 min",
    },
    {
      id: 2,
      name: "Breakfast",
      price: "$18",
      rating: 4.8,
      image: breakfast, // Replace with your image path
      deliveryTime: "20 min",
    },
    {
      id: 3,
      name: "Pasta",
      price: "$15",
      rating: 4.7,
      image: pasta, // Replace with your image path
      deliveryTime: "25 min",
    },
    {
      id: 4,
      name: "Pizza",
      price: "$22",
      rating: 4.6,
      image: pizza, // Replace with your image path
      deliveryTime: "30 min",
    },
    {
      id: 5,
      name: "Burger",
      price: "$12",
      rating: 4.5,
      image: burger, // Replace with your image path
      deliveryTime: "15 min",
    },
    {
      id: 6,
      name: "Sushi",
      price: "$25",
      rating: 4.8,
      image: sushi, // Replace with your image path
      deliveryTime: "20 min",
    },
    {
      id: 7,
      name: "Salad",
      price: "$10",
      rating: 4.3,
      image: salad, // Replace with your image path
      deliveryTime: "10 min",
    },
    {
      id: 8,
      name: "Sandwich",
      price: "$8",
      rating: 4.4,
      image: sandwich, // Replace with your image path
      deliveryTime: "15 min",
    },
    {
      id: 9,
      name: "Steak",
      price: "$30",
      rating: 4.9,
      image: steak, // Replace with your image path
      deliveryTime: "40 min",
    },
    {
      id: 10,
      name: "Tacos",
      price: "$13",
      rating: 4.7,
      image: tacos, // Replace with your image path
      deliveryTime: "20 min",
    },
  ];

  const foodType = ["Breakfast", "Lunch", "Dinner"];
  const drinkType = ["Soft Drink", "Hard Drink"];
  const drinks = [
    {
      id: 1,
      name: "Macchiato",
      price: "$5",
      rating: 4.9,
      image: makiato, // Replace with your image path
      deliveryTime: "10 min",
    },
    {
      id: 2,
      name: "Rum",
      price: "$4",
      rating: 4.8,
      image: rum, // Replace with your image path
      deliveryTime: "12 min",
    },
    {
      id: 3,
      name: "Latte",
      price: "$6",
      rating: 4.7,
      image: latte, // Replace with your image path
      deliveryTime: "15 min",
    },
    {
      id: 4,
      name: "Espresso",
      price: "$4",
      rating: 4.6,
      image: espresso, // Replace with your image path
      deliveryTime: "5 min",
    },
    {
      id: 5,
      name: "Cappuccino",
      price: "$5",
      rating: 4.8,
      image: cappuccino, // Replace with your image path
      deliveryTime: "10 min",
    },
    {
      id: 6,
      name: "Iced Tea",
      price: "$3",
      rating: 4.5,
      image: icedtea, // Replace with your image path
      deliveryTime: "8 min",
    },
    {
      id: 7,
      name: "Mojito",
      price: "$7",
      rating: 4.7,
      image: mojito, // Replace with your image path
      deliveryTime: "15 min",
    },
    {
      id: 8,
      name: "Lemonade",
      price: "$4",
      rating: 4.6,
      image: lemonade, // Replace with your image path
      deliveryTime: "10 min",
    },
    {
      id: 9,
      name: "Smoothie",
      price: "$6",
      rating: 4.8,
      image: smoothie, // Replace with your image path
      deliveryTime: "12 min",
    },
    {
      id: 10,
      name: "Coconut Water",
      price: "$5",
      rating: 4.4,
      image: coconutwater, // Replace with your image path
      deliveryTime: "10 min",
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
            }}
          >
            <ToggleButton
              value="foods"
              onClick={handleFood}
              sx={{
                backgroundColor: "#fff",
                color: "#D66400",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#BA7300",
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
                  backgroundColor: "#fff",
                  color: "#BA7300",
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
              onClick={() => handleFoodCardClick(item.id)}
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
