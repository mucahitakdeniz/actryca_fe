"use client";
import { useEffect, useState } from "react";
import { Box, Typography, IconButton, Grid, Stack, Divider } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Bookmark, BookOpen, BriefcaseBusiness, Sparkles, Star } from "lucide-react";
import actorsData from "../../../utils/actorsData.json";
import Education from "@/components/actor-detail/Education";
import Experiences from "@/components/actor-detail/Experiences";
import SpecialSkills from "@/components/actor-detail/SpecialSkills";


const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const [actor, setActor] = useState(null);
  const [activeTab, setActiveTab] = useState("egitimler");

  // ID'leri sıralı bir listeye çekmek için
  const actorIds = actorsData.map((actor) => actor.id).sort((a, b) => a - b);

  useEffect(() => {
    const id = params.id;
    if (id) {
      const actorData = actorsData.find((actor) => actor.id === parseInt(id));
      setActor(actorData);
    }
  }, [params.id]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  const age = calculateAge(actor.birthDate);

  const currentIndex = actorIds.indexOf(actor.id);


  const prevActorId = currentIndex > 0 ? actorIds[currentIndex - 1] : null;
  const nextActorId = currentIndex < actorIds.length - 1 ? actorIds[currentIndex + 2] : null;

  const goToPrevActor = () => {
    if (prevActorId) {
      router.push(`/actors/${prevActorId}`);
    }
  };

  const goToNextActor = () => {
    if (nextActorId) {
      router.push(`/actors/${nextActorId}`);
    }
  };

  //  kontrol etmek için silmeyi unutma
  console.log("Current Index:", currentIndex);
  console.log("Prev Actor ID:", prevActorId);
  console.log("Next Actor ID:", nextActorId);

  return (
    <Box className="flex flex-col gap-[56px] padding items-start">
      <Stack direction="row" alignItems="center">
        <IconButton aria-label="geri" className="text-primary-600" onClick={goToPrevActor} disabled={!prevActorId}>
          <ArrowLeft size={24} />
        </IconButton>
        <IconButton aria-label="ileri" onClick={goToNextActor} disabled={!nextActorId}>
          <ArrowRight size={24} />
        </IconButton>
      </Stack>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="flex flex-col items-start gap-2">
            <img
              src={actor.img}
              alt={actor.name}
              style={{
                width: "100%",
                height: "664px",
                borderRadius: "8px",
                padding: "0px 97px"
              }}

            />
            <Grid container spacing={1} className="px-[97px]">
              <Grid item xs={6} >
                <img
                  src={actor.img}
                  alt={actor.name}
                  style={{
                    width: "311px",
                    height: "232px",
                    aspectRatio: "1/1",
                    borderRadius: "4px",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={actor.img}
                  alt={actor.name}
                  style={{
                    width: "311px",
                    height: "232px",
                    aspectRatio: "1/1",
                    borderRadius: "4px",
                    
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className="flex flex-col gap-2">
            <Box className="flex flex-row justify-between">
              <Typography variant="h4" fontWeight="bold">
                {actor.name}
              </Typography>
              <IconButton aria-label="bookmark">
                <Bookmark color={actor.isBookmarked ? "purple" : "gray"} />
              </IconButton>
            </Box>

            <Typography variant="subtitle1">
              {age} yaşında, {actor.birthCity}, <strong>{actor.birthCountry}</strong>
            </Typography>

            <Box className="flex flex-col items-start">
              <Divider className="w-full" />
              <Box className="flex flex-row pr-4 w-full justify-between items-center mt-8 mb-8">
                {[
                  { label: "Boy", value: actor.height },
                  { label: "Kilo", value: actor.weight },
                  { label: "Göz", value: actor.eye },
                  { label: "Saç", value: actor.hair },
                ].map((item, index) => (
                  <Box key={index} className="flex flex-col items-start gap-2">
                    <Typography className="text-primary-900 text-[22px] font-sans font-normal leading-6">
                      {item.label}
                    </Typography>
                    <Typography className="text-primary-500 text-[22px] font-sans font-medium leading-6">
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Divider className="w-full" />
              <Box className="flex flex-row w-full justify-between mt-8">

                <Box className="flex flex-col w-1/2 items-start gap-4">
                  <Typography
                    variant="h6"
                    className="text-primary-900 text-[16px] font-sans font-bold leading-6 "
                  >
                    ACTRYCA DEĞERLENDİRME
                  </Typography>
                  <Box className="flex flex-row items-center gap-1 flex-start">
                    <Star color="orange" size={24} />
                    <Typography variant="h6" ml={1}>
                      {actor.score}
                      <span className="text-primary-50 text-[12px] font-medium leading-[15px]"> /10</span>
                    </Typography>
                  </Box>
                </Box>

                <Box className="flex flex-col w-1/2 items-start gap-4 mb-8">
                  <Typography
                    variant="h6"
                    className="text-primary-900 text-[16px] font-sans font-bold leading-6 "
                  >
                    SENİN DEĞERLENDİRMEN
                  </Typography>
                  <Box className="flex flex-row gap-1 flex-start items-center">
                    <Star className="text-primary-600" size={24} />
                    <Typography variant="h6" className="text-primary-600">
                      Puanla
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Divider className="w-full" />
            <Box className="flex flex-row justify-between items-start mt-8 mb-8">
              <Box className="w-1/2 flex flex-col items-start gap-4">
                <Typography
                  variant="h6"
                  className="text-primary-900 font-sans text-[16px] font-bold leading-6"
                >
                  KONUŞULAN DİLLER
                </Typography>
                {Object.keys(actor.languageLevels).map((language, index) => (
                  <Typography key={index} variant="body1">
                    <span className="text-primary-500 font-sans font-[22px] font-medium leading-6">{language}</span>{" "}
                    <span className="text-primary-900 font-sans font-[20px] font-normal italic leading-6">:</span> (
                    {actor.languageLevels[language]})
                  </Typography>
                ))}
              </Box>

              <Box className="w-1/2 flex flex-col items-start gap-4">
                <Typography variant="h6" fontWeight="bold">
                  Menajer Ajansı
                </Typography>
                <Typography
                  variant="body1"
                  className="text-primary-500 font-sans font-[22px] font-medium leading-6"
                >
                  Actryca Menajerlik
                </Typography>
              </Box>
            </Box>

            <Divider className="w-full" />
          </Box>
        </Grid>
      </Grid>

      {/* Eğitim, Deneyim, Yetenek kısmı */}
      <Box className="flex flex-col justify-between items-center w-full">
        <Box className="flex justify-between items-center w-full">
          {/* Eğitimler */}
          <Stack
            direction="column"
            alignItems="center"
            className={`group cursor-pointer w-1/3 ${activeTab === "egitimler" ? "text-primary-600" : ""}`}
            onClick={() => setActiveTab("egitimler")}
          >
            <Stack className="flex flex-row gap-[10px]">
              <BookOpen size={24} className={`${activeTab === "egitimler" ? "text-primary-500" : "text-gray-400"}`} />
              <Typography
                className={`font-[18px] font-bold leading-6 ${activeTab === "egitimler" ? "text-primary-600" : "text-gray-400"}`}
              >
                EĞİTİMLER
              </Typography>
            </Stack>
            <Box className={`w-full h-[2px] mt-1 ${activeTab === "egitimler" ? "bg-primary-600" : "bg-transparent"}`}></Box>
          </Stack>

          {/* Deneyimler */}
          <Stack
            direction="column"
            alignItems="center"
            className={`group cursor-pointer w-1/3 ${activeTab === "deneyimler" ? "text-primary-600" : ""}`}
            onClick={() => setActiveTab("deneyimler")}
          >
            <Stack className="flex flex-row gap-[10px]">
              <BriefcaseBusiness size={24} className={`${activeTab === "deneyimler" ? "text-primary-500" : "text-gray-400"}`} />
              <Typography
                className={`font-[18px] font-bold leading-6 ${activeTab === "deneyimler" ? "text-primary-600" : "text-gray-400"}`}
              >
                DENEYİMLER
              </Typography>
            </Stack>
            <Box className={`w-full h-[2px] mt-1 ${activeTab === "deneyimler" ? "bg-primary-600" : "bg-transparent"}`}></Box>
          </Stack>

          {/* Yetenekler */}
          <Stack
            direction="column"
            alignItems="center"
            className={`group cursor-pointer w-1/3 ${activeTab === "yetenekler" ? "text-primary-600" : ""}`}
            onClick={() => setActiveTab("yetenekler")}
          >
            <Stack className="flex flex-row gap-[10px]">
              <Sparkles size={24} className={`${activeTab === "yetenekler" ? "text-primary-500" : "text-gray-400"}`} />
              <Typography
                className={`font-[18px] font-bold leading-6 ${activeTab === "yetenekler" ? "text-primary-600" : "text-gray-400"}`}
              >
                YETENEKLER
              </Typography>
            </Stack>
            <Box className={`w-full h-[2px] mt-1 ${activeTab === "yetenekler" ? "bg-primary-600" : "bg-transparent"}`}></Box>
          </Stack>
        </Box>
        <Divider className="w-full" />

        {/* İçerik */}
        <Box className="w-full mt-8 mb-8">
          {activeTab === "egitimler" && actor.education && (
            <Education education={actor.education} actorId={params.id} />
          )}
          {activeTab === "deneyimler" && actor.experiences && (
            <Experiences experiences={actor.experiences} actorId={params.id} />
          )}
          {activeTab === "yetenekler" && actor.specialSkills && (
            <SpecialSkills specialSkills={actor.specialSkills} actorId={params.id} />
          )}
        </Box>

      </Box>
    </Box>
  );
};

export default Page;
