import React from 'react';

import './main-event.css';

import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

import getDateEvent, { getDateValues } from '../helpers';

import { useCurrentDate } from '../current-date.context';

import IEvent from '../interfaces';

const MainEvent: React.FC<IEvent> = ({ title, dt_start, dt_end }) => {
  const { now } = useCurrentDate();

  const { isNow, days, hours, minutes, seconds } = getDateValues(dt_start, now);

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
    <div className="MainEvent">
      <header className="main-event-header">
        <span className="current-date">{getDateEvent(dt_start, dt_end)}</span>
        <span className="main-event-title">{title}</span>
      </header>
      <div className="circular-container">
        {isNow && (
          <button className="button">
            Идет сейчас
            <span className="button-icon">&#9200;</span>
          </button>
        )}
        {!isNow &&
          circulars.map((elem, index) => (
            <div key={index} className="circular-wrapper">
              <CircularProgressbarWithChildren
                value={elem.timeValue}
                minValue={0}
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

export default React.memo(MainEvent);
