import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhyArctrycaCardItem from "./WhyActrycaCardItem";
import { CircleCheck, Drama, Globe, Trophy, UsersRound } from "lucide-react";

const WhyActrycaSection = () => {
  return (
    <section className="relative h-[1000px] lg:h-[600px] w-screen">
      <Box className="h-full w-full padding center-col gap-8">
        <Typography
          variant="h1"
          className="font-dm-serif-text text-2xl md:text-5xl font-bold text-center"
        >
          Görüşler ve Deneyimler
        </Typography>
        <Grid container spacing={4} className="padding">
          <Grid item xs={12} md={3}>
            <WhyArctrycaCardItem
              icon={Drama}
              title="Geniş Yeteneğe Erişim"
              desc="En yetenekli oyuncular ve yazarlarla çalışarak projelerinizi hayata geçirin."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <WhyArctrycaCardItem
              icon={UsersRound}
              title="Menajerlik Desteği"
              desc="Kariyerinizi bir üst seviyeye taşıyacak menajerlik desteğimizle yanındayız."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <WhyArctrycaCardItem
              icon={Trophy}
              title="Başarı Hikayeleri"
              desc="Başarımızı, hayallerini gerçekleştiren oyuncularımız ve yazarlarımızla ölçüyoruz."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <WhyArctrycaCardItem
              icon={Globe}
              title="Global Fırsatlar"
              desc="Evrensel öyküleri yurtdışı yapım şirketlerinize sunarak küresel fırsatlar sunuyoruz."
            />
          </Grid>
        </Grid>
        <Button variant="contained">Bizimle Çalışmak İster misiniz?</Button>
      </Box>

      <div className="absolute top-0 -z-50 w-full center">
        <Image src="/images/shape.png" width={1000} height={800} />
      </div>
    </section>
  );
};

export default WhyActrycaSection;
