import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const projectTypes = [
  { value: 'series', label: 'Dizi' },
  { value: 'film_movie', label: 'Film' },
  { value: 'theater', label: 'Tiyatro' },
  { value: 'advertising', label: 'Reklam' },
  { value: 'short_film', label: 'Kısa Film' },
  { value: 'voiceover', label: 'Seslendirme' }
];

const SelectedYes = ({ onSaveProjects }) => {
  const [projectType, setProjectType] = useState('');
  const [projectName, setProjectName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [projects, setProjects] = useState([]);

  const handleSaveProject = () => {
    const newProject = {
      project_type: projectType,
      project_name: projectName,
      role,
      producer_company_name: company,
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    onSaveProjects(updatedProjects);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="flex flex-col gap-4">
        <FormControl fullWidth>
          <Typography>Proje Türü:</Typography>
          <Select
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
          >
            {projectTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Proje Adı" fullWidth value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        <TextField label="Rol" fullWidth value={role} onChange={(e) => setRole(e.target.value)} />
        <TextField label="Yapımcı/Şirket Adı" fullWidth value={company} onChange={(e) => setCompany(e.target.value)} />
        <Button onClick={handleSaveProject}>Kaydet</Button>
      </Box>
    </LocalizationProvider>
  );
};

export default SelectedYes;
