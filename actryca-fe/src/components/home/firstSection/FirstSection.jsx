import React from "react";
import Image from "next/image";
import { Box, Button, Typography, Avatar } from "@mui/material";

const FirstSection = () => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        width: "100vw",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
        gap: "42px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "88px",
          ml: { xs: 0, lg: "50px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              width: "624px"
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "primary.dark",
                fontFamily: "DM Serif Text",
                fontSize: { xs: 32, lg: 88 },
                fontWeight: 400,
                lineHeight: { xs: "40px", lg: "78px" },
                letterSpacing: "1.76px",
              }}
            >
              Yeteneklerinizi Sergileyin
            </Typography>
            <Typography
              sx={{
                color: "primary.dark",
                fontFamily:"DM Sans",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "28px",
              }}
            >
              Actryca, yetenekli oyuncular ve yazarlar için bir buluşma
              noktasıdır. Kariyerinizi yükseltin, yeteneklerinizi paylaşın ve
              menajerlik desteği alın. Menajersiz de katılabilir ve
              hayallerinizi gerçekleştirebilirsiniz
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <Button
              href="#"
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              Profil Oluştur

            </Button>
            <Button
              href="#"
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >

              Actryca Menajeriniz Olsun

            
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <Box sx={{ position: "relative", width: 144, height: 48 }}>
            <Avatar
              src="/images/firstSectionAssets/Ellipse_3.png"
              alt="Avatar 1"
              sx={{
                width: 48,
                height: 48,
                borderColor: "primary.main",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
              }}
            />
            <Avatar
              src="/images/firstSectionAssets/Ellipse_4.png"
              alt="Avatar 2"
              sx={{
                width: 48,
                height: 48,
                borderColor: "primary.main",
                position: "absolute",
                left: 36,
                top: 0,
                zIndex: 2,
              }}
            />
            <Avatar
              src="/images/firstSectionAssets/Ellipse_5.png"
              alt="Avatar 3"
              sx={{
                width: 48,
                height: 48,
                borderColor: "primary.main",
                position: "absolute",
                left: 72,
                top: 0,
                zIndex: 3,
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "var(--Primary-900, #231B32)",
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "24px"
            }}
          >
            100.000+ <span class="text-[#231B32] font-dm-sans text-[16px] font-normal font-semibold leading-[24px]">yetenekli oyuncu ve yazar bize katıldı.</span>

          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          width: "687px",
          height: "653px",
          position: "relative",
          borderRadius: 1,
        }}
      >
        <Image
          src="/images/firstSectionAssets/man-in-shape.png"
          alt="Your Company"
          fill
        />
      </Box>
    </Box>
  );
};

export default FirstSection;
