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

const btnClassName =
  "py-1 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";

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
    <div className="inline-flex rounded-lg">
      <button
        className={btnClassName}
        onClick={handlePrevious}
        title="Previous"
      >
        <FaChevronLeft />
      </button>
      <button className={btnClassName} onClick={handleToday}>
        Today
      </button>
      <button className={btnClassName} onClick={handleNext} title="Next">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default DateSelector;
