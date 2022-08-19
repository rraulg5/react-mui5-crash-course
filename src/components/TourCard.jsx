import { AccessTime } from '@mui/icons-material';
import { Box, Grid, Paper, Rating, Typography } from '@mui/material';

export default function TourCard({ imgRandom = 1 }) {
  return (
    <Grid item xs={3}>
      <Paper elevation={5}>
        <img
          src={`https://picsum.photos/800/200?random=${imgRandom}`}
          alt={`img-${imgRandom}`}
        />
        <Box padding={1}>
          <Typography variant="h5" component="h2">
            Immerse into the Falls
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ width: 14 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={2}>
            <Rating value={3.5} precision={0.5} size="small" readOnly />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="body3" component="p" marginLeft={0.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginTop={1.5}>
              From $999
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
