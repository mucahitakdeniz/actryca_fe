import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

const Logo = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexShrink: 0, 
        alignItems: 'center', 
        width: '128,625', 
        height: '32px',
        flexDirection: 'col',
        padding: '24px 72px', 
        justifyContent: 'center' ,
        gap: "2px"
      }}
    >
      <Image
        src="/images/logo.svg"
        alt="Your Company"
        height={32}
        width={128}
      />
    </Box>
  )
}

export default Logo
