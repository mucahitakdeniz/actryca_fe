import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const specialAbilitiesData = {
  'Müzik Aleti': ['Gitar', 'Piyano', 'Flüt', 'Davul', 'Keman'],
  'Dans': ['Bale', 'Hip Hop', 'Salsa', 'Tango'],
  'Spor': ['Futbol', 'Basketbol', 'Dövüş', 'Yüzme'],
  'Sahne Sanatları': ['Şan', 'Tiyatro', 'Sahne', 'Pandomim'],
};

const SpecialAbilities = () => {
  const [selectedAbilities, setSelectedAbilities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedOption(''); // Her kategori değiştiğinde seçimi sıfırla
  };

  const handleSelectOption = (event) => {
    const ability = event.target.value;
    if (ability && !selectedAbilities[selectedCategory]?.includes(ability)) {
      setSelectedAbilities((prev) => ({
        ...prev,
        [selectedCategory]: [...(prev[selectedCategory] || []), ability],
      }));
    }
    setSelectedOption(ability);
  };

  const handleDelete = (category, ability) => {
    setSelectedAbilities((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== ability),
    }));
  };

  return (
    <Box>
      <Typography className="mb-2 text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Özel Yetenekler: <span className="text-primary-900 text-[14px] italic leading-[130%] font-normal">(zorunlu değil)</span>
      </Typography>
      <Box className="flex flex-col px-8 py-10 border border-primary-100 rounded-2xl gap-9">
        {Object.keys(specialAbilitiesData).map((category) => (
          <Box key={category} className="flex flex-col items-start gap-3 w-full">
            <Typography className="text-primary-900 font-sans text-[16px] font-medium leading-6">
              {category}
            </Typography>
            <Box className="w-full">
              <FormControl fullWidth>
                <InputLabel>{category} Seçiniz</InputLabel>
                <Select
                  value={selectedCategory === category ? selectedOption : ''}
                  onChange={handleSelectOption}
                  onOpen={() => setSelectedCategory(category)}
                  label={`${category} Seçiniz`}
                  className="rounded-xl"
                >
                  {specialAbilitiesData[category].map((ability) => (
                    <MenuItem key={ability} value={ability}>
                      {ability}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className="flex flex-wrap gap-2">
              {selectedAbilities[category]?.map((ability) => (
                <Button
                  key={ability}
                  variant="contained"
                  endIcon={<CloseIcon />}
                  onClick={() => handleDelete(category, ability)}
                  className="rounded-[4px] bg-primary-100 text-primary-900 text-[14px] font-normal hover:bg-primary-100"
                  style={{ textTransform: 'none' }}
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
