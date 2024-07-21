import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const specialAbilitiesData = {
  'Müzik Aleti': ['Gitar', 'Piyano', 'Flüt', 'Davul', 'Keman'],
  'Dans': ['Bale', 'Hip Hop', 'Salsa', 'Tango'],
  'Spor': ['Futbol', 'Basketbol', 'Dövüş', 'Yüzme'],
  'Sahne Sanatları': ['Şan', 'Tiyatro', 'Sahne', 'Pandomim'],
};

const SpecialAbilities = () => {
  const [selectedAbilities, setSelectedAbilities] = useState([]);

  const handleSelect = (ability) => {
    if (!selectedAbilities.includes(ability)) {
      setSelectedAbilities([...selectedAbilities, ability]);
    }
  };

  const handleDelete = (ability) => {
    setSelectedAbilities(selectedAbilities.filter((item) => item !== ability));
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
            <Box className="flex items-start gap-2  w-full">
              {specialAbilitiesData[category].map((ability) => (
                <Box key={ability} className="flex-grow flex items-center relative">
                  <Button
                    onClick={() => handleSelect(ability)}
                    variant={selectedAbilities.includes(ability) ? 'contained' : 'outlined'}
                    color="primary"
                    className={`w-full rounded-[4px] ${
                      selectedAbilities.includes(ability) ? 'bg-primary-600 text-white' : 'border-primary-50 text-primary-900 text-[14px] font-normal'
                    }`}
                    style={{ minWidth: 'unset', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span className="text-[14px] font-normal" style={{  }}>{ability}</span>
                    {selectedAbilities.includes(ability) && (
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(ability);
                        }}
                        className="p-0 text-white"
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <CloseIcon fontSize="inherit" style={{ fontSize: '1rem' }} />
                      </IconButton>
                    )}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpecialAbilities;
