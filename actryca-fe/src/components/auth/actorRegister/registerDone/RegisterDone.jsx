import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import check from '../svg/check.svg';
import check2 from '../svg/check2.svg';

const RegisterDone = () => {
    return (
        <Box className="flex w-full flex-col items-center gap-8">
            <Box position="relative" width="120px" height="120px">
                <Image
                    src={check}
                    alt="Check Icon"
                    layout="fill"
                    objectFit="contain"
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        zIndex: 1,
                    }}
                />
                <Image
                    src={check2}
                    alt="Check Icon"
                    layout="fill"
                    objectFit="contain"
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '25%',
                        zIndex: 2,
                    }}
                />
            </Box>
            <Typography variant="h4" className="text-primary-900 text-center font-dm-serif-text text-[30px] leading-9" gutterBottom>
                Başvurunuz Alındı!
            </Typography>
            <Box className="flex flex-col items-center gap-4 self-stretch">
                <Typography variant="body1" className="text-primary-800 font-sans text-[18px] font-medium leading-[26px]" gutterBottom>
                    <span className="text-primary-600 font-bold">Merhaba Elif Öztürk</span>, başvurunuzu aldık ve inceleme sürecine başladık.
                </Typography>
                <Typography variant="body1" className="text-primary-600 font-sans text-[20px] font-medium leading-[26px]">
                    2–3 <span className='text-primary-900 text-[18px]'>gün içinde size geri dönüş yapacağız. Başvurunuz için teşekkürler.</span>
                </Typography>
            </Box>


        </Box>
    );
};

export default RegisterDone;
