import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl } from '@mui/material';
import { Check } from 'lucide-react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import YesDetails from "./YesDetails";

const projectTypes = [
  { value: 'dizi', label: 'Dizi' },
  { value: 'film', label: 'Film' },
  { value: 'tiyatro', label: 'Tiyatro' },
  { value: 'reklam', label: 'Reklam' },
  { value: 'kisaFilm', label: 'Kısa Film' },
  { value: 'seslendirme', label: 'Seslendirme' }
];

const CustomCheckbox = styled(Check)(({ theme }) => ({
  '&.MuiSvgIcon-root': {
    fontSize: 20,
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const SelectedYes = () => {
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
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleAddNew = () => {
    setEditIndex(-1);
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
      <Box className="flex flex-col justify-center items-start gap-4 px-8 py-10 w-[519px] border border-primary-50 rounded-2xl">
        
        {projects.length > 0 && (
          <YesDetails 
            projects={projects} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
            onAddNew={handleAddNew}
            className="mb-4" 
          />
        )}

        <FormControl fullWidth>
          <Box className="flex flex-col justify-center items-start gap-1 w-1/2">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Proje Türü:</Typography>
            <Select
              value={projectType}
              onChange={handleProjectTypeChange}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return 'Proje Türü Seçiniz';
                }
                return projectTypes.find(type => type.value === selected)?.label;
              }}
              className="w-full rounded-lg"
            >
              {projectTypes.map((type) => (
                <MenuItem key={type.value} value={type.value} className='hover:bg-primary-50 active:bg-primary-50'>
                  <CustomCheckbox className="bg-pri" style={{ visibility: projectType === type.value ? 'visible' : 'hidden' }} />
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </FormControl>

        <Box className="w-full">
          <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Proje Adı:</Typography>
          <TextField
            label="Proje Adı"
            fullWidth
            margin="normal"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </Box>

        <Box className="w-full">
          <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Rol:</Typography>
          <TextField
            label="Rol"
            fullWidth
            margin="normal"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </Box>

        <Box className="w-full">
          <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Yapımcı/Şirket Adı:</Typography>
          <TextField
            label="Yapımcı/Şirket Adı"
            fullWidth
            margin="normal"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Box>

        <Box className="w-full">
          <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Açıklama (Tercihen):</Typography>
          <TextField
            label="Açıklama (Tercihen)"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            helperText={`${description.length}/150`}
            inputProps={{ maxLength: 150 }}
          />
        </Box>

        <Box className="flex gap-4 w-full">
          <Box className="w-full">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Başlangıç Tarihi:</Typography>
            <DatePicker
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </Box>
          <Box className="w-full">
            <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6 m5-[24px]">Bitiş Tarihi:</Typography>
            <DatePicker
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
            />
          </Box>
        </Box>

        <Box className="flex justify-between w-full mt-4">
          <Button variant="outlined" className="text-primary-600" onClick={handleAddNew}>Vazgeç</Button>
          <Button variant="contained" color="primary" onClick={handleSaveProject}>Kaydet</Button>
        </Box>

      </Box>
    </LocalizationProvider>
  );
};

export default SelectedYes;
