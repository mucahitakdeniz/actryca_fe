"use client";
import React, { useState } from "react";
import {
  Box,
  MenuItem,
  TextField,
  Typography,
  ListSubheader,
} from "@mui/material";
import { eyeColors, hairColors, genders } from "../actorspecial";

const placeholderStyles = {
  color: "#E3DAF3",
  fontSize: "16px",
  fontWeight: "normal",
  lineHeight: "24px",
};

const underlineText = (text) => {
  const spanStyle = {
    position: "relative",
    display: "inline-block",
    marginRight: "2px",
  };
  const afterStyle = {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "-2px",
    borderBottom: "1px solid black",
  };

  return text.split("").map((char, index) => (
    <span key={index} style={spanStyle}>
      {char !== "." && char !== " " ? char : char}
      {char !== "." && char !== " " && <span style={afterStyle}></span>}
    </span>
  ));
};

const Fiziksel = () => {
  const [aboutText, setAboutText] = useState("");
  const [height, setHeight] = useState("1.74");
  const [weight, setWeight] = useState("70");
  const maxChars = 250;

  const handleAboutTextChange = (event) => {
    setAboutText(event.target.value);
  };

  const heights = ["1.72", "1.73", "1.74", "1.75", "1.76"];
  const weights = ["70", "71", "72", "73", "74"];

  return (
    <Box component="form" className="w-full flex flex-col items-start">
      <Typography variant="h6" className="font-dm-serif-display font-bold">
        Fiziksel Özellikler:
      </Typography>
      <Box className="w-full flex flex-col items-center self-stretch border border-primary-100 rounded-2xl px-8 py-10">
        <Box className="flex flex-col items-start gap-6 self-stretch">
          <Box className="flex flex-row items-center gap-2 w-full">
            <Typography className="text-primary-900 font-sans text-[14px] font-[500px] leading-normal w-1/4">
              Cinsiyet:
            </Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              defaultValue="Kadın"
              InputProps={{
                sx: { "::placeholder": placeholderStyles },
              }}
            >
              {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box className="flex flex-row justify-between items-center gap-2 w-full">
            <Box className="flex flex-row items-center gap-2 w-1/2">
              <Typography className="text-primary-900 font-sans text-[14px] font-[500px] text-center leading-normal w-1/2">
                Boy:
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                InputProps={{
                  sx: { "::placeholder": placeholderStyles },
                  renderValue: (value) => <span>{underlineText(value)} cm</span>,
                }}
              >
                <ListSubheader>Bazı Yükseklikler</ListSubheader>
                {heights.map((option) => (
                  <MenuItem key={option} value={option}>
                    <span>{underlineText(option)} cm</span>
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box className="flex flex-row items-center gap-2 w-1/2">
              <Typography className="text-primary-900 font-sans text-[14px] font-[500px] leading-normal w-1/2 text-right">
                Kilo:
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                InputProps={{
                  sx: { "::placeholder": placeholderStyles },
                  renderValue: (value) => <span>{underlineText(value)} kg</span>,
                }}
              >
                <ListSubheader>Bazı Kilolar</ListSubheader>
                {weights.map((option) => (
                  <MenuItem key={option} value={option}>
                    <span>{underlineText(option)} kg</span>
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box className="flex flex-row justify-between items-center gap-2 w-full">
            <Box className="flex flex-row items-center gap-2 w-1/2">
              <Typography className="text-primary-900 font-sans text-[14px] font-[500px] text-center leading-normal w-1/2">
                Saç Rengi:
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                defaultValue="Kahverengi"
                InputProps={{
                  sx: { "::placeholder": placeholderStyles },
                  renderValue: (value) => <span>{underlineText(value)}</span>,
                }}
              >
                {hairColors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box className="flex flex-row items-center gap-2 w-1/2">
              <Typography className="text-primary-900 font-sans text-[14px] font-[500px] leading-normal w-1/2 text-right">
                Göz Rengi:
              </Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                defaultValue="Kahverengi"
                InputProps={{
                  sx: { "::placeholder": placeholderStyles },
                  renderValue: (value) => <span>{underlineText(value)}</span>,
                }}
              >
                {eyeColors.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-col gap-[10px] self-stretch h-full pt-6">
        <Typography className="text-primary-900 font-serif text-[18px] font-normal leading-6">
          Hakkımda:
        </Typography>
        <Box className="w-full h-full flex flex-col border border-primary-100 rounded-2xl px-8 py-10">
          <TextField
            multiline
            rows={8}
            fullWidth
            variant="outlined"
            value={aboutText}
            placeholder="Hakkımda yazabilirsin."
            onChange={handleAboutTextChange}
            inputProps={{
              maxLength: maxChars,
              style: { ...placeholderStyles, border: "none" },
              className: "text-primary-900",
            }}
            sx={{
              height: "100%",
              width: "100%",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
                color: "primary.darkest"
              },
            }}
          />
          <Typography className="text-right text-red-500">
            {maxChars - aboutText.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Fiziksel;
