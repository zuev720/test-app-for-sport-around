import useFetch from './useFetch';

import { RootObject } from 'src/SportEventsService/interfaces';
import FetchData from './interfaces';

export const getEvents = (): FetchData<RootObject> =>
  useFetch('https://beta.sosportom.ru/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      query:
        'query videostandEvents ($videostand_id: ID!) { videostandEvents(videostand_id: $videostand_id) { current_and_upcoming { title, is_main, dt_start, dt_end, dt_create }, finished { title, is_main, dt_start, dt_end, dt_create } } }',
      variables: { videostand_id: '6' },
    }),
  });
