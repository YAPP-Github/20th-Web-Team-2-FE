import { useState, useEffect } from 'react';

function useCountdown(targetString: string) {
  const [DDHHMMSS, setDDHHMMSS] = useState<[string, string, string, string]>(['00', '00', '00', '00']);

  useEffect(() => {
    const handleCountDown = () => {
      const currentDate = new Date();
      const targetDate = new Date(targetString).getTime();
      const gap = targetDate - currentDate.getTime();
      if (gap >= 0) {
        const gapDays = Math.floor(gap / DAY);
        const gapHours = Math.floor((gap % DAY) / HOURS);
        const gapMinutes = Math.floor((gap % HOURS) / MINUTES);
        const gapSeconds = Math.floor((gap % MINUTES) / SECONDS);

        setDDHHMMSS([getLiteralTime(gapDays), getLiteralTime(gapHours), getLiteralTime(gapMinutes), getLiteralTime(gapSeconds)]);
      }
    };

    const intervalId = setInterval(() => {
      handleCountDown();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetString]);
  return DDHHMMSS;
}

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAY = HOURS * 24;

const getLiteralTime = (time: number) => {
  if (time >= 10) {
    return String(time);
  }

  return `0${time}`;
};

export default useCountdown;
