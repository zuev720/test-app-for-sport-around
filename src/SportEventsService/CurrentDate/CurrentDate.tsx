import React from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import './current-date.css';

import { useCurrentDate } from '../current-date.context';

const CurrentDate: React.FC = () => {
  const { now } = useCurrentDate();

  return (
    <div className="CurrentDate">
      <div className="current-wrapper-time">
        <span className="time">{`${dayjs(now).format('HH:mm')}`}</span>
      </div>
      <div className="current-wrapper-date">
        <span className="date">{dayjs(now).locale('ru').format('D MMMM')}</span>
        <span className="date">{dayjs(now).locale('ru').format('dddd')}</span>
      </div>
    </div>
  );
};

export default React.memo(CurrentDate);
