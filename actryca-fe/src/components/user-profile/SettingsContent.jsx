"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import useAuthStore from "@/store/auth-store";
import { useRouter } from "next/navigation";

const SettingsContent = () => {
  const { user } = useAuthStore();
  const router = useRouter();
  const [notification, setNotification] = useState({
    like: true,
    comment: false,
    score: true,
  });
  const [notificationEmail, setNotificationEmail] = useState({
    likeEmail: true,
    commentEmail: false,
    scoreEmail: true,
  });

  const handleChangeNotification = (event) => {
    setNotification({
      ...notification,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChangeNotificationEmail = (event) => {
    setNotificationEmail({
      ...notificationEmail,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <Typography variant="h4" className="text-primary-900 font-dm-serif-text">
        Ayarlar
      </Typography>
      <Box className="flex flex-col gap-8 mt-8">
        <Box className="flex flex-row gap-8">
          <Paper elevation={3} className="p-8 rounded-xl w-1/2">
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold mb-8"
            >
              Bildirim Tercihleri
            </Typography>
            <FormControl>
              <FormLabel className="mb-4 font-semibold">
                Bildirim almak istediğiniz durumları seçin:
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notification.like}
                      onChange={handleChangeNotification}
                      name="like"
                    />
                  }
                  label="Beğeni aldığımda bildirim gönder"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notification.comment}
                      onChange={handleChangeNotification}
                      name="comment"
                    />
                  }
                  label="Yorum aldığımda bildirim gönder"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notification.score}
                      onChange={handleChangeNotification}
                      name="score"
                    />
                  }
                  label="Puan verildiğinde bildirim gönder"
                />
              </FormGroup>
            </FormControl>
          </Paper>
          <Paper elevation={3} className="p-8 rounded-xl w-1/2">
            <Typography
              variant="h6"
              className="text-primary-600 font-dm-sans text-[16px] font-semibold mb-8"
            >
              E-posta Tercihleri
            </Typography>
            <FormControl>
              <FormLabel className="mb-4 font-semibold">
                E-posta almak istediğiniz durumları seçin:
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={notificationEmail.likeEmail}
                      onChange={handleChangeNotificationEmail}
                      name="likeEmail"
                    />
                  }
                  label="Beğeni aldığımda e-posta gönder"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notificationEmail.commentEmail}
                      onChange={handleChangeNotificationEmail}
                      name="commentEmail"
                    />
                  }
                  label="Yorum aldığımda e-posta gönder"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={notificationEmail.scoreEmail}
                      onChange={handleChangeNotificationEmail}
                      name="scoreEmail"
                    />
                  }
                  label="Puan veriliğinde e-posta gönder"
                />
              </FormGroup>
            </FormControl>
          </Paper>
        </Box>
        <Box className="w-2/3">
          <Paper elevation={3} className="p-8 rounded-xl">
            <Typography
              variant="h6"
              className="text-primary-600 font-sans text-[16px] font-semibold leading-normal"
            >
              Hesabımı Sil
            </Typography>
            <Box className="flex flex-col items-start gap-4 my-8">
              <Typography
                variant="body1"
                className="text-primary-900 font-semibold"
              >
                Bu işlem geri alınamaz. Hesabınızı silerseniz, tüm verileriniz
                kalıcı olarak silinecektir.
              </Typography>
              <Box className="flex flex-col gap-2 w-full">
                <Typography>Şifreni Tekrar Gir</Typography>
                <TextField
                  label="******"
                  variant="outlined"
                  type="password"
                  className="w-1/2"
                />
                <Typography
                  className="text-primary-800 font-semibold text-sm cursor-pointer"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Şifre sıfırlama sayfasına yönlendirileceksiniz."
                      )
                    ) {
                      router.push("/login");
                    }
                  }}
                >
                  Şifremi Unuttum
                </Typography>
              </Box>

              <Typography
                variant="body2"
                className="text-primary-900 font-sans text-[16px] font-medium mt-4"
              >
                Hesabınızı sildikten sonra tekrar geri alamayacaksınız.
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="error"
              className="w-1/2"
              onClick={() => alert("Hesap silindi!")}
            >
              {user?.user?.user_name ? user?.user?.user_name : "Bu kullanıcıyı"}{" "}
              Sil
            </Button>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default SettingsContent;
