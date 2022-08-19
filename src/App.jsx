import { Container, Grid, Typography } from '@mui/material';
import './App.css';
import SearchAppBar from './components/AppBar';
import TourCard from './components/TourCard';
import cities from './data.json';

function App() {
  return (
    <>
      <SearchAppBar />
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
    </>
  );
}

export default App;
