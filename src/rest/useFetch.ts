import { useState, useEffect, useMemo } from 'react';

import FetchData from './interfaces';
import { RootObject } from 'src/SportEventsService/interfaces';

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
