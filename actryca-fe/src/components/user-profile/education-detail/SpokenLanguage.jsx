import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Chip,
  Autocomplete,
  InputAdornment,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useAuthStore from "@/store/auth-store";
import languages from "@/components/auth/actorRegister/languages";

const proficiencyLevels = [
  { value: "beginner", label: "Başlangıç" },
  { value: "intermediate", label: "Orta" },
  { value: "advanced", label: "İleri" },
  { value: "native", label: "Ana Dil" },
];

const SpokenLanguage = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([
    { label: "Türkçe", value: "Turkish", level: "native" },
  ]);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(proficiencyLevels[0].value);

  const setLanguages = useAuthStore((state) => state.setEducationSkills);
  const currentSkills = useAuthStore((state) => state.educationSkills);

  const handleLanguageSelect = (event, newValue) => {
    if (newValue) {
      setCurrentLanguage(newValue);
    }
  };

  const handleLevelChange = (event) => {
    setCurrentLevel(event.target.value);
  };

  const handleDelete = (languageToDelete) => {
    setSelectedLanguages((languages) =>
      languages.filter((lang) => lang.label !== languageToDelete.label)
    );
  };

  const addLanguage = () => {
    if (currentLanguage) {
      const updatedLanguages = [
        ...selectedLanguages,
        {
          label: currentLanguage.label,
          value: currentLanguage.value,
          level: currentLevel,
        },
      ];
      setSelectedLanguages(updatedLanguages);

      setLanguages({
        ...currentSkills,
        languages: updatedLanguages.map((lang) => ({
          language: lang.value,
          proficiency: lang.level,
        })),
      });

      setCurrentLanguage(null);
      setCurrentLevel(proficiencyLevels[0].value);
    }
  };

  return (
    <Paper elevation={3} className="p-8 rounded-lg">
      <Typography
        variant="h6"
        className="text-primary-600 font-dm-sans text-[16px] font-semibold [leading-trim:both] [text-edge:cap] mb-6"
      >
        Konuşulan Diller:
      </Typography>
      <Box className="flex flex-col items-left gap-6">
        <Box className="flex flex-wrap items-center gap-2">
          {selectedLanguages.map((language, index) => (
            <Chip
              key={index}
              label={`${language.label} (${
                proficiencyLevels.find(
                  (level) => level.value === language.level
                )?.label
              })`}
              onDelete={() => handleDelete(language)}
              variant="outlined"
              className="rounded-[4px] bg-primary-100 text-primary-900 text-[14px] font-normal"
            />
          ))}
        </Box>
        <Box className="flex flex-row gap-4 items-center">
          <Box className="flex flex-col gap-2">
            <Typography>Konuşulan Diller</Typography>
            <Autocomplete
              options={languages}
              getOptionLabel={(option) => option.label}
              value={currentLanguage}
              onChange={handleLanguageSelect}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Konuşulan Diller"
                  placeholder="Dil Ekle"
                />
              )}
              ListboxProps={{
                sx: {
                  "& .MuiAutocomplete-option:hover": {
                    borderRight: "1px solid #E3DAF3",
                    borderLeft: "1px solid #E3DAF3",
                    backgroundColor: "var(--Primary-50, #E3DAF3)",
                  },
                },
              }}
            />
          </Box>
          <Box className="flex flex-col gap-2">
            <Typography>Seviye</Typography>
            <Select
              value={currentLevel}
              onChange={handleLevelChange}
              variant="outlined"
              size="small"
              sx={{ minWidth: 120 }}
            >
              {proficiencyLevels.map((level, index) => (
                <MenuItem
                  className="hover:bg-primary-50"
                  key={index}
                  value={level.value}
                >
                  {level.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Button onClick={addLanguage} variant="contained" className="mt-6">
            Ekle
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default SpokenLanguage;
