import dayjs from 'dayjs';

export default function getDateEvent(dt_start: string, dt_end: string): string {
  const start: dayjs.Dayjs = dayjs(dt_start);
  const end: dayjs.Dayjs = dayjs(dt_end);

  const years: number = dayjs(end).year() - dayjs(start).year();
  const months: number = dayjs(end).month() - dayjs(start).month();
  const days: number = dayjs(end).day() - dayjs(start).day();

  if (years > 0)
    return `${dayjs(dt_start).format('DD.MM.YYYY')} - ${dayjs(dt_end).format('DD.MM.YYYY')}`;

  if (months > 0)
    return `${dayjs(dt_start).format('DD.MM')} - ${dayjs(dt_end).format('DD.MM.YYYY')}`;

  if (days > 0)
    return `${dayjs(dt_start).format('DD')} - ${dayjs(dt_end).format('DD.MM.YYYY')}`;

  return dayjs(dt_start).format('DD.MM.YYYY');
}

export function getDateValues(
  dt_start: string,
  now: dayjs.Dayjs
): {
  isNow: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
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

  return { isNow, days, hours, minutes, seconds };
}
