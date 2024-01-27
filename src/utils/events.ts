import { EventRecord, Event } from "../types";

// from local storage
export const deserializeEventRecord = (eventRecord: EventRecord): Event => ({
  ...eventRecord,
  date: new Date(eventRecord.date),
});

// to local storage
export const serializeEvent = (event: Event): EventRecord => ({
  ...event,
  date: event.date.toISOString(),
});
