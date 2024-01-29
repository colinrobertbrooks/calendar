import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks";
import { Event, EventRecord, AddEventPayload } from "../types";
import {
  addSeconds,
  deserializeEventRecord,
  isSameDate,
  serializeEvent,
} from "../utils";

type EventsContextValue = {
  addEvent: (payload: AddEventPayload) => void;
  getEvents: (date: Date) => Event[];
};

const EventsContext = createContext<EventsContextValue>(
  {} as EventsContextValue
);

export const EventsProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [eventRecords, setEventRecord] = useLocalStorage<EventRecord[]>(
    "EVENT_RECORDS",
    []
  );

  const addEvent = (payload: AddEventPayload) => {
    const newEvent = {
      id: new Date().getTime(),
      ...payload,
    };

    // check for overlap
    const newEventStart = newEvent.date.getTime();
    const newEventEnd = addSeconds(newEvent.date, newEvent.duration).getTime();
    const overlapExists = eventRecords.some((eventRecord) => {
      const existingEvent = deserializeEventRecord(eventRecord);
      const existingEventStart = existingEvent.date.getTime();
      const existingEventEnd = addSeconds(
        existingEvent.date,
        existingEvent.duration
      ).getTime();
      return (
        // new contained by existing
        (newEventStart >= existingEventStart &&
          newEventEnd <= existingEventEnd) ||
        // new runs in to existing
        (newEventStart <= existingEventStart &&
          newEventEnd > existingEventStart) ||
        // new runs out of existing (covers new contains existing)
        (newEventStart < existingEventEnd && newEventEnd >= existingEventEnd)
      );
    });
    if (overlapExists) {
      throw new Error("New event overlaps with an existing event.");
    }

    setEventRecord((prevEventRecords) => [
      ...prevEventRecords,
      serializeEvent(newEvent),
    ]);
  };

  const getEvents = (date: Date): Event[] =>
    eventRecords
      .map(deserializeEventRecord)
      .filter((event) => isSameDate(date, new Date(event.date)))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <EventsContext.Provider value={{ addEvent, getEvents }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = (): EventsContextValue =>
  useContext(EventsContext);
