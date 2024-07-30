import { Box, Card, Typography } from "@mui/material";
import React from "react";

const WhyActrycaCardItem = ({ icon: Icon, title, desc }) => {
  return (
    <Card
      className="w-[250px] h-[300px] flex flex-col gap-8 rounded-2xl border p-8 transition-all"
      sx={{
        "&:hover": {
          backgroundColor: "primary.main",
          transform: "scale(1.01)",
          boxShadow: 3,
          color: "grey.100",
          transition: "color 0.3s ease, background-color 0.3s ease",
          "& .icon": {
            color: "grey.100",
            transition: "color 0.3s ease", 
          },
          "& .title, & .desc": {
            color: "grey.100",
            transition: "color 0.3s ease", 
          },
        },
      }}
    >
      <Icon
        className="icon text-primary-600"
        size={60}
        strokeWidth={1}
      />
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
          className="title text-primary-800"
          sx={{
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
          variant="subtitle2"
          className="desc text-primary-800"
          sx={{
            fontFamily: "typography.fontFamily",
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
