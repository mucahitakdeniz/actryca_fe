import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
}
