import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MobileSection = () => {
  return (
    <div className="background !bg-gradient-to-l h-[480px] flex justify-between items-center padding">
      
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-[32px] items-start">
            <Typography
              variant="h2"

              sx={{ color: "primary.main", lineHeight: "32px" }}
              className="font-dm-serif-text font-bold"

            >
              Sanat ve İşbirliği Cebinizde
            </Typography>
          </div>

          <Typography
            variant="inherit"
            className="leading-7 text-sm font-[500px] lg:text-base w-8/12"
          >
            Actryca mobil uygulamasıyla kariyerini her yerden yönetip projeleri
            takip edebilir ve fırsatları kaçırmaz.
          </Typography>
          <div className="flex mt-10">
            <Button variant="contained" size="large">
              uygulamayı İndir

            </Button>
          </div>
        </div>
    

      <div className="h-full flex flex-col justify-end ">
        <Image src="/images/mobile-phone.png" width={420} height={420} />
      </div>
    </div>
  );
};

export default MobileSection;
