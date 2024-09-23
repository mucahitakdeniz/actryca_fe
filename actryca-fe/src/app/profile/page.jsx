"use client";
import React, { useState } from "react";
import { Grid, Box, List, ListItem, ListItemText, Avatar } from "@mui/material";
import useAuthStore from "@/store/auth-store";
import { useRouter } from "next/navigation";
import Profile from "@/components/user-profile/Profile";
import Movements from "@/components/user-profile/Movements";
import Settings from "@/components/user-profile/Settings";

const Page = () => {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("profile");
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <Grid container spacing={4} sx={{ my: 8 }}>
      {/* Sol menü */}
      <Grid item xs={12} md={4} lg={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="border-r border-r-primary-50"
        >
          <Avatar
            src={user?.avatar || "/default-avatar.png"}
            alt="User Avatar"
            sx={{ width: 150, height: 150, mb: 2 }}
          />
          <List component="nav">
            <ListItem button onClick={() => setActiveTab("profile")}>
              <ListItemText primary="Kullanıcı Bilgileri" />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("movements")}>
              <ListItemText primary="Hareketlerin" />
            </ListItem>
            <ListItem button onClick={() => setActiveTab("settings")}>
              <ListItemText primary="Ayarlar" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Çıkış Yap" />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* Sağ ana içerik */}
      <Grid item xs={12} md={8} lg={8}>
        {activeTab === "profile" && <Profile />}
        {activeTab === "movements" && <Movements />}
        {activeTab === "settings" && <Settings />}
      </Grid>
    </Grid>
  );
};

export default Page;
