import { Box, Typography } from "@mui/material";
import React from "react";
import EducationSkills from "./education-detail/EducationSkills";
import SpecialAbilities from "./education-detail/SpecialAbilities";
import SpokenLanguage from "./education-detail/SpokenLanguage";

const EducationInfo = () => {
  return (
    <div>
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text">
        Kullanıcı Bilgileri
      </Typography>
      <Typography
        variant="h5"
        className="text-primary-900 font-dm-serif-text my-8"
      >
        Üyelik Bilgileri
      </Typography>

      <Box className="w-full flex flex-1 gap-x-8">
        <Box className="flex flex-col gap-y-8 w-1/2">
          <EducationSkills />
          <SpokenLanguage />
        </Box>
        <Box className="w-1/2">
          <SpecialAbilities />
        </Box>
      </Box>
    </div>
  );
};

export default EducationInfo;
