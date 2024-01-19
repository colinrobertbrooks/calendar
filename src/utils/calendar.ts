import {
  getStartOfWeek,
  getEndOfWeek,
  getStartOfMonth,
  getEndOfMonth,
} from "./dates";

// date can be any date within the week
export const makeWeekGridData = (date: Date): Date[] => {
  const week: Date[] = [];
  let currentDate = getStartOfWeek(date);

  for (let i = 0; i < 7; i++) {
    week.push(currentDate);
    currentDate = new Date(
      new Date(currentDate).setDate(currentDate.getDate() + 1)
    );
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
    currentDate = new Date(
      new Date(currentDate).setDate(currentDate.getDate() + 1)
    );

    if (week.length === 7) {
      month.push(week);
      week = [];
    }
  }

  return month;
};
