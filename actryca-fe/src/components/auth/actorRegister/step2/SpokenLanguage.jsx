import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Select, MenuItem, Chip, Autocomplete, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import languages from '../languages';
import useAuthStore from '@/store/auth-store';

const proficiencyLevels = [
  { value: 'beginner', label: 'Başlangıç' },
  { value: 'intermediate', label: 'Orta' },
  { value: 'advanced', label: 'İleri' },
  { value: 'native', label: 'Ana Dil' }
];

const SpokenLanguage = () => {

  const [selectedLanguages, setSelectedLanguages] = useState([{ label: 'Türkçe', value: 'Turkish', level: 'native' }]);
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
        { label: currentLanguage.label, value: currentLanguage.value, level: currentLevel }
      ];
      setSelectedLanguages(updatedLanguages);


      setLanguages({
        ...currentSkills,
        languages: updatedLanguages.map((lang) => ({
          language: lang.value,
          proficiency: lang.level
        }))
      });

      setCurrentLanguage(null);
      setCurrentLevel(proficiencyLevels[0].value);
    }
  };

  return (
    <Box className="w-full">
      <Typography className="mb-2 text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Konuşulan Diller:
      </Typography>
      <Box className="flex flex-col items-left gap-6 padding py-10 px-8 border border-primary-100 rounded-lg">
        <Box className="flex flex-wrap items-center gap-2">
          {selectedLanguages.map((language, index) => (
            <Chip
              key={index}
              label={`${language.label} (${proficiencyLevels.find((level) => level.value === language.level)?.label})`}
              onDelete={() => handleDelete(language)}
              variant="outlined"
              className="rounded-[4px] bg-primary-100 text-primary-900 text-[14px] font-normal"
            />
          ))}
        </Box>
        <Box className="flex flex-row gap-4 items-center">
          <Box className="flex flex-col gap-2">
            <Typography>
              Konuşulan Diller
            </Typography>
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
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon className="text-primary-600" />
                      </InputAdornment>
                    ),
                  }}
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
            <Typography>
              Seviye
            </Typography>
            <Select
              value={currentLevel}
              onChange={handleLevelChange}
              variant="outlined"
              className="bg-white border border-primary-100 rounded"
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

          <Button
            onClick={addLanguage}
            className="mt-6 py-2 px-4 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Ekle
          </Button>


        </Box>
      </Box>
    </Box>
  );
};

export default SpokenLanguage;
