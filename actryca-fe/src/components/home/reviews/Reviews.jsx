import Image from "next/image";
import React from "react";
import ReviewCard from "./ReviewCard";
import { Grid } from "@mui/material";

const Reviews = () => {
  return (
    <section className="center-col gap-8 relative h-[1300px] lg:h-[800px] ">
      <div>
        <h1 className="font-dm-serif-text text-2xl md:text-5xl font-bold text-center">
          Görüşler ve Deneyimler
        </h1>
      </div>
      <Grid container spacing={4} className="padding">
        <Grid item xs={12} md={4}>
          <ReviewCard
            img="avatar1.jfif"
            name="Ayşe Küleli"
            star={3.5}
            desc="Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ReviewCard
            img="avatar2.jfif"
            name="Selim Yıldırım"
            star={4}
            desc="Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ReviewCard
            img="avatar3.jfif"
            name="Elif Zeynep Mursaloğlu"
            star={3}
            desc="Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"
          />
        </Grid>
      </Grid>
      <div className="absolute -z-50">
        <Image src="/shape.png" width={1000} height={1000} />
      </div>
    </section>
  );
};

export default Reviews;
