import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterFloor = () => {
  return (
    <div className="bg-gray-200 h-[300px] padding flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <Typography variant="h2" className="text-xl font-semibold">
            Kariyer Fırsatları
          </Typography>
          <span className="bg-primary-600 w-10 h-[1px]"></span>
        </div>
        <p className="leading-7 w-[555px] text-primary-900">
          Actryca ailesine katılın! Yetenekli ve yaratıcı bir ekiple çalışarak
          kariyerinizi geliştirin. Tutkulu, yenilikçi ve motivasyonluysanız,
          sizinle tanışmak isteriz.
        </p>
        <div className="flex">
          <Button variant="contained">bize katılın</Button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start shrink-0 w-[239px] h-[204px]">
        <div className="flex flex-col items-start ">
          <h2 className="text-xl font-semibold text-primary-900">
            Bizi Takip Edin
          </h2>
          <span className="bg-primary-600 w-10 h-[1px]"></span>
        </div>
        <div className="flex gap-3">
          <Link href="#">
            <Image
              src="/images/tiktok.png"
              width={32}
              height={32}
              className="hover:scale-105 transition-all"
              alt="Logo Social media"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/instagram.png"
              width={32}
              height={32}
              className="hover:scale-105 transition-all"
              alt="Logo Social media"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/x.png"
              width={32}
              height={32}
              className="hover:scale-105 transition-all"
              alt="Logo Social media"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/facebook.png"
              width={32}
              height={32}
              className="hover:scale-105 transition-all"
              alt="Logo Social media"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/whatsapp.png"
              width={32}
              height={32}
              className="hover:scale-105 transition-all"
              alt="Logo Social media"
            />
          </Link>
        </div>
        <span className="text-sm text-primary-900">
          © 2024 Actryca. Tüm hakları saklıdır.
        </span>
      </div>
    </div>
  );
};

export default FooterFloor;
