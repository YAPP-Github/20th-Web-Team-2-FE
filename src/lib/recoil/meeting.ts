import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { type Meeting } from '@/types/meeting';

const { persistAtom } = recoilPersist({
  key: 'meeting',
  storage: sessionStorage,
});

const initialState: Meeting = {
  typeOfMeeting: 'ONE',
  gender: 'FEMALE',
  averageAge: 28,
  ourUniversities: [], // 학교 목록 API response로 (학교id, 학교이름)
  ourDepartments: ['LIBERAL', 'SCIENCE'],
  averageHeight: [140, 180],
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
  key: 'meeting/meetingState',
  default: initialState,
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
