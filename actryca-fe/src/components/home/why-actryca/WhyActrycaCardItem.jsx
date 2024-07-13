import { Box, Card, Typography } from "@mui/material";
import React from "react";

const WhyActrycaCardItem = ({ icon: Icon, title, desc }) => {
  return (
    <Card
      sx={{
        display: "flex",
        width: "294px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "32px",
        padding: "36px 24px",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "primary.main",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          "& .icon, & .title, & .desc": {
            color: "#fff",
          },
        },
      }}
      className="rounded-2xl border p-4 transition-all"
    >
      <Icon className="icon" size={44} strokeWidth={1} width={44} height={44} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          alignSelf: "stretch",
        }}
      >
        <Typography
          variant="h4"
          className="title"
          sx={{
            color: "primary.darkest",
            fontSize: "22px",
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: "24px",
            fontFamily: "typography.fontFamily",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          className="desc"
          sx={{ color: "primary.dark", fontFamily: "typography.fontFamily", lineHeight: "24px" }}
        >
          {desc}
        </Typography>
      </Box>
    </Card>
  );
};

export default WhyActrycaCardItem;
