import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks";
import { Event, EventRecord, AddEventPayload } from "../types";
import { deserializeEventRecord, isSameDate, serializeEvent } from "../utils";

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

  const addEvent = (payload: AddEventPayload) =>
    setEventRecord((prevEventRecords) => [
      ...prevEventRecords,
      serializeEvent({
        id: new Date().getTime(),
        ...payload,
      }),
    ]);

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
