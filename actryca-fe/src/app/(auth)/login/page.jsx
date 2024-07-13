"use client";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import ForgetPasswordDialog from "@/components/forgetpassword/ForgetPasswordDialog";


export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Grid container component="main" className=" background px-32 center mb-24">
      <Grid item xs={false} sm={4} md={7} className="py-12 h-full">
        <Box className="flex justify-center">
          <Image src="/images/woman-in-shape.png" width={500} height={500} />
        </Box>
        <Typography className="p-8 text-center font-bold">
          Hayallerinizi Gerçekleştirin! <br />
          Topluluğumuza Katılın ve Parlayın.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8} md={5} className=" pr-24 pt-8 h-full ">
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
                label="Telefon yada E-posta giriniz!"
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
                label="Şifrenizi Giriniz!"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Box>

            <Button onClick={handleDialogOpen}>
              <Typography variant="subtitle2" color="primary.dark" className="font-bold">
                Şifremi Unuttum!
              </Typography>
            </Button>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              giriş yap
            </Button>
            <Box display="flex" alignItems="center">
              <Box flex="1" height="1px" bgcolor="info.main" mr={2} />
              <Typography color="info.main">ya da</Typography>
              <Box flex="1" height="1px" bgcolor="info.main" ml={2} />
            </Box>
            <Box className="center !justify-between mt-4">
              <Link href="#" className="hover:scale-[1.05] transition-all">
                <Image src="/images/facebook2.png" width={40} height={40} />
              </Link>
              <Link href="#" className="hover:scale-[1.05] transition-all">
                <Image src="/images/google.png" width={40} height={40} />
              </Link>
              <Link href="#" className="hover:scale-[1.05] transition-all">
                <Image src="/images/apple.png" width={40} height={40} />
              </Link>
            </Box>
            <Typography color="primary.dark" className="flex mt-8">
              Hesabım Yok.{" "}
              <Link href="/register" color="primary" className="cursor-pointer ml-1">
                Üye Ol!
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <ForgetPasswordDialog open={dialogOpen} onClose={handleDialogClose} />
    </Grid>
  );
}
