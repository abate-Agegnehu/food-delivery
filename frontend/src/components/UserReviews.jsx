import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import user from "../assets/image/user.png";

const UserReviews = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap", // Allow wrapping of cards for smaller screens
        justifyContent: "space-evenly", // Distribute cards evenly
        padding: 2,
        marginLeft:"-15px"
      }}
    >
      {[...Array(4)].map((_, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: "90%", sm: "60%", md: "45%" }, // Adjust widths for different screen sizes
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 3,
            marginBottom: "15px",
            borderRadius: 2,
          }}
        >
          <CardMedia
            component="img"
            height="auto"
            image={user} // Add image URL here
            alt="User review"
            sx={{
              padding:"10px",
              width: 100, // Make image width 100px
              height: 100, // Make image height 100px
              borderRadius: "50%", // Make the image circular
              objectFit: "cover", // Ensure the image covers the circle area
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">Name</Typography>
          </CardContent>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              amet deleniti nostrum inventore nobis vitae officiis. Blanditiis
              magni magnam, deserunt, error consequuntur tempora corrupti quia
              aliquid sunt nulla ab a?
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserReviews;
