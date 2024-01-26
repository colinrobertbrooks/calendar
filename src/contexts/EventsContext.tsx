import React, { createContext, useContext } from "react";
import { Event } from "../types";
import { useLocalStorage } from "../hooks";
import { isSameDate } from "../utils";

type AddEventPayload = {
  date: Date;
  duration: number; // seconds
  name: string;
};

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
  const [events, setEvents] = useLocalStorage<Event[]>("EVENTS", []);

  const addEvent = ({ date, duration, name }: AddEventPayload) =>
    setEvents((existingEvents) => [
      ...existingEvents,
      {
        id: new Date().getTime(),
        date: date.toISOString(),
        duration,
        name,
      },
    ]);

  const getEvents = (date: Date): Event[] =>
    events
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
