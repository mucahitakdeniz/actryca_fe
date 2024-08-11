import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const YesDetails = ({ projects, onEdit, onDelete, onAddNew }) => {
  return (
    <Box className="w-full">
      {projects.map((project, index) => (
        <Box key={index} className="flex flex-col justify-center items-start w-full gap-3 px-8 py-10 border border-primary-100 rounded-lg bg-gray-50 mb-4">
          <Typography className="text-primary-900 font-sans text-[16px] font-bold leading-6 capitalize">{project.projectName}</Typography>
          <Typography className="text-primary-900 font-sans text-[16px] font-medium leading-6 capitalize">{project.projectType}</Typography>
          <Typography className="text-primary-900 font-sans text-[14px] italic font-normal leading-6">
            {`${project.startDate ? new Date(project.startDate).toLocaleDateString() : 'Başlangıç Tarihi'} - ${project.endDate ? new Date(project.endDate).toLocaleDateString() : 'Bitiş Tarihi'}`}
          </Typography>
          <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">{project.description}</Typography>
          <Box className="flex justify-end w-full mt-4">
            <Button
              className="text-primary-600 text-right font-sans text-[16px] font-normal leading-normal underline"
              onClick={() => onEdit(index)}
            >
              Düzenle
            </Button>
          </Box>
        </Box>
      ))}
      <Box className="flex justify-between w-full mt-4">
        {projects.map((_, index) => (
          <Button key={index} variant="outlined" color="primary" onClick={() => onDelete(index)}>
            Sil
          </Button>
        ))}
        <Button variant="contained" color="primary" onClick={onAddNew}>
          Ekle
        </Button>
      </Box>
    </Box>
  );
};

export default YesDetails;
