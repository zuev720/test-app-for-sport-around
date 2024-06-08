import React from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import './header.css';

import { useCurrentDate } from '../current-date.context';

const Header: React.FC = () => {
  const { now } = useCurrentDate();

  return (
    <div className="Header">
      <span className="time">{`${dayjs(now).format('HH:mm')}`}</span>
      <span className="date">{`${dayjs(now).locale('ru').format('D MMMM')} • ${dayjs(now).locale('ru').format('dddd')}`}</span>
    </div>
  );
};

export default React.memo(Header);
