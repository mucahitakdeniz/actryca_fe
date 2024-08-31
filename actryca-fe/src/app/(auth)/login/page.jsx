"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import ForgetPasswordDialog from "../../../components/auth/forgetpassword/ForgetPasswordDialog";
import VerificationCodeDialog from "../../../components/auth/forgetpassword/VerificationCode";
import NewPasswordDialog from "../../../components/auth/forgetpassword/NewPasswordDialog";
import UpdatedPasswordDialog from "../../../components/auth/forgetpassword/UpdatedPasswordDialog";
import { login } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import AlertBox from "@/components/ui/AlertBox";

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [verificationDialogOpen, setVerificationDialogOpen] = useState(false);
  const [newPasswordDialogOpen, setNewPasswordDialogOpen] = useState(false);
  const [updatedPasswordDialogOpen, setUpdatedPasswordDialogOpen] =
    useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const { setUser, setTokens } = useAuthStore();
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.accessToken) {
        setUser(data);
        setTokens(data.accessToken);
        localStorage.setItem("token", data.accessToken);
        router.push("/");
        setSeverity("success");
        setMessage("Login successful!");
        setOpen(true);
      } else {
        setSeverity("error");
        setMessage("Login failed: Access token is missing.");
        setOpen(true);
      }
    },
    onError: (error) => {
      if (error.response?.data?.error === "User not found.") {
        setSeverity("error");
        setMessage("User not found.");
        setOpen(true);
      } else if (error.response?.data?.error === "Wrong password.") {
        setSeverity("error");
        setMessage("Wrong password.");
        setOpen(true);
      } else {
        setSeverity("error");
        setMessage("Unexpected error occurred.");
        setOpen(true);
      }
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      identifier: data.get("email"),
      password: data.get("password"),
    };

    mutate(userData);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setVerificationDialogOpen(false);
    setNewPasswordDialogOpen(false);
    setUpdatedPasswordDialogOpen(false);
  };

  const handleContinue = () => {
    setDialogOpen(false);
    setVerificationDialogOpen(true);
  };

  const handleBack = () => {
    setDialogOpen(true);
    setVerificationDialogOpen(false);
    setNewPasswordDialogOpen(false);
    setUpdatedPasswordDialogOpen(false);
  };

  const handleVerificationContinue = () => {
    setVerificationDialogOpen(false);
    setNewPasswordDialogOpen(true);
  };

  const handleNewPasswordBack = () => {
    setNewPasswordDialogOpen(false);
    setVerificationDialogOpen(true);
  };

  const handleNewPasswordContinue = () => {
    setNewPasswordDialogOpen(false);
    setUpdatedPasswordDialogOpen(true);
  };

  const handleUpdatedPasswordBack = () => {
    setUpdatedPasswordDialogOpen(false);
    setNewPasswordDialogOpen(true);
  };

  const handleUpdatedPasswordContinue = () => {
    setUpdatedPasswordDialogOpen(false);
  };

  return (
    <>
      <AlertBox
        open={open}
        handleClose={handleClose}
        message={message}
        severity={severity}
      />
      <Grid
        container
        component="main"
        className="background px-32 center mb-24"
      >
        <Grid item xs={false} sm={4} md={7} className="py-12 h-full">
          <Box className="flex justify-center">
            <Image
              src="/images/woman-in-shape.png"
              width={500}
              height={500}
              className="h-auto"
              alt=""
            />
          </Box>
          <Typography className="p-8 text-center font-bold">
            Hayallerinizi Gerçekleştirin! <br />
            Topluluğumuza Katılın ve Parlayın.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} className="pr-24 pt-8 h-full">
          <Box>
            <Typography variant="h4" className="font-dm-serif-text">
              Tekrar Hoşgeldiniz!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box className="mt-4">
                <Typography variant="subtitle2" color="primary.dark">
                  Telefon yada E-posta*
                </Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="555 55 55 veya example@gmail.com"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </Box>

              <Box className="mt-4">
                <Typography variant="subtitle2" color="primary.dark">
                  Şifre*
                </Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="********"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Box>

              <Button onClick={handleDialogOpen}>
                <Typography
                  variant="subtitle2"
                  color="primary.dark"
                  className="font-bold"
                >
                  Şifremi Unuttum!
                </Typography>
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isPending}
              >
                {isPending ? <CircularProgress size={25} /> : "giriş yap"}
              </Button>
              <Box display="flex" alignItems="center">
                <Box flex="1" height="1px" bgcolor="info.main" mr={2} />
                <Typography color="info.main">ya da</Typography>
                <Box flex="1" height="1px" bgcolor="info.main" ml={2} />
              </Box>
              <Box className="center !justify-between mt-4">
                <Link href="#" className="hover:scale-[1.05] transition-all">
                  <Image
                    src="/images/facebook2.png"
                    width={40}
                    height={40}
                    alt=""
                    className="w-auto"
                  />
                </Link>
                <Link href="#" className="hover:scale-[1.05] transition-all">
                  <Image
                    src="/images/google.png"
                    width={40}
                    height={40}
                    alt=""
                    className="w-auto"
                  />
                </Link>
                <Link href="#" className="hover:scale-[1.05] transition-all">
                  <Image
                    src="/images/apple.png"
                    width={40}
                    height={40}
                    alt=""
                    className="w-auto"
                  />
                </Link>
              </Box>
              <Typography color="primary.dark" className="flex mt-8">
                Hesabım Yok.{" "}
                <Link
                  href="/register"
                  color="primary"
                  className="cursor-pointer ml-1"
                >
                  Üye Ol!
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <ForgetPasswordDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          onContinue={handleContinue}
        />
        <VerificationCodeDialog
          open={verificationDialogOpen}
          onClose={handleDialogClose}
          onBack={handleBack}
          onContinue={handleVerificationContinue}
        />
        <NewPasswordDialog
          open={newPasswordDialogOpen}
          onClose={handleDialogClose}
          onBack={handleNewPasswordBack}
          onContinue={handleNewPasswordContinue}
        />
        <UpdatedPasswordDialog
          open={updatedPasswordDialogOpen}
          onClose={handleDialogClose}
          onBack={handleUpdatedPasswordBack}
          onContinue={handleUpdatedPasswordContinue}
        />{" "}
        {/* add updated password dialog */}
      </Grid>
    </>
  );
}
