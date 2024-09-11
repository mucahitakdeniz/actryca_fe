import React from 'react';
import { Box, Typography } from '@mui/material';


const groupByProjectType = (experiences) => {
  return experiences.reduce((acc, experience) => {
    const { projectType } = experience;
    if (!acc[projectType]) {
      acc[projectType] = [];
    }
    acc[projectType].push(experience);
    return acc;
  }, {});
};

const Experiences = ({ experiences }) => {
  const groupedExperiences = groupByProjectType(experiences);

  return (
    <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(groupedExperiences).map((projectType, index) => (
        <Box
          key={index}
          className="flex flex-col items-start gap-4 border border-primary-50 rounded-2xl p-6"
        >
          <Typography className="text-primary-600 font-sans text-[16px] font-medium leading-6 uppercase">
            {projectType} :
          </Typography>
          <ul className="list-disc ml-4">
            {groupedExperiences[projectType].map((experience, expIndex) => (
              <li key={expIndex} className="mb-2">
                <Typography className="text-primary-900 font-sans text-[16px] font-normal font-medium leading-6 capitalize">
                  {experience.projectName} - {experience.description}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default Experiences;
