import { useState, useEffect } from 'react';
import { useMeetingState } from '@/atoms/meetingState';
import { type Meeting } from '@/types/meeting';
import { useSesstionStorage } from './';

function useMeetingSessionState() {
  const { meetingData: meetingAtomData, setMeetingData } = useMeetingState();
  const [initMeetingState, setInitState] = useState<Meeting>(meetingAtomData);
  const { getValueFromSessionStorage } = useSesstionStorage();

  useEffect(() => {
    const sessionData = getValueFromSessionStorage('meeting');
    if (sessionData) {
      const { meetingState } = JSON.parse(sessionData);
      setInitState(meetingState);
      return;
    }
    setInitState(meetingAtomData);
  }, [meetingAtomData]);

  return { initMeetingState, setMeetingData };
}

export default useMeetingSessionState;
