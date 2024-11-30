import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Box,
  Avatar,
  CardHeader,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const FoodCard = ({ item }) => {
  return (
    <Grid item xs={12} sm={12} md={12} key={item.id} sx={{ padding: 1 }}>
      <Card sx={{ elevation: 3, "&:hover": { boxShadow: 6 } }}>
        <CardHeader
          avatar={
            <IconButton aria-label="recipe" sx={{ bgcolor: "#fff" }}>
              <FavoriteBorderIcon sx={{ bgcolor: "#fff", color: "#D66400" }} />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          sx={{ objectFit: "cover" }}
          height="140"
          image={item.image || "https://via.placeholder.com/150"}
          alt={item.name || "Placeholder"}
        />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {item.price}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            aria-label="delivery time"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "20px" },
            }}
          >
            <AccessTimeIcon
              sx={{
                bgcolor: "#fff",
                color: "#D66400",
                fontSize: { xs: "12px", sm: "14px", md: "20px" },
              }}
            />
            {item.deliveryTime}
          </IconButton>

          <IconButton
            aria-label="rating"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "20px" },
            }}
          >
            <StarIcon
              sx={{
                bgcolor: "#fff",
                color: "#D66400",
                fontSize: { xs: "12px", sm: "14px", md: "20px" },
              }}
            />
            {item.rating}
          </IconButton>

          <IconButton
            aria-label="add to cart"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "20px" },
            }}
          >
            <AddCircleOutlineIcon
              sx={{
                bgcolor: "#fff",
                color: "#D66400",
                fontSize: { xs: "12px", sm: "14px", md: "20px" },
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FoodCard;
