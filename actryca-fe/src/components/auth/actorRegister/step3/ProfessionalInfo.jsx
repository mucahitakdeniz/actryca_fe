import React from 'react'
import ProfilePhotos from './ProfilePhotos'
import { Box } from '@mui/material'
import Experinces from './Experiences'

const ProfessionalInfo = () => {
  return (
    <Box className="padding">
        <ProfilePhotos />
        <Experinces />
    </Box>
  )
}

export default ProfessionalInfo