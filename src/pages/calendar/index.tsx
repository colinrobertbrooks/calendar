import { Outlet } from "react-router-dom";
import { useParamsContext } from "../../contexts";
import {
  getMonthName,
  makeWeekGridData,
  makeMonthGridData,
  fromDateParam,
} from "../../utils";
import { WeekGrid, MonthGrid } from "./views";
import Heading from "./Heading";
import ViewToggle from "./ViewToggle";
import DateSelector from "./DateSelector";
import { MONTH_VIEW, WEEK_VIEW } from "../../constants";

export const CalendarPage = () => {
  const { dateParam, viewParam } = useParamsContext();
  const date = fromDateParam(dateParam);
  const month = date.getMonth();
  const fullYear = date.getFullYear();

  return (
    <>
      <div className="container flex flex-col h-screen mx-auto p-3">
        <div className="flex justify-center">
          <ViewToggle />
        </div>
        <div className="flex justify-between items-center mb-2">
          <Heading monthName={getMonthName(month)} fullYear={fullYear} />
          <DateSelector />
        </div>
        {(() => {
          switch (viewParam) {
            case MONTH_VIEW:
              return <MonthGrid data={makeMonthGridData(date)} month={month} />;
            case WEEK_VIEW:
              return <WeekGrid data={makeWeekGridData(date)} month={month} />;
          }
        })()}
      </div>
      <Outlet />
    </>
  );
};
