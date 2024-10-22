import React, { useState } from "react";
import { Dialog } from "@mui/material";
import ForgetPassword from "./ForgetPassword";
import VerificationCode from "./VerificationCode";
import NewPassword from "./NewPassword";
import UpdatedPassword from "./UpdatedPassword";

const PasswordDialog = ({ open, onClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <ForgetPassword onContinue={handleNext} />;
      case 2:
        return <VerificationCode onBack={handleBack} onContinue={handleNext} />;
      case 3:
        return <NewPassword onBack={handleBack} onContinue={handleNext} />;
      case 4:
        return <UpdatedPassword onBack={handleBack} onContinue={onClose} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth disableScrollLock>
      {renderStep()}
    </Dialog>
  );
};

export default PasswordDialog;
