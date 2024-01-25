import { Month, DayOfWeek } from "../types";

/*
 *  today
 */
export const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

/*
 *  week
 */
export const getStartOfWeek = (date: Date): Date =>
  new Date(new Date(date).setDate(date.getDate() - date.getDay()));

export const getEndOfWeek = (date: Date): Date =>
  new Date(new Date(date).setDate(date.getDate() + (6 - date.getDay())));

export const getPreviousWeek = (date: Date): Date =>
  new Date(new Date(date).setDate(date.getDate() - 7));

export const getNextWeek = (date: Date): Date =>
  new Date(new Date(date).setDate(date.getDate() + 7));

/*
 *  month
 */
export const getStartOfMonth = (date: Date): Date =>
  new Date(new Date(date).setDate(1));

export const getEndOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const getPreviousMonth = (date: Date): Date =>
  new Date(new Date(date).setMonth(date.getMonth() - 1));

export const getNextMonth = (date: Date): Date =>
  new Date(new Date(date).setMonth(date.getMonth() + 1));

export const getMonthName = (month: Month, short?: boolean): string => {
  const name = Month[month];
  if (short) return name.substring(0, 3);
  return name;
};

/*
 *  day of week
 */
export const getDayOfWeekName = (
  dayOfWeek: DayOfWeek,
  short?: boolean
): string => {
  const name = DayOfWeek[dayOfWeek];
  if (short) return name.substring(0, 3);
  return name;
};
