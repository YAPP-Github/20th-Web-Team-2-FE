import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { type Meeting } from '@/types/meeting';

const { persistAtom } = recoilPersist({
  key: 'meeting',
  storage: sessionStorage,
});

const INITIAL_MEETING_STATE: Meeting = {
  typeOfMeeting: 'ONE',
  gender: 'FEMALE',
  averageAge: 28,
  ourUniversities: [],
  ourDepartments: ['LIBERAL', 'SCIENCE'],
  averageHeight: 170,
  avoidUniversities: [],
  preferUniversities: [],
  preferAge: [20, 25],
  preferHeight: [140, 180],
  preferDepartments: ['LIBERAL', 'SCIENCE'],
  mindset: 'ALL',
  play: 'ALL',
  isAbroad: false,
  domesticAreas: ['SNW', 'SNE', 'SSW', 'SSE'],
  abroadAreas: [],
  channel: 'FACEBOOK',
  agreement: true,
  kakaoId: '',
};

const meetingState = atom<Meeting>({
  key: 'meetingState',
  default: INITIAL_MEETING_STATE,
  effects_UNSTABLE: [persistAtom],
});

const useMeetingState = () => {
  const [meetingData, setMeetingData] = useRecoilState(meetingState);

  return {
    meetingData,
    setMeetingData,
  };
};

export { useMeetingState };
