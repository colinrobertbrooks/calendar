import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useEventsContext } from "../../contexts";
import { useDialog } from "../../hooks";
import { toISOStringShort } from "../../utils";

export const AddEventPage = () => {
  /*
   *  router
   */
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  /*
   *  dialog
   */
  const { dialogRef, openDialog, closeDialog } = useDialog();

  useEffect(() => {
    openDialog();
    return closeDialog;
  }, []);

  /*
   *  event form
   */
  const [eventDate, setEventDate] = useState(`${searchParams.get("dt")}T00:00`);
  const [eventName, setEventName] = useState("");
  const { addEvent } = useEventsContext();
  const handleSubmit = () => {
    const date = new Date(eventDate);
    addEvent({ date, name: eventName });
    navigate(`/?dt=${toISOStringShort(date)}`);
  };

  return (
    <dialog
      className="p-6 rounded-xl"
      onCancel={(event) => event.preventDefault()}
      ref={dialogRef}
    >
      <div className="w-full">
        <h1 className="text-xl">Add Event</h1>
        <div className="grid gap-2 my-3">
          <label htmlFor="event-date">Date</label>
          <input
            aria-label="Select event date and time"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="event-date"
            type="datetime-local"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
          />
          <label htmlFor="event-name">Name</label>
          <input
            aria-label="Enter event name"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="event-name"
            type="text"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded disabled:opacity-50"
            disabled={!eventDate || !eventName}
            onClick={handleSubmit}
          >
            Save
          </button>
          <Link className="py-1 px-2" to="/">
            Cancel
          </Link>
        </div>
      </div>
    </dialog>
  );
};
