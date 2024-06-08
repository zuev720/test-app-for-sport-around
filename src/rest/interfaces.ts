import { RootObject } from 'src/SportEventsService/interfaces';

export default interface FetchData<T> {
  data: RootObject | null;
  isLoading: boolean;
  error: string | null;
}
