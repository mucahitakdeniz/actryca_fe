"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import useAuthStore from "@/store/auth-store";
import { DatePicker } from "@mui/x-date-pickers";
import {
  countries,
  eyeColors,
  genders,
  hairColors,
} from "../auth/actorRegister/actorspecial";
import { Edit2 } from "lucide-react";
import AboutMe from "../auth/actorRegister/step1/AboutMe";


const placeholderStyles = {
  color: "#E3DAF3",
  fontSize: "16px",
  fontWeight: "normal",
  lineHeight: "24px",
};


const PersonalInfo = () => {
  const { user } = useAuthStore();
  const [selectedCountry, setSelectedCountry] = useState("Turkey");
  const [selectedCity, setSelectedCity] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const maxChars = 2500;

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const country = countries.find(
      (country) => country.value === selectedCountry
    );
    setPhoneCode(country.phoneCode);
    setSelectedCity("");
  };

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

  const cities =
    countries.find((country) => country.value === selectedCountry)?.cities ||
    [];
  const phoneCodes = countries.map((country) => country.phoneCode);

  const heights = [];
  const weights = [];

  for (let i = 1.4; i <= 2.2; i += 0.01) {
    heights.push(i.toFixed(2));
  }

  for (let i = 35; i <= 150; i++) {
    weights.push(i.toString());
  }
  return (
    <Box>
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text">
        Kullanıcı Bilgileri
      </Typography>

      <Typography
        variant="h5"
        className="text-primary-900 font-dm-serif-text my-8"
      >
        Kişisel Bilgiler
      </Typography>
      <Box className="flex gap-8">
        <Box className="w-1/2">
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-12 p-8 rounded-xl border border-primary-50"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold [leading-trim:both] [text-edge:cap]"
            >
              Temel Bilgiler
            </Typography>

            <Box className="flex flex-col items-start gap-6 w-full">
              <Box className="w-full flex flex-col gap-2 items-start">
                <Typography
                  variant="body2"
                  className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
                >
                  Kullanıcı Adı
                </Typography>
                <TextField
                  defaultValue={user?.user?.user_name || "Ad Bilgisi Yok"}
                  variant="outlined"
                  fullWidth
                  InputProps={{ disableunderline: true }}
                />
              </Box>

              <Box className="w-full flex flex-col gap-2 items-start">
                <Typography
                  variant="body2"
                  className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
                >
                  Telefon
                </Typography>
                <TextField
                  defaultValue={user?.user?.phone || "+90 000 00 00"}
                  variant="outlined"
                  fullWidth
                  InputProps={{ disableunderline: true }}
                />
              </Box>
              <Box className="w-full flex flex-col gap-2 items-start">
                <Typography
                  variant="body2"
                  className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
                >
                  E-posta
                </Typography>
                <TextField
                  defaultValue={user?.user?.email || "Email Bilgisi Yok"}
                  variant="outlined"
                  fullWidth
                  InputProps={{ disableunderline: true }}
                />
              </Box>

              <Box className="w-full flex flex-col gap-2 items-start">
                <Typography
                  variant="body2"
                  className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
                >
                  Doğum Tarihi
                </Typography>
                <DatePicker
                  value={user?.user?.birthDate}
                  onChange={(newDate) => setBirthDate(newDate)}
                  sx={{ color: "primary", width: 1 }}
                />
              </Box>

              <Box className="flex flex-row justify-between items-center w-full gap-2">
                <Box
                  className="flex flex-col justify-between items-start w-1/2"
                  spacing={2}
                >
                  <Typography>Ülke</Typography>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    {countries.map((option, index) => (
                      <MenuItem
                        key={index}
                        value={option.value}
                        className="hover:bg-primary-50"
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box className="flex flex-col justify-between items-start w-1/2">
                  <Typography>Şehir</Typography>
                  <TextField
                    select
                    fullWidth
                    variant="outlined"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {cities.map((city, index) => (
                      <MenuItem key={index} value={city}>
                        {city}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>

              <Button variant="contained" color="primary" className="w-full">
                Güncelle
              </Button>
            </Box>
          </Paper>
        </Box>

        <Box className="w-1/2 flex flex-col gap-8">
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-8 p-8 rounded-xl border border-primary-50"
          >
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold [leading-trim:both] [text-edge:cap]"
            >
              Fiziksel Bilgiler
            </Typography>

            {/* Cinsiyet */}
            <Box className="flex flex-row justify-between items-center gap-2 w-full flex-wrap md:flex-nowrap">
              <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
                <Typography className="text-primary-900 font-sans text-[14px] font-medium text-right leading-normal w-1/2">
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
            <Box className="flex flex-row justify-between items-center gap-2 w-full flex-wrap md:flex-nowrap">
              <Box className="flex flex-row items-center gap-2 w-full md:w-1/2">
                <Typography className="text-primary-900 font-sans text-[14px] font-medium text-right leading-normal w-1/2">
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
                <Typography className="text-primary-900 font-sans text-[14px] font-medium text-right leading-normal w-1/2">
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
                <Typography className="text-primary-900 font-sans text-[14px] font-medium text-right leading-normal w-1/2">
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

            <Button variant="contained" color="primary" className="w-full">
              Güncelle
            </Button>
          </Paper>
          <Paper
            elevation={3}
            className="flex flex-col items-start gap-12 p-8 rounded-xl border border-primary-50"
          >
            <Box className="flex flex-col gap-[10px] self-stretch">
              <Typography
                variant="h6"
                className="font-dm-serif-display font-bold"
              >
                Hakkımda:
              </Typography>
              <Box className="w-full flex flex-col border border-primary-100 rounded-2xl px-8 py-10 relative">
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
                    style: {
                      ...placeholderStyles,
                      border: "none",
                      color: "#36383C",
                    },
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
                  Tamamla
                </Button>
              </Box>
            </Box>
          </Paper>
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
    </Box>
  );
};

export default PersonalInfo;
