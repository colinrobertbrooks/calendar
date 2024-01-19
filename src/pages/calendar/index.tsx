import { useState } from "react";
import { CalendarView } from "../../types";
import {
  getToday,
  getMonthName,
  makeWeekGridData,
  makeMonthGridData,
} from "../../utils";
import { WeekGrid, MonthGrid } from "./views";
import Heading from "./Heading";
import ViewToggle from "./ViewToggle";

export const CalendarPage = () => {
  const [view, setView] = useState<CalendarView>("WEEK");

  const [date] = useState<Date>(getToday);
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="container h-screen mx-auto p-3">
      <div className="flex justify-center">
        <ViewToggle view={view} setView={setView} />
      </div>
      <div className="flex justify-between items-center mb-2">
        <Heading monthName={getMonthName(month)} year={year} />
      </div>
      {(() => {
        switch (view) {
          case "WEEK":
            return <WeekGrid data={makeWeekGridData(date)} />;
          case "MONTH":
            return <MonthGrid data={makeMonthGridData(date)} month={month} />;
        }
      })()}
    </div>
  );
};
