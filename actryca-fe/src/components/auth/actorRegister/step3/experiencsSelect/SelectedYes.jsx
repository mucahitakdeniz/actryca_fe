import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import YesDetails from './YesDetails'; 

const placeholderStyles = {
  color: "#E3DAF3",
  fontSize: "16px",
  fontWeight: "normal",
  lineHeight: "24px",
};

const projectTypes = [
  { value: 'series', label: 'Dizi' },
  { value: 'film_movie', label: 'Film' },
  { value: 'theater', label: 'Tiyatro' },
  { value: 'advertising', label: 'Reklam' },
  { value: 'short_film', label: 'Kısa Film' },
  { value: 'voiceover', label: 'Seslendirme' }
];

const SelectedYes = () => {
  const [projectType, setProjectType] = useState('');
  const [projectName, setProjectName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [projects, setProjects] = useState([]);
  const maxChars = 150;

  const handleSaveProject = () => {
    const newProject = {
      project_type: projectType,
      project_name: projectName,
      role,
      producer_company_name: company,
      experience_description: description,
      experience_start_date: startDate,
      experience_end_date: endDate,
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
  };

  const handleEditProject = (index) => {
    const projectToEdit = projects[index];
    setProjectType(projectToEdit.project_type);
    setProjectName(projectToEdit.project_name);
    setRole(projectToEdit.role);
    setCompany(projectToEdit.producer_company_name);
    setDescription(projectToEdit.experience_description);
    setStartDate(projectToEdit.experience_start_date);
    setEndDate(projectToEdit.experience_end_date);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleAddNew = () => {
    setProjectType('');
    setProjectName('');
    setRole('');
    setCompany('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="flex flex-col gap-4 w-full">
        <FormControl fullWidth>
          <Typography>Proje Türü:</Typography>
          <Select
            value={projectType}
            className="w-1/2"
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
        <Box className="relative">
          <TextField
            label="Açıklama (Tercihen)"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="Açıklama yaz..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputProps={{
              maxLength: maxChars,
              style: { ...placeholderStyles, color: "#36383C" },
            }}
            sx={{
              height: "100%",
              width: "100%",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #E3DAF3",
                borderRadius: "8px",
              },
            }}
          />
          <Typography
            variant="caption"
            color={description.length >= maxChars ? "error" : "textSecondary"}
            className="absolute right-2 bottom-2"
          >
            {maxChars - description.length}
          </Typography>
        </Box>
        <Box className="flex gap-4">
          <DatePicker
            label="Başlangıç Tarihi"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <DatePicker
            label="Bitiş Tarihi"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Box>
        <Box className="flex justify-between gap-4">
          <Button variant="outlined" onClick={handleAddNew}>
            Vazgeç
          </Button>
          <Button variant="contained" color="primary" onClick={handleSaveProject}>
            Kaydet
          </Button>
        </Box>

        <YesDetails projects={projects} onEdit={handleEditProject} onDelete={handleDeleteProject} onAddNew={handleAddNew} />
      </Box>
    </LocalizationProvider>
  );
};

export default SelectedYes;
