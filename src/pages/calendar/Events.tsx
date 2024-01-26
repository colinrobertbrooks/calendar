import { useEventsContext } from "../../contexts";

type Props = {
  date: Date;
};

const Events = ({ date }: Props) => {
  const { getEvents } = useEventsContext();
  const events = getEvents(date);

  if (!events.length) return null;

  // TODO: style
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>{event.name}</div>
      ))}
    </div>
  );
};

export default Events;
