import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const SnackAlert = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar
      open={open}
      variant="filled"
      autoHideDuration={3000}
      onClose={onClose}
      action={
        <Button color="inherit" onClick={onClose}>
          Close
        </Button>
      }
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackAlert;
