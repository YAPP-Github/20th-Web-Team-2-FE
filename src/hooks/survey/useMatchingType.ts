import { useEffect, useState } from 'react';
import { MatchingStatus } from '@/pages/MatchingPage';
import { useLocation } from 'react-router-dom';

function useMatchingType() {
  const location = useLocation();
  const [type, setType] = useState<keyof MatchingStatus>('meeting');

  useEffect(() => {
    location.pathname.includes('meeting') ? setType('meeting') : setType('dating');
  }, [location.pathname]);

  return [type, setType] as const;
}

export default useMatchingType;
