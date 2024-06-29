import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const WhyActrycaCardItem = ({ icon: Icon, title, desc }) => {
  return (
    <Card
      sx={{ width: 300, height: 260 }}
      className="rounded-2xl border p-4 hover:shadow-md transition-all"
    >
      <CardContent className="h-full flex flex-col justify-between">
        <Icon className="text-primary-600" size={36} strokeWidth={1.5} />
        <Typography variant="h4" className=" text-xl font-bold mt-6">
          {title}
        </Typography>
        <Typography variant="h6" className="text-sm leading-7">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WhyActrycaCardItem;
