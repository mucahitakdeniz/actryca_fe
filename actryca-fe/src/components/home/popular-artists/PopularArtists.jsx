"use client";
import { useState } from "react";
import { Tabs, Tab, Grid, Typography, Box } from "@mui/material";
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
    <section
      id="actors"
      className="padding center-col gap-8 relative h-[1000px] lg:h-[700px]"
    >
      <Typography
        variant="h1"
        className="font-dm-serif-text text-[44px] font-bold text-center"
        sx={{
          color: "primary.darkest",
        }}
      >
        Popüler Sanatçılar
      </Typography>

      {/** Tab Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          centered
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Tab
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              textTransform: "capitalize",
              color: "primary.darkest",
              fontWeight: "500px",
              lineHeight: "32px",
              fontFamily: "Rethink Sans",
              fontSize: "26px",
            }}
            label="Oyuncular"
          />
          <Tab
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              textTransform: "capitalize",
              color: "primary.darkest",
              fontWeight: "500px",
              lineHeight: "32px",
              fontFamily: "Rethink Sans",
              fontSize: "26px",
            }}
            label="Senaristler"
          />
        </Tabs>
      </Box>

      {selectedTab === 0 && (
        <Box
          sx={{
            items: "left",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography
            variant="h4"
            className="text-left text-xs lg:text-base"
            sx={{
              color: "primary.darkest",
              fontFamily: "DM Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "24px",
            }}
          >
            <span className="text-primary-dark font-bold">
              En İyi Oyuncular:{" "}
            </span>
            <span className="text-primary-dark font-normal">
              Haftanın Parlayanları
            </span>
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {artists.map((item, index) => (
              <ArtistItem item={item} key={index} />
            ))}
          </Grid>
        </Box>
      )}

      {selectedTab === 1 && (
        <Box
          sx={{
            items: "left",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <Typography
            variant="h4"
            className="text-left text-xs lg:text-base"
            sx={{
              color: "primary.darkest",
              fontFamily: "DM Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "24px",
            }}
          >
            <span className="text-primary-dark font-bold">
              Kalem Kahramanları:{" "}
            </span>
            <span className="text-primary-dark font-normal">
              Yaratıcı Hikayeler
            </span>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "36px" }}>
            {writers.map((item, index) => (
              <ArtistItem item={item} key={index} />
            ))}
          </Box>
        </Box>
      )}

      <div className="absolute left-0 -z-50">
        <Image
          src="/images/shape-half.png"
          width={350}
          height={300}
          alt=""
          className="h-auto"
          style={{ width: "auto" }}
        />
      </div>
    </section>
  );
};

export default PopularArtists;
