import { Box, Typography } from '@mui/material';
import React from 'react';

const Education = ({ education }) => {
    return (
        <Box className="flex flex-wrap items-start gap-[26px] w-full">
            {education.map((edu, index) => (
                <Box
                    key={index}
                    className="flex flex-col items-start gap-4 px-6 py-6 w-full sm:w-[calc(50%-26px)] lg:w-[calc(33%-26px)] border border-primary-50 rounded-2xl"
                >
                    <Typography className="text-primary-900 font-sans text-[16px] font-medium leading-6">
                        {edu.name.toLocaleUpperCase('tr-TR')}
                    </Typography>
                    <Typography className="text-primary-600 font-sans text-[16px] font-medium leading-[22px] capitalize">
                        {edu.institution}
                    </Typography>
                    <Box className="flex flex-col gap-2">
                        <Typography className="text-primary-900 font-sans text-[16px]  font-normal leading-[22px] capitalize">
                            {`${edu.startDate ? new Date(edu.startDate).toLocaleDateString() : 'Başlangıç Tarihi'} - ${edu.endDate ? new Date(edu.endDate).toLocaleDateString() : 'Bitiş Tarihi'}`}
                        </Typography>
                        <Typography className="text-primary-900 opacity-65 font-sans text-[16px] font-normal leading-6">
                            {edu.description}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Education;
