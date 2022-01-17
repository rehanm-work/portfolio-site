import { Box } from '@mui/system';
import Hero from './Hero';

const Header = () => {
  return (
    <Box
      component='section'
      sx={{
        backgroundImage: 'linear-gradient(135deg, #7A0BD2 55%, #943ADB 75%)',
        '@media screen and (max-width: 426px)': { p: '4rem 0 4rem' },
      }}
    >
      <Box
        sx={{
          mx: { xs: 0, lg: '100px' },
          pt: { xs: 0, md: '2rem' },
          height: '100%',
        }}
      >
        <Hero />
      </Box>
    </Box>
  );
};

export default Header;
