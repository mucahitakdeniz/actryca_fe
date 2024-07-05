import React from "react";
import FooterForm from "./FooterForm";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import FooterFloor from "./FooterFloor";

const Footer = () => {
  return (
    <footer className="font-sans">
      <FooterForm />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowGap={2} height="340px" className="padding">
          {/* Logo Section */}
          <Grid item xs={4} className=" pt-12 flex flex-col gap-4 ">
            <div>
              <Image src="/images/logo.png" width={166} height={42} />
            </div>
            <div>
              <p className="w-[310px] leading-7 " style={{ fontWeight: 500 }}>
                Actryca, sanatçıların kariyerlerini ilerletmelerine ve yaratıcı
                projeler için yapımcılarla buluşmalarına yardımcı olur.
              </p>
            </div>
            <div>
              <Link
                href="tel:+903342024792"
                className="inline-flex gap-2 hover:scale-105 transition-all"
              >
                <Smartphone className="text-primary-500" strokeWidth={1.5} />
                <span>(334) 202-4792</span>
              </Link>
            </div>
            <div>
              <Link
                href="mailto:actryca@gmail.com"
                className="inline-flex gap-2 hover:scale-105 transition-all"
              >
                <Mail className="text-primary-500" strokeWidth={1.5} />
                <span>actryca@gmail.com</span>
              </Link>
            </div>
          </Grid>

          {/* Genel Section */}
          <Grid item xs={2} className="pt-12 flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Genel </h2>
              <span className="bg-primary-600 w-10 h-[1px]"></span>
            </div>
            <nav>
              <ul
                className="inline-flex flex-col gap-4"
                style={{ fontWeight: 500 }}
              >
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Ana Sayfa</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Senaristler</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Oyuncular</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Biz Kimiz?</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Bize Ulaşın</Link>
                </li>
              </ul>
            </nav>
          </Grid>

          {/* Hesap Section */}
          <Grid item xs={3} className="pt-12 flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Hesap ve Politikaları </h2>
              <span className="bg-primary-600 w-10 h-[1px]"></span>
            </div>
            <nav>
              <ul
                className="inline-flex flex-col gap-4"
                style={{ fontWeight: 500 }}
              >
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Hesabım ve Ayarlar</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Senaristler</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Oyuncular</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Biz Kimiz?</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">İletişim</Link>
                </li>
              </ul>
            </nav>
          </Grid>

          {/* Hizmet Section */}
          <Grid item xs={3} className="pt-12 flex flex-col gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">Hizmetlerimiz </h2>
              <span className="bg-primary-600 w-10 h-[1px]"></span>
            </div>
            <nav>
              <ul
                className="inline-flex flex-col gap-4"
                style={{ fontWeight: 500 }}
              >
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Oyuncu Kaydı</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Senarist Kaydı</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Menajerlik Hizmetleri</Link>
                </li>
                <li className="hover:scale-105 transition-all">
                  <Link href="#">Cast Hizmetleri</Link>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </Box>
      <FooterFloor />
    </footer>
  );
};

export default Footer;
