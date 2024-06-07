import { createContext, useContext } from 'react';

import dayjs from 'dayjs';

export type ContextType = {
  now: dayjs.Dayjs;
};

export const CurrentDateContext = createContext<ContextType>({
  now: dayjs(),
});

export const useCurrentDate = (): ContextType => useContext(CurrentDateContext);
