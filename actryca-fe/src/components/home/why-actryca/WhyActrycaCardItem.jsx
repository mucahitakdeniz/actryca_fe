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
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "primary.main",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "primary.main",
          "& .text-primary-600": {
            color: "#fff",
          },
          "& .title, & .desc": {
            color: "#fff",
          },
        },
      }}
      className="hover:shadow-md"
    >
      <Icon className="text-primary-600" size={44} strokeWidth={1} width={44} height={44} />
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
          variant="h4"
          className="desc"
          sx={{
            color: "#322748",
            fontFamily: "typography.fontFamily",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "24px",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Card>
  );
};

export default WhyActrycaCardItem;
