import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 14,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

export default function TourCard({ tour }) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={5}>
          <img className="img-tour-list" src={tour.image} alt={tour.name} />
          <Box padding={1}>
            <Typography variant="h6" component="h2">
              {tour.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime sx={{ width: 14 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={2}>
              <Rating
                value={tour.rating}
                precision={0.5}
                size="small"
                readOnly
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={2}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={1.5}>
                From ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}
