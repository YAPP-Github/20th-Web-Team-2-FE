import { useEffect, useState } from 'react';

function useIntervalPoint() {
  const [intervalPoints, setIntervalPoints] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIntervalPoints((prev) => {
        return prev === INIT_POINT ? 0 : prev + 1;
      });
    }, 800);

    return () => clearInterval(timerId);
  }, []);

  return intervalPoints;
}

const INIT_POINT = 3;

export default useIntervalPoint;
