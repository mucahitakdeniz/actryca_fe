"use client";
import React from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";

const SettingsContent = () => {
  return (
    <>
      <Typography variant="h4" className="text-primary-900 font-serif text-[22px] font-normal">Ayarlar</Typography>
      <Paper elevation={3} className="padding" >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px"
          }}
          className="pt-8 pb-8"
        >
          <Typography variant="h6" className="text-primary-600 font-sans text-[16px] font-semibold leading-normal" >
            Hesabımı Sil
          </Typography>
          <Box classname="flex flex-col items-start gap-6">
            <Typography variant="body1"  className="text-primary-900 font-sans text-[16px] font-medium">
              Bu işlem geri alınamaz. Hesabınızı silerseniz, tüm verileriniz kalıcı olarak silinecektir.
            </Typography>

            <TextField
              label="Şifreni Tekrar Gir"
              variant="outlined"
              type="password"
              sx={{ mt: 2, width: "100%" }}
              className="w-1/2"
            />

            {/* Şifremi unuttum linki */}
            <br/>
            <br/>
            <Button
              className="text-primary-800 font-sans text-[14px] font-semibold leading-6"
              onClick={() => alert("Şifre sıfırlama sayfasına yönlendirileceksiniz.")}
            >
              Şifremi Unuttum
            </Button>
            
            <Typography variant="body2"  className="text-primary-900 font-sans text-[16px] font-medium mt-4">
              Hesabınızı sildikten sonra tekrar geri alamayacaksınız.
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ mt: 2, width: "50%", background:"#ff004f", borderRadius: "8px" }}
            onClick={() => alert("Hesap silindi!")}
          >
            Dilan Oktay'ı Sil
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default SettingsContent;
