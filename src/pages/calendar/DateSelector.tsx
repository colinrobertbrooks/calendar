import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CalendarView } from "../../types";
import {
  getToday,
  getPreviousWeek,
  getNextWeek,
  getPreviousMonth,
  getNextMonth,
} from "../../utils";

type Props = {
  view: CalendarView;
  date: Date;
  setDate: (date: Date) => void;
};

// TODO(style): button group
const DateSelector = ({ view, date, setDate }: Props) => {
  const handlePrevious = useCallback(() => {
    switch (view) {
      case "WEEK":
        setDate(getPreviousWeek(date));
        break;
      case "MONTH":
        setDate(getPreviousMonth(date));
        break;
    }
  }, [view, date, setDate]);

  const handleToday = () => setDate(getToday());

  const handleNext = useCallback(() => {
    switch (view) {
      case "WEEK":
        setDate(getNextWeek(date));
        break;
      case "MONTH":
        setDate(getNextMonth(date));
        break;
    }
  }, [view, date, setDate]);

  return (
    <div className="flex flex-row gap-2">
      <button onClick={handlePrevious} title="Previous">
        <FaChevronLeft />
      </button>
      <button onClick={handleToday}>Today</button>
      <button onClick={handleNext} title="Next">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default DateSelector;
