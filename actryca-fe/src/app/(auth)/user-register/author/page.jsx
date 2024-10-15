"use client"
import React from 'react';
import { Stack, Typography } from '@mui/material';
import AboutMeMain from '../../../../components/auth/writerRegister/aboutMe/AboutMeMain';
import ProfilePicture from '../../../../components/auth/writerRegister/profilePicture/ProfilePicture';
import EducationSkills from '@/components/auth/writerRegister/educationSkills/EducationSkills';
import Experiences from '@/components/auth/writerRegister/experience/Experience';
import MainInformation from '@/components/auth/writerRegister/mainInformation/MainInformation';

const Page = () => {
    return (
        <Stack 
            className="flex w-full px-[68px] py-20 flex-col justify-center items-center"
            sx={{ minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}
        >
            <Stack 
                className='flex flex-col items-start gap-[98px]' 
                sx={{ width: '100%' }}
            >
                <Stack 
                    className='flex flex-col justify-between items-center gap-[108px] ' 
                    sx={{ flexGrow: 0, flexShrink: 0 }}
                >
                    <Stack className="flex flex-col items-center gap-9">
                        <Typography 
                            className="text-primary-900 text-center font-dm-serif-text text-[32px] leading-normal font-bold"
                        >
                            Senarist Kayıt Profili
                        </Typography>
                    </Stack>
                    <Stack 
                        className="flex flex-row items-start gap-9"
                    >
                        <Stack className="w-1/2">
                            <MainInformation />
                            <AboutMeMain />
                        </Stack>
                        <Stack className="w-1/2">
                            <ProfilePicture />
                            <EducationSkills />
                            <Experiences />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Page;
