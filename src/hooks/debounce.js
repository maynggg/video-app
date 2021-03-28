import { useState, useEffect } from 'react';

// Custom hook to track keyword typed into the search bar
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay],
  );

  return debouncedValue;
}
