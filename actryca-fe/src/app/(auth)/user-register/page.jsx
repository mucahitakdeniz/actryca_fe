import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Drama } from "lucide-react";
import ActorRegister from "@/components/auth/actor-register/actor-register";
const Page = () => {
  return (
    <Box className="bg-white  top-0 left-0 w-screen h-screen z-50 fixed padding center">
      <Box className="center-col">
        <Box>
          <Typography variant="h2" className="font-dm-serif-text">
            Siz Hangi Kullanıcı Grubundasınız?
          </Typography>
          <Typography variant="h6" className="font-dm-serif-text text-center">
            Yaratıcı topluluğumuza katılarak kendinize uygun bir rol bulun.
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              display: "flex",
              width: "300px",
              height: "360px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              padding: "36px 24px",
            }}
            className="rounded-2xl border-2 border-primary-500 p-4 hover:shadow-md hover:scale-[1.01] transition-all "
          >
            <Drama
              className="text-primary-600"
              size={44}
              strokeWidth={1}
              width={44}
              height={44}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <Typography
                variant="h4"
                className="title"
                sx={{
                  color: "primary.darkest",
                  fontSize: "22px",
                  fontWeight: "bold",
                  fontStyle: "normal",
                  lineHeight: "24px",
                  fontFamily: "typography.fontFamily",
                }}
              >
                Oyuncu
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "primary.dark",
                  lineHeight: "24px",
                }}
                className="text-left"
              >
                Yeteneklerinizi sergileyin ve projelerde yer alın.
              </Typography>
            </Box>
          </Button>
        </Box>
        <ActorRegister />
      </Box>
    </Box>
  );
};

export default Page;
