import { Dispatch, SetStateAction, useCallback, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = window.localStorage.getItem(key);
    try {
      return value ? JSON.parse(value) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (setter) => {
      const nextValue =
        setter instanceof Function ? setter(storedValue) : setter;
      setStoredValue(nextValue);
      window.localStorage.setItem(key, JSON.stringify(nextValue));
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}
