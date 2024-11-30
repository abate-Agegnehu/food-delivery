import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ListIcon from "@mui/icons-material/List";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  TextField,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  LocationOn as LocationOnIcon,
  Payment as PaymentIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import FoodCard from "../components/FoodCard";
import { useMediaQuery, useTheme } from "@mui/material";

const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsType, setItemsType] = useState(["Breakfast", "Lunch", "Dinner"]);
  const [alignment, setAlignment] = useState("foods");
  const [isFullWidth, setIsFullWidth] = useState(false); // State to control grid size

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
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
  }, []);

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

  // Toggle grid size when list item is clicked
  const handleItemClick = () => {
    setIsFullWidth(!isFullWidth);
  };

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          width: "100%",
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
            sx={{ color: "#FF6600" }}
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
                    <SearchIcon sx={{ color: "#FF6600" }} />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          <IconButton sx={{ color: "#FF6600" }}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Addresses" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Payment Method" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleItemClick}>
              {" "}
              {/* Toggle grid size on item click */}
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ padding: "16px" }}>
        <Box
          sx={{
            backgroundColor: "#FFEDD5",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6" color="textPrimary">
            Get 20% Discount On First Delivery
          </Typography>
        </Box>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToggleButtonGroup
            color="secondary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Category"
            sx={{
              justifyContent: "center",
              backgroundColor: "#ff6600",
            }}
          >
            <ToggleButton
              value="foods"
              onClick={handleFood}
              sx={{
                backgroundColor: "#fff",
                color: "#ff6600",
              }}
            >
              Food
            </ToggleButton>
            <ToggleButton
              value="drinks"
              onClick={handleDrink}
              sx={{
                backgroundColor: "#fff",
                color: "#ff6600",
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
            <Typography key={index} sx={{ margin: "10px" }}>
              {item}
            </Typography>
          ))}

          {/* Display ListIcon only on small screens */}
          {isSmallScreen && (
            <IconButton>
              <ListIcon />
            </IconButton>
          )}
        </div>

        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid
              item
              xs={isFullWidth ? 12 : 6}
              sm={isFullWidth ? 12 : 6}
              md={isFullWidth ? 12 : 4}
              key={item.id}
            >
              <FoodCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
