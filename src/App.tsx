import React from 'react';

import './App.css';
import SportEventsService from './SportEventsService/SportEventsService';
// import { Grid, Typography } from '@mui/material';

// <Grid style={{ width: '100%' }}>
// <Typography>12:15</Typography>
// <Typography>17 июля воскресенье</Typography>
// </Grid>

const App: React.FC = () => {
  const props = {
    days: 5,
    hours: 2,
    minutes: 24,
    seconds: 46,
  };

  return (
    <div className="App">
      <div className="time-wrapper">
        <div className="time">12:15</div>
        <div className="date">24 июля • суббота</div>
      </div>
      <SportEventsService {...props} />
      <div className="nextEvent">
        <div className="next-date">20.09.2021</div>
        <div className="next-event">
          Звезды современной мировой гимнастики на одном помосте
        </div>
      </div>
    </div>
  );
};

export default React.memo(App);
