"use client";
import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const SettingsContent = () => {
  return (
    <>
      <Typography variant="h4">Ayarlar</Typography>
      <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Ayarlarınızı burada yapabilirsiniz.
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default SettingsContent;
