"use client"
import React, { useState } from "react";
import { Box, Button, Typography, Stack, Step, StepLabel, Stepper } from "@mui/material";
import Kisisel from "./step1/Kisisel";
import Fiziksel from "./step1/Fiziksel";
import step1 from "./svg/step1.svg";
import step2 from "./svg/step2.svg";
import step3 from "./svg/step3.svg";
import Image from "next/image";

const steps = [
  { label: "Kişisel Bilgiler", icon: step1 },
  { label: "Eğitim ve Yetenekler", icon: step2 },
  { label: "Profesyonel Bilgiler", icon: step3 },
];

const StepIconComponent = (props) => {
  const { icon, completed } = props;
  return (
    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${completed ? 'bg-primary-600' : ''}`}>
      <Image
        src={icon}
        alt="Step icon"
        width={24}
        height={24}
        style={{ filter: completed ? 'brightness(0) invert(1)' : 'none' }}
      />
    </div>
  );
};

export default function ActorRegister() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Stack className="w-full h-full">
      <Typography
        id="page-title"
        variant="h4"
        component="h2"
        className="font-dm-serif-text text-center text-primary-900 font-bold text-[32px] leading-[44px] pt-12"
      >
        Oyuncu Kayıt Profili
      </Typography>
      <Box className="w-full padding pt-12">
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={() => <StepIconComponent icon={step.icon} completed={index <= activeStep} />}>
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box className="flex flex-row items-start gap-9 pt-12 " style={{ alignItems: 'stretch' }}>
          <Kisisel />
          <Fiziksel />
        </Box>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Tüm adımlar tamamlandı - Bitirdiniz
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Sıfırla</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Adım {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Geri
              </Button>
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Bitir" : "İleri"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Stack>
  );
}
