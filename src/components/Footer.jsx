import { Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{
        height: '10%',
        background: '#7A0BD2',
        color: 'white',
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <Typography>copyright &copy; Mohammad Rehan 2021</Typography>
    </Stack>
  );
};

export default Footer;
