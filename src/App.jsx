import { Container, Grid } from '@mui/material';
import './App.css';
import TourCard from './components/TourCard';

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <TourCard imgRandom={1} />
        <TourCard imgRandom={2} />
        <TourCard imgRandom={3} />
        <TourCard imgRandom={4} />
      </Grid>
    </Container>
  );
}

export default App;
