import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Tab,
  Tabs,
  Card,
  CardContent,
  CardMedia,
 
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import makiato from "../assets/image/makiato.jpg";
import rum from "../assets/image/rum.jpg";
import latte from "../assets/image/latte.jpg";
import burger from "../assets/image/burger.jpg";
import sushi from "../assets/image/sushi.jpg";
const MyOrder = () => {
  const [currentTab, setCurrentTab] = useState(0); 
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const ongoingOrders = [
    {
      id: 1,
      name: "Macchiato",
      price: "$5",
      rating: 4.9,
      image: makiato,
      deliveryTime: "10 min",
      drinkType: "Soft",
      items: 2,
    },
    {
      id: 2,
      name: "Rum",
      price: "$4",
      rating: 4.8,
      image: rum,
      deliveryTime: "12 min",
      drinkType: "Soft",
      items: 5,
    },
    {
      id: 3,
      name: "Latte",
      price: "$6",
      rating: 4.7,
      image: latte,
      deliveryTime: "15 min",
      drinkType: "Soft",
      items: 8,
    },
    {
      id: 4,
      name: "Burger",
      price: "$12",
      rating: 4.5,
      image: burger,
      deliveryTime: "15 min",
      foodType: "Lunch",
      items: 1,
    },
    {
      id: 5,
      name: "Sushi",
      price: "$25",
      rating: 4.8,
      image: sushi,
      deliveryTime: "20 min",
      foodType: "Lunch",
      items: 6,
    },
  ];

  const historyOrders = [
    {
      id: 1,
      name: "Latte",
      price: "$6",
      rating: 4.7,
      image: latte,
      deliveryTime: "15 min",
      drinkType: "Soft",
      items: 2,
    },
    {
      id: 2,
      name: "Burger",
      price: "$12",
      rating: 4.5,
      image: burger,
      deliveryTime: "15 min",
      foodType: "Lunch",
      items: 5,
    },
  ];

  return (
    <div >
     

      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="Order tabs"
        sx={{
          "& .MuiTab-root.Mui-selected": {
            color: "#BA7300",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#BA7300",
          },
          
        }}
      >
        <Tab label="Ongoing" />
        <Tab label="History" />
      </Tabs>

      <Box sx={{ marginTop: "20px" }}>
        {(currentTab === 0 ? ongoingOrders : historyOrders).map((order) => (
          <Card
            key={order.id}
            sx={{ display: "flex", marginBottom: "15px", borderRadius: "10px" }}
          >
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100, borderRadius: "50%" }}
              image={order.image}
              alt={order.name}
            />
            <CardContent sx={{ flex: "1" }}>
              <Typography variant="h6">{order.category}</Typography>
              <Typography variant="body1">{order.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {order.price} | {order.items} items
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {(currentTab === 0) &&
      (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Button variant="outlined" color="error" startIcon={<Cancel />}>
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{ backgroundColor: "#D66400", color: "white" }}
            >
              Track Order
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default MyOrder;
