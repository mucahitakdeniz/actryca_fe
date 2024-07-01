"use client";
import { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import ArtistItem from "./ArtistItem";

const PopularArtists = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const artists = [
    { name: "Duygu Yılmaz", img: "/images/artists/actor1.jfif" },
    { name: "Murat Uyar", img: "/images/artists/actor2.jfif" },
    { name: "Melisa Zeynep Gelipgeçen", img: "/images/artists/actor3.jfif" },
    { name: "Efe Güven", img: "/images/artists/actor4.jfif" },
  ];

  const writers = [
    { name: "Irmak Gülyılmaz", img: "/images/artists/writer1.jfif" },
    { name: "Hüseyin Salih Kaplanlıoğlu", img: "/images/artists/writer2.jfif" },
    { name: "Emir Demir", img: "/images/artists/writer3.jfif" },
    { name: "Nafiye Karanfil", img: "/images/artists/writer4.jfif" },
  ];

  return (
    <section className="padding center-col gap-8 relative h-[1000px] lg:h-[700px]">
      <div>
        <Typography
          variant="h1"
          className="font-dm-serif-text text-2xl md:text-5xl font-bold text-center"
          sx={{
            color: "primary.main",
          }}
        >
          Popüler Sanatçılar
        </Typography>
      </div>

      {/** Tab Section */}
      <div>
        <Tabs value={selectedTab} onChange={handleTabChange} centered
          sx={{
            color: "primary.main",
            fontFamily: "Rethink Sans",
            fontSize: "26px",
            fontStyle: "normal", fontWeight: "500px", lineHeight: "32px"
          }}>
          <Tab label="Oyuncular" />
          <Tab label="Senaristler" />
        </Tabs>
      </div>

      {selectedTab === 0 && (
        <Box sx={{ items: "left" }}>
          <Typography variant="h4" className="text-left text-xs lg:text-base"
            sx={{
              color: "var(--Primary-800, #322748)",
              fontFamily: "DM Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "24px"
            }}>
            <span>En İyi Oyuncular: </span>
            <span
              sx={{
                color: "var(--Primary-800, #322748)",
                fontFamily: "DM Sans",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px"
              }}
            >Haftanın Parlayanları</span>
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {artists.map((item, index) => (
              <ArtistItem item={item} key={index} />
            ))}
          </Grid>
        </Box>
      )}

      {selectedTab === 1 && (
        <Box sx={{ items: "left" }}>
          <Typography variant="h4" className="text-left text-xs lg:text-base"
            sx={{
              color: "var(--Primary-800, #322748)",
              fontFamily: "DM Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "24px"
            }}>
            <span>Kalem Kahramanları: </span>
            <span
              sx={{
                color: "var(--Primary-800, #322748)",
                fontFamily: "DM Sans",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px"
              }}
            >Yaratıcı Hikayeler</span>
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {writers.map((item, index) => (
              <ArtistItem item={item} key={index} />
            ))}
          </Grid>
        </Box>
      )}

      <div className="absolute left-0 -z-50">
        <Image src="/images/shape-half.png" width={350} height={300} />
      </div>
    </section>
  );
};

export default PopularArtists;
