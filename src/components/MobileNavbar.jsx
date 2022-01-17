import {
  AppBar,
  Collapse,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { ExpandMore, MobileMenuButton } from './StyledComponents';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const matches = useMediaQuery('(max-width:426px)');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <AppBar
      position={matches ? 'sticky' : 'fixed'}
      elevation={0}
      sx={{
        background: 'linear-gradient(180deg, #7A0BD2 55%, #943ADB 90%)',
        py: '0.5rem',
        top: 0,
        zIndex: '11000',
      }}
    >
      <Toolbar>
        <Typography
          color='primary'
          variant='h5'
          sx={{
            fontWeight: '800',
            letterSpacing: '2px',
            '@media screen and (max-width: 361px)': {
              fontSize: '1rem',
            },
          }}
        >
          Mohammad Rehan
        </Typography>

        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <MenuIcon />
        </ExpandMore>
      </Toolbar>
      <Collapse
        style={{
          position: 'absolute',
          background: '#943ADB',
          top: '80px',
          width: '100%',
        }}
        in={expanded}
        timeout='auto'
        unmountOnExit
      >
        <Stack direction='column' alignItems='flex-start'>
          <MobileMenuButton setExpanded={setExpanded} link='#home'>
            Home
          </MobileMenuButton>
          <MobileMenuButton setExpanded={setExpanded} link='#about'>
            About Me
          </MobileMenuButton>
          <MobileMenuButton setExpanded={setExpanded} link='#work'>
            My Work
          </MobileMenuButton>
          <MobileMenuButton setExpanded={setExpanded} link='#contact'>
            Contact
          </MobileMenuButton>
        </Stack>
      </Collapse>
    </AppBar>
  );
};

export default MobileNavbar;
