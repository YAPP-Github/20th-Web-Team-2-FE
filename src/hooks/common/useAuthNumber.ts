import { useState, useEffect } from 'react';

function useAuthNumber(targetSeconds: number) {
  const [target, setTarget] = useState<number>(targetSeconds);
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    // @NOTE: 비동기라 1개씩 차이나서 0이 아닌 1 이상일 때만 interval
    if (target > 1) {
      const intervalId = setInterval(() => {
        setTarget((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [target]);

  useEffect(() => {
    const handleCountDown = (target: number) => {
      const minutes = Math.floor(target / 60);
      const seconds = Math.floor(target % 60);
      setMinutes(String(minutes));
      setSeconds(getLiteralTime(seconds));
    };
    handleCountDown(target - 1);
  }, [target]);
  return { minutes, seconds, setTarget };
}

const getLiteralTime = (time: number) => {
  if (time >= 10) {
    return String(time);
  }

  return `0${time}`;
};

export default useAuthNumber;
