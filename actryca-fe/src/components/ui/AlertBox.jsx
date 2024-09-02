import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AlertBox = ({ alertProps }) => {
  const { open, message, severity, duration, onClose } = alertProps;

  return (
    <Snackbar
      open={open}
      autoHideDuration={duration || 5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert onClose={onClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default AlertBox;
