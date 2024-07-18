import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Stack, Button, DialogContent } from "@mui/material";
import Image from "next/image";

import close from "./svg/close.svg";
import back from "./svg/back.svg";
import success from "./svg/success.svg";

export default function UpdatedPasswordDialog({
  open,
  onClose,
  onBack,
  onContinue,
}) {
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
    >
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
              src={success}
              alt="Success Icon"
              width={82}
              height={82}
              className="relative"
            />
          </Stack>
          <Stack className="flex flex-col items-center gap-6 self-stretch">
            <Typography
              gutterBottom
              className="text-primary-900 text-center font-dm-serif-text text-[30px] font-bold leading-9"
            >
              Şifre Güncellendi
            </Typography>
            <Typography
              gutterBottom
              className="text-primary-900 text-center font-sans text-[18px] font-[500px] leading-[26px"
            >
              Artık yeni şifrenizi kullanarak hesabınıza{" "}
              <span className="text-primary-600">giriş yap</span>abilirsiniz.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions className="flex flex-col w-full justify-center gap-6 items-center">
          <Button onClick={onContinue} variant="contained" className="w-72">
            Giriş Yap
          </Button>
          <Typography className="text-primary-900 text-center font-sans text-[16px] font-normal leading-6 w-[567px] mt-6">
            Şifrenizi unuttuğunuzda aynı adımları izleyerek yeni bir şifre
            oluşturabilirsiniz. Güvenliğiniz için şifrenizi kimseyle
            paylaşmayın.
          </Typography>
        </DialogActions>
      </div>
    </Dialog>
  );

}
