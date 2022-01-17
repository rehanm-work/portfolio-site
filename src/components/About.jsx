import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { PrimaryButton } from './StyledComponents';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const fetchPdf = () => {
  let pdfLink = document.createElement('a');
  pdfLink.setAttribute('href', '/static/Mohammad-Rehan-Resume-Nov-2021.pdf');
  pdfLink.setAttribute('download', 'Mohammad_Rehan_resume_nov_2021');
  pdfLink.click();
};

const About = () => {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
    });
  }, []);
  return (
    <Box
      component='section'
      id='about'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '80px',
        '@media screen and (max-width: 471px)': {
          p: '115px 0 60px',
        },
        '@media screen and (max-width: 426px)': { p: '11rem 0 10rem' },
      }}
    >
      <Stack
        component='div'
        direction='column'
        justifyContent='space-around'
        alignItems='center'
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='1500'
        sx={{
          height: '80%',
          mt: '80px',
          '@media screen and (max-width: 878px)': {
            margin: 'auto',
            width: '80%',
          },
        }}
      >
        <Typography
          variant='h4'
          sx={{ fontWeight: '700', textTransform: 'uppercase' }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '780px',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Box>
            <Typography
              color='primary'
              variant='h4'
              sx={{
                fontWeight: '700',
                textTransform: 'uppercase',
                '@media screen and (max-width: 471px)': {
                  fontSize: '2rem',
                },
              }}
            >
              Mohammad Rehan
            </Typography>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: '700',
                color: '#A8A8A8',
                letterSpacing: '3px',
              }}
            >
              frontend developer
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              '@media screen and (max-width: 471px)': { fontSize: '1rem' },
            }}
          >
            I am proficient in react.js with a good knowleged of react hooks,
            redux toolkit material ui and styled components in material ui and
            Figma.
          </Typography>
        </Box>
        <PrimaryButton
          background='#009DE0'
          onClick={fetchPdf}
          sx={{
            color: 'white',
            mx: 'auto',
            p: '1rem 5rem',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            fontWeight: '700',
            '@media screen and (max-width: 471px)': {
              p: '1rem 1rem',
            },
            '@media screen and (max-width: 426px)': {
              mt: '2rem',
            },
          }}
          startIcon={
            <Box
              component='img'
              src='/images/download.svg'
              alt='download-icon'
              sx={{ width: '20px' }}
            />
          }
        >
          Download My Resume
        </PrimaryButton>
      </Stack>
    </Box>
  );
};

export default About;
