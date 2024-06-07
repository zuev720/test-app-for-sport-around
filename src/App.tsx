import React from 'react';

import './App.css';
import SportEventsService from './SportEventsService/SportEventsService';
// import { Grid, Typography } from '@mui/material';

// <Grid style={{ width: '100%' }}>
// <Typography>12:15</Typography>
// <Typography>17 июля воскресенье</Typography>
// </Grid>

const App: React.FC = () => {
  return (
    <div className="App">
      <SportEventsService />
    </div>
  );
};

export default React.memo(App);
