"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Settings = () => {
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
          Ayarlar
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ayarlarınızı burada yapabilirsiniz.
        </Typography>
      </Box>
    </Paper>
  );
};

export default Settings;
