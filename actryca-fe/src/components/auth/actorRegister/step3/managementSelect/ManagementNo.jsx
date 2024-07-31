import { Box, Typography, Link, Button } from '@mui/material'
import React from 'react'

const ManagementNo = () => {
  return (
    <Box className="flex flex-col justify-center items-start gap-8 ">
      <Typography className="text-primary-900 font-sans text-[16px] font-normal leading-6">
        Kariyerinizde en iyi fırsatları yakalamak için <span className='text-primary-600 font-medium'>Actryca menajer hizmetlerinden</span> yararlanın.
        Menajerlerimiz rehberlik ve temsil hizmetleri sunarak kariyerinizi ileri taşır.
      </Typography>
      <Link href="#" className="text-[16px] italic text-primary-600 underline leading-6">
        Actryca sözleşmesini kabul ediyorum.
      </Link>
      <Box className="w-full text-right">
        <Button variant="outlined" className='rounded-lg border border-primary-900 text-primary-900 font-sans text-[16px] font-bold leading-[18px] px-6 py-4'>
          Actryca Menajeriniz Olsun
        </Button>
      </Box>

    </Box>
  )
}

export default ManagementNo
