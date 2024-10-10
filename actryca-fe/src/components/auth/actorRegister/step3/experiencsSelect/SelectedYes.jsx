import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import YesDetails from './YesDetails';
import { formatDate } from '@/utils/utils'; 

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

    const updatedProjects = editIndex >= 0
      ? projects.map((p, i) => (i === editIndex ? newProject : p))
      : [...projects, newProject];

    setProjects(updatedProjects); 

 
    const formattedProjects = updatedProjects.map((project) => ({
      project_type: project.projectType,
      project_name: project.projectName,
      role: project.role,
      producer_company_name: project.company,
      experience_description: project.description,
      experience_start_date: project.startDate ? formatDate(project.startDate) : null,
      experience_end_date: project.endDate ? formatDate(project.endDate) : null,
    }));

    
    onSaveProjects(formattedProjects); 

   
    setProjectType('');
    setProjectName('');
    setRole('');
    setCompany('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
    setEditIndex(-1);
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
    
 
    onSaveProjects(updatedProjects.map((project) => ({
      project_type: project.projectType,
      project_name: project.projectName,
      role: project.role,
      producer_company_name: project.company,
      experience_description: project.description,
      experience_start_date: project.startDate ? formatDate(project.startDate) : null,
      experience_end_date: project.endDate ? formatDate(project.endDate) : null,
    })));
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
            onChange={(event) => setProjectType(event.target.value)}
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

        <TextField label="Proje Adı" fullWidth value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        <TextField label="Rol" fullWidth value={role} onChange={(e) => setRole(e.target.value)} />
        <TextField label="Yapımcı/Şirket Adı" fullWidth value={company} onChange={(e) => setCompany(e.target.value)} />
        <TextField
          label="Açıklama (Tercihen)"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
