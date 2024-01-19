import { useState } from "react";
import { CalendarView } from "../../types";
import {
  getToday,
  getMonthName,
  getCalendarWeek,
  getCalendarMonth,
} from "../../utils";
import { WeekGrid, MonthGrid } from "./views";
import Heading from "./Heading";
import ViewToggle from "./ViewToggle";

export const CalendarPage = () => {
  const [view, setView] = useState<CalendarView>("WEEK");

  const [selectedDate] = useState<Date>(getToday);
  const selectedMonth = selectedDate.getMonth();
  const selectedYear = selectedDate.getFullYear();

  return (
    <div className="container h-screen mx-auto p-3">
      <div className="flex justify-center">
        <ViewToggle view={view} setView={setView} />
      </div>
      <div className="flex justify-between items-center mb-2">
        <Heading
          selectedMonthName={getMonthName(selectedMonth)}
          selectedYear={selectedYear}
        />
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
        }
      })()}
    </div>
  );
};
