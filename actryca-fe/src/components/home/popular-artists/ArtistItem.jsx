import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ArtistItem = ({ item }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          width: { xs: 150, sm: 200, lg: 297 },
          height: { xs: 120, sm: 170, lg: 267 },
        }}
        className="hover:shadow-lg hover:scale-[1.01] transition-all rounded-2xl center"
      >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.name}
          className="w-full h-full"
        />
      </Card>
      <Typography variant="h6" className="text-base mt-4"
      sx={{color: "primary.light", textDecoration: "underline"}}>
        {item.name}
      </Typography>
    </Grid>
  );
};

export default ArtistItem;
