import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const ManagementYes = () => {
  const [managerName, setManagerName] = useState('');

  const handleManagerNameChange = (event) => {
    setManagerName(event.target.value);
  };

  return (
    <Box className="flex flex-col justify-center items-start gap-1 self-stretch">
      <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6">Menajer/Ajans adı:</Typography>
      <TextField
        variant="outlined"
        className="w-full placeholder:text-primary-50"
        placeholder="İlkay Menajerlik"
        value={managerName}
        onChange={handleManagerNameChange}
      />
    </Box>
  );
}

export default ManagementYes;
