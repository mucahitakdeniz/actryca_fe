import { Avatar } from "@mui/material";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ img, name, star, desc }) => {
  return (
    <div className="center-col gap-2 lg:gap-4 border border-primary-100 rounded-2xl h-[300px] lg:h-[432px] bg-white hover:border-2 hover:shadow-lg transition-all">
      <Avatar
        alt="Remy Sharp"
        src={img || "/images/artists/avatar1.jfif"}
        sx={{
          width: { xs: 100, sm: 120, md: 170 },
          height: { xs: 100, sm: 120, md: 170 },
        }}
        className="shadow-md"
      />
      <h2 className="font-[500px] text-base text-[24px] leading-8 text-primary-600">
        {name}
      </h2>
      <div className="center gap-1 md:gap-2">
        {[...Array(5)].map((_, index) => {
          let starType = "/images/star.png";

          if (index < Math.floor(star)) {
            starType = "/images/star-fill.png";
          } else if (index < star) {
            starType = "/images/star-half.png";
          }

          return (
            <Image
              key={index}
              src={starType}
              width={24}
              height={24}
              className="w-4 md:w-6 h-4 md:h-6"
            />
          );
        })}
      </div>
      <p className="leading-[26px] text-[16px] text-center font-normal md:text-base px-8">
        {desc ||
          "Actryca sayesinde yeteneklerimi sergileme ve doğru projelerde yer alma şansı yakaladım. Kariyerim için harika bir platform!"}
      </p>
    </div>
  );
};

export default ReviewCard;
