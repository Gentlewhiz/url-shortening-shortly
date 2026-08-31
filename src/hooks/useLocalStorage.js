import { useEffect, useState } from "react";

/**
 * Behaves like `useState`, but persists the value to `localStorage` so it
 * survives page refreshes. Falls back gracefully if storage is unavailable
 * (e.g. private browsing).
 *
 * @param {string} key - The localStorage key to read/write.
 * @param {*} initialValue - Value to use when nothing is stored yet.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.warn(`Couldn't read localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Couldn't write localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
