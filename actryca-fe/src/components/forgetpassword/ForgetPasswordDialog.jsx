import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import Image from 'next/image';
import lock from './lock.svg';
import close from "./close.svg";

export default function ForgetPasswordDialog({ open, onClose }) {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={false}
      PaperProps={{
        style: {
          width: '1080px',
          height: '768px',
          borderRadius: '16px',
          overflow: 'hidden',
        },
      }}
    >
      <div className="w-full h-full bg-white relative border-red-800">
        <IconButton
          aria-label="close"
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500"
        >
          <Image src={close} alt="Close Icon" width={24} height={24} />
        </IconButton>
        <DialogContent className="flex flex-col items-center gap-12 mt-[60px]">
          <Stack className="flex flex-col items-center gap-8 w-full">
            <Image src={lock} alt="Lock Icon" width={100} height={100} />
          </Stack>
          <Stack className="flex flex-col items-center gap-6 self-stretch">
            <Typography
              gutterBottom
              className="color: #000 text-center font-dm-serif-text text-[30px] font-normal leading-9"
            >
              Şifrenizi mi Unuttunuz?
            </Typography>
            <Stack className="flex flex-col items-center gap-2 self-stretch">
              <Typography className="text-primary-900 font-sans text-[18px] font-normal leading-[26px] text-center">
                Lütfen şifrenizi sıfırlamak için <span className='text-primary-600'> telefon numaranızı </span> veya <span className='text-primary-600'>e-posta adresinizi </span> girin.
              </Typography>
              <Typography className="text-primary-900 font-sans text-[18px] font-normal leading-[26px] text-center">
                Size bir sıfırlama bağlantısı göndereceğiz.
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions className="flex w-full justify-center items-center pb-[200px]">
          <Stack className="flex flex-col items-start gap-[6px] w-full max-w-md pt-12">
            <Typography variant="subtitle2" className='text-primary-900 font-sans text-[14px] font-[500px] leading-6'>
              Telefon ya da E-posta*
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="555 55 55 veya example@gmail.com"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Stack className='w-full pt-6'>
              <Button autoFocus onClick={onClose} className="w-full h-12 rounded-lg bg-primary-600 text-white font-sans text-[14px] font-[500px] leading-6">
                Devam Et
              </Button>
            </Stack>
          </Stack>
        </DialogActions>
      </div>
    </Dialog>
  );
}
