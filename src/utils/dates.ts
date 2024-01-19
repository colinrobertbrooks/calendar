import { Month, DayOfWeek } from "../types";

export const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const getStartOfWeek = (date: Date): Date =>
  new Date(new Date(date).setDate(date.getDate() - date.getDay()));

export const getEndOfWeek = (date: Date): Date =>
  new Date(new Date(date).setDate(date.getDate() + (6 - date.getDay())));

export const getStartOfMonth = (date: Date): Date =>
  new Date(new Date(date).setDate(1));

export const getEndOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const getMonthName = (month: Month, short?: boolean): string => {
  const name = Month[month];
  if (short) return name.substring(0, 3);
  return name;
};

export const getDayOfWeekName = (
  dayOfWeek: DayOfWeek,
  short?: boolean
): string => {
  const name = DayOfWeek[dayOfWeek];
  if (short) return name.substring(0, 3);
  return name;
};
