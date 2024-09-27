"use client";
import React, { useState } from "react";
import { Box, Typography, Paper, Tabs, Tab } from "@mui/material";
import { Star, MessageCircle, Bookmark } from "lucide-react";  
import Rating from "./movementDetail/Rating";
import Favourite from "./movementDetail/Favourite";
import Comments from "./movementDetail/Comments";

const Movements = () => {
  const [activeTab, setActiveTab] = useState("favourite");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Typography variant="h4">Hareketler</Typography>
      <Paper elevation={3} sx={{ padding: 4, mt: 2, width: '100%' }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab
              label="Favoriler"
              value="favourite"
              icon={<Bookmark />}
              iconPosition="start"  
            />
            <Tab
              label="Değerlendirmeler"
              value="rating"
              icon={<Star />}
              iconPosition="start"  
            />
            <Tab
              label="Yorumlar"
              value="comments"
              icon={<MessageCircle />}
              iconPosition="start"  
            />
          </Tabs>

          <Box sx={{ mt: 4 }}>
            {activeTab === "favourite" && <Favourite />}
            {activeTab === "rating" && <Rating />}
            {activeTab === "comments" && <Comments />}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Movements;
