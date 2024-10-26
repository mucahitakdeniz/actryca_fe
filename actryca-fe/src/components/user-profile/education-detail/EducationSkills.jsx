import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormHelperText, Paper } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import useAuthStore from '@/store/auth-store'; 

const EducationSkills = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [description, setDescription] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [educationDetails, setEducationDetails] = useState([]);
  const [currentEducation, setCurrentEducation] = useState(null);

  const setEducationSkills = useAuthStore((state) => state.setEducationSkills);
  const currentSkills = useAuthStore((state) => state.educationSkills); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setCharCount(description.length);
  }, [description]);

  
  const handleSave = () => {
    const newEducation = {
      education_name: name,
      education_institution_name: institution,
      education_description: description,
      education_start_date: startDate ? startDate.toISOString().split('T')[0] : null, 
      education_end_date: endDate ? endDate.toISOString().split('T')[0] : null,
    };
  
    let updatedEducationDetails = [];
    
    if (currentEducation !== null) {
  
      updatedEducationDetails = educationDetails.map((edu, index) =>
        index === currentEducation ? newEducation : edu
      );
      setCurrentEducation(null);
    } else {

      updatedEducationDetails = [...educationDetails, newEducation];
    }
  
    setEducationDetails(updatedEducationDetails);

    setEducationSkills({
      ...currentSkills, 
      educations: updatedEducationDetails, 
    });
  
    setName('');
    setInstitution('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
    setSelectedOption('saved');
  };
  

  const handleAddNew = () => {
    setName('');
    setInstitution('');
    setDescription('');
    setStartDate(null);
    setEndDate(null);
    setCurrentEducation(null);
    setSelectedOption('evet');
  };

  const handleEdit = (index) => {
    const education = educationDetails[index];
    setName(education.education_name);
    setInstitution(education.education_institution_name);
    setDescription(education.education_description);
    setStartDate(new Date(education.education_start_date));
    setEndDate(new Date(education.education_end_date));
    setCurrentEducation(index);
    setSelectedOption('evet');
  };

  const handleDelete = (index) => {
    const updatedEducationDetails = educationDetails.filter((_, i) => i !== index);
    setEducationDetails(updatedEducationDetails);
    setEducationSkills({
      ...currentSkills, 
      educations: updatedEducationDetails,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper elevation={3}>
        <Typography className="mb-2 text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">Eğitim Bilgileri:</Typography>
        <Box className="flex flex-col justify-end items-left gap-[26px] padding py-10 rounded-lg" id="education-skills">
          {selectedOption === null || selectedOption === 'hayir' ? (
            <Box className="flex flex-col justify-center items-start gap-8">
              <Typography className="text-primary-900 font-sans text-[16px] font-medium leading-6">
                Oyunculukla ilgili bir eğitim aldınız mı?
              </Typography>
              <RadioGroup row value={selectedOption} onChange={handleOptionChange} className="gap-3 w-full">
                <FormControlLabel
                  value="evet"
                  control={<Radio />}
                  label="Evet"
                  className={`border ${selectedOption === 'evet' ? 'border-primary-50' : 'border-gray-300'} rounded-[8px] px-3`}
                />
                <FormControlLabel
                  value="hayir"
                  control={<Radio />}
                  label="Hayır"
                  className={`border ${selectedOption === 'hayir' ? 'border-primary-100' : 'border-gray-300'} rounded-md px-3`}
                />
              </RadioGroup>
              {selectedOption === 'hayir' && (
                <Box id="no">
                  <Typography className="text-primary-600 font-sans text-[16px] font-medium leading-6">Eğitiminiz yoksa endişelenmeyin!</Typography>
                  <Typography className="text-primary-900 font-sans text-[16px] font-400 leading-6">
                    Oyunculuk kariyerinize başlamak için birçok farklı yol vardır. Formu doldurmaya devam ederek ilk adımı atın ve yeteneklerinizi keşfedin.
                  </Typography>
                </Box>
              )}
            </Box>
          ) : selectedOption === 'evet' || selectedOption === 'saved' ? (
            <Box className="flex flex-col justify-center items-center gap-4">
              {educationDetails.map((edu, index) => (
                <Box key={index} className="flex flex-col justify-center items-start w-full gap-3 px-8 py-10 border border-primary-100 rounded-lg bg-gray-50">
                  <Typography className="text-primary-900 font-sans text-[16px] font-bold leading-6">{edu.education_name}</Typography>
                  <Typography className="text-primary-900 font-sans text-[14px] font-medium leading-6">{edu.education_institution_name}</Typography>
                  <Typography className="text-primary-900 font-sans text-[14px] italic font-normal leading-6">
                    {`${edu.education_start_date ? new Date(edu.education_start_date).toLocaleDateString() : 'Başlangıç Tarihi'} - ${edu.education_end_date ? new Date(edu.education_end_date).toLocaleDateString() : 'Bitiş Tarihi'}`}
                  </Typography>
                  <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">{edu.education_description}</Typography>
                  <Box className="flex justify-end w-full">
                    <Button color="primary" onClick={() => handleEdit(index)}>
                      <Typography className="underline italic text-primary-900">Düzenle</Typography>
                    </Button>
                  </Box>
                  <Box className="flex justify-between w-full">
                    <Button variant="outlined" onClick={() => handleDelete(index)} className="px-3 py-[10px]">
                      Sil
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleAddNew} className="px-3 py-[10px]">
                      Ekle
                    </Button>
                  </Box>
                </Box>
              ))}

              <Box className="w-full">
                <Typography className="text-primary-900 text-sans text-[14px] font-medium leading-6">Eğitim Adı</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Oyunculuk Eğitimi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box className="w-full">
                <Typography>Kurum Adı</Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="İstanbul Üniversitesi"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                />
              </Box>
              <Box className="w-full">
                <Typography>Açıklama</Typography>
                <TextField
                  variant="outlined"
                  className="h-[65px]"
                  fullWidth
                  inputProps={{ maxLength: 150 }}
                  placeholder="Stanislavski yöntemi, doğaçlama, karakter analizi ve sahne çalışmaları ile profesyonel oyunculuk için kapsamlı eğitim aldım."
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  helperText={
                    <FormHelperText className="text-red-500" style={{ textAlign: 'right' }}>
                      {150 - charCount} karakter kaldı
                    </FormHelperText>
                  }
                />
              </Box>

              <Box className="flex gap-4 w-full pt-8">
                <Box className="w-full">
                  <Typography>Başlangıç Tarihi</Typography>
                  <DatePicker value={startDate} onChange={(newValue) => setStartDate(newValue)} renderInput={(params) => <TextField {...params} />} />
                </Box>
                <Box className="w-full">
                  <Typography>Bitiş Tarihi</Typography>
                  <DatePicker value={endDate} onChange={(newValue) => setEndDate(newValue)} renderInput={(params) => <TextField {...params} />} />
                </Box>
              </Box>

              <Box className="flex justify-between w-full">
                <Button variant="outlined" color="primary" onClick={() => setSelectedOption(null)}>
                  Vazgeç
                </Button>
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Kaydet
                </Button>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default EducationSkills;
