"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import useAuthStore from "@/store/auth-store";

const Profile = () => {
  const { user } = useAuthStore();

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {user?.name || "Ad Bilgisi Yok"}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Email: {user?.email || "Email Bilgisi Yok"}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Telefon: {user?.phone || "Telefon Bilgisi Yok"}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
