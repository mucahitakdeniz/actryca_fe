import React from "react";
import { Button, TextField } from "@mui/material";

const FooterForm = () => {
  return (
    <div className="background h-[320px] center padding">
      <div className="center-col gap-14">
        <p className="text-center font-dm-serif-text font-bold text-3xl text-primary-900">
          Son haberlerimizden haberdar olmak için e-posta adresinizi girin:
        </p>
        <div className="flex">
          <TextField
            label="E-posta"
            type="email"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                "& fieldset": {
                  borderRight: "none",
                },
              },
              backgroundColor: "white",
              width: "320px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              width: "110px",
            }}
          >
            Gönder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
