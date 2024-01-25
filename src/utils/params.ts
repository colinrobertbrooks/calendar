export const toDateParam = (date: Date) =>
  new Date(date).toISOString().slice(0, 10); // YYYY-MM-DD

export const fromDateParam = (dateParam: string): Date => {
  const date = new Date(dateParam);
  date.setHours(0, 0, 0, 0);
  return date;
};
