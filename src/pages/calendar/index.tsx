import { useState } from "react";
import { Outlet } from "react-router-dom";
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
import DateSelector from "./DateSelector";

export const CalendarPage = () => {
  const [view, setView] = useState<CalendarView>("WEEK");

  const [date, setDate] = useState<Date>(getToday);
  const month = date.getMonth();
  const fullYear = date.getFullYear();

  return (
    <>
      <div className="container flex flex-col h-screen mx-auto p-3">
        <div className="flex justify-center">
          <ViewToggle view={view} setView={setView} />
        </div>
        <div className="flex justify-between items-center mb-2">
          <Heading monthName={getMonthName(month)} fullYear={fullYear} />
          <DateSelector view={view} date={date} setDate={setDate} />
        </div>
        {(() => {
          switch (view) {
            case "WEEK":
              return <WeekGrid data={makeWeekGridData(date)} month={month} />;
            case "MONTH":
              return <MonthGrid data={makeMonthGridData(date)} month={month} />;
          }
        })()}
      </div>
      <Outlet />
    </>
  );
};
