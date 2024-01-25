import { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MONTH_VIEW, WEEK_VIEW } from "../../constants";
import {
  getToday,
  getPreviousWeek,
  getNextWeek,
  getPreviousMonth,
  getNextMonth,
  toDateParam,
  fromDateParam,
} from "../../utils";
import { useParamsContext } from "../../contexts";

const btnClassName =
  "py-1 px-2 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";

const DateSelector = () => {
  const { dateParam, setDateParam, viewParam } = useParamsContext();
  const date = fromDateParam(dateParam);
  const setDate = (nextDate: Date) => setDateParam(toDateParam(nextDate));

  const handlePrevious = useCallback(() => {
    switch (viewParam) {
      case WEEK_VIEW:
        return setDate(getPreviousWeek(date));
      case MONTH_VIEW:
        return setDate(getPreviousMonth(date));
    }
  }, [viewParam, date, setDate]);

  const handleToday = () => setDateParam(toDateParam(getToday()));

  const handleNext = useCallback(() => {
    switch (viewParam) {
      case WEEK_VIEW:
        return setDate(getNextWeek(date));
      case MONTH_VIEW:
        return setDate(getNextMonth(date));
    }
  }, [viewParam, date, setDate]);

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
