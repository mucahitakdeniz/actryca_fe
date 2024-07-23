import { Box, Card, Typography } from "@mui/material";
import React from "react";

const WhyActrycaCardItem = ({ icon: Icon, title, desc }) => {
  return (
    <Card className="w-[250px] h-[300px] hover:scale-[1.01] hover:shadow-md rounded-2xl border p-8 transition-all">
      <Icon
        className="icon text-primary-500"
        size={44}
        strokeWidth={1}
        width={44}
        height={44}
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
          sx={{
            color: "primary.dark",
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
