"use client";
import {
  Box,
  MenuItem,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { countries } from "../../actorRegister/actorspecial";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useAuthStore from "@/store/auth-store"; 
import { formatDate } from "@/utils/utils"; 

const placeholderStyles = {
  "::placeholder": {
    color: "#E3DAF3",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "24px",
  },
};

const MainInformation = () => {
  const [selectedCountry, setSelectedCountry] = useState("Turkey");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState(null);

  const setMainInformation = useAuthStore((state) => state.setMainInformation);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const country = countries.find((country) => country.value === selectedCountry);
    setPhoneCode(country.phoneCode);
    setSelectedCity("");
  };

  const handleSave = () => {
    const fullPhoneNumber = `${phoneCode}${phoneNumber}`;
    const formattedDate = formatDate(birthDate);

    const formData = {
      full_name: fullName,
      email: email,
      phone: fullPhoneNumber,
      birth_date: formattedDate,
      country: selectedCountry,
      city: selectedCity,
    };

    setMainInformation(formData);
    console.log("Veri hafızaya kaydedildi:", formData);
  };

  const cities = countries.find((country) => country.value === selectedCountry)?.cities || [];
  const phoneCodes = countries.map((country) => country.phoneCode);

  return (
    <Box
      className="w-[519px] flex flex-col items-start gap-6"
      component="form"
    >
      <Typography variant="h6" className="font-dm-serif-display font-bold text-primary-900">
        Temel Bilgiler:
      </Typography>
      <Box className="flex flex-col gap-6 self-stretch shadow rounded-2xl p-8 h-full border border-primary-100">
        
        {/* Ad Soyad */}
        <Box className="flex flex-col w-full">
          <Typography className="text-secondary-500">Ad Soyad</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Adı Soyadı"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            inputProps={{
              sx: placeholderStyles,
            }}
          />
        </Box>

        {/* Telefon */}
        <Box className="flex flex-col w-full">
          <Typography>Telefon</Typography>
          <Stack direction="row" spacing={2} width="100%">
            <FormControl variant="outlined" className="w-1/4">
              <Select
                value={phoneCode}
                startAdornment={<InputAdornment position="start">+</InputAdornment>}
                className="h-12 rounded-lg"
                onChange={(e) => setPhoneCode(e.target.value)} 
              >
                {phoneCodes.map((code, index) => (
                  <MenuItem key={index} value={code}>
                    {code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="555 55 55"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))} 
              InputProps={{
                sx: placeholderStyles,
                inputMode: "numeric", 
                pattern: "[0-9]*",
              }}
            />
          </Stack>
        </Box>

        {/* E-posta */}
        <Box className="flex flex-col w-full">
          <Typography>E-posta</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{
              sx: placeholderStyles,
            }}
          />
        </Box>

        {/* Doğum Tarihi */}
        <Box className="flex flex-col w-full">
          <Typography className="text-secondary-500">Doğum Tarihi</Typography>
          <DatePicker
            value={birthDate}
            onChange={(newDate) => setBirthDate(newDate)}
            sx={{ color: "primary" }}
          />
        </Box>

        {/* Ülke ve Şehir */}
        <Box className="flex flex-row justify-between items-center w-full gap-2">
          <Box className="flex flex-col justify-between items-start w-1/2">
            <Typography>Ülke</Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              {countries.map((option, index) => (
                <MenuItem key={index} value={option.value} className="hover:bg-primary-50">
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

        {/* Kaydet Butonu */}
        <Box className="flex justify-end w-full mt-4">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSave}
          >
            Kaydet
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainInformation;
