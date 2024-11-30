import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ListIcon from "@mui/icons-material/List";
import discountImage from "../assets/image/delivery.jpg";
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
  Divider,
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
import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";
import TryIcon from "@mui/icons-material/Try";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Home = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsType, setItemsType] = useState(["Breakfast", "Lunch", "Dinner"]);
  const [alignment, setAlignment] = useState("foods");
  const [isFullWidth, setIsFullWidth] = useState(!isLargeScreen);

  const [selectedItem, setSelectedItem] = useState(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
    if (isLargeScreen) {
      setIsFullWidth(false);
    }
  }, [isLargeScreen]);

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
            sx={{ color: "#D66400" }}
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
                    <SearchIcon sx={{ color: "#D66400" }} />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          <IconButton sx={{ color: "#D66400" }}>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Personal Info" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Addresses" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <NotificationsIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PaymentIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Payment Method" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ReorderIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <HelpOutlineIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="FAQs" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <TryIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="User Reviews" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <LogoutIcon sx={{ color: "#BA7300" }} />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          marginBottom: "16px",
          width: "100%",
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
              backgroundColor: "#fff",
            }}
          >
            <ToggleButton
              value="foods"
              onClick={handleFood}
              sx={{
                backgroundColor: "#fff",
                color: "#D66400",
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
