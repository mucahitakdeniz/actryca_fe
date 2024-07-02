import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MobileSection = () => {
  return (
    <div className="background !bg-gradient-to-l h-[480px] flex justify-between items-center padding">
      <div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Typography
              variant="h2"
              sx={{color: "primary.main", fontFamily: "typography.fontFamily", fontSize: "44px", fontWeight: "400", lineHeight: "32px"}}
            >
              Sanat ve İşbirliği Cebinizde
            </Typography>
          </div>
          <Typography variant="inherit" className="leading-7 text-sm font-[500px] lg:text-base w-8/12">
            Actryca mobil uygulamasıyla kariyerini her yerden yönetip projeleri takip edebilir ve fırsatları kaçırmaz.
          </Typography>
          <div className="flex mt-10">
            <Button variant="contained" size="large" sx={{padding: "16px 24px", borderRadius: "8px", backgroundColor: "primary.light"}}>
            <Typography sx={{fontFamily: "typography.fontFamily", fontSize: "16px", fontWeight: "700", lineHeight: "16px", textTransform: "capitalize"}}>
            UYGULAMAYI İNDİR
            </Typography>
              
            </Button>
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-end ">
        <Image src="/images/mobile-phone.png" width={420} height={420} />
      </div>
    </div>
  );
};

export default MobileSection;
