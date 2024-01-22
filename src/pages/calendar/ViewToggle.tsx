import { CalendarView } from "../../types";

type Props = {
  view: CalendarView;
  setView: (view: CalendarView) => void;
};

const btnClassName =
  "py-1 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";

const ViewToggle = ({ view, setView }: Props) => (
  <div className="inline-flex rounded-lg">
    <button
      className={`${btnClassName}${view === "WEEK" ? " !bg-gray-200" : ""}`}
      onClick={() => setView("WEEK")}
    >
      Week
    </button>
    <button
      className={`${btnClassName}${view === "MONTH" ? " !bg-gray-200" : ""}`}
      onClick={() => setView("MONTH")}
    >
      Month
    </button>
  </div>
);

export default ViewToggle;
