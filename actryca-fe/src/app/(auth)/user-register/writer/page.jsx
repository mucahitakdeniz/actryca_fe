"use client"
import React from 'react'
import MainInformation from "../../../../components/auth/writerRegister/MainInformation/MainInformation"
import { Stack, Typography } from '@mui/material'
import AboutMeMain from '../../../../components/auth/writerRegister/aboutMe/AboutMeMain'
import ProfilePicture from '../../../../components/auth/writerRegister/profilePicture/ProfilePicture'
import EducationSkills from '@/components/auth/writerRegister/educationSkills/EducationSkills'
import Experiences from '@/components/auth/writerRegister/experience/Experience'


const page = () => {
    return (
        <Stack className="flex w-full px-[68px] py-20 flex-col justify-center items-center">
            <Stack className='flex flex-col items-start gap-[98px]'>
                <Stack className='flex flex-col justify-between items-center gap-[108px] '>
                    <Stack className="flex flex-col items-center gap-16 ">
                        <Typography className="text-primary-900 text-center font-dm-serif-text text-[32px] leading-normal font-bold">
                            Senarist Kayıt Profili
                        </Typography>
                    </Stack>
                    <Stack className="flex flex-row justify-between flex-start gap-[72px]">
                        <Stack className="flex w-full flex-col items-start gap-6">
                            <MainInformation />
                            <AboutMeMain />
                        </Stack>
                        <Stack className='flex w-full flex-col flex-start gap-6'>
                            <ProfilePicture />
                            <EducationSkills />
                            <Experiences />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default page
