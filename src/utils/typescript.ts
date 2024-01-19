// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getEnumKeys = (enumObj: any): string[] =>
  Object.keys(enumObj).filter((key) => isNaN(Number(key)));
