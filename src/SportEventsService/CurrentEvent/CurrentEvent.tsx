import React from 'react';

import dayjs from 'dayjs';

import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

import getDateEvent from '../helpers';

import { useCurrentDate } from '../current-date.context';

interface IProps {
  title: string;
  is_main: boolean;
  dt_start: string;
  dt_end: string;
  dt_create: string;
}

const CurrentEvent: React.FC<IProps> = ({ title, dt_start, dt_end }) => {
  const { now } = useCurrentDate();

  const start: dayjs.Dayjs = dayjs(dt_start);

  const differenceInDays: number = start.diff(now, 'days');
  const differenceInHours: number = start.diff(now, 'hours');
  const differenceInMinutes: number = start.diff(now, 'minutes');
  const differenceInSeconds: number = start.diff(now, 'seconds');

  const isNow = differenceInSeconds < 0;

  const days =
    differenceInDays % 7 === 0 || differenceInDays === 7
      ? 7
      : differenceInDays % 7;

  const hours: number =
    differenceInHours % 24 === 0 ? 23 : differenceInHours % 24;

  const minutes: number =
    differenceInMinutes % 60 === 0 ? 59 : differenceInMinutes % 60;

  const seconds: number =
    differenceInSeconds % 60 === 0 ? 60 : differenceInSeconds % 60;

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
    <div className="CurrentEvent">
      <header className="main-event-header">
        <p className="current-date">{getDateEvent(dt_start, dt_end)}</p>
        <p className="main-event-title">{title}</p>
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

export default React.memo(CurrentEvent);
