import React, { useState } from 'react';
import { TextField, Chip, Autocomplete, Typography, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import languages from '../languages';

const SpokenLanguage = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([{ label: 'Türkçe' }]);

  const handleDelete = (languageToDelete) => {
    setSelectedLanguages((languages) => languages.filter((lang) => lang.label !== languageToDelete.label));
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
              label={language.label}
              onDelete={() => handleDelete(language)}
              variant="outlined"
              className="rounded-[4px] bg-primary-600 text-white text-[14px]"
            />
          ))}
        </Box>
        <Autocomplete
          multiple
          options={languages}
          getOptionLabel={(option) => option.label}
          value={selectedLanguages}
          onChange={(event, newValue) => setSelectedLanguages(newValue)}
          renderTags={() => null}
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
              '& .MuiAutocomplete-option:hover': {
                borderRight: '1px solid #E3DAF3',
                borderLeft: '1px solid #E3DAF3',
                backgroundColor: 'var(--Primary-50, #E3DAF3)',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SpokenLanguage;
