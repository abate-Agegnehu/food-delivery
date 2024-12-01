import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  CardHeader,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTheme } from "@mui/material/styles"; // Import useTheme to detect the current theme
import { useDarkModeContext } from "../context/DarkModeContext"; // Import the context

const FoodCard = ({ item }) => {
  const theme = useTheme(); // Get the current theme
  const { isDarkMode, toggleDarkMode } = useDarkModeContext(); // Access dark mode state

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
      <Card
        sx={{
          elevation: 3,
          "&:hover": { boxShadow: 6 },
          marginBottom: "4em",
          height: {
            xs: "auto", // For small screens, height is auto
            sm: "auto", // For medium screens, height is auto
            md: "310px", // For medium-sized screens, set height to 400px
            lg: "360px", // For large screens, set height to 450px
            xl: "410px", // For extra-large screens, set height to 500px
          },
        }}
      >
        <CardHeader
          sx={{
            bgcolor: isDarkMode ? "#333" : "#fff",
            height: "15px",
          }}
          avatar={
            <IconButton
              aria-label="recipe"
              sx={{
                bgcolor: isDarkMode ? "#333" : "#fff",
              }}
            >
              <FavoriteBorderIcon
                sx={{
                  color: isDarkMode ? "#f1c40f" : "#BA7300",
                }}
              />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          sx={{ objectFit: "cover" }}
          height="200"
          image={item.image || "https://via.placeholder.com/150"}
          alt={item.name || "Placeholder"}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#333" : "#fff",
            color: isDarkMode ? "#fff" : "#333",
          }}
        >
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
            backgroundColor: isDarkMode ? "#333" : "#fff",
          }}
        >
          <IconButton
            aria-label="delivery time"
            sx={{
              fontSize: { xs: "13px", sm: "15px", md: "20px" },
              color: isDarkMode ? "#fff" : "#BA7300",
            }}
          >
            <AccessTimeIcon
              sx={{
                color: isDarkMode ? "#f1c40f" : "#D66400",
                fontSize: { xs: "13px", sm: "15px", md: "20px" },
              }}
            />
            {item.deliveryTime}
          </IconButton>

          <IconButton
            aria-label="rating"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "20px" },
              color: isDarkMode ? "#fff" : "#333",
            }}
          >
            <StarIcon
              sx={{
                color: isDarkMode ? "#f1c40f" : "#D66400", // Icon color for dark mode
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
                color: isDarkMode ? "#f1c40f" : "#D66400", // Icon color for dark mode
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
