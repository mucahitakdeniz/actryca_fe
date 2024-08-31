import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhyArctrycaCardItem from "./WhyActrycaCardItem";
import { Drama, Globe, Trophy, UsersRound } from "lucide-react";

const WhyActrycaSection = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "64px",
      }}
      className="padding"
    >
      <Typography
        variant="h1"
        className="font-dm-serif-text text-[44px] md:text-5xl font-bold leading-6"
        sx={{ color: "primary.darkest" }}
      >
        Neden Actryca?
      </Typography>

      <Box className="flex items-center justify-center flex-wrap gap-4 xl:gap-8">
        <WhyArctrycaCardItem
          icon={Drama}
          title="Geniş Yeteneğe Erişim"
          desc="En yetenekli oyuncular ve yazarlarla çalışarak projelerinizi hayata geçirin."
        />

        <WhyArctrycaCardItem
          icon={UsersRound}
          title="Menajerlik Desteği"
          desc="Kariyerinizi bir üst seviyeye taşıyacak menajerlik desteğimizle yanındayız."
        />

        <WhyArctrycaCardItem
          icon={Trophy}
          title="Başarı Hikayeleri"
          desc="Başarımızı, hayallerini gerçekleştiren oyuncularımız ve yazarlarımızla ölçüyoruz."
        />

        <WhyArctrycaCardItem
          icon={Globe}
          title="Global Fırsatlar"
          desc="Evrensel öyküleri yurtdışı yapım şirketlerinize sunarak küresel fırsatlar sunuyoruz."
        />
      </Box>
      <Button variant="contained" className="mb-12">
        Bizimle Çalışmak İster misiniz?
      </Button>

      <Stack
        sx={{
          position: "absolute",
          width: "496px",
          height: "552px",
          transform: "rotate(69.143deg)",
          flexShrink: 0,
          zIndex: "-2",
        }}
      >
        <Image
          src="/images/shape.png"
          width={496}
          height={552}
          alt=""
          className="h-auto"
        />
      </Stack>
    </Box>
  );
};

export default WhyActrycaSection;
