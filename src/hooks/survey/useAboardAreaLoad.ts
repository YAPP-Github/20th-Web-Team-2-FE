import { getAboardAreaAPI } from '@/lib/api/area';
import { useEffect, useState } from 'react';

function useAboardAreaLoad() {
  const [area, setArea] = useState([]);
  useEffect(() => {
    const getAboardArea = async () => {
      const data = await getAboardAreaAPI();
      setArea(data);
    };
    getAboardArea();
  }, []);

  return { area };
}

export default useAboardAreaLoad;
