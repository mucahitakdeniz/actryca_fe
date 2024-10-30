import React, { useState } from "react";
import { Box, Typography, Paper, Tabs, Tab } from "@mui/material";
import { Star, MessageCircle, Bookmark } from "lucide-react";  
import Rating from "./movementDetail/Rating";
import Favourite from "./movementDetail/Favourite";
import Comments from "./movementDetail/Comments";
import actorsData from '../../utils/actorsData.json';

const Movements = () => {
  const [activeTab, setActiveTab] = useState("favourite");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleEdit = (id) => {
    console.log('Aktör idsini görmek yeterli şimdilik:', id);
  };

  const handleDelete = (id) => {
    console.log('Aktör idsini görmek yeterli şimdilik:', id);
  };

  return (
    <>
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text mb-8">
        Hareketler
      </Typography>
      <Paper
        elevation={3}
        className="flex flex-col items-start gap-12 p-8 rounded-xl border border-primary-50"
      >
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
              icon={
                activeTab == "favourite" ? (
                  <Bookmark fill="#614B8B" color="#614B8B" />
                ) : (
                  <Bookmark />
                )
              }
              iconPosition="start"
            />
            <Tab
              label="Değerlendirmeler"
              value="rating"
              icon={
                activeTab == "rating" ? (
                  <Star fill="#614B8B" color="#614B8B" />
                ) : (
                  <Star />
                )
              }
              iconPosition="start"
            />
            <Tab
              label="Yorumlar"
              value="comments"
              icon={
                activeTab == "comments" ? (
                  <MessageCircle fill="#614B8B" color="#614B8B" />
                ) : (
                  <MessageCircle />
                )
              }
              iconPosition="start"
            />
          </Tabs>

          <Box sx={{ mt: 4 }}>
            {activeTab === "favourite" && <Favourite />}
            {activeTab === "rating" && (
              <Rating
                actorsData={actorsData}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
            {activeTab === "comments" && (
              <Comments
                actorsData={actorsData}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default Movements;
