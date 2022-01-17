import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ContactInfo = ({ img, name, info }) => {
  return (
    <Box>
      <Stack direction='row' alignItems='center'>
        <Box
          component='img'
          src={img}
          alt={`${name}-icon`}
          sx={{
            width: '35px',
            fontSize: '2.1rem',
            '@media screen and (max-width: 471px)': { width: '20px' },
          }}
        />
        <Typography
          sx={{
            display: 'inline-block',
            ml: '1rem',
            fontSize: '1.3rem',
            fontWeight: '700',
          }}
        >
          {name}
        </Typography>
      </Stack>
      <Typography sx={{ fontSize: '1.3rem' }}>{info}</Typography>
    </Box>
  );
};

export default ContactInfo;
