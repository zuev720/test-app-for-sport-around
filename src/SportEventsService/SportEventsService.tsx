import React, { useCallback, useEffect, useState } from 'react';

import useFetch from 'src/fetch/useFetch';
import CurrentEvent from './CurrentEvent/CurrentEvent';
import { CurrentDateContext } from './current-date.context';
import dayjs from 'dayjs';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const SportEventsService: React.FC = () => {
  const [now, setNow] = useState(dayjs());

  const getCurrentDate = useCallback(
    () => setInterval(() => setNow(dayjs()), 1000),
    [dayjs]
  );

  useEffect(() => {
    getCurrentDate();
  }, [getCurrentDate]);

  const { data, isLoading, error } = useFetch(
    'https://beta.sosportom.ru/graphql/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        query:
          'query videostandEvents ($videostand_id: ID!) { videostandEvents(videostand_id: $videostand_id) { current_and_upcoming { title, is_main, dt_start, dt_end, dt_create }, finished { title, is_main, dt_start, dt_end, dt_create } } }',
        variables: { videostand_id: '6' },
      }),
    }
  );

  if (isLoading || !data) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  } else {
    return (
      <CurrentDateContext.Provider
        value={{
          now,
        }}
      >
        <div className="SportEventsService">
          <Header />
          <CurrentEvent
            {...data?.data.videostandEvents.current_and_upcoming[0]}
          />
          <Footer {...data?.data.videostandEvents.current_and_upcoming[1]} />
        </div>
      </CurrentDateContext.Provider>
    );
  }
};

export default React.memo(SportEventsService);
