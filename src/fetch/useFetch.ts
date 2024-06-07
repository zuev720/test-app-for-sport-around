import { useState, useEffect, useMemo } from 'react';

interface VideoStandEvent {
  title: string;
  is_main: boolean;
  dt_start: string;
  dt_end: string;
  dt_create: string;
}

interface VideoStandEvents {
  current_and_upcoming: VideoStandEvent[];
  finished: VideoStandEvent[];
}

interface VideoStandData {
  videostandEvents: VideoStandEvents;
}

interface RootObject {
  data: VideoStandData;
}

interface FetchData<T> {
  data: RootObject | null;
  isLoading: boolean;
  error: string | null;
}

// interface IBody {
//   body: {
//     query: string;
//     variables: { videostand_id: string };
//   };
// }

const useFetch = <T>(url: string, options?: RequestInit): FetchData<T> => {
  const [data, setData] = useState<RootObject | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useMemo(() => {
    return async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Ошибка при получении данных');
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (!(err instanceof Error)) {
          throw err;
        }
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
