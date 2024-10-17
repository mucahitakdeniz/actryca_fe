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
} from "@mui/material";
import React from "react";
import { countries } from "../../actorRegister/actorspecial";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const placeholderStyles = {
  "::placeholder": {
    color: "#E3DAF3",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "24px",
  },
};

const MainInformation = () => {
  const [selectedCountry, setSelectedCountry] = React.useState("Turkey");
  const [phoneCode, setPhoneCode] = React.useState("+90");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    const country = countries.find(
      (country) => country.value === selectedCountry
    );
    setPhoneCode(country.phoneCode);
    setSelectedCity("");
  };

  const handlePhoneCodeChange = (event) => {
    setPhoneCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cities =
    countries.find((country) => country.value === selectedCountry)?.cities ||
    [];
  const phoneCodes = countries.map((country) => country.phoneCode);

  return (
    <Box className="w-[519px] flex flex-col items-start gap-6" component="form">
      <Typography
        variant="h6"
        className=" font-dm-serif-display font-bold text-primary-900"
      >
        Temel Bilgiler:
      </Typography>
      <Box className="flex flex-col gap-6 self-stretch shadow rounded-2xl p-8 h-full border border-primary-100">
        <Box className="flex flex-col w-full">
          <Typography className="text-secondary-500">Ad Soyad</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Adı Soyadı"
            inputProps={{
              sx: placeholderStyles,
            }}
          />
        </Box>
        <Box className="flex flex-col w-full">
          <Typography>Telefon</Typography>
          <Stack direction="row" spacing={2} width="100%">
            <FormControl variant="outlined" className="w-1/4">
              <Select
                value={phoneCode}
                onChange={handlePhoneCodeChange}
                startAdornment={
                  <InputAdornment position="start">+</InputAdornment>
                }
                className="h-12 rounded-lg"
              >
                {phoneCodes.map((code) => (
                  <MenuItem key={code} value={code}>
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
              onChange={handlePhoneNumberChange}
              InputProps={{
                sx: placeholderStyles,
              }}
            />
          </Stack>
        </Box>
        <Box className="flex flex-col w-full">
          <Typography>E-posta</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="example@gmail.com"
            inputProps={{
              sx: placeholderStyles,
            }}
          />
        </Box>
        <Box className="flex flex-col w-full">
          <Typography className="text-secondary-500">Doğum Tarihi</Typography>
          <DatePicker sx={{ color: "primary" }} />
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
              {countries.map((option) => (
                <MenuItem
                  key={option.value}
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
              onChange={handleCityChange}
            >
              {cities.map((city) => (
                <MenuItem
                  key={city}
                  value={city}
                  className="hover:bg-primary-50"
                >
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainInformation;
