import { useState, useEffect } from 'react';
import { useDatingState } from '@/atoms/datingState';
import { type Dating } from '@/types/dating';
import { useSesstionStorage } from './';

function useMeetingSessionState() {
  const { datingData: datingAtomData, setDatingData } = useDatingState();
  const [initDatingState, setInitState] = useState<Dating>(datingAtomData);
  const { getValueFromSessionStorage } = useSesstionStorage();

  useEffect(() => {
    const sessionData = getValueFromSessionStorage('dating');
    if (sessionData) {
      const { datingState } = JSON.parse(sessionData);
      setInitState(datingState);
      return;
    }
    setInitState(datingAtomData);
  }, [datingAtomData]);

  return { initDatingState, setDatingData };
}

export default useMeetingSessionState;
