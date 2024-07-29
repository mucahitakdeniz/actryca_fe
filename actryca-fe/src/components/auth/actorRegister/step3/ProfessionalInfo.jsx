import React from 'react'
import ProfilePhotos from './ProfilePhotos'
import { Box } from '@mui/material'
import Experinces from './Experiences'
import PortfolioPhotos from './PortfolioPhotos'
import ManagementInformation from './ManagementInformation'

const ProfessionalInfo = () => {
  return (
    <Box className="flex flex-row">
      <Box className="padding">
        <ProfilePhotos />
        <Experinces />
      </Box>
      <Box>
        <PortfolioPhotos />
        <ManagementInformation />
      </Box>
    </Box>

  )
}

export default ProfessionalInfo