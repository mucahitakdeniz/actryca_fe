import React from 'react';
import { Box } from '@mui/material';
import ProfilePhotos from './ProfilePhotos';
import Experiences from './Experiences';
import PortfolioPhotos from './PortfolioPhotos';
import ManagementInformation from './ManagementInformation';
import useAuthStore from '@/store/auth-store';

const ProfessionalInfo = () => {
  const setProfessionalInfo = useAuthStore((state) => state.setProfessionalInfo);

  const saveProfessionalInfo = (data) => {
    setProfessionalInfo((prevState) => ({
      ...prevState,
      projects: [...(prevState.projects || []), ...(data.projects || [])], 
    }));
  };

  return (
    <Box className="flex flex-row">
      <Box className="padding">
        <ProfilePhotos onSave={saveProfessionalInfo} />
        <Experiences onSave={saveProfessionalInfo} /> 
      </Box>
      <Box>
        <PortfolioPhotos onSave={saveProfessionalInfo} />
        <ManagementInformation onSave={saveProfessionalInfo} />
      </Box>
    </Box>
  );
};

export default ProfessionalInfo;
