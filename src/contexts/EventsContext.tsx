import React, { createContext, useContext } from "react";
import { Event } from "../types";
import { useLocalStorage } from "../hooks";

type AddEventPayload = Pick<Event, "date" | "name">;

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

  const addEvent = (payload: AddEventPayload) =>
    setEvents((existingEvents) => [
      ...existingEvents,
      {
        id: new Date().getTime(),
        ...payload,
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
