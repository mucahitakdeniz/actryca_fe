import Image from "next/image";
import React from "react";
import ReviewCard from "./ReviewCard";
import { Grid, Typography } from "@mui/material";

const Reviews = () => {
  return (
    <section className="center-col gap-16 relative h-[1300px] lg:h-[800px] ">
      <div>
        <Typography
          variant="h1"
          className="font-dm-serif-text text-2xl md:text-5xl font-bold text-center"
          sx={{
            color: "primary.darkest",
          }}
        >
          Görüşler ve Deneyimler
        </Typography>
      </div>
      <Grid container spacing={4} className="padding">
        <Grid item xs={12} md={4}>
          <ReviewCard
            img="images/artists/avatar1.jfif"
            name="Ayşe Küleli"
            star={3.5}
            desc="Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ReviewCard
            img="images/artists/avatar2.jfif"
            name="Selim Yıldırım"
            star={4}
            desc="Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ReviewCard
            img="images/artists/avatar3.jfif"
            name="Elif Zeynep Mursaloğlu"
            star={3}
            desc="Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"
          />
        </Grid>
      </Grid>
      <div className="absolute -z-50">
        <Image
          src="/images/shape.png"
          width={1000}
          height={1000}
          alt=""
          style={{ width: "auto" }}
        />
      </div>
    </section>
  );
};

export default Reviews;
