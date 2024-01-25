import React, { createContext, useContext } from "react";
import { Event } from "../types";
import { useLocalStorage } from "../hooks";

type AddEventPayload = {
  date: Date;
  duration: number; // seconds
  name: string;
};

type EventsContextValue = {
  addEvent: (payload: AddEventPayload) => void;
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

  console.log({ events }); // WIP

  return (
    <EventsContext.Provider value={{ addEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = (): EventsContextValue =>
  useContext(EventsContext);
