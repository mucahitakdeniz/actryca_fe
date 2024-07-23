"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Drama, PenLine, Star } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleContinue = () => {
    if (selectedOption === "actor") {
      router.push("/user-register/actor");
    } else if (selectedOption === "writer") {
      router.push("/user-register/writer");
    } else if (selectedOption === "others") {
      router.push("/user-register/others");
    }
  };

  return (
    <Box className="bg-white top-0 left-0 w-screen h-screen z-50 fixed padding center">
      <Box className="center-col">
        <Box>
          <Typography
            variant="h4"
            className="font-dm-serif-text text-center font-bold"
          >
            Siz Hangi Kullanıcı Grubundasınız?
          </Typography>
          <Typography
            variant="h5"
            className="font-dm-serif-text text-center p-4"
          >
            Yaratıcı topluluğumuza katılarak kendinize uygun bir rol bulun.
          </Typography>
        </Box>
        <Box className="flex gap-24 p-16">
          <Button
            onClick={() => handleOptionClick("actor")}
            sx={{
              display: "flex",
              width: "300px",
              height: "360px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              padding: "36px 24px",
              border: "1px solid grey",
              backgroundColor:
                selectedOption === "actor" ? "primary.main" : "grey.200",
              color: selectedOption === "actor" ? "white" : "black",
            }}
            className="rounded-2xl border-2 p-4 hover:bg-primary-500 hover:shadow-md hover:scale-[1.01] transition-all"
          >
            <Drama
              className={`${
                selectedOption === "actor"
                  ? "text-gray-200"
                  : "text-primary-600"
              }`}
              size={44}
              strokeWidth={1}
              width={44}
              height={44}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <Typography
                variant="h4"
                className="title"
                sx={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  lineHeight: "24px",
                }}
              >
                Oyuncu
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ lineHeight: "24px" }}
                className="text-left"
              >
                Yeteneklerinizi sergileyin ve projelerde yer alın.
              </Typography>
            </Box>
          </Button>
          <Button
            onClick={() => handleOptionClick("writer")}
            sx={{
              display: "flex",
              width: "300px",
              height: "360px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              padding: "36px 24px",
              border: "1px solid grey",
              backgroundColor:
                selectedOption === "writer" ? "primary.main" : "grey.200",
              color: selectedOption === "writer" ? "white" : "black",
            }}
            className="rounded-2xl border-2 p-4 hover:bg-primary-500 hover:shadow-md hover:scale-[1.01] transition-all"
          >
            <PenLine
              className={`${
                selectedOption === "writer"
                  ? "text-gray-200"
                  : "text-primary-600"
              }`}
              size={44}
              strokeWidth={1}
              width={44}
              height={44}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <Typography
                variant="h4"
                className="title"
                sx={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  lineHeight: "24px",
                }}
              >
                Yazar
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ lineHeight: "24px" }}
                className="text-left"
              >
                Yeteneklerinizi sergileyin ve projelerde yer alın.
              </Typography>
            </Box>
          </Button>
          <Button
            onClick={() => handleOptionClick("others")}
            sx={{
              display: "flex",
              width: "300px",
              height: "360px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              padding: "36px 24px",
              border: "1px solid grey",
              backgroundColor:
                selectedOption === "others" ? "primary.main" : "grey.200",
              color: selectedOption === "others" ? "white" : "black",
            }}
            className="rounded-2xl border-2 p-4 hover:bg-primary-500 hover:shadow-md hover:scale-[1.01] transition-all"
          >
            <Star
              className={`${
                selectedOption === "others"
                  ? "text-gray-200"
                  : "text-primary-600"
              }`}
              size={44}
              strokeWidth={1}
              width={44}
              height={44}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              <Typography
                variant="h4"
                className="title"
                sx={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  lineHeight: "24px",
                }}
              >
                Diğerleri
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ lineHeight: "24px" }}
                className="text-left"
              >
                Yeteneklerinizi sergileyin ve projelerde yer alın.
              </Typography>
            </Box>
          </Button>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: selectedOption ? "primary.main" : "grey",
            width: "400px",
          }}
          disabled={!selectedOption}
          onClick={handleContinue}
        >
          devam et
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
