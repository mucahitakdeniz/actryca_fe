import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import {
  Stack,
  TextField,
  Button,
  DialogContent,
  FormControl,
  FormLabel,
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import close from "../../../../public/svg/close.svg";
import back from "../../../../public/svg/back.svg";
import openlock from "../../../../public/svg/openlock.svg";
import openlock2 from "../../../../public/svg/openlock2.svg";
import usePasswordStore from "@/store/password-store";
import { useMutation } from "@tanstack/react-query";
import { renewPassword } from "@/services/password";
import AlertBox from "@/components/ui/AlertBox";

const NewPassword = ({ open, onClose, onBack, onContinue }) => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [errorText, setErrorText] = React.useState(false);
  const token = usePasswordStore((state) => state.token); 

  const [alertProps, setAlertProps] = React.useState({
    open: false,
    message: "",
    severity: "info",
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ userData, token }) => renewPassword(userData, token),
    onSuccess: (data) => {
      const alertProps = {
        severity: "success",
        message: "Şifreniz başarıyla değiştirildi!",
        open: true,
      };

      if (!data?.error) {
        setTimeout(() => {
          onContinue();
        }, 1000);
      } else {
        alertProps.severity = "error";
        alertProps.message = "Şifre değiştirme başarısız oldu.";
      }

      setAlertProps(alertProps);
    },
    onError: (error) => {
      let errorMessage = "Beklenmeyen bir hata oluştu.";
      console.log(error);

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
    const newPassword = {
      new_password: password,
    };

    if (password === confirmPassword) {
       mutate({ userData: newPassword, token });
    } else {
      setErrorText(true);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value === confirmPassword) {
      setErrorText(false);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value === password) {
      setErrorText(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="md"
      PaperProps={{
        style: {
          width: "100%",
          maxWidth: "1080px",
          height: "100%",
          maxHeight: "768px",
          borderRadius: "16px",
          overflow: "hidden",
          padding: "12px",
        },
      }}
      disableScrollLock
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
        <DialogContent className="flex flex-col items-center gap-8 mt-[60px]">
          <Stack className="relative">
            <Image
              src={openlock}
              alt="Open Lock Icon"
              width={67}
              height={94}
              className="relative z-10"
            />
            <Image
              src={openlock2}
              alt="Letter 2 Icon"
              width={67}
              height={60}
              className="absolute bottom-[-3px] right-[-10px] z-1"
            />
          </Stack>
          <Stack className="flex flex-col items-center gap-6 self-stretch">
            <Typography
              gutterBottom
              className="text-primary-900 text-center font-dm-serif-text text-[30px] font-bold leading-9"
            >
              Yeni Şifre
            </Typography>
            <Stack className="flex flex-col items-center gap-2 self-stretch">
              <Typography
                gutterBottom
                className="text-primary-900 text-center font-sans text-[18px] font-[500px] leading-[26px"
              >
                <span className="text-primary-600">Yeni bir şifre</span>{" "}
                oluşturun.
              </Typography>
              <Typography
                gutterBottom
                className="text-primary-900 text-center font-sans text-[18px] font-[500px] leading-[26px"
              >
                Güvenliğiniz için, yeni şifreniz eski şifrenizden farklı
                olmalıdır
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions className="flex flex-col w-full justify-center gap-6 items-center">
          <Stack component="form" noValidate onSubmit={handleSubmit}>
            <Stack className="flex flex-col items-start self-stretch m-auto gap-4">
              <FormControl>
                <FormLabel className="text-primary-900 font-sans text-[14px] font-[500px] leading-6">
                  Şifre
                </FormLabel>
                <TextField
                  id="new-password"
                  margin="normal"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? (
                            <EyeOff size={24} className="text-primary-600" />
                          ) : (
                            <Eye size={24} className="text-primary-600" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: "420px",
                      maxWidth: "420px",
                    },
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="text-primary-900 font-sans text-[14px] font-[500px] leading-6">
                  Şifreyi Tekrar Gir
                </FormLabel>
                <TextField
                  id="confirm-password"
                  margin="normal"
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={24} className="text-primary-600" />
                          ) : (
                            <Eye size={24} className="text-primary-600" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      width: "420px",
                      maxWidth: "420px",
                    },
                  }}
                  error={errorText}
                  helperText={
                    errorText ? (
                      <span
                        className="text-red text-[12px]"
                        style={{ minHeight: "1.5em", display: "inline-block" }}
                      >
                        Şifreler eşleşmiyor. Lütfen aynı şifreyi tekrar
                        girdiğinizden emin olun.
                      </span>
                    ) : (
                      <span
                        style={{ minHeight: "1.5em", display: "inline-block" }}
                      >
                        &nbsp;
                      </span>
                    )
                  }
                />
              </FormControl>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              className=" w-72 "
              disabled={isPending}
            >
              {isPending ? <CircularProgress size={25} /> : "Şifreyi Yenile"}
            </Button>
          </Stack>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default NewPassword;
