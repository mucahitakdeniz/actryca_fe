"use client";
import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import useAuthStore from "@/store/auth-store";
import { useMutation } from "@tanstack/react-query";
import { userUpdatePut } from "@/services/user";
import AlertBox from "../ui/AlertBox";
import useUserStore from "@/store/user-store";

const MemberInfo = () => {
  const { user } = useAuthStore();
  const userData = useUserStore((state) => state.userData);
  console.log(userData);

  const [formData, setFormData] = useState({
    user_name: user?.user?.user_name || "",
    email: user?.user?.email || "",
    phone: user?.user?.phone || "",
  });

  const [alertProps, setAlertProps] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const updateUserMutation = useMutation({
    mutationFn: (updatedData) => userUpdatePut(user?.user?._id, updatedData),
    onSuccess: () => {
      setAlertProps({
        open: true,
        message: "Bilgiler başarıyla güncellendi!",
        severity: "success",
      });
    },
    onError: (error) => {
      console.log(error);
      setAlertProps({
        open: true,
        message: "Güncelleme işlemi başarısız oldu!",
        severity: "error",
      });
    },
  });

  const handleUpdate = () => {
    updateUserMutation.mutate(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAlertClose = () => {
    setAlertProps((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <AlertBox alertProps={alertProps} handleAlertClose={handleAlertClose} />
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text">
        Kullanıcı Bilgileri
      </Typography>

      <Typography variant="h5" className="text-primary-600 font-semibold my-4">
        Üyelik Bilgileri
      </Typography>

      <Paper
        elevation={3}
        className="flex flex-col items-start gap-12 p-8 w-1/2 rounded-xl border border-primary-50"
      >
        <Typography
          variant="h6"
          className="text-primary-600 font-dm-sans text-[16px] font-semibold [leading-trim:both] [text-edge:cap]"
        >
          Üyelik Bilgileri
        </Typography>

        <Box className="flex flex-col items-start gap-6 w-full">
          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography
              variant="body2"
              className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
            >
              Kullanıcı Adı
            </Typography>
            <TextField
              name="user_name"
              value={user?.user?.user_name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography
              variant="body2"
              className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
            >
              E-posta
            </Typography>
            <TextField
              name="email"
              value={user?.user?.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box className="w-full flex flex-col gap-2 items-start">
            <Typography
              variant="body2"
              className="text-primary-900 text-[14px] font-medium leading-6 font-sans"
            >
              Telefon Numarası
            </Typography>
            <TextField
              name="phone"
              value={user?.user?.phone}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            className="w-full"
            onClick={handleUpdate}
          >
            Güncelle
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default MemberInfo;
