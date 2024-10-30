"use client";

import React, { useState } from 'react';
import { Typography, Box, Menu, MenuItem, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import profilephotos from "../../../../../public/svg/profilePhotos/profilephotos.svg";
import axios from 'axios';

const ProfilePhotos = ({ onSave }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); 
  const [anchorEl, setAnchorEl] = useState(null); 
  const router = useRouter();

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file); 
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        onSave({ profile_photo: e.target.result });
      };
      reader.readAsDataURL(file);
      
      event.target.value = null;
    }
  };

  const handleImageUpload = async () => {
    if (!imageFile) {
      // Fotoğraf yoksa profile_photo null olarak gönderiliyor
      onSave({ profile_photo: null });
      return;
    }

    const formData = new FormData();
    formData.append('profile_photo', imageFile);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST_API}actors/register`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log("Foto için apiden cevap:", response.data);
      onSave({ profile_photo: response.data.url });

      // Yüklemeden sonra seçimi temizle
      setSelectedImage(null);
      setImageFile(null);

    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImageFile(null);
    
    // profile_photo anahtarını null olarak kaydet
    onSave({ profile_photo: null });
  };

  return (
    <Box className='flex flex-col items-start gap-4 p-4 w-[519px] '>
      <Typography className=" text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Profil Fotoğrafı:
      </Typography>
      <Box className="flex flex-row  w-[519px] justify-center items-center gap-[54px] px-8 py-10 border border-primary-100 rounded-2xl">
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
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => router.push('/portfolio/photo')}>Görüntüle</MenuItem>
                <MenuItem onClick={handleImageRemove}>Kaldır</MenuItem>
                <MenuItem onClick={() => document.getElementById('upload-photo').click()}>Değiştir</MenuItem>
              </Menu>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-photo"
                type="file"
                onChange={handleImageChange}
              />
              <button 
                onClick={handleImageUpload} 
                className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-md"
              >
                Yükle
              </button>
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
        <Typography className="text-[#f42500] font-sans text-[14px] italic font-medium leading-[130%]">
          Yüzünüz net bir şekilde görünmelidir.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfilePhotos;
