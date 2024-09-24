import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const LogoutDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Logout</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Çıkış yapmak istediğinizden emin misiniz?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          İptal
        </Button>
        <Button onClick={onConfirm} variant="contained" color="error" autoFocus>
          Çıkış Yap
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
