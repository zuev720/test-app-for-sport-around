import React from 'react';

import getDateEvent from '../helpers';

interface IProps {
  title: string;
  is_main: boolean;
  dt_start: string;
  dt_end: string;
  dt_create: string;
}

const Footer: React.FC<IProps> = ({ title, dt_start, dt_end }) => {
  return (
    <div className="nextEvent">
      <div className="next-date">{getDateEvent(dt_start, dt_end)}</div>
      <div className="next-event">{title}</div>
    </div>
  );
};

export default React.memo(Footer);
