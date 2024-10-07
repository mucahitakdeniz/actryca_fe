import React, { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ManagementYes from './managementSelect/ManagementYes';
import ManagementNo from './managementSelect/ManagementNo';

const ManagementInformation = ({ onSave }) => { 
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSaveManager = (data) => {
    onSave(data); 
  };

  return (
    <Box className="flex flex-col items-start gap-4 p-4 w-[519px]">
      <Typography className="text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Menajerlik Bilgileri:
      </Typography>
      <Box className="flex flex-col w-[519px] px-8 py-10 justify-start items-start gap-[26px] border border-primary-100 rounded-2xl">
        <Typography className="mb-4 text-primary-900 font-sans text-[16px] font-medium leading-6">
          Menajeriniz var mı?
        </Typography>
        <RadioGroup row value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel
            value="evet"
            control={<Radio className="text-primary-600" />}
            label="Evet"
          />
          <FormControlLabel
            value="hayir"
            control={<Radio className="text-primary-600" />}
            label="Hayır"
          />
        </RadioGroup>
        {selectedOption === 'evet' && <ManagementYes onSaveManager={handleSaveManager} />}
        {selectedOption === 'hayir' && <ManagementNo onSaveManagerChoice={handleSaveManager} />}
      </Box>
    </Box>
  );
};

export default ManagementInformation;
