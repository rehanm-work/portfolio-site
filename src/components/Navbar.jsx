import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MenuButton } from './StyledComponents';
import MobileNavbar from './MobileNavbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomizedDialogs from './Quotes';

const Navbar = () => {
  const matches = useMediaQuery('(max-width:878px)');
  return (
    <>
      {matches ? (
        <MobileNavbar />
      ) : (
        <AppBar
          position='fixed'
          elevation={0}
          sx={{
            background: 'linear-gradient(180deg, #7A0BD2 55%, #943ADB 90%)',
            py: '0.5rem',
          }}
        >
          <Toolbar>
            <Typography
              color='primary'
              variant='h5'
              sx={{
                fontWeight: '800',
                letterSpacing: '2px',
              }}
            >
              Mohammad Rehan
            </Typography>
            <Box sx={{ ml: 2 }}>
              <MenuButton link='#home'>Home</MenuButton>
              <MenuButton link='#about'>About Me</MenuButton>
              <MenuButton link='#work'>My Work</MenuButton>
              <MenuButton link='#contact'>Contact</MenuButton>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <CustomizedDialogs />
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Navbar;
