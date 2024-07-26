import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import SelectedNo from "./experiencsSelect/SelectedNo";

const Experiences = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box className="flex flex-col items-start gap-4 p-4">
      <Typography className="mb-4 text-primary-900 font-serif text-[18px] font-normal leading-6">
        Deneyimler:
      </Typography>
      {selectedOption !== 'hayir' ? (
        <Box className="flex flex-col w-[519px] px-8 py-10 justify-start items-start gap-[26px] border border-primary-100 rounded-2xl">
          <Box className="flex flex-col justify-center items-start gap-4">
            <Typography className="mb-4 text-primary-900 font-sans text-[16px] font-medium leading-6">
              Daha önce bir projede yer aldınız mı?
            </Typography>
            <RadioGroup
              row
              className="flex space-x-4"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <FormControlLabel
                value="evet"
                control={<Radio className="text-primary-600" />}
                label={<Typography className="text-primary-900 font-sans text-[14px] font-medium leading-normal">Evet</Typography>}
              />
              <FormControlLabel
                value="hayir"
                control={<Radio className="text-primary-600" />}
                label={<Typography className="text-primary-900 font-sans text-[14px] font-medium leading-normal">Hayır</Typography>}
              />
            </RadioGroup>
          </Box>
        </Box>
      ) : (
        <SelectedNo />
      )}
    </Box>
  );
};

export default Experiences;
