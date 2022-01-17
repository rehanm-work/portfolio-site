import { Box } from '@mui/system';
import Carousel from 'react-elastic-carousel';
import { cardData } from '../data';
import WorkCard from './WorkCard';

const CarouselNew = () => {
  return (
    <Box>
      <Carousel>
        {cardData.map((item, index) => {
          return <WorkCard key={index} {...item} />;
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselNew;
