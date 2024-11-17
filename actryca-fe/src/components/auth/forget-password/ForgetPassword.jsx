import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CircularProgress, Stack, TextField } from "@mui/material";
import Image from "next/image";
import lock from "../../../../public/svg/lock.svg";
import close from "../../../../public/svg/close.svg";
import { useMutation } from "@tanstack/react-query";
import { getCode } from "@/services/password";
import AlertBox from "@/components/ui/AlertBox";
import usePasswordStore from "@/store/password-store";

const ForgetPassword = ({ open, onClose, onContinue }) => {
  const setEmail = usePasswordStore((state) => state.setEmail);
  const [alertProps, setAlertProps] = React.useState({
    open: false,
    message: "",
    severity: "info",
  });
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: getCode,
    onSuccess: (data) => {
      const alertProps = {
        severity: "success",
        message: "Doğrulama kodu gönderildi!",
        open: true,
      };
      if (!data?.error) {
        setTimeout(() => {
          onContinue();
        }, 1000);
      } else {
        alertProps.severity = "error";
        alertProps.message = "Login failed: Access token is missing.";
      }

      setAlertProps(alertProps);
    },
    onError: (error) => {
      let errorMessage = "Beklenmeyen bir hata oluştu.";
      console.log(error);

      if (
        error.response?.data?.message ===
        "'identifier' (email or phone) is required."
      ) {
        errorMessage = "Email veya telefon numarası giriniz";
      } else if (
        error.response?.data?.message ===
        "Uyarı! undefined bu isimde kayıtlı bir e-mail bulunmamaktadır"
      ) {
        errorMessage =
          "Bu isimde kayıtlı bir e-mail veya telefon numarası bulunmamaktadır";
      }

      setAlertProps({
        severity: "error",
        message: errorMessage,
        open: true,
      });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get("identifier"));
    const userData = {
      identifier: data.get("identifier"),
    };
    mutate(userData);
  };

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={false}
      PaperProps={{
        style: {
          width: "1080px",
          height: "768px",
          borderRadius: "16px",
          overflow: "hidden",
          padding: "12px",
        },
      }}
      disableScrollLock
    >
      <AlertBox alertProps={alertProps} />
      <div className="w-full h-full bg-white relative ">
        <IconButton
          aria-label="close"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500"
        >
          <Image src={close} alt="Close Icon" width={24} height={24} />
        </IconButton>
        <DialogContent className="flex flex-col w-[747px] items-center mx-auto gap-12 mt-[60px] ">
          <Stack className="flex flex-col items-center gap-8 w-full">
            <Image src={lock} alt="Lock Icon" width={100} height={100} />
          </Stack>
          <Stack className="flex flex-col items-center gap-6 self-stretch">
            <Typography
              gutterBottom
              className="text-primary-900 text-center font-dm-serif-text text-[30px] font-normal leading-9"
            >
              Şifrenizi mi Unuttunuz?
            </Typography>
            <Stack className="flex flex-col items-center gap-2 self-stretch">
              <Typography className="text-primary-900 font-sans text-[18px] font-normal leading-[26px] text-center">
                Lütfen şifrenizi sıfırlamak için{" "}
                <span className="text-primary-600"> telefon numaranızı </span>{" "}
                veya{" "}
                <span className="text-primary-600">e-posta adresinizi </span>{" "}
                girin.
              </Typography>
              <Typography className="text-primary-900 font-sans text-[18px] font-normal leading-[26px] text-center">
                Size bir sıfırlama bağlantısı göndereceğiz.
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions className="flex w-full justify-center items-center">
          <Stack
            className="flex flex-col items-start gap-[6px] w-full max-w-md"
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >
            <Typography
              variant="subtitle2"
              className="text-primary-900 font-sans text-[14px] font-medium leading-6"
            >
              Telefon ya da E-posta*
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="identifier"
              label="Telefon ya da E-posta Giriniz"
              name="identifier"
              autoComplete="identifier"
              autoFocus
            />
            <Stack className="w-full pt-6">
              <Button
                type="submit"
                variant="contained"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? <CircularProgress size={25} /> : "Devam Et"}
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default ForgetPassword;
