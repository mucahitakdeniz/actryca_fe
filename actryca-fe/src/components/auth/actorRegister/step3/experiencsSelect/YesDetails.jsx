import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const getProjectTypeLabel = (projectType) => {
  const projectTypes = [
    { value: 'series', label: 'Dizi' },
    { value: 'film_movie', label: 'Film' },
    { value: 'theater', label: 'Tiyatro' },
    { value: 'advertising', label: 'Reklam' },
    { value: 'short_film', label: 'Kısa Film' },
    { value: 'voiceover', label: 'Seslendirme' }
  ];

  const foundType = projectTypes.find((type) => type.value === projectType);
  return foundType ? foundType.label : projectType; 
};

const YesDetails = ({ projects, onEdit, onDelete, onAddNew }) => {
  return (
    <Box className="w-full">
      {projects.map((project, index) => (
        <Box
          key={index}
          className="flex flex-col justify-center items-start w-full gap-3 px-8 py-10 border border-primary-100 rounded-lg bg-gray-50 mb-4"
        >
          <Typography className="text-primary-900 font-sans text-[16px] font-bold leading-6 capitalize">
            {project.project_name}
          </Typography>
          <Typography className="text-primary-900 font-sans text-[16px] font-medium leading-6 capitalize">
          {getProjectTypeLabel(project.project_type)}
          </Typography>
          <Typography className="text-primary-900 font-sans text-[14px] italic font-normal leading-6">
            {`${project.experience_start_date ? new Date(project.experience_start_date).toLocaleDateString() : 'Başlangıç Tarihi'} - ${project.experience_end_date ? new Date(project.experience_end_date).toLocaleDateString() : 'Bitiş Tarihi'
              }`}
          </Typography>
          <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">
            {project.experience_description}
          </Typography>
          <Box className="flex justify-between w-full mt-4">
          <Button
              variant="outlined"
              onClick={() => onDelete(index)}
            >
              Sil
            </Button>
            <Button
              className="text-primary-600 font-sans text-[16px] font-normal leading-normal underline"
              onClick={() => onEdit(index)}
            >
              Düzenle
            </Button>
           
          </Box>
        </Box>
      ))}
      <Box className="flex justify-between w-full mt-4">
        <Button variant="contained" color="primary" onClick={onAddNew}>
          Ekle
        </Button>
      </Box>
    </Box>
  );
};

export default YesDetails;
