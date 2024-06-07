import React from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import { useCurrentDate } from '../current-date.context';

const Header: React.FC = () => {
  const { now } = useCurrentDate();

  return (
    <div className="Header">
      <div className="time">{`${dayjs(now).format('HH:mm')}`}</div>
      <div className="date">{`${dayjs(now).locale('ru').format('D MMMM')} • ${dayjs(now).locale('ru').format('dddd')}`}</div>
    </div>
  );
};

export default React.memo(Header);
