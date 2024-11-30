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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FoodCard = ({ item }) => {
  return (
    <Grid item xs={12} sm={12} md={12} key={item.id} sx={{ padding: 1 }}>
      <Card sx={{ elevation: 3, "&:hover": { boxShadow: 6 } }}>
        <CardMedia
          component="img"
          sx={{ objectFit: "cover" }}
          height="140"
          image={item.image || "https://via.placeholder.com/150"}
          alt={item.name || "Placeholder"}
        />
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.deliveryTime} • {item.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton>
            <FavoriteIcon color="error" />
          </IconButton>
          <Typography variant="body2" sx={{ marginLeft: "auto" }}>
            {item.rating}⭐
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FoodCard;
