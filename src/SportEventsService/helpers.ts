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
