export const getEnumKeys = <T extends object>(enumObj: T): string[] =>
  Object.keys(enumObj).filter((key) => isNaN(Number(key)));
