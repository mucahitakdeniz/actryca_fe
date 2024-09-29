"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  BriefcaseBusiness,
  Sparkles,
  Star,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import actorsData from "../../../utils/actorsData.json";
import Education from "@/components/actor-detail/Education";
import Experiences from "@/components/actor-detail/Experiences";
import SpecialSkills from "@/components/actor-detail/SpecialSkills";
import GivePointModal from "@/components/actor-detail/GivePointModal";
import Image from "next/image";

const calculateAge = (birthDate) => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const [actor, setActor] = useState(null);
  const [activeTab, setActiveTab] = useState("egitimler");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const nextActorId =
    currentIndex < actorIds.length - 1 ? actorIds[currentIndex + 1] : null;

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


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Box className="flex flex-col gap-14 p-8 items-start padding">

      <Stack direction="row" alignItems="center">
        <IconButton
          aria-label="geri"
          className="text-primary-600"
          onClick={goToPrevActor}
          disabled={!prevActorId}
        >
          <ArrowLeft size={24} />
        </IconButton>
        <IconButton
          aria-label="ileri"
          className="text-primary-600"
          onClick={goToNextActor}
          disabled={!nextActorId}
        >
          <ArrowRight size={24} />
        </IconButton>
      </Stack>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box className="flex flex-col items-start gap-4">
            <Image
              src={actor.img}
              alt={actor.name}
              width={1920}
              height={664}
              style={{
                borderRadius: "8px",
                height:"664px",
                width:"660px",
                objectFit: "cover",
                
              }}
            />
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Image
                  src={actor.img}
                  alt={actor.name}
                  width={311}
                  height={232}
                  style={{
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Image
                  src={actor.img}
                  alt={actor.name}
                  width={311}
                  height={232}
                  style={{
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Actor Info */}
        <Grid item xs={12} md={6}>
          <Box className="flex flex-col gap-4">
            <Box className="flex justify-between">
              <Typography variant="h4" fontWeight="bold">
                {actor.name}
              </Typography>
              <IconButton aria-label="bookmark">
                <Bookmark color={actor.isBookmarked ? "text-primary-600" : "gray"} />
              </IconButton>
            </Box>

            <Typography variant="subtitle1">
              {age} yaşında, {actor.birthCity},{" "}
              <strong>{actor.birthCountry}</strong>
            </Typography>

            <Divider className="w-full" />
            <Box className="flex flex-row justify-between my-8">

              <Box className="flex flex-col w-1/2 gap-4">
                <Typography className="text-primary-900 text-base font-bold">
                  ACTRYCA DEĞERLENDİRME
                </Typography>
                <Box className="flex items-center gap-1">
                  <Star color="orange" size={24} />
                  <Typography variant="h6" ml={1}>
                    {actor.score}
                    <span className="text-primary-50 text-sm"> /10</span>
                  </Typography>
                </Box>
              </Box>


              <Box className="flex flex-col w-1/2 gap-4">
                <Typography className="text-primary-900 text-base font-bold">
                  SENİN DEĞERLENDİRMEN
                </Typography>
                <Box className="flex items-center">
                  <IconButton
                    className="text-primary-600"
                    onClick={handleOpenModal}
                    style={{
                      padding: 0,
                      borderRadius: '50%',
                    }}
                  >
                    <Star size={20} className="text-primary-600 mr-1" />
                  </IconButton>
                  <Typography
                    onClick={handleOpenModal}
                    className="cursor-pointer text-primary-600 ml-1"
                  >
                    Puanla
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider className="w-full" />
            <Box className="flex flex-row justify-between">
              <Box className="flex flex-col items-start gap-4">
                <Typography className="text-primary-900 font-sans text-[16px] font-bold leading-6 uppercase">
                  KONUŞULAN DİLLER
                </Typography>
                {Object.keys(actor.languageLevels).map((language, index) => (
                  <Box key={index} className="flex flex-row justify-between w-full">
                    <Typography className="text-primary-500 font-sans text-[22px] font-medium leading-6">
                      {language}:
                    </Typography>
                    <Typography className="text-primary-900 font-sans text-[20px] italic leading-6 ml-2">
                      ({actor.languageLevels[language]})
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box className="flex flex-col w-1/2 gap-4">
                <Typography className="text-primary-900 font-sans text-[16px] font-bold leading-6 uppercase  ">
                  MENAJER/ AJANS
                </Typography>
                <Typography className="text-primary-500 font-sans text-[22px] font-medium leading-6">
                  Actryca Menajerlik
                </Typography>
              </Box>
            </Box>

            <Divider className="w-full" />
          </Box>
        </Grid>
      </Grid>

      <Box className="flex flex-col w-full">
        <Box className="flex justify-between w-full">

          <Stack
            direction="column"
            alignItems="center"
            className={`group cursor-pointer w-1/3 ${activeTab === "egitimler" ? "text-primary-600" : ""
              }`}
            onClick={() => setActiveTab("egitimler")}
          >
            <Stack className="flex flex-row gap-2">
              <BookOpen
                size={24}
                className={`${activeTab === "egitimler" ? "text-primary-500" : "text-gray-400"
                  }`}
              />
              <Typography
                className={`text-lg font-bold ${activeTab === "egitimler"
                  ? "text-primary-600"
                  : "text-gray-400"
                  }`}
              >
                EĞİTİMLER
              </Typography>
            </Stack>
            <Box
              className={`w-full h-0.5 mt-1 ${activeTab === "egitimler" ? "bg-primary-600" : "bg-transparent"
                }`}
            />
          </Stack>


          <Stack
            direction="column"
            alignItems="center"
            className={`group cursor-pointer w-1/3 ${activeTab === "deneyimler" ? "text-primary-600" : ""
              }`}
            onClick={() => setActiveTab("deneyimler")}
          >
            <Stack className="flex flex-row gap-2">
              <BriefcaseBusiness
                size={24}
                className={`${activeTab === "deneyimler"
                  ? "text-primary-500"
                  : "text-gray-400"
                  }`}
              />
              <Typography
                className={`text-lg font-bold ${activeTab === "deneyimler"
                  ? "text-primary-600"
                  : "text-gray-400"
                  }`}
              >
                DENEYİMLER
              </Typography>
            </Stack>
            <Box
              className={`w-full h-0.5 mt-1 ${activeTab === "deneyimler" ? "bg-primary-600" : "bg-transparent"
                }`}
            />
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            className={`group cursor-pointer w-1/3 ${activeTab === "yetenekler" ? "text-primary-600" : ""
              }`}
            onClick={() => setActiveTab("yetenekler")}
          >
            <Stack className="flex flex-row gap-2">
              <Sparkles
                size={24}
                className={`${activeTab === "yetenekler"
                  ? "text-primary-500"
                  : "text-gray-400"
                  }`}
              />
              <Typography
                className={`text-lg font-bold ${activeTab === "yetenekler"
                  ? "text-primary-600"
                  : "text-gray-400"
                  }`}
              >
                YETENEKLER
              </Typography>
            </Stack>
            <Box
              className={`w-full h-0.5 mt-1 ${activeTab === "yetenekler" ? "bg-primary-600" : "bg-transparent"
                }`}
            />
          </Stack>
        </Box>

        <Divider className="w-full my-4" />

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


      <GivePointModal
        open={isModalOpen}
        onClose={handleCloseModal}
        actorName={actor.name}
      />
    </Box>
  );
};

export default Page;
