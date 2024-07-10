import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhyArctrycaCardItem from "./WhyActrycaCardItem";
import { Drama, Globe, Trophy, UsersRound } from "lucide-react";

const WhyActrycaSection = () => {
  return (
    <Box sx={{ position: "relative", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "64px" }}>

      <Typography
        variant="h1"
        className="font-bold"
        sx={{ color: "primary.darkest", fontSize: "44px", fontFamily: "DM Serif Text", lineHeight: "32px", fontWeight: 400 }}
      >
        Neden Actryca?
      </Typography>

      <Box className="flex items-center gap-9 py-0 px-[72px]">
        <Box sx={{ display: "flex", width: "294px", flexDirection: "column", alignItems: "flex-start" }}>
          <WhyArctrycaCardItem
            icon={Drama}
            title="Geniş Yeteneğe Erişim"
            desc="En yetenekli oyuncular ve yazarlarla çalışarak projelerinizi hayata geçirin."
          />
        </Box>
        <Box sx={{ display: "flex", width: "294px", flexDirection: "column", alignItems: "flex-start" }}>
          <WhyArctrycaCardItem
            icon={UsersRound}
            title="Menajerlik Desteği"
            desc="Kariyerinizi bir üst seviyeye taşıyacak menajerlik desteğimizle yanındayız."
          />
        </Box>
        <Box sx={{ display: "flex", width: "294px", flexDirection: "column", alignItems: "flex-start" }}>
          <WhyArctrycaCardItem
            icon={Trophy}
            title="Başarı Hikayeleri"
            desc="Başarımızı, hayallerini gerçekleştiren oyuncularımız ve yazarlarımızla ölçüyoruz."
          />
        </Box>
        <Box sx={{ display: "flex", width: "294px", flexDirection: "column", alignItems: "flex-start" }}>
          <WhyArctrycaCardItem
            icon={Globe}
            title="Global Fırsatlar"
            desc="Evrensel öyküleri yurtdışı yapım şirketlerinize sunarak küresel fırsatlar sunuyoruz."
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          display: "inline-flex",
          height: "48px",
          padding: "16px 24px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
          backgroundColor: "#primary.main",
          border: "1px solid #primary.main",
          gap: "10px",
          flexShrink: "0px",
          mt: "64px",
          mb: "105px"
        }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "DM Sans, sans-serif",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "700px",
            lineHeight: "16px",
            textTransform: "capitalize",
          }}>
          Bizimle Çalışmak İster
          <span className="lowercase"> misiniz?</span>
        </Typography>
      </Button>

      <Stack sx={{
        position: "absolute",
        width: "496px",
        height: "552px",
        transform: "rotate(69.143deg)",
        flexShrink: 0,
        zIndex: "-2"
      }}>
        <Image src="/images/shape.png" width={496} height={552} />
      </Stack>

    </Box>
  );
};

export default WhyActrycaSection;
