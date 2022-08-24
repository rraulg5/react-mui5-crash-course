import { Box, Container, Typography } from '@mui/material';
import CustomizedAccordions from '../components/Accordian';
import ImageCollage from '../components/ImageCollage';

export const Tour = () => {
  return (
    <Container sx={{ width: 1200 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <Box sx={{ flex: '2' }}>
          <img
            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
            alt=""
            height={400}
          />
        </Box>
        <Box sx={{ flex: '1' }}>
          <ImageCollage />
        </Box>
      </Box>
      <Box>
        <Typography variant="h3" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="p" component="p" marginTop={3}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta enim
          rem temporibus? Quis magnam iste, possimus libero, unde consequatur
          sequi vel ipsa ut deleniti delectus quibusdam voluptatem temporibus
          blanditiis eligendi. Quos voluptas et dolor corporis impedit
          perspiciatis laudantium molestiae ea.
        </Typography>
      </Box>
      <Box marginBottom={5}>
        <Typography variant="h3" component="h4" marginTop={3} marginBottom={2}>
          FAQ
        </Typography>
        <CustomizedAccordions />
      </Box>
    </Container>
  );
};

export default Tour;
