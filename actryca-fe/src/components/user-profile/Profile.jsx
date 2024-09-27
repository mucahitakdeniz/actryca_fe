"use client";
import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import useAuthStore from "@/store/auth-store";

const Profile = () => {
  const { user } = useAuthStore();

  return (
    <>
      <Typography
        variant="h4"
        className="text-primary-900 font-dm-serif-text text-[22px]"
      >
        Hesap Bilgileri
      </Typography>

      <Paper elevation={3} className="flex flex-col items-start gap-12 p-8 w-1/2 rounded-xl border border-primary-50">
        <Typography
          variant="h6"
          className="text-primary-600 font-dm-sans text-[16px] font-semibold [leading-trim:both] [text-edge:cap]"
        >
          Üyelik Bilgilerim
        </Typography>

        <Box className="flex flex-col items-start gap-6 w-full">
          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography variant="body2" className="text-primary-900 text-[14px] font-medium leading-6 font-sans">
              Kullanıcı Adı
            </Typography>
            <TextField
              defaultValue={user?.name || "Ad Bilgisi Yok"}
              variant="outlined"
              fullWidth
              InputProps={{ disableUnderline: true }}
            />
          </Box>

          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography variant="body2" className="text-primary-900 text-[14px] font-medium leading-6 font-sans">
              E-posta
            </Typography>
            <TextField
              defaultValue={user?.email || "Email Bilgisi Yok"}
              variant="outlined"
              fullWidth
              InputProps={{ disableUnderline: true }}
            />
          </Box>

          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography variant="body2" className="text-primary-900 text-[14px] font-medium leading-6 font-sans">
              Telefon Numarası
            </Typography>
            <TextField
              defaultValue={user?.phone || "+90 555 55 55"}
              variant="outlined"
              fullWidth
              InputProps={{ disableUnderline: true }}
            />
          </Box>

          <Button variant="contained" color="primary" className="w-full p-[10px] rounded-lg bg-primary-50 hover:bg-primary-500">
            Güncelle
          </Button>
        </Box>

      </Paper>
    </>
  );
};

export default Profile;
