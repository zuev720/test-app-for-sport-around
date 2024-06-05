import React from 'react';

import {
  Typography,
  Grid,
  CircularProgress,
  // createTheme,
  styled,
  Box,
} from '@mui/material';

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

const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiCircularProgress-circle': {
    stroke: theme.palette.primary.main,
  },
}));

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
  return (
    <Box style={{ width: '100%', height: 459, background: '#1E3465' }}>
      <Grid>
        <Grid>
          <Typography>12:15</Typography>
          <Typography>17 июля воскресенье</Typography>
        </Grid>
        <Grid>
          <Typography>24.07.2021</Typography>
          <Typography>Академия FIG в Ташкенте</Typography>
        </Grid>
        <Grid>
          <Box>
            <CustomCircularProgress
              variant="determinate"
              value={days}
              size={31}
            />
            <Typography>{days}</Typography>
            <Typography>дней</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <CircularProgress
              variant="determinate"
              value={hours}
              size={24}
              color="error"
            />
            <Typography>{hours}</Typography>
            <Typography>часов</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <CircularProgress
              variant="determinate"
              value={minutes}
              size={60}
              color="warning"
            />
            <Typography>{minutes}</Typography>
            <Typography>минут</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <CircularProgress
              variant="determinate"
              value={seconds}
              size={60}
              color="secondary"
            />
            <Typography>{seconds}</Typography>
            <Typography variant="caption" color="#ffffff">
              секунд
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Typography>20.09.2021</Typography>
          <Typography>
            Звёзды современной мировой гимнастики на одном помосте
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(SportEventsService);
