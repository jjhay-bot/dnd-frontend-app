import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';

import {
  formModalState,
  setFormModalShow,
} from '../../store/ui/formModal-slice';

export default function Form() {
  const { formModalShow } = useSelector(formModalState);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    dispatch(setFormModalShow(true));
  };
  const handleClose = () => {
    dispatch(setFormModalShow(false));
  };

  return (
    <div>
      <Dialog
        open={formModalShow}
        onClose={handleClose}
        style={{ background: 'none', opacity: '10' }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent style={{ paddingBottom: '0px' }}>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions style={{ padding: '22.5px' }}>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
