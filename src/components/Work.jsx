import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import WorkCard from './WorkCard';
import { cardData } from '../data';
import useMediaQuery from '@mui/material/useMediaQuery';
import CarouselNew from './CarouselNew';

const Work = () => {
  const matches = useMediaQuery('(max-width:878px) and (min-width:401px)');
  return (
    <Box
      component='section'
      id='work'
      sx={{
        backgroundImage: 'linear-gradient(315deg, #7A0BD2 55%, #943ADB 75%)',
        pt: '80px',

        '@media screen and (max-width: 400px)': {
          height: 'auto',
          scrollSnapAlign: 'start',
        },
      }}
    >
      <Stack
        alignItems='center'
        justifyContent='space-evenly'
        sx={{
          height: '100%',
          '@media screen and (max-width: 878px)': {
            height: '80%',
            justifyContent: 'space-between',
          },
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: '700',
            textTransform: 'uppercase',
            color: 'white',
            mt: { xs: '2rem', lg: '4rem' },
            mb: { xs: '2rem', lg: 0 },
          }}
        >
          My Work
        </Typography>

        {matches ? (
          <Box
            sx={{
              width: '-webkit-fill-available',
              '& button': {
                background: 'white',
                '&:hover': {
                  background: 'white',
                },
                '&:active': {
                  background: 'white',
                },
              },
            }}
          >
            <CarouselNew />
          </Box>
        ) : (
          <Stack
            alignItems='stretch'
            justifyContent='space-around'
            direction='row'
            sx={{
              width: '95%',
              '@media screen and (max-width: 471px)': {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                '@media screen and (max-width: 400px)': {
                  '& > *': {
                    my: '1rem',
                  },
                },
              },
            }}
          >
            {cardData.map((item, index) => {
              return <WorkCard key={index} {...item} />;
            })}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Work;
