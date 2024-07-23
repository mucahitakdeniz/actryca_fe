import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceCardItem from "./ServiceCardItem";

const ServiceSection = () => {
  return (
    <Box className=" h-[700px] " id="services">
      <Box className="background h-[320px] pt-12 padding">
        <Typography
          variant="h1"
          className="text-center font-dm-serif-text font-bold"
          sx={{
            color: "primary.darkest",
            fontSize: "44px",
            lineHeight: "32px",
          }}
        >
          Hizmetlerimiz
        </Typography>
        <Typography
          variant="h6"
          className="text-center  "
          sx={{
            color: "primary.darkest",
            fontSize: "20px",
            fontWeight: "500px",
            lineHeight: "normal",
            mt: "23px",
          }}
        >
          Actryca olarak sunduğumuz hizmetler ile kariyerinize yön verin.
        </Typography>
      </Box>
      <Box className="center -mt-28 gap-10 padding">
        <ServiceCardItem
          title="Yeteneklerinizi Keşfedin ve Paylaşın"
          desc="Actryca'ya kaydolarak kariyerinizi bir üst seviyeye taşıyın."
          check1="Portföy Oluşturma"
          check2="Görsel Galeri"
          check3="Geri Bildirim"
          check4="Bağımsız Başvuru"
          btnText="Profil Oluştur"
        />
        <ServiceCardItem
          title="Menajerlik Hizmetinden Yararlanma"
          desc="Actryca'nın uzman menajerlik hizmetleriyle kariyerinizi yönetin."
          check1="Kariyer Planlaması"
          check2="Ağ Genişletme"
          check3="Proje Seçimi"
          check4="Yönetim ve Destek"
          btnText="Actryca Menajeriniz Olsun"
        />
        <ServiceCardItem
          title="Doğru Yeteneği ve Senaryoyu Bulun"
          desc="Actryca'nın geniş veri tabanı sayesinde yetenekli oyuncu ve senaristlere ulaşın."
          check1="Geniş Portföy"
          check2="Özelleştirilmiş Arama"
          check3="Hızlı Eşleştirme"
          check4="Senaryo Değerlendirme"
          btnText="Şimdi Başvur"
        />
      </Box>
    </Box>
  );
};

export default ServiceSection;
