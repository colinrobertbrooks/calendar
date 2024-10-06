import { MONTH_VIEW, WEEK_VIEW } from "../consts";
import {
  getStartOfWeek,
  getEndOfWeek,
  getStartOfMonth,
  getEndOfMonth,
  getDaysInMonth,
  getNextDate,
} from "./dates";

// date can be any date within the week
export const makeWeekGridData = (date: Date): Date[] => {
  const week: Date[] = [];
  let currentDate = getStartOfWeek(date);

  for (let i = 0; i < 7; i++) {
    week.push(currentDate);
    currentDate = getNextDate(currentDate);
  }

  return week;
};

// date can be any date within the month
export const makeMonthGridData = (date: Date): Date[][] => {
  const startDate = getStartOfWeek(getStartOfMonth(date));
  const endDate = getEndOfWeek(getEndOfMonth(date));
  const month: Date[][] = [];
  let week: Date[] = [];
  let currentDate = startDate;

  while (currentDate.getTime() <= endDate.getTime()) {
    week.push(currentDate);
    currentDate = getNextDate(currentDate);

    if (week.length === 7) {
      month.push(week);
      week = [];
    }
  }

  return month;
};

// date can be any date within the week or month
export const makeListGridData = (date: Date, view: string): Date[] => {
  switch (view) {
    case MONTH_VIEW: {
      const daysInMonth = getDaysInMonth(date);
      const month: Date[] = [];
      let currentDate = getStartOfMonth(date);

      for (let i = 0; i < daysInMonth; i++) {
        month.push(currentDate);
        currentDate = getNextDate(currentDate);
      }

      return month;
    }
    case WEEK_VIEW:
    default: {
      return makeWeekGridData(date);
    }
  }
};
