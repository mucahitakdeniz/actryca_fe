"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import actorsData from "../../../utils/actorsData.json";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const [actor, setActor] = useState(null);

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

  return (
    <Box className="my-12 text-center ">
      <Typography variant="h4" className="font-bold ">
        Aktör Detay Sayfası
      </Typography>
      <Typography variant="h5">{actor.id}</Typography>
      <Typography variant="h5">{actor.name}</Typography>
      <Typography variant="body1">{actor.score}</Typography>
    </Box>
  );
};

export default Page;
