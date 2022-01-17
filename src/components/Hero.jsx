import { Stack, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import { PrimaryButton } from './StyledComponents';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
    });
  }, []);
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent='space-evenly'
      alignItems='center'
      sx={{
        height: '85%',
        '@media screen and (max-width: 878px)': {
          textAlign: 'center',
          justifyContent: 'space-between',
          '& > div': {
            marginTop: '2rem',
          },
        },
      }}
    >
      <Box
        data-aos='zoom-in'
        data-aos-duration='2000'
        sx={{
          maxWidth: '400px',
          mr: { xs: 0, lg: '150px' },
          '& > *': {
            margin: '1rem auto',
          },
          '@media screen and (max-width: 361px)': {
            maxWidth: '340px',
          },
        }}
      >
        <Typography
          variant='h6'
          sx={{
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '800',
            color: '#A8A8A8',
          }}
        >
          Frontend Web Developer
        </Typography>
        <Typography
          variant='h3'
          sx={{
            textTransform: 'capitalize',
            lineHeight: '1.4',
            letterSpacing: '2px',
            fontWeight: '800',
            color: 'white',
            '@media screen and (max-width: 878px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          I make your websites look better
        </Typography>
        <PrimaryButton
          background='#009DE0'
          textcolor='white'
          padding='0.5rem 2rem'
          sx={{
            fontSize: '1.8rem',
            textTransform: 'capitalize',
            mt: 2,
            fontWeight: '700',
          }}
          startIcon={
            <Box
              component='img'
              src='/images/SearchIcon.svg'
              alt='search-icon'
              sx={{
                '@media screen and (max-width: 878px)': {
                  width: '25px',
                },
              }}
            />
          }
        >
          <Link
            href='#work'
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            My Work
          </Link>
        </PrimaryButton>
      </Box>
      <Box>
        <Box
          component='img'
          src='/images/Freelancer.svg'
          alt='search-icon'
          data-aos='zoom-in'
          data-aos-duration='2000'
          sx={{
            '@media screen and (max-width: 361px)': {
              width: '200px',
            },
          }}
        />
      </Box>
    </Stack>
  );
};

export default Hero;
