import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Custom hook for debouncing values
 * @param {any} value - The value to debounce
 * @param {number} delay - The delay in milliseconds (default: 500ms)
 * @returns {any} The debounced value
 */
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Custom hook for debouncing callback functions
 * @param {Function} callback - The callback to debounce
 * @param {number} delay - The delay in milliseconds (default: 500ms)
 * @returns {Function} The debounced callback
 */
function useDebounceCallback(callback, delay = 500) {
  const timerRef = useRef(null);

  const debouncedCallback = useCallback((...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
}

export { useDebounce, useDebounceCallback };
export default useDebounce;

