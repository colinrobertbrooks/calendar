export type Event = {
  id: number;
  date: Date;
  duration: number; // seconds
  name: string;
};

// in local storage
export type EventRecord = Omit<Event, "date"> & {
  date: string; // iso string
};

export type AddEventPayload = Omit<Event, "id">;
