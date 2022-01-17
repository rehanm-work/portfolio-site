import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { jokes } from '../jokes';
import { Box } from '@mui/system';
import { PrimaryButton } from './StyledComponents';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
let joke = {
  setup: '',
  type: '',
  punchline: '',
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const getJokes = () => {
    const randIndex = Math.floor(Math.random() * 6);
    joke = jokes[randIndex];
    console.log(joke);
  };

  const handleClickOpen = () => {
    getJokes();
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: '100%' }}>
      <PrimaryButton
        onClick={handleClickOpen}
        sx={{ fontWeight: '800', textTransform: 'capitalize' }}
      >
        Random Quote
      </PrimaryButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          Programming Humor
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{joke.setup}</Typography>
          {joke.type === 'text' ? (
            <Typography gutterBottom>{joke.punchline}</Typography>
          ) : (
            <Box
              component='img'
              src={joke.punchline}
              alt='joke-punchline-img'
              sx={{ width: '80%' }}
            />
          )}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
