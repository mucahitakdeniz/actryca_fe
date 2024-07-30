import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ActorCard = ({ actor }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/actors/${actor.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="relative w-[297px] h-[420px] rounded-2xl border hover:scale-[1.005] hover:cursor-pointer hover:shadow-lg transition-all"
    >
      <Box className="absolute w-full flex justify-between p-3">
        <Typography className="center bg-primary-100 w-16 h-7 rounded-lg text-primary-800">
          YENİ
        </Typography>
        {actor.isBookmarked ? (
          <BookmarkIcon
            className="bg-primary-100 rounded-full p-1 text-primary-600"
            fontSize="large"
          />
        ) : (
          <BookmarkBorderIcon
            className="bg-primary-100 rounded-full p-1 text-primary-600"
            fontSize="large"
          />
        )}
      </Box>
      <Box className="absolute bottom-16 w-full flex justify-end p-3">
        <Typography className="center p-3 bg-star-color-100 w-16 h-8 rounded-lg text-primary-800 text-sm">
          <Image
            src="/images/star-fill.png"
            width={20}
            height={20}
            alt="actor image"
            className="w-5 h-auto"
          />
          &nbsp;{actor?.score}
        </Typography>
      </Box>
      <CardMedia
        sx={{ height: 358 }}
        image={actor?.img}
        title=""
        alt="actor image"
      />
      <CardContent className="flex justify-start border-none">
        <Typography variant="subtitle1" component="div" className="font-bold ">
          {actor?.name}
        </Typography>
        <span className="text-primary-500">&nbsp; ● &nbsp;</span>
        <Typography
          variant="subtitle1"
          component="div"
          className="font-bold text-lg italic text-primary-500"
        >
          32
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActorCard;
