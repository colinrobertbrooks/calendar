import { Outlet } from "react-router-dom";
import { MONTH_VIEW, WEEK_VIEW } from "../../constants";
import { useParamsContext } from "../../contexts";
import { useScreen } from "../../hooks";
import {
  makeWeekGridData,
  makeMonthGridData,
  makeListGridData,
  fromDateParam,
} from "../../utils";
import { MonthGrid, WeekGrid, ListGrid } from "./views";
import DateSelector from "./DateSelector";
import Heading from "./Heading";
import ViewToggle from "./ViewToggle";
export const CalendarPage = () => {
  // screen
  const screen = useScreen();

  // params
  const { dateParam, viewParam } = useParamsContext();
  const date = fromDateParam(dateParam);
  const month = date.getMonth();

  return (
    <>
      <div className="container flex flex-col h-screen mx-auto p-3">
        <div className="flex justify-center">
          <ViewToggle />
        </div>
        <div className="flex justify-between items-center mb-2">
          <Heading date={date} />
          <DateSelector />
        </div>
        {(() => {
          if (screen.isXl) {
            switch (viewParam) {
              case MONTH_VIEW: {
                const data = makeMonthGridData(date);
                return <MonthGrid data={data} month={month} />;
              }

              case WEEK_VIEW:
              default: {
                const data = makeWeekGridData(date);
                return <WeekGrid data={data} month={month} />;
              }
            }
          }

          return <ListGrid data={makeListGridData(date, viewParam)} />;
        })()}
      </div>
      <Outlet />
    </>
  );
};
