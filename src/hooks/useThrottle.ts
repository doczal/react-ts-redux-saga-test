import { useCallback, useEffect, useState } from "react";

const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
  const [isThrottled, setIsThrottled] = useState(false);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isThrottled) {
      timeout = setTimeout(() => {
        setIsThrottled(false);
      }, delay);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isThrottled, delay]);

  return useCallback(
    (...args) => {
      if (!isThrottled) {
        setIsThrottled(true);
        callback(...args);
      }
    },
    [callback, isThrottled]
  );
};

export default useThrottle;
