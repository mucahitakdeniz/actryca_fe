import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const SpecialSkills = ({ specialSkills }) => {
  return (
    <Box className="flex gap-2 w-full justify-between gap-9">
      {specialSkills.map((skill, index) => (
        <Card key={index} variant="outlined" className="w-full ">
          <CardContent>
            <Typography variant="subtitle1" className="text-primary-600 font-sans font-normal font-medium leading-6 uppercase" gutterBottom sx={{ borderBottom: '1px solid #eee', paddingBottom: '4px', marginBottom: '4px' }}>
              {skill.category}
            </Typography>
            <Box >
              {skill.talent.map((talent, i) => (
                <Typography key={i} variant="body2" className="text-primary-900 font-sans font-normal font-medium leading-[16px] mb-4 mt-4" sx={{ borderBottom: '1px solid #eee', paddingBottom: '4px', marginBottom: '4px' }}>
                  {talent}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SpecialSkills;
