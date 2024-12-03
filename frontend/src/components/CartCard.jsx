import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton, Link } from "@mui/material";
import latte from "../assets/image/latte.jpg";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
const CartCard = () => {
  const [itemCount, setItemCount] = useState(2);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#BA7300",
      }}
    >
      <Box
        sx={{
          display: "flex",
          color: "#fff",
          justifyContent: "space-between",
          padding: "8px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <IconButton onClick={() => navigate("/detail/1")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            marginTop: "10px",
          }}
        >
          My Cart
        </Typography>
        <Typography
          sx={{
            marginTop: "10px",
            textDecoration: "underline",
          }}
          variant="body1"
        >
          Done
        </Typography>
      </Box>
      <Card
        sx={{
          borderBottom: "1px solid #ccc",
          maxWidth: "100%",
          marginBottom: "4px",
          boxShadow: "none",
          hover: "none",
          backgroundColor: "#BA7300",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Box
              sx={{
                width: { xs: "100px", sm: "100px" }, // Responsive width
                height: { xs: "100px", sm: "100px" }, // Responsive height
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
                color: "#fff",
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
            <IconButton
              sx={{
                color: "#fff",
                margin: "0px 0px 0px -40px",
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: "120px",
                display: "flex",
                textAlign: "center",
                gap: "1em",
                margin: "30px 0px -100px -80px",
                borderRadius: "8px",
                backgroundColor: "#AC5000",
              }}
            >
              <IconButton
                sx={{
                  color: "#fff",
                }}
                onClick={() => setItemCount(itemCount - 1)}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  marginTop: "8px",
                }}
              >
                {itemCount}
              </Typography>
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => setItemCount(itemCount + 1)}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 20px",
          }}
        >
          <Typography
            sx={{
              padding: "10px",
            }}
          >
            Delivery Address
          </Typography>
          <Link
            sx={{
              padding: "10px",
            }}
          >
            Edit
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 20px",
          }}
        >
          <Typography
            sx={{
              padding: "10px",
            }}
          >
            Addresses
          </Typography>
          <Typography
            sx={{
              padding: "10px",
            }}
          >
            #3245
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              padding: "10px",
            }}
          >
            Total:- $45
          </Typography>
          <Button
            sx={{
              backgroundColor: "#BA7300",
              color: "#fff",
              padding: "10px",
              border: "2px solid gray",
            }}
          >
            Please order
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default CartCard;
