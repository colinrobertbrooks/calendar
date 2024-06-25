import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEventsContext, useParamsContext } from "../../contexts";
import { useDialog } from "../../hooks";
import { toDateParam } from "../../utils";

const inputClassName =
  "border rounded w-full py-2 px-3 text-gray-700 leading-tight";

export const AddEventPage = () => {
  /*
   *  router & params
   */
  const navigate = useNavigate();
  const { dateParam, viewParam } = useParamsContext();
  const navigateBack = () => navigate(-1);

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
  const [eventDate, setEventDate] = useState<string>(`${dateParam}T00:00`);
  const [eventDuration, setEventDuration] = useState<number>(0);
  const [eventName, setEventName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { addEvent } = useEventsContext();
  const handleSubmit = () => {
    const date = new Date(eventDate);
    try {
      setErrorMessage("");
      addEvent({ date, duration: eventDuration, name: eventName });
      navigate(`/?date=${toDateParam(date)}&view=${viewParam}`);
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
      ) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unable to add new event.");
      }
    }
  };

  return (
    <dialog className="p-6 rounded-xl" onCancel={navigateBack} ref={dialogRef}>
      <div className="w-full">
        <h1 className="text-xl">Add Event</h1>
        <div className="grid gap-2 my-3">
          <label htmlFor="event-date">Date</label>
          <input
            aria-label="Select event date and time"
            className={inputClassName}
            id="event-date"
            type="datetime-local"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
          />
          <label htmlFor="event-duration">Duration</label>
          <select
            className={inputClassName}
            id="event-duration"
            value={eventDuration}
            onChange={(event) => setEventDuration(Number(event.target.value))}
          >
            <option value="0" disabled>
              Select duration...
            </option>
            <option value="900">15 minutes</option>
            <option value="1800">30 minutes</option>
            <option value="2700">45 minutes</option>
            <option value="3600">60 minutes</option>
          </select>
          <label htmlFor="event-name">Name</label>
          <input
            aria-label="Enter event name"
            className={inputClassName}
            id="event-name"
            type="text"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          />
        </div>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
        <div className="flex gap-2">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded disabled:opacity-50"
            disabled={!eventDate || !eventDuration || !eventName}
            onClick={handleSubmit}
          >
            Save
          </button>
          <button className="py-1 px-2" onClick={navigateBack}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};
