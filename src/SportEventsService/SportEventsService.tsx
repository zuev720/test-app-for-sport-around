import React, { useCallback, useEffect, useMemo, useState } from 'react';

import dayjs from 'dayjs';

import { getEvents } from '../rest/getEvents';

import { CurrentDateContext } from './current-date.context';

import CurrentDate from './CurrentDate';
import Header from './Header';
import NextEvent from './NextEvent';
import MainEvent from './MainEvent';

import IEvent from './interfaces';

const SportEventsService: React.FC = () => {
  const [now, setNow] = useState(dayjs());

  const { data, isLoading, error } = getEvents();

  const getCurrentDate = useCallback(
    () => setInterval(() => setNow(dayjs()), 1000),
    [dayjs]
  );

  useEffect(() => {
    getCurrentDate();

    return () => clearInterval(getCurrentDate());
  }, [getCurrentDate]);

  const events = data?.data.videostandEvents.current_and_upcoming;

  const isEvent = useMemo(
    () => !(isLoading || error || !data || events?.length === 0),
    [isLoading, error]
  );

  const mainEvent = events?.find(
    (event: IEvent) => event.is_main === true || events[0]
  );

  const nextEvent = events?.find((event: IEvent) => event !== mainEvent);

  return (
    <CurrentDateContext.Provider
      value={{
        now,
      }}
    >
      {isEvent && (
        <div className="SportEventsService">
          <Header />
          {mainEvent && <MainEvent {...mainEvent} />}
          {nextEvent && <NextEvent {...nextEvent} />}
        </div>
      )}
      {!isEvent && <CurrentDate />}
    </CurrentDateContext.Provider>
  );
};

export default React.memo(SportEventsService);
