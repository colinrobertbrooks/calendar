import { useState } from "react";
import { CalendarView } from "../../types";
import {
  getToday,
  getMonthName,
  getCalendarWeek,
  getCalendarMonth,
} from "../../utils";
import { WeekGrid, MonthGrid } from "./views";
import ViewToggle from "./ViewToggle";

export const CalendarPage = () => {
  const [view, setView] = useState<CalendarView>("WEEK");

  const [selectedDate] = useState<Date>(getToday);
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();

  return (
    <div className="container flex flex-col h-screen mx-auto p-3">
      <div className="flex justify-center">
        <ViewToggle view={view} setView={setView} />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl mb-2">
          <span className="fw-bold">{getMonthName(selectedMonth)}</span>{" "}
          {selectedYear}
        </h1>
      </div>
      {(() => {
        switch (view) {
          case "WEEK":
            return <WeekGrid week={getCalendarWeek(selectedDate)} />;
          case "MONTH":
            return (
              <MonthGrid
                month={getCalendarMonth(selectedDate)}
                selectedMonth={selectedMonth}
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};
