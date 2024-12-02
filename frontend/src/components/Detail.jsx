import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import TimerIcon from "@mui/icons-material/Timer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Detail = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "20px auto",
        padding: 2,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <IconButton
          variant="text"
          sx={{ fontSize: 18, textTransform: "none", color: "black" }}
          onClick={() => navigate("/layout")}
        >
          <ArrowBackIcon /> 
        </IconButton>
        <Typography variant="h6">Details</Typography>
      </Box>

      {/* Restaurant Name */}
      <Typography variant="h5" textAlign="center" mb={2}>
        Yegna Restaurant
      </Typography>

      {/* Image Card */}
      <Card sx={{ position: "relative", borderRadius: 2, mb: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://via.placeholder.com/400x200" // Replace with actual image URL
          alt="Food"
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            color: "red",
          }}
        >
          <FavoriteIcon />
        </IconButton>
      </Card>

      {/* Discount and Price */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography color="green" fontWeight="bold">
          Discount 14% off
        </Typography>
        <Typography fontWeight="bold" fontSize={18}>
          $8.5
        </Typography>
      </Box>

      {/* Temperature Options */}
      <Box display="flex" gap={2} mb={2}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 20,
            textTransform: "none",
            backgroundColor: "#f9f9f9",
          }}
        >
          Frigid
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: 20,
            textTransform: "none",
            backgroundColor: "orange",
            color: "white",
          }}
        >
          Normal
        </Button>
      </Box>

      {/* Description */}
      <Box mb={2}>
        <Typography variant="h6" mb={1}>
          Ethio Beer
        </Typography>
        <Typography color="text.secondary">
          Ethiopian Sofi is a popular carbonated soft drink brand from Ethiopia,
          well-loved for its distinctive taste that combines a refreshing blend
          of local flavors with a sweet and fruity profile.
        </Typography>
      </Box>

      {/* Ratings and Details */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={4} display="flex" alignItems="center" gap={1}>
          <StarIcon sx={{ color: "gold" }} />
          <Typography>4.9</Typography>
        </Grid>
        <Grid item xs={4} display="flex" alignItems="center" gap={1}>
          <DeliveryDiningIcon sx={{ color: "green" }} />
          <Typography>Free</Typography>
        </Grid>
        <Grid item xs={4} display="flex" alignItems="center" gap={1}>
          <TimerIcon sx={{ color: "gray" }} />
          <Typography>10 min</Typography>
        </Grid>
      </Grid>

      {/* Footer Actions */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Quantity Control */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            sx={{
              backgroundColor: "#ddd",
              borderRadius: 1,
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>1</Typography>
          <IconButton
            sx={{
              backgroundColor: "#ddd",
              borderRadius: 1,
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            backgroundColor: "orange",
            ":hover": { backgroundColor: "#e69500" },
          }}
        >
          Add To Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Detail;
