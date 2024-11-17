import React, { useState } from "react";
import { Typography, Box, Menu, MenuItem, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import { useRouter } from "next/navigation";
import profilephotos from "../../../../../public/svg/profilePhotos/profilephotos.svg";

const ProfilePhotos = ({ onSave }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
  
      // Dosya tipi ve boyut kontrolü
      if (!file.type.startsWith("image/")) {
        console.error("Lütfen yalnızca görüntü dosyaları yükleyin.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB sınırı
        console.error("Dosya boyutu 10MB'dan küçük olmalıdır.");
        return;
      }
  
      setImageFile(file);
  
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
  
      onSave({ profile_photo: file });
    }
  };
  

  const handleImageRemove = () => {
    setSelectedImage(null);
    setImageFile(null);
    onSave({ profile_photo: null });
  };

  return (
    <Box className="flex flex-col items-start gap-4 p-4 w-[519px]">
      <Typography className="text-primary-900 font-dm-serif-text text-[18px] font-bold leading-6">
        Profil Fotoğrafı:
      </Typography>
      <Box className="flex flex-row w-[519px] justify-center items-center gap-[54px] px-8 py-10 border border-primary-100 rounded-2xl">
        <Box className="flex flex-col justify-center items-center h-[182px] px-20 py-4 gap-[21px] border border-primary-100 rounded-2xl relative overflow-hidden">
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
                <MenuItem onClick={() => router.push("/portfolio/photo")}>Görüntüle</MenuItem>
                <MenuItem onClick={handleImageRemove}>Kaldır</MenuItem>
                <MenuItem onClick={() => document.getElementById("upload-photo").click()}>
                  Değiştir
                </MenuItem>
              </Menu>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-photo"
                type="file"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <>
              <Image src={profilephotos} alt="Default Profile" width={40} height={40} />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-photo"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="upload-photo" className="absolute inset-0 flex justify-center items-center cursor-pointer">
                <Image src={profilephotos} alt="Upload Icon" width={40} height={40} />
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
