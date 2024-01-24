import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDialog } from "../../hooks";

export const AddEventPage = () => {
  const { dialogRef, openDialog, closeDialog } = useDialog();

  useEffect(() => {
    openDialog();
    return closeDialog;
  }, []);

  return (
    <dialog
      className="p-6 rounded-xl"
      onCancel={(event) => event.preventDefault()}
      ref={dialogRef}
    >
      <div className="w-full">
        <h1 className="text-xl">Add Event</h1>
        <div className="my-3">
          <input
            aria-label="Select event date and time"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="datetime-local"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded">
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
