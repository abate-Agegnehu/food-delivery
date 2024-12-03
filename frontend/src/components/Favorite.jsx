import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, IconButton } from "@mui/material";
import pizza from "../assets/image/pizza.jpg";
import latte from "../assets/image/latte.jpg";

import FavoriteIcon from "@mui/icons-material/Favorite";

const Favorite = () => {
  return (
    <Box
      sx={{
        marginBottom: "80px",
      }}
    >
      <Card
        sx={{
          maxWidth: "100%",
          marginBottom: "4px",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", // Bottom shadow only
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: { xs: "40px", sm: "100px" }, // Responsive width
                height: { xs: "40px", sm: "100px" }, // Responsive height
                overflow: "hidden", // Ensure image fits within the container
                borderRadius: "50%", // Preserve the circular shape
              }}
            >
              <img
                src={latte}
                alt="Profile"
                style={{
                  width: "100%", // Fill the Box container
                  height: "100%", // Maintain aspect ratio
                  objectFit: "cover", // Ensure image is cropped correctly
                }}
              />
            </Box>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap", // Prevent text wrapping
                overflow: "hidden", // Hide overflowing text
                textOverflow: "ellipsis", // Add ellipsis when text overflows
                maxWidth: { xs: "150px", sm: "100%" }, // Limit width on small screens
              }}
            >
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </CardContent>
          <CardContent>
            <IconButton>
              <FavoriteIcon
                sx={{
                  color: "#BA7300",
                }}
              />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "150px", sm: "100%" },
              }}
            >
              OCT 16/24
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>{" "}
      <Card
        sx={{
          maxWidth: "100%",
          marginBottom: "4px",

          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", // Bottom shadow only
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: { xs: "40px", sm: "100px" }, // Responsive width
                height: { xs: "40px", sm: "100px" }, // Responsive height
                overflow: "hidden", // Ensure image fits within the container
                borderRadius: "50%", // Preserve the circular shape
              }}
            >
              <img
                src={pizza}
                alt="Profile"
                style={{
                  width: "100%", // Fill the Box container
                  height: "100%", // Maintain aspect ratio
                  objectFit: "cover", // Ensure image is cropped correctly
                }}
              />
            </Box>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap", // Prevent text wrapping
                overflow: "hidden", // Hide overflowing text
                textOverflow: "ellipsis", // Add ellipsis when text overflows
                maxWidth: { xs: "150px", sm: "100%" }, // Limit width on small screens
              }}
            >
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </CardContent>
          <CardContent>
            <IconButton>
              <FavoriteIcon
                sx={{
                  color: "#BA7300",
                }}
              />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "150px", sm: "100%" },
              }}
            >
              OCT 16/24
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>{" "}
      <Card
        sx={{
          marginBottom: "4px",

          maxWidth: "100%",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", // Bottom shadow only
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: { xs: "40px", sm: "100px" }, // Responsive width
                height: { xs: "40px", sm: "100px" }, // Responsive height
                overflow: "hidden", // Ensure image fits within the container
                borderRadius: "50%", // Preserve the circular shape
              }}
            >
              <img
                src={latte}
                alt="Profile"
                style={{
                  width: "100%", // Fill the Box container
                  height: "100%", // Maintain aspect ratio
                  objectFit: "cover", // Ensure image is cropped correctly
                }}
              />
            </Box>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap", // Prevent text wrapping
                overflow: "hidden", // Hide overflowing text
                textOverflow: "ellipsis", // Add ellipsis when text overflows
                maxWidth: { xs: "150px", sm: "100%" }, // Limit width on small screens
              }}
            >
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </CardContent>
          <CardContent>
            <IconButton>
              <FavoriteIcon
                sx={{
                  color: "#BA7300",
                }}
              />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "150px", sm: "100%" },
              }}
            >
              OCT 16/24
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>{" "}
      <Card
        sx={{
          maxWidth: "100%",
          marginBottom: "4px",

          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", // Bottom shadow only
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: { xs: "40px", sm: "100px" }, // Responsive width
                height: { xs: "40px", sm: "100px" }, // Responsive height
                overflow: "hidden", // Ensure image fits within the container
                borderRadius: "50%", // Preserve the circular shape
              }}
            >
              <img
                src={pizza}
                alt="Profile"
                style={{
                  width: "100%", // Fill the Box container
                  height: "100%", // Maintain aspect ratio
                  objectFit: "cover", // Ensure image is cropped correctly
                }}
              />
            </Box>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap", // Prevent text wrapping
                overflow: "hidden", // Hide overflowing text
                textOverflow: "ellipsis", // Add ellipsis when text overflows
                maxWidth: { xs: "150px", sm: "100%" }, // Limit width on small screens
              }}
            >
              Lizards are a widespread group of squamate reptiles.
            </Typography>
          </CardContent>
          <CardContent>
            <IconButton>
              <FavoriteIcon
                sx={{
                  color: "#BA7300",
                }}
              />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "150px", sm: "100%" },
              }}
            >
              OCT 16/24
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Favorite;
