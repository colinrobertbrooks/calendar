import { Outlet } from "react-router-dom";
import { MONTH_VIEW, WEEK_VIEW } from "../../constants";
import { useParamsContext } from "../../contexts";
import { useScreen } from "../../hooks";
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

export const CalendarPage = () => {
  // screen
  const screen = useScreen();

  // params
  const { dateParam, viewParam } = useParamsContext();
  const date = fromDateParam(dateParam);
  const month = date.getMonth();
  const monthName = getMonthName(month);
  const fullYear = date.getFullYear();

  if (screen.isXl) {
    return (
      <>
        <div className="container flex flex-col h-screen mx-auto p-3">
          <div className="flex justify-center">
            <ViewToggle />
          </div>
          <div className="flex justify-between items-center mb-2">
            <Heading monthName={monthName} fullYear={fullYear} />
            <DateSelector />
          </div>
          {(() => {
            switch (viewParam) {
              case MONTH_VIEW:
                return (
                  <MonthGrid data={makeMonthGridData(date)} month={month} />
                );
              case WEEK_VIEW:
                return <WeekGrid data={makeWeekGridData(date)} month={month} />;
            }
          })()}
        </div>
        <Outlet />
      </>
    );
  }

  return (
    <>
      TODO
      <Outlet />
    </>
  );
};
