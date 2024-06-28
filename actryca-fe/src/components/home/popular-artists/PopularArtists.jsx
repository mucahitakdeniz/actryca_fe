"use client";
import { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import ReviewCard from "../reviews/ReviewCard";
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
    <section className="padding center-col gap-8 relative h-[1000px] lg:h-[700px] ">
      <div>
        <Typography
          variant="h1"
          className="font-dm-serif-text text-2xl md:text-5xl font-bold text-center"
        >
          Popüler Sanatçılar
        </Typography>
      </div>

      {/** Tab Section */}
      <div>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="Oyuncular" />
          <Tab label="Senaristler" />
        </Tabs>
      </div>

      {selectedTab === 0 && (
        <>
          <Typography variant="h4" className="text-left text-xs md:text-xl">
            <span className="font-bold">En İyi Oyuncular: </span>Haftanın
            Parlayanları
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {artists.map((item, index) => (
              <ArtistItem item={item} key={index} />
            ))}
          </Grid>
        </>
      )}

      {selectedTab === 1 && (
        <>
          <Typography
            variant="h4"
            className="text-left text-xs md:text-xl  font-sans"
          >
            <span className="font-bold">Kalem Kahramanları: </span>Yaratıcı
            Hikayeler
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {writers.map((item, index) => (
              <ArtistItem item={item} key={index} />
            ))}
          </Grid>
        </>
      )}

      <div className="absolute left-0 -z-50">
        <Image src="/images/shape-half.png" width={350} height={300} />
      </div>
    </section>
  );
};

export default PopularArtists;
