import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WorkCard = ({ name, desc, img, link }) => {
  const matches = useMediaQuery('(max-width:878px) and (min-width:401px)');
  useEffect(() => {
    AOS.init({
      useClassNames: true,
    });
  }, []);
  return (
    <Card
      data-aos={matches ? null : 'flip-left'}
      data-aos-easing={matches ? null : 'ease-out-cubic'}
      data-aos-duration={matches ? null : '2000'}
      sx={{
        p: '2rem 1rem',
        maxWidth: 280,
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <CardMedia
        component='img'
        height='140'
        image={img}
        alt={`${name}-img`}
        sx={{
          boxShadow: '0px 0px 4px 4px #7A0BD2',
          objectFit: 'fill',
          ml: '17px',
          width: '90%',
        }}
      />
      <CardContent sx={{ mt: 1 }}>
        <Typography
          gutterBottom
          color='primary'
          variant='h5'
          component='div'
          sx={{ fontWeight: '700', letterSpacing: '2px' }}
        >
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' size='large'>
          <a
            style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: '700',
            }}
            target='_blank'
            href={link}
            rel='noreferrer'
          >
            Take A Look
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkCard;
