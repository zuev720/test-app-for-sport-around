import React from 'react';

// import {
//   Typography,
//   Grid,
//   // CircularProgress,
//   // createTheme,
//   // styled,
//   Box,
// } from '@mui/material';

import {
  // CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#294875',
//     },
//     secondary: {
//       main: '#64a2e4',
//     },
//   },
// });

// const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
//   color: theme.palette.primary.main,
//   '& .MuiCircularProgress-circle': {
//     stroke: theme.palette.primary.main,
//   },
// }));

interface IProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SportEventsService: React.FC<IProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  const circulars = [
    {
      color: '#0062B5',
      maxValue: 7,
      timeValue: days,
      period: 'дней',
    },
    {
      color: '#D62F0D',
      maxValue: 24,
      timeValue: hours,
      period: 'часа',
    },
    {
      color: '#FDAE47',
      maxValue: 60,
      timeValue: minutes,
      period: 'минут',
    },
    {
      color: '#51ACD8',
      maxValue: 60,
      timeValue: seconds,
      period: 'секунд',
    },
  ];

  return (
    <div className="main-event-container">
      <header className="main-event-header">
        <p className="current-date">24.07.2021</p>
        <p className="main-event-title">Академия FIG в Ташкенте</p>
      </header>
      <div className="circular-container">
        <button className="button">
          Идет сейчас
          <span className="button-icon">&#9200;</span>
        </button>
        {circulars.map((elem, index) => (
          <div key={index} className="circular-wrapper">
            <CircularProgressbarWithChildren
              value={elem.timeValue}
              maxValue={elem.maxValue}
              styles={buildStyles({
                pathColor: elem.color,
              })}
            >
              <div className="circular-time-container">
                <span className="circular-time">{elem.timeValue}</span>
                <span className="circular-time-value">{elem.period}</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SportEventsService);
