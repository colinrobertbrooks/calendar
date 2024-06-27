export const toDateParam = (date: Date) =>
  new Date(date).toISOString().slice(0, 10); // YYYY-MM-DD

export const fromDateParam = (dateParam: string): Date => {
  const date = new Date(`${dateParam}T00:00:00`);
  date.setHours(0, 0, 0, 0);
  return date;
};
