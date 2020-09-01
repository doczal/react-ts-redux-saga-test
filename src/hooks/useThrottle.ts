import { useCallback, useRef } from "react";

const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  return useCallback(
    (...args) => {
      if (!timeout.current) {
        timeout.current = setTimeout(() => {
          timeout.current = null;
        }, delay);
        callback(...args);
      }
    },
    [callback, delay]
  );
};

export default useThrottle;
