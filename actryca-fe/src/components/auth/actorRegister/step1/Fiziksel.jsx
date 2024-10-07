import React, { useState } from "react";
import {
  Box,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import { eyeColors, hairColors, genders } from "../actorspecial";
import AboutMe from "./AboutMe";
import { Edit2 } from "lucide-react";
import useAuthStore from "@/store/auth-store";

const placeholderStyles = {
  color: "#E3DAF3",
  fontSize: "16px",
  fontWeight: "normal",
  lineHeight: "24px",
};

const Fiziksel = () => {
  const [aboutText, setAboutText] = useState("");
  const [height, setHeight] = useState(); 
  const [weight, setWeight] = useState(); 
  const [gender, setGender] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const maxChars = 2500;

  const setPersonalInfo = useAuthStore((state) => state.setPersonalInfo);

  const handleSave = () => {
    const currentInfo = useAuthStore.getState().personalInfo;
    const formattedGender = gender === "Kadın" ? "female" : "male"; 
  
    const formattedHeight = Math.round(parseFloat(height) * 100); 
    const formattedWeight = parseInt(weight, 10); 
    const physicalInfo = {
      height: formattedHeight,
      weight: formattedWeight,
      gender: formattedGender,
      hair_color: hairColor,
      eye_color: eyeColor,
      about: aboutText,
    };
  
    setPersonalInfo({
      ...currentInfo, 
      ...physicalInfo, 
    });
  };
  
  

  const handleAboutMeOpen = () => {
    setIsAboutMeOpen(true);
  };

  const handleAboutMeClose = () => {
    setIsAboutMeOpen(false);
  };

  const heights = [];
  const weights = [];


  for (let i = 1.4; i <= 2.2; i += 0.01) {
    heights.push(i.toFixed(2)); 
  }

  for (let i = 35; i <= 150; i++) {
    weights.push(i.toString()); 
  }

  return (
    <Box
      component="form"
      className="w-full h-full flex flex-col items-start gap-6"
    >
      <Typography variant="h6" className="font-dm-serif-display font-bold">
        Fiziksel Özellikler:
      </Typography>

      <Box className="w-full flex flex-col items-center self-stretch border border-primary-100 rounded-2xl px-8 py-10">
        {/* Cinsiyet */}
        <Box className="flex flex-row justify-between items-center gap-2 w-full mb-4 flex-wrap md:flex-nowrap">
          <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium text-center leading-normal w-1/2">
              Cinsiyet:
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              {genders.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        {/* Boy ve Kilo */}
        <Box className="flex flex-row justify-between items-center gap-2 w-full mb-4 flex-wrap md:flex-nowrap">
          <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium text-center leading-normal w-1/2">
              Boy:
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={height}
              onChange={(e) => setHeight(e.target.value)} 
            >
              {heights.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option} m
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium text-right leading-normal w-1/2">
              Kilo:
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={weight}
              onChange={(e) => setWeight(e.target.value)} 
            >
              {weights.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option} kg
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>

        {/* Saç ve Göz Rengi */}
        <Box className="flex flex-row justify-between items-center gap-2 w-full flex-wrap md:flex-nowrap">
          <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium text-center leading-normal w-1/2">
              Saç Rengi:
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={hairColor}
              onChange={(e) => setHairColor(e.target.value)}
            >
              {hairColors.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium text-center leading-normal w-1/2">
              Göz Rengi:
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={eyeColor}
              onChange={(e) => setEyeColor(e.target.value)}
            >
              {eyeColors.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>

      {/* Hakkımda */}
      <Box className="flex flex-col gap-[10px] self-stretch">
        <Typography variant="h6" className="font-dm-serif-display font-bold">
          Hakkımda:
        </Typography>
        <Box className="w-full flex flex-col border border-primary-100 rounded-2xl px-8 py-10 relative h-[79%]">
          <TextField
            multiline
            rows={8}
            fullWidth
            variant="outlined"
            value={aboutText}
            placeholder="Merhaba ben..."
            onChange={(e) => setAboutText(e.target.value)}
            inputProps={{
              maxLength: maxChars,
              style: { ...placeholderStyles, border: "none", color: "#36383C" },
              className: "text-primary-900",
              sx: {
                "&::-webkit-scrollbar": {
                  width: "0px",
                  height: "0px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
              },
            }}
            sx={{
              height: "100%",
              width: "100%",
              border: "none",
              color: "primary.darkest",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                color: "primary.darkest",
              },
            }}
          />
          <IconButton
            style={{ position: "absolute", top: 10, right: 10 }}
            className="text-primary-600"
            onClick={handleAboutMeOpen}
          >
            <Edit2 size={20} />
          </IconButton>
        </Box>
        <Box className="flex justify-end w-full">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Bu Adımı Tamamla
          </Button>
        </Box>
      </Box>

      {/* AboutMe Dialog */}
      <Dialog open={isAboutMeOpen} onClose={handleAboutMeClose}>
        <DialogContent>
          <AboutMe
            aboutText={aboutText}
            setAboutText={setAboutText}
            handleClose={handleAboutMeClose}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Fiziksel;
