import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

// const BookingSummary = () => {
//   return (
//     <Paper elevation={3} className="booking-summary-box p-5 mb-3 ml-lg-5">
//       <Typography variant="h6" align="center" gutterBottom>
//         Booking Summary
//       </Typography>
//       <hr />
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={2}>
//           <img src="/img/location-marker-red.png" alt="location-marker" />
//         </Grid>
//         <Grid item xs={8}>
//           <Typography variant="subtitle1">
//             <strong>Botany Town</strong>
//           </Typography>
//           <Typography>
//             Botany Town Centre, 588 Chapel Road, East Tamaki, N7 Orchard Car Park, near New World
//             Auckland 2016 NZ
//           </Typography>
//         </Grid>
//         <Grid item xs={2}>
//           <a href="/booking/branch" data-kmt="1">
//             <img src="/img/edit-pen.svg" alt="edit-location" />
//           </a>
//         </Grid>
//       </Grid>
//       <hr />
//       <div className="text-right mb-2">
//         <a href="/booking/service" data-kmt="1">
//           <img src="/img/edit-pen.svg" alt="edit-service" />
//         </a>
//       </div>
//       <Grid container justifyContent="space-between">
//         <Grid item xs>
//           <Typography variant="subtitle1">
//             <strong>Classic Wash</strong>
//           </Typography>
//         </Grid>
//         <Grid item xs={3} textAlign="right">
//           <Typography variant="subtitle1">
//             <strong>$94</strong>
//           </Typography>
//         </Grid>
//       </Grid>
//       <hr />
//       <div>
//         <Grid container justifyContent="space-between">
//           <Grid item xs>
//             <Typography variant="subtitle1">Total</Typography>
//           </Grid>
//           <Grid item xs={3} textAlign="right">
//             <Typography variant="subtitle1" id="booking-summary-grand-total" xtotal="94">
//               $94
//             </Typography>
//           </Grid>
//         </Grid>
//       </div>
//     </Paper>
//   );
// };

const PickDateTime = () => {
  return (
    <section id="section-fbdt-select-time" style={{ display: 'none' }}>
      {/* Your time selection UI using Material-UI components */}
      {/* ... */}
    </section>
  );
};

const Booking = () => {
  return (
    <section className="mt-3 mt-md-5">
      <Typography variant="h4" align="center" className="mb-4 d-none d-md-block">
        Pick a Date & Time
      </Typography>
     
      <Grid container spacing={2}>
        <Grid item xs={12} lg={7}>
          {/* Your date picker component */}
          <PickDateTime />

        </Grid>
        <Grid item xs={12} lg={5}>
          <div className="row mt-5">
            <div className="col">
              <Button href="/booking/service" variant="contained" color="error" size="large">
                Prev
              </Button>
            </div>
            <div className="col text-right">
              <Button id="btn-fbdt-next" variant="contained" color="primary" size="large">
                Next
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Booking;
