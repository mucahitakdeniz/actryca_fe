"use client";

import React, { useState } from 'react';
import { Typography, Box, Menu, MenuItem, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import profilephotos from "../../../../../public/svg/profilePhotos/profilephotos.svg";

const ProfilePhotos = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null); 
    const router = useRouter();

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setAnchorEl(null); 
    };

    const handleViewImage = () => {
        router.push('/portfolio/photo');
        setAnchorEl(null); 
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditImage = () => {
        document.getElementById('upload-photo').click()
        setAnchorEl(null); 
    };

    return (
        <Box className='flex flex-col items-start gap-4 p-4 w-[519px] '>
            <Typography className='text-primary-900 font-dm-serif-text text-[18px] font-normal leading-6'>
                Profil Fotoğrafı:
            </Typography>
            <Box className="flex flex-row  justify-center items-center gap-[54px] border border-primary-100 rounded-2xl">
                <Box className="flex flex-col justify-center items-center h-[182px]  px-20 py-4 gap-[21px] border border-primary-100 rounded-2xl relative overflow-hidden">
                    {selectedImage ? (
                        <>
                            <img 
                                src={selectedImage} 
                                alt="Profile" 
                                className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                            />
                            <IconButton 
                                className="absolute top-0 right-0 m-2 text-white"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleMenuOpen}
                            >
                                <MoreHorizIcon />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <MenuItem onClick={handleViewImage}>Görüntüle</MenuItem>
                                <MenuItem onClick={handleRemoveImage}>Kaldır</MenuItem>
                                <MenuItem onClick={handleEditImage}>Değiştir</MenuItem>
                            </Menu>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="upload-photo"
                                type="file"
                                onChange={handleImageChange}
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src={profilephotos}
                                alt="Default Profile"
                                width={40}
                                height={40}
                            />
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="upload-photo"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="upload-photo" className="absolute inset-0 flex justify-center items-center cursor-pointer">
                                <Image
                                    src={profilephotos}
                                    alt="Upload Icon"
                                    width={40}
                                    height={40}
                                />
                            </label>
                        </>
                    )}
                </Box>
                <Typography className='text-[#f24500] w-full font-sans text-[14px] italic font-medium leading-[18px]'>
                    Yüzünüz net bir şekilde görünmelidir.
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfilePhotos;
