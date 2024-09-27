"use client";
import React, { useEffect, useState } from "react";
import { Grid, Box, List, ListItem, ListItemText, Avatar } from "@mui/material";
import useAuthStore from "@/store/auth-store";
import { useRouter, useSearchParams, redirect } from "next/navigation";
import Profile from "@/components/user-profile/Profile";
import Movements from "@/components/user-profile/Movements";
import { LogOut, Settings, SquareActivity, UserCog } from "lucide-react";
import SettingsContent from "@/components/user-profile/SettingsContent";
import LogoutDialog from "@/components/ui/LogoutDialog";

const Page = () => {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("profile");
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!user) {
    redirect("/login");
  }

  useEffect(() => {
    const tab = searchParams.get("tab");
    tab && setActiveTab(tab);
  }, [searchParams]);

  const handleLogoutConfirm = () => {
    logout();
    setOpenLogoutDialog(false);
    router.push("/");
  };

  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false);
  };

  const menuClass =
  "hover:bg-primary-50 rounded-lg m-2 flex gap-3 text-primary-500 active:font-bold";

  return (
    <Grid container spacing={4} sx={{ my: 8 }}>
      {/* Sol menü */}
      <Grid
        item
        lg={3}
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
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
            className="bg-primary-100 text-primary-900 text-6xl"
          >
            {user?.data?.user_name.toUpperCase()[0] || "?"}
          </Avatar>
          <List component="nav">
            <Box className="my-6 py-6 border-y border-y-primary-50 ">
              <ListItem
                button
                onClick={() => setActiveTab("profile")}
                className={`${menuClass}`}
              >
                <UserCog strokeWidth={1.5} />
                <ListItemText
                  primary="Kullanıcı Bilgileri"
                  className={
                    activeTab === "profile"
                      ? "text-primary-800 font-bold"
                      : "text-primary-600"
                  }
                />
              </ListItem>
              <ListItem
                button
                onClick={() => setActiveTab("movements")}
                className={`${menuClass} `}
              >
                <SquareActivity strokeWidth={1.5} />
                <ListItemText
                  primary="Hareketlerin"
                  className={
                    activeTab === "movements"
                      ? "text-primary-800 font-bold"
                      : "text-primary-600"
                  }
                />
              </ListItem>
              <ListItem
                button
                onClick={() => setActiveTab("settings")}
                className={`${menuClass}`}
              >
                <Settings strokeWidth={1.5} />
                <ListItemText
                  primary="Ayarlar"
                  className={
                    activeTab === "settings"
                      ? "text-primary-800 font-bold"
                      : "text-primary-600"
                  }
                />
              </ListItem>
            </Box>
            <ListItem
              button
              onClick={() => setOpenLogoutDialog(true)}
              className={menuClass}
            >
              <LogOut strokeWidth={1.5} />
              <ListItemText primary="Çıkış Yap" className="font-bold" />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* Sağ ana içerik */}
      <Grid item xs={10} md={7} lg={8} className="mx-auto flex flex-col items-start gap-[56px]">
        {activeTab === "profile" && <Profile />}
        {activeTab === "movements" && <Movements />}
        {activeTab === "settings" && <SettingsContent />}
      </Grid>

      {/* Çıkış yapma onay dialogu */}
      <LogoutDialog
        open={openLogoutDialog}
        onClose={handleLogoutCancel}
        onConfirm={handleLogoutConfirm}
      />
    </Grid>
  );
};

export default Page;
