import React from 'react';

import './next-event.css';

import getDateEvent from '../helpers';

import IEvent from '../interfaces';

const NextEvent: React.FC<IEvent> = ({ title, dt_start, dt_end }) => {
  return (
    <div className="NextEvent">
      <span className="next-date">{getDateEvent(dt_start, dt_end)}</span>
      <p className="next-event-title">{title}</p>
    </div>
  );
};

export default React.memo(NextEvent);
