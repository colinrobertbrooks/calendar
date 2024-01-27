import { MONTH_VIEW } from "../../constants";
import { useEventsContext } from "../../contexts";

type Props = {
  date: Date;
  view: string;
};

const MONTH_VIEW_MAX_EVENTS = 2;

const Events = ({ date, view }: Props) => {
  const { getEvents } = useEventsContext();
  const events = getEvents(date);

  if (!events.length) return null;

  const isMonthView = view === MONTH_VIEW;
  const eventsToRender = isMonthView
    ? events.slice(0, MONTH_VIEW_MAX_EVENTS)
    : events;

  return (
    <div className="grid gap-1 mb-1 text-xs ">
      {eventsToRender.map((event) => {
        const date = new Date(event.date);
        const hh = String(date.getHours()).padStart(2, "0");
        const mm = String(date.getMinutes()).padStart(2, "0");

        return (
          <div
            key={event.id}
            className="px-2.5 py-0.5 rounded border border-gray-300"
          >
            <div className="text-gray-500">
              {hh}:{mm}
            </div>
            <div>{event.name}</div>
          </div>
        );
      })}
      {isMonthView && events.length > MONTH_VIEW_MAX_EVENTS && (
        <div className="text-center text-gray-500">
          and {events.length - MONTH_VIEW_MAX_EVENTS} more...
        </div>
      )}
    </div>
  );
};

export default Events;
