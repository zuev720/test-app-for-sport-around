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

export interface RootObject {
  data: VideoStandData;
}

export default interface IEvent {
  title: string;
  is_main: boolean;
  dt_start: string;
  dt_end: string;
  dt_create: string;
}
