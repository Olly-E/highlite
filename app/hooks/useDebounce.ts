/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from "react";
/**
 * @param { (...args: any[]) => any } fn
 * @param { number } delay
 * @param { any[] } deps
 *
 */
export const useDebounce = (
  fn: (...args: any[]) => any,
  delay: number,
  deps: any[],
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(fn, deps);

  useEffect(() => {
    // Call the memoized version of callback after the delay
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback]);
};
