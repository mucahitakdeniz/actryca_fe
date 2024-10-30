"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  List,
  Avatar,
  Typography,
  ListItem,
  ListItemText,
} from "@mui/material";
import useAuthStore from "@/store/auth-store";
import { useRouter, useSearchParams, redirect } from "next/navigation";
import Movements from "@/components/user-profile/Movements";
import { LogOut, Settings, SquareActivity, UserCog } from "lucide-react";
import SettingsContent from "@/components/user-profile/SettingsContent";
import LogoutDialog from "@/components/ui/LogoutDialog";
import UserInfo from "@/components/user-profile/UserInfo";
import MemberInfo from "@/components/user-profile/MemberInfo";
import PersonalInfo from "@/components/user-profile/PersonalInfo";
import EducationInfo from "@/components/user-profile/EducationInfo";
import ProfessionalInfo from "@/components/user-profile/ProfessionalInfo";

const Page = () => {
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState("memberInfo");
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  /*   if (!user) {
    redirect("/login");
  }
 */
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

  const getClassName = (tab) =>
    activeTab === tab ? "text-primary-900 font-bold" : "text-primary-500";

  return (
    <Grid container sx={{ my: 8 }} >
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
          >
            {user?.user?.user_name.toUpperCase()[0] || "?"}
          </Avatar>
          <List component="nav">
            <Box className="my-6 py-6 border-y border-y-primary-50 ">
              <ListItem button onClick={() => setActiveTab("memberInfo")}>
                <UserCog
                  strokeWidth={1.5}
                  className={getClassName("memberInfo")}
                />
                <ListItemText
                  primary="Kullanıcı Bilgileri"
                  className={`ml-2 ${getClassName("memberInfo")}`}
                />
              </ListItem>

              <ListItem button onClick={() => setActiveTab("memberInfo")}>
                <ListItemText
                  primary="Üyelik Bilgileri"
                  className={`ml-8 ${getClassName("memberInfo")}`}
                />
              </ListItem>

              <ListItem button onClick={() => setActiveTab("personalInfo")}>
                <ListItemText
                  primary="Kişisel Bilgiler"
                  className={`ml-8 ${getClassName("personalInfo")}`}
                />
              </ListItem>

              <ListItem button onClick={() => setActiveTab("educationInfo")}>
                <ListItemText
                  primary="Eğitim ve Yetenekler"
                  className={`ml-8 ${getClassName("educationInfo")}`}
                />
              </ListItem>

              <ListItem button onClick={() => setActiveTab("professionalInfo")}>
                <ListItemText
                  primary="Profesyonel Bilgiler"
                  className={`ml-8 ${getClassName("professionalInfo")}`}
                />
              </ListItem>

              <ListItem button onClick={() => setActiveTab("movements")}>
                <SquareActivity
                  strokeWidth={1.5}
                  className={getClassName("memberInfo")}
                />
                <ListItemText
                  primary="Hareketlerin"
                  className={`ml-2 ${getClassName("movements")}`}
                />
              </ListItem>

              <ListItem button onClick={() => setActiveTab("settings")}>
                <Settings
                  strokeWidth={1.5}
                  className={getClassName("memberInfo")}
                />
                <ListItemText
                  primary="Ayarlar"
                  className={`ml-2 ${getClassName("settings")}`}
                />
              </ListItem>
            </Box>

            <ListItem button onClick={() => setOpenLogoutDialog(true)}>
              <LogOut strokeWidth={1.5} />
              <ListItemText primary="Çıkış Yap" className="font-bold ml-2" />
            </ListItem>
          </List>
        </Box>
      </Grid>

      {/* Sağ ana içerik */}
      <Grid item xs={10} md={7} lg={8} className="mx-auto">
        {activeTab === "memberInfo" && <MemberInfo />}
        {activeTab === "personalInfo" && <PersonalInfo className="bg-red-200"/>}
        {activeTab === "educationInfo" && <EducationInfo />}
        {activeTab === "professionalInfo" && <ProfessionalInfo />}
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
