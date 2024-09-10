import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  Stack,
  TextField,
  Button,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import close from "../../../../public/svg/close.svg";
import back from "../../../../public/svg/back.svg";
import letter1 from "../../../../public/svg/letter1.svg";
import letter2 from "../../../../public/svg/letter2.svg";
import AlertBox from "@/components/ui/AlertBox";
import usePasswordStore from "@/store/password-store";
import { useMutation } from "@tanstack/react-query";
import { verifyCode } from "@/services/password";

export default function VerificationCode({
  open,
  onClose,
  onBack,
  onContinue,
}) {
  const [code, setCode] = React.useState(["", "", "", ""]);
  const email = usePasswordStore((state) => state.email);

  const [alertProps, setAlertProps] = React.useState({
    open: false,
    message: "",
    severity: "info",
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: verifyCode,
    onSuccess: (data) => {
      console.log(data);

      const alertProps = {
        severity: "success",
        message: "Doğrulama kodu başarıyla doğrulandı!",
        open: true,
      };
      if (!data?.error) {
        setTimeout(() => {
          onContinue();
        }, 2000);
      } else {
        alertProps.severity = "error";
        alertProps.message = "Doğrulama başarısız oldu.";
      }

      setAlertProps(alertProps);
    },
    onError: (error) => {
      let errorMessage = "Beklenmeyen bir hata oluştu.";

      if (error.response?.data?.error === "User not found.") {
        errorMessage = "Kullanıcı bulunamadı.";
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
    const verificationCode = code.join("");

    const verifyData = {
      email: email,
      recall_password: verificationCode,
    };
    console.log(verifyData);

    mutate(verifyData);
  };

  const handleChange = (index) => (event) => {
    const value = event.target.value;
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 3) {
        document.getElementById(`verification-code-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index) => (event) => {
    if (event.key === "Backspace" && code[index] === "" && index > 0) {
      document.getElementById(`verification-code-${index - 1}`).focus();
    }
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
    >
      <AlertBox alertProps={alertProps} />
      <div className="w-full h-full bg-white relative">
        <IconButton
          aria-label="close"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500"
        >
          <Image src={close} alt="Close Icon" width={24} height={24} />
        </IconButton>
        <IconButton
          aria-label="back"
          onClick={onBack}
          className="absolute left-2 top-2 text-gray-500"
        >
          <Image src={back} alt="Back Icon" width={24} height={24} />
        </IconButton>
        <DialogContent className="flex flex-col items-center gap-12 mt-[60px]">
          <Stack className="relative">
            <Image
              src={letter1}
              alt="Letter 1 Icon"
              width={94}
              height={60}
              className="relative z-10"
            />
            <Image
              src={letter2}
              alt="Letter 2 Icon"
              width={94}
              height={60}
              className="absolute bottom-[-8px] right-[-10px] z-1"
            />
          </Stack>
          <Stack className="flex flex-col items-center gap-6 self-stretch">
            <Typography
              gutterBottom
              className="text-primary-900] text-center font-dm-serif-text text-[30px] font-bold leading-9"
            >
              Doğrulama Kodu
            </Typography>
            <Stack className="gap-2">
              <Typography className="text-primary-900 font-sans text-[18px] font-medium leading-[26px] text-center">
                Lütfen e-posta adresinize gönderilen{" "}
                <span className="text-primary-600"> doğrulama kodunu</span>{" "}
                girin.
              </Typography>
              <Typography className="text-primary-900 font-sans text-[16px] font-medium leading-6 text-center">
                Lütfen gelen kutunuzu kontrol edin ve kodu girin.
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions className="flex flex-col w-full justify-center gap-6 items-center pb-[200px]">
          <Stack
            component="form"
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-row justify-between items-center self-stretch m-auto gap-3"
          >
            {[0, 1, 2, 3].map((index) => (
              <TextField
                key={index}
                id={`verification-code-${index}`}
                margin="normal"
                required
                value={code[index]}
                onChange={handleChange(index)}
                onKeyDown={handleKeyDown(index)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", height: "60px" },
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    border: "#c6bed5",
                    width: "60px",
                    height: "60px",
                    fontSize: "24px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                  },
                }}
              />
            ))}
            <Button
              type="submit"
              variant="contained"
              className="w-72"
              disabled={isPending}
            >
              {isPending ? <CircularProgress size={25} /> : "Doğrula"}
            </Button>
          </Stack>

          <Typography className="text-primary-900 text-center font-sans text-[14px] font-normal leading-normal">
            Doğrulama kodunu henüz almadınız mı?<span> </span>
            <span className="text-primary-600 font-medium underline">
              Tekrar Gönder
            </span>
          </Typography>
        </DialogActions>
      </div>
    </Dialog>
  );
}
