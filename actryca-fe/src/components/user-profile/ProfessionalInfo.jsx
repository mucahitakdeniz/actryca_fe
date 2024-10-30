import { Box, Button, Paper, Typography } from "@mui/material";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfessionalInfo = () => {
  return (
    <Box>
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text">
        Kullanıcı Bilgileri
      </Typography>

      <Typography variant="h5" className="text-primary-600 font-semibold my-4">
        Profesyonel Bilgiler
      </Typography>
      <Box className="flex gap-8">
        <Box className="w-1/2 flex flex-col gap-8">
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-8 p-8 rounded-xl border border-primary-50"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold"
            >
              Profil Fotoğrafı
            </Typography>
            <Box className="rounded-xl w-40 h-40">
              <Image
                src="/images/artists/actor1.jfif"
                width={200}
                height={150}
                className="rounded-xl w-full h-full bg-cover"
              />
            </Box>
          </Paper>
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-8 p-8 rounded-xl border border-primary-50"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold"
            >
              Tanıtım Videosu
            </Typography>
            <Box sx={{ minWidth: 300, flexGrow: 1 }}>
              <video
                autoPlay
                loop
                src="https://assets.codepen.io/6093409/river.mp4"
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
              ></video>
            </Box>
            <Box className="flex justify-end w-full">
              <Button variant="contained" color="primary">
                Düzenle
              </Button>
            </Box>
          </Paper>
        </Box>
        <Box className="w-1/2 flex flex-col gap-8">
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-8 p-8 rounded-xl border border-primary-50"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold"
            >
              Portfoy Fotoğrafları
            </Typography>
            <Box className="flex gap-4">
              <Image
                src="/images/artists/actor1.jfif"
                width={200}
                height={150}
                className="rounded-xl w-40 h-40 bg-cover"
              />
              <Image
                src="/images/artists/actor1.jfif"
                width={200}
                height={150}
                className="rounded-xl w-40 h-40 bg-cover"
              />
            </Box>
          </Paper>
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-8 p-8 rounded-xl border border-primary-50"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold"
            >
              Mevcut Menajerlik Ajansı
            </Typography>
            <Typography className="font-semibold flex gap-3">
              İlkay Menajerlik <Pencil strokeWidth={1.5} />
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfessionalInfo;
