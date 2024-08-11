"use client"
import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import AboutMe from "./AboutMe";
import { Edit2 } from 'lucide-react';

const AboutMeMain = () => {
  const [aboutText, setAboutText] = useState("");
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const maxChars = 2500;

  const handleAboutTextChange = (event) => {
    setAboutText(event.target.value);
  };

  const handleAboutMeOpen = () => {
    setIsAboutMeOpen(true);
  };

  const handleAboutMeClose = () => {
    setIsAboutMeOpen(false);
  };

  return (
    <Box className="flex flex-col gap-[10px] self-stretch h-full pt-6">
      <Typography className="mb-2 text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Hakkımda:
      </Typography>
      <Box className="w-full h-full flex flex-col border border-primary-100 rounded-2xl px-8 py-10 relative">
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
            style: { color: "#36383C" },
          }}
          sx={{
            height: "100%",
            width: "100%",
            border: "none",
            color: "primary.darkest",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
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
          }}
        />
        <Typography className="text-right text-red-500">
          {maxChars - aboutText.length}
        </Typography>
        <IconButton
          style={{ position: "absolute", top: 10, right: 10 }}
          className="text-primary-600"
          onClick={handleAboutMeOpen}
        >
          <Edit2 size={20} />
        </IconButton>
      </Box>

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

export default AboutMeMain;
