import React, { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SpecialAbilities = () => {
  const [abilities, setAbilities] = useState({
    'Müzik Aleti': [],
    'Dans': [],
    'Spor': [],
    'Sahne Sanatları': [],
  });

  const [inputValues, setInputValues] = useState({
    'Müzik Aleti': '',
    'Dans': '',
    'Spor': '',
    'Sahne Sanatları': '',
  });

  const handleInputChange = (category) => (event) => {
    const value = event.target.value;

 
    if (/^[a-zA-Z\s]*$/.test(value)) {

      const cleanedValue = value.replace(/\s{2,}/g, ' ');

      setInputValues({
        ...inputValues,
        [category]: cleanedValue,
      });
    }
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleAddAbility = (category) => (event) => {
    if (event.key === 'Enter' && inputValues[category].trim()) {
      const capitalizedValue = capitalizeWords(inputValues[category].trim());

      setAbilities((prev) => ({
        ...prev,
        [category]: [...prev[category], capitalizedValue],
      }));
      setInputValues({
        ...inputValues,
        [category]: '',
      });
    }
  };

  const handleDelete = (category, ability) => {
    setAbilities((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== ability),
    }));
  };

  return (
    <Box>
      <Typography className="mb-2 text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Özel Yetenekler:{" "}
        <span className="text-primary-900 text-[14px] italic leading-[130%] font-normal">
          (zorunlu değil)
        </span>
      </Typography>
      <Box className="flex flex-col px-8 py-[22px] border border-primary-100 rounded-2xl gap-2">
        {Object.keys(abilities).map((category, index) => (
          <Box
            key={index}
            className="flex flex-col items-start  w-full gap-[6px]"
          >
            <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6">
              {category}
            </Typography>
            <TextField
              fullWidth
              value={inputValues[category]}
              onChange={handleInputChange(category)}
              onKeyPress={handleAddAbility(category)}
              placeholder={`${category} yazıp Enter'a basın.`}
              variant="outlined"
              className="rounded-xl"
            />
            <Box className="flex flex-wrap gap-2 mt-2">
              {abilities[category].map((ability, index) => (
                <Button
                  key={index}
                  variant="contained"
                  endIcon={<CloseIcon />}
                  onClick={() => handleDelete(category, ability)}
                  className="rounded-[8px] bg-primary-100 border border-primary-50 text-primary-900 text-[14px] font-medium leading-6 hover:bg-primary-100"
                  style={{ textTransform: "none" }}
                >
                  {ability}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpecialAbilities;
