import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import profile from "../assets/image/profile.jpg";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "400px",
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        "@media (max-width: 600px)": {
          padding: "15px",
          maxWidth: "90%",
        },
      }}
    >
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
          src={profile}
          alt="Profile Picture"
          sx={{
            width: 100,
            height: 100,
            border: "3px solid #ddd",
            "@media (max-width: 600px)": {
              width: 80,
              height: 80,
            },
          }}
        />
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            bottom: 10,
            right: "calc(50% - 50px)", // Center relative to avatar
            backgroundColor: "#F57C00",
            "&:hover": {
              backgroundColor: "#D76A00",
            },
          }}
          onClick={() => navigate("/profile/1")}
        >
          <EditIcon sx={{ color: "#fff", fontSize: 16 }} />
        </IconButton>
      </Box>

      {/* Personal Info */}
      <Box
        sx={{
          lineHeight: 1.8,
          fontSize: "14px",
          "@media (max-width: 600px)": {
            fontSize: "12px",
          },
        }}
      >
        <Typography>
          <strong>Full Name :-</strong> Disho Agegnehu
        </Typography>
        <Typography>
          <strong>Email :-</strong> dishoageg@gmail.com
        </Typography>
        <Typography>
          <strong>Phone No :-</strong> 0920999923
        </Typography>
        <Typography>
          <strong>Bio :-</strong> I love fast food
        </Typography>
        <Typography>
          <strong>Addresses :-</strong> Addis Ababa
        </Typography>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
