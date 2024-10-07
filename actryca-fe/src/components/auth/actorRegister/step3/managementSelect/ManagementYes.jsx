import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

const ManagementYes = ({ onSaveManager }) => {
  const [managerName, setManagerName] = useState('');
  const [savedManagerName, setSavedManagerName] = useState(null);

  const handleManagerNameChange = (event) => {
    setManagerName(event.target.value);
  };

  const handleSaveManager = () => {
    if (managerName.trim()) {
      setSavedManagerName(managerName); 
      onSaveManager({ manager_name: managerName });
      setManagerName(''); 
    } else {
      alert("Menajer/Ajans adı boş olamaz.");
    }
  };

  return (
    <Box className="flex flex-col justify-center items-start gap-1 self-stretch">
      <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6">
        Menajer/Ajans adı:
      </Typography>
      <TextField
        variant="outlined"
        className="w-full placeholder:text-primary-50"
        placeholder="İlkay Menajerlik"
        value={managerName}
        onChange={handleManagerNameChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSaveManager}
        className="mt-2"
      >
        Kaydet
      </Button>


      {savedManagerName && (
        <Box className="mt-4">

          <Typography className="text-primary-600 font-sans text-[16px] font-normal leading-6">
            {savedManagerName}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ManagementYes;
