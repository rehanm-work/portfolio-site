import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { contactData } from '../data';
import ContactInfo from './ContactInfo';
import Footer from './Footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
    });
  }, []);
  const matches = useMediaQuery('(max-width:768px)');
  return (
    <Box
      component='section'
      id='contact'
      sx={{
        position: 'relative',
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        sx={{
          height: '90%',
          '@media screen and (max-width: 878px)': {
            alignItems: 'flex-start',
          },
          '@media screen and (max-width: 471px)': { p: '4rem 0 10rem' },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 3fr',
            justifyItems: 'center',
            alignItems: 'center',
            width: '90%',
            height: '70%',
            '@media screen and (max-width: 878px)': {
              gridTemplateColumns: '1fr',
            },
          }}
        >
          <Box
            component='img'
            src='/images/contact.svg'
            alt='contact-img'
            sx={{
              width: '300px',
              '@media screen and (max-width: 471px)': {
                width: '200px',
              },
            }}
          />
          {matches ? (
            <hr style={{ width: '80%' }} />
          ) : (
            <Box sx={{ borderLeft: '1px solid #000', height: '80%' }}></Box>
          )}
          <Stack
            direction='column'
            justifyContent='space-around'
            alignItems='flex-start'
            data-aos={matches ? 'zoom-in' : 'fade-left'}
            data-aos-duration='2000'
            sx={{
              height: '60%',
              '@media screen and (max-width: 471px)': {
                '&, *': { fontSize: '1rem !important' },
              },
              '@media screen and (max-width: 425px)': {
                '&, *': { fontSize: '0.9rem !important' },
              },
            }}
          >
            <Typography variant='h4' sx={{ fontWeight: '700' }}>
              CONTACT INFO
            </Typography>
            <Stack
              direction='column'
              justifyContent='space-between'
              sx={{
                height: '60%',
                '@media screen and (max-width: 471px)': {
                  '& > *': {
                    mt: '2rem',
                  },
                },
              }}
            >
              {contactData.map((item, index) => {
                return <ContactInfo key={index} {...item} />;
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Contact;
