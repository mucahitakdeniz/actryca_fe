"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Kisisel from "../../../../components/auth/actorRegister/step1/Kisisel";
import Fiziksel from "../../../../components/auth/actorRegister/step1/Fiziksel";
import step1 from "../../../../components/auth/actorRegister/svg/step1.svg";
import step2 from "../../../../components/auth/actorRegister/svg/step2.svg";
import step3 from "../../../../components/auth/actorRegister/svg/step3.svg";
import Image from "next/image";
import EducationSkills from "../../../../components/auth/actorRegister/step2/EducationSkills";
import { LocalizationProvider, DatePicker, AdapterDateFns } from '@mui/x-date-pickers';
import SpokenLanguage from "@/components/auth/actorRegister/step2/SpokenLanguage";
import SpecialAbilities from "@/components/auth/actorRegister/step2/SpecialAbilities";
import ProfessionalInfo from "@/components/auth/actorRegister/step3/ProfessionalInfo";

const steps = [
  { label: "Kişisel Bilgiler", icon: step1 },
  { label: "Eğitim ve Yetenekler", icon: step2 },
  { label: "Profesyonel Bilgiler", icon: step3 },
];

const StepIconComponent = (props) => {
  const { icon, completed } = props;
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full ${completed ? "bg-primary-600" : ""}`}
    >
      <Image
        src={icon}
        alt="Step icon"
        width={24}
        height={24}
        style={{ filter: completed ? "brightness(0) invert(1)" : "none" }}
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

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box className="flex flex-row items-start gap-9 pt-12" style={{ alignItems: "stretch" }}>
            <Kisisel />
            <Fiziksel />
          </Box>
        );
      case 1:
        return (
          <Box className="flex flex-row gap-9 pt-12" style={{ alignItems: 'stretch', height: '100%' }}>
            <Box className="flex flex-col w-1/2 gap-9" style={{ height: '100%' }}>
              <EducationSkills />
              <SpokenLanguage />
            </Box>
            <Box className="w-1/2" style={{ height: '100%' }}>
              <SpecialAbilities />
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box>
            <ProfessionalInfo />
          </Box>
        )


      default:
        return "Bilinmeyen Adım";
    }
  };

  return (
    <Stack className="w-4/5 h-full mx-auto mb-24">
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
              <StepLabel
                StepIconComponent={() => (
                  <StepIconComponent
                    icon={step.icon}
                    completed={index <= activeStep}
                  />
                )}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStepContent(activeStep)}
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
          <Box className="mt-8 flex justify-between gap-4">
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="contained"
              className="px-16"
              startIcon={<ArrowBack />}
            >
              Geri Dön
            </Button>
            <Button
              onClick={handleNext}
              variant="contained"
              className="px-16"
              endIcon={<ArrowForward />}
            >
              {activeStep === steps.length - 1 ? "Bitir" : "Devam Et"}
            </Button>
          </Box>
        )}
      </Box>
    </Stack>
  );
}
