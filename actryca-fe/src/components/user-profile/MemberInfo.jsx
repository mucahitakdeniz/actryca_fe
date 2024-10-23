"use client";
import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import useAuthStore from "@/store/auth-store";

const MemberInfo = () => {
  const { user } = useAuthStore();

  return (
    <>
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text">
        Kullanıcı Bilgileri
      </Typography>

      <Typography
        variant="h5"
        className="text-primary-900 font-dm-serif-text my-8"
      >
        Üyelik Bilgileri
      </Typography>

      <Paper
        elevation={3}
        className="flex flex-col items-start gap-12 p-8 w-1/2 rounded-xl border border-primary-50"
      >
        <Typography
          variant="h6"
          className="text-primary-600 font-dm-sans text-[16px] font-semibold [leading-trim:both] [text-edge:cap]"
        >
          Üyelik Bilgileri
        </Typography>

        <Box className="flex flex-col items-start gap-6 w-full">
          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography
              variant="body2"
              className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
            >
              Kullanıcı Adı
            </Typography>
            <TextField
              defaultValue={user?.user?.user_name || "Ad Bilgisi Yok"}
              variant="outlined"
              fullWidth
              InputProps={{ disableunderline: true }}
            />
          </Box>

          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography
              variant="body2"
              className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
            >
              E-posta
            </Typography>
            <TextField
              defaultValue={user?.user?.email || "Email Bilgisi Yok"}
              variant="outlined"
              fullWidth
              InputProps={{ disableunderline: true }}
            />
          </Box>

          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography
              variant="body2"
              className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
            >
              Telefon Numarası
            </Typography>
            <TextField
              defaultValue={user?.user?.phone || "+90 000 00 00"}
              variant="outlined"
              fullWidth
              InputProps={{ disableunderline: true }}
            />
          </Box>

          <Button variant="contained" color="primary" className="w-full">
            Güncelle
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default MemberInfo;
