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
              sx={{color: "primary.darkest", fontFamily: "typography.fontFamily", fontSize: "44px", fontWeight: "bold", lineHeight: "32px"}}
            >
              Sanat ve İşbirliği Cebinizde
            </Typography>
          </div>
          <Typography variant="inherit" className="text-primary-900 leading-[30px] text-[20px] font-[500px] w-9/12 ">
            Actryca mobil uygulamasıyla kariyerini her yerden yönetip projeleri takip edebilir ve fırsatları kaçırmaz.
          </Typography>
          <div className="flex mt-10">
            <Button variant="contained" size="large" sx={{padding: "16px 24px", borderRadius: "8px", backgroundColor: "primary.light"}}>
            <Typography sx={{fontFamily: "typography.fontFamily", fontSize: "16px", fontWeight: "bold", lineHeight: "16px", textTransform: "capitalize"}}>
            Uygulamayı İndir
            </Typography>
              
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
