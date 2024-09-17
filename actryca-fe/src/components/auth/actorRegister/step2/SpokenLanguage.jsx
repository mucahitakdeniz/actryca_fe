import React, { useState } from 'react';
import {
  TextField,
  Chip,
  Autocomplete,
  Typography,
  Box,
  InputAdornment,
  MenuItem,
  Select,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import languages from '../languages';

const proficiencyLevels = ['Başlangıç', 'Orta', 'İleri', 'Akıcı'];

const SpokenLanguage = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([{ label: 'Türkçe', level: 'İleri' }]);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(proficiencyLevels[0]);

  const handleDelete = (languageToDelete) => {
    setSelectedLanguages((languages) => languages.filter((lang) => lang.label !== languageToDelete.label));
  };

  const handleLanguageSelect = (event, newValue) => {
    if (newValue) {
      setCurrentLanguage(newValue);
    }
  };

  const handleLevelChange = (event) => {
    setCurrentLevel(event.target.value);
  };

  const addLanguage = () => {
    if (currentLanguage) {
      setSelectedLanguages((prev) => [...prev, { label: currentLanguage.label, level: currentLevel }]);
      setCurrentLanguage(null);
      setCurrentLevel(proficiencyLevels[0]);
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
              label={`${language.label} (${language.level})`}
              onDelete={() => handleDelete(language)}
              variant="outlined"
              className="rounded-[4px] bg-primary-100 text-primary-900 text-[14px] font-normal"
            />
          ))}
        </Box>
        <Box className="flex flex-row gap-4 items-center">
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
          <Select
            value={currentLevel}
            onChange={handleLevelChange}
            variant="outlined"
            className="bg-white border border-primary-100 rounded "
            sx={{ minWidth: 120 }}
          >
            {proficiencyLevels.map((level, index) => (
              <MenuItem
                className="hover:bg-primary-50"
                key={index}
                value={level}
              >
                {level}
              </MenuItem>
            ))}
          </Select>
          <Button
            onClick={addLanguage}
            className="py-2 px-4 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Ekle
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SpokenLanguage;
