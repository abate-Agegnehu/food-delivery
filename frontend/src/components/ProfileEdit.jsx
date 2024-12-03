import React from "react";
import {
  Box,
  Avatar,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import profile from "../assets/image/profile.jpg";
import { useNavigate } from "react-router-dom";
const ProfileEdit = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        padding: "20px",
        maxWidth: "400px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          marginBottom: "20px",
        }}
      >
        <IconButton onClick={() => navigate("/layout")}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: "10px" }}>
          Edit Profile
        </Typography>
      </Box>

      {/* Profile Picture */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <Avatar
          src={profile} // Replace with your actual profile picture
          alt="Profile Picture"
          sx={{
            width: 100,
            height: 100,
            border: "3px solid #ddd",
          }}
        />
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            bottom: 10,
            right: "calc(50% - 50px)",
            backgroundColor: "#F57C00",
            "&:hover": {
              backgroundColor: "#D76A00",
            },
          }}
        >
          <CloudUploadIcon sx={{ color: "#fff", fontSize: 16 }} />
        </IconButton>
      </Box>

      {/* Form Fields */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <TextField label="Full Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Phone Number" variant="outlined" fullWidth />
        <TextField label="Addresses" variant="outlined" fullWidth />
        <TextField
          label="Bio"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          defaultValue="I love Ethio food"
        />
      </Box>

      {/* Save Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          marginTop: "20px",
          backgroundColor: "#F57C00",
          "&:hover": {
            backgroundColor: "#D76A00",
          },
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default ProfileEdit;
