import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TourCard from '../components/TourCard';
import cities from '../data.json';

export const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ marginY: 5 }}>
      {cities.map((city) => (
        <Grid key={city.id}>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} Tours
          </Typography>
          <Grid container spacing={3}>
            {city.tours.map((tour) => (
              <TourCard tour={tour} key={tour.id} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default Home;
