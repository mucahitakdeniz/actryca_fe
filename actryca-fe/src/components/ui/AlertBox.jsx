import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AlertBox = ({ alertProps, handleAlertClose }) => {
  const { open, message, severity } = alertProps;

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleAlertClose}
    >
      <Alert severity={severity} onClose={handleAlertClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBox;
