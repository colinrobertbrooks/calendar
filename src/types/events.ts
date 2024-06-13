// in local storage
export type EventRecord = Omit<Event, "date"> & {
  date: string; // iso string
};

// in react state
export type Event = {
  id: number;
  date: Date;
  duration: number; // seconds
  name: string;
};

export type AddEventPayload = Omit<Event, "id">;
