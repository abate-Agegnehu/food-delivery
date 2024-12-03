import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Home as HomeIcon } from "@mui/icons-material";

const Addresses = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  // Update screenWidth state when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    }
  }, []);

  const handleSaveLocation = () => {
    alert("Location saved!");
  };

  // Determine map height based on screen size
  const mapHeight = screenWidth <= 600 ? "250px" : "350px"; // 250px for small screens, 350px for large screens

  return (
    <Box sx={{ marginBottom: "100px" }}>
      {/* Map Section */}
      <Box sx={{ marginBottom: "20px" }}>
        {/* Google Map with current location */}
        {currentLocation ? (
          <LoadScript googleMapsApiKey="AIzaSyDd4WJ6cZhP4KC0Bj4CWUPHaDCqGqLDDr8">
            <GoogleMap
              mapContainerStyle={{
                height: mapHeight, // Dynamically set map height
                width: "100%",
                borderRadius: "8px",
              }}
              center={{
                lat: currentLocation.latitude,
                lng: currentLocation.longitude,
              }}
              zoom={15}
            >
              {/* Current Location Marker */}
              <Marker
                position={{
                  lat: currentLocation.latitude,
                  lng: currentLocation.longitude,
                }}
                icon={
                  <LocationOnIcon/>
                }
              />
            </GoogleMap>
          </LoadScript>
        ) : (
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingTop: "80px",
              color: "#616161",
            }}
          >
            Loading map...
          </Typography>
        )}
      </Box>

      {/* Address Type: Home */}
      <Card sx={{ marginBottom: "15px", display: "flex" }}>
        <CardContent>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </CardContent>
        <CardContent>
          <Typography variant="h6">Home</Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
          >
            <LocationOnIcon sx={{ marginRight: "8px", color: "#FF7043" }} />
            <Typography variant="body2">Home, Work & Other Address</Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Address Type: Work */}
      <Card sx={{ marginBottom: "20px", display: "flex" }}>
        <CardContent>
          <IconButton>
            <HomeIcon />
          </IconButton>
        </CardContent>
        <CardContent>
          <Typography variant="h6">Work</Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
          >
            <LocationOnIcon sx={{ marginRight: "8px", color: "#FF7043" }} />
            <Typography variant="body2">Work Address</Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Save Location Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveLocation}
        sx={{
          width: "100%",
          backgroundColor: "#FF7043",
          padding: "10px",
          "&:hover": {
            backgroundColor: "#FF5722",
          },
        }}
      >
        Save Location
      </Button>
    </Box>
  );
};

export default Addresses;
