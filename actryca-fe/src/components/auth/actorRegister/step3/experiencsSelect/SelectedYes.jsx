import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, FormHelperText } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import YesDetails from './YesDetails';

const projectTypes = [
  { value: 'dizi', label: 'Dizi' },
  { value: 'film', label: 'Film' },
  { value: 'tiyatro', label: 'Tiyatro' },
  { value: 'reklam', label: 'Reklam' },
  { value: 'kisaFilm', label: 'Kısa Film' },
  { value: 'seslendirme', label: 'Seslendirme' }
];

const SelectedYes = ({ onSaveProjects }) => {
  const [projectType, setProjectType] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [projects, setProjects] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleProjectTypeChange = (event) => {
    setProjectType(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveProject = () => {
    const newProject = {
      projectType,
      projectName,
      role,
      company,
      description,
      startDate,
      endDate,
    };
    if (editIndex >= 0) {
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = newProject;
      setProjects(updatedProjects);
      setEditIndex(-1);
    } else {
      setProjects([...projects, newProject]);
    }

    onSaveProjects([...projects, newProject]);

    setProjectType('');
    setProjectName('');
    setRole('');
    setCompany('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
  };

  const handleEdit = (index) => {
    const project = projects[index];
    setProjectType(project.projectType);
    setProjectName(project.projectName);
    setRole(project.role);
    setCompany(project.company);
    setDescription(project.description);
    setStartDate(project.startDate);
    setEndDate(project.endDate);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    onSaveProjects(updatedProjects); 
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="flex flex-col justify-center items-start gap-4 self-stretch">
        {projects.length > 0 && (
          <YesDetails
            projects={projects}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        <FormControl fullWidth>
          <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6">
            Proje Türü:
          </Typography>
          <Select
            value={projectType}
            onChange={handleProjectTypeChange}
            displayEmpty
            renderValue={(selected) => (selected ? selected : "Proje Türü Seçiniz")}
            className="w-full rounded-lg"
          >
            {projectTypes.map((type, index) => (
              <MenuItem key={index} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Proje Adı"
          fullWidth
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <TextField
          label="Rol"
          fullWidth
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <TextField
          label="Yapımcı/Şirket Adı"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <TextField
          label="Açıklama (Tercihen)"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          helperText={`${description.length}/150`}
          inputProps={{ maxLength: 150 }}
        />

        <Box className="flex gap-4 w-full">
          <DatePicker
            label="Başlangıç Tarihi"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="Bitiş Tarihi"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>

        <Box className="flex justify-between w-full mt-4">
          <Button variant="outlined" onClick={() => setEditIndex(-1)}>Vazgeç</Button>
          <Button variant="contained" onClick={handleSaveProject}>Kaydet</Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default SelectedYes;
