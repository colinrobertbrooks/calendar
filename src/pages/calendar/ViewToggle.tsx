import { CalendarView } from "../../types";

type Props = {
  view: CalendarView;
  setView: (view: CalendarView) => void;
};

// TODO(style): button group
const ViewToggle = ({ setView }: Props) => (
  <div className="flex flex-row gap-2">
    <button onClick={() => setView("WEEK")}>Week</button>
    <button onClick={() => setView("MONTH")}>Month</button>
  </div>
);

export default ViewToggle;
