import { Box, Card, Typography } from "@mui/material";
import React from "react";

const WhyActrycaCardItem = ({ icon: Icon, title, desc }) => {
  return (
    <Card
      sx={{ display: "flex", width: "294px", flexDirection: "column", alignItems: "flex-start", gap: "32px", padding: "36px 24px" }}
      className="rounded-2xl border p-4 hover:shadow-md transition-all"
    >
      <Icon className="text-primary-600" size={36} strokeWidth={1.5} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", alignSelf: "stretch" }}>
        <Typography variant="h4" sx={{ color: "primary.main", fontSize: "22px", fontWeight: "bold", fontStyle: "normal", lineHeight: "24px", fontFamily: "typography.fontFamily" }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ color: "primary.dark", fontFamily: "typography.fontFamily", fontSize: "18px", fontStyle: "normal", fontWeight: "500", lineHeight: "24px" }}>
          {desc}
        </Typography>
      </Box>
    </Card>
  );
};

export default WhyActrycaCardItem;
