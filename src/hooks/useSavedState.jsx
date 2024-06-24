import { useState, useEffect } from "react";

export function useSavedState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
