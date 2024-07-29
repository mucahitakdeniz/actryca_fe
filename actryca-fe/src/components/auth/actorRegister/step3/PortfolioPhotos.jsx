"use client";

import React, { useState } from 'react';
import { Typography, Box, Menu, MenuItem, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import portfolioIcon from '../../../../../public/svg/profilePhotos/profilephotos.svg';

const PortfolioPhotos = () => {
    const [selectedImages, setSelectedImages] = useState([null, null]);
    const [anchorEl, setAnchorEl] = useState([null, null]); 
    const router = useRouter();

    const handleImageChange = (event, index) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImages = [...selectedImages];
                newImages[index] = e.target.result;
                setSelectedImages(newImages);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleRemoveImage = (index) => {
        const newImages = [...selectedImages];
        newImages[index] = null;
        setSelectedImages(newImages);
        handleMenuClose(index); 
    };

    const handleViewImage = (index) => {
        router.push('/portfolio/photo');
        handleMenuClose(index); 
    };

    const handleMenuOpen = (event, index) => {
        const newAnchorEl = [...anchorEl];
        newAnchorEl[index] = event.currentTarget;
        setAnchorEl(newAnchorEl);
    };

    const handleMenuClose = (index) => {
        const newAnchorEl = [...anchorEl];
        newAnchorEl[index] = null;
        setAnchorEl(newAnchorEl);
    };

    const handleEditImage = (index) => {
        document.getElementById(`upload-photo-${index}`).click();
        handleMenuClose(index); 
    };

    return (
        <Box className='flex flex-col items-start gap-4 p-4 w-[519px]'>
            <Typography className='text-primary-900 font-dm-serif-text text-[18px] font-normal leading-6'>
                Portföy Fotoğrafları:
            </Typography>
            <Box className="flex flex-row justify-center items-center gap-[54px] px-8 py-10 border border-primary-100 rounded-2xl">
                {selectedImages.map((image, index) => (
                    <Box key={index} className="flex flex-col justify-center items-center h-[182px] px-20 py-4 gap-[21px] border border-primary-100 rounded-2xl relative overflow-hidden">
                        {image ? (
                            <>
                                <img 
                                    src={image} 
                                    alt="Portfolio" 
                                    className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                                />
                                <IconButton 
                                    className="absolute top-0 right-0 m-2 text-white"
                                    aria-controls={`simple-menu-${index}`}
                                    aria-haspopup="true"
                                    onClick={(event) => handleMenuOpen(event, index)}
                                >
                                    <MoreHorizIcon />
                                </IconButton>
                                <Menu
                                    id={`simple-menu-${index}`}
                                    anchorEl={anchorEl[index]}
                                    keepMounted
                                    open={Boolean(anchorEl[index])}
                                    onClose={() => handleMenuClose(index)}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={() => handleViewImage(index)}>Görüntüle</MenuItem>
                                    <MenuItem onClick={() => handleRemoveImage(index)}>Kaldır</MenuItem>
                                    <MenuItem onClick={() => handleEditImage(index)}>Değiştir</MenuItem>
                                </Menu>
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id={`upload-photo-${index}`}
                                    type="file"
                                    onChange={(event) => handleImageChange(event, index)}
                                />
                            </>
                        ) : (
                            <>
                                <Image
                                    src={portfolioIcon}
                                    alt="Default Portfolio"
                                    width={40}
                                    height={40}
                                />
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id={`upload-photo-${index}`}
                                    type="file"
                                    onChange={(event) => handleImageChange(event, index)}
                                />
                                <label htmlFor={`upload-photo-${index}`} className="absolute inset-0 flex justify-center items-center cursor-pointer">
                                    <Image
                                        src={portfolioIcon}
                                        alt="Upload Icon"
                                        width={40}
                                        height={40}
                                    />
                                </label>
                            </>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PortfolioPhotos;
