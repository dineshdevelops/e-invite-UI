import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBarComponent({snackBarProps}) {
  const [open, setOpen] = React.useState(true);
  console.log(snackBarProps)
  const handleClose = () => {
    setOpen(false);
    snackBarProps.open=false;
    console.log("After Close Open is "+open)
  };
  const vertical='top';
  const horizontal='right';
  return (
      <Snackbar open={open} autoHideDuration={4000} anchorOrigin={{ vertical, horizontal }}  key={vertical + horizontal} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackBarProps.severity} sx={{ width: '100%' }}>
          {snackBarProps.message}
        </Alert>
      </Snackbar>
  );
}
