import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import SelectedNo from './experiencsSelect/SelectedNo';
import SelectedYes from './experiencsSelect/SelectedYes';

const Experiences = ({ onSave }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [experiences, setExperiences] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSaveProjects = (projects) => {
    setExperiences(projects); 
    onSave({ projects }); 
  };

  return (
    <Box className="flex flex-col items-start gap-4 p-4">
      <Typography className="text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Deneyimler:
      </Typography>
      <Box className="flex flex-col w-[519px] px-8 py-10 justify-start items-start gap-[26px] border border-primary-100 rounded-2xl">
        <Typography className="mb-4 text-primary-900 font-sans text-[16px] font-medium leading-6">
          Daha önce bir projede yer aldınız mı?
        </Typography>
        <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel value="evet" control={<Radio />} label="Evet" />
          <FormControlLabel value="hayir" control={<Radio />} label="Hayır" />
        </RadioGroup>
        {selectedOption === 'evet' && <SelectedYes onSaveProjects={handleSaveProjects} />}
        {selectedOption === 'hayir' && <SelectedNo />}
      </Box>
    </Box>
  );
};

export default Experiences;
