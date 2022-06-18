import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { type Dating } from '@/types/dating';

const { persistAtom } = recoilPersist({
  key: 'dating',
  storage: sessionStorage,
});

const INITIAL_DATING_STATE: Dating = {
  gender: 'FEMALE',
  age: 28,
  myDepartment: 'LIBERAL',
  character: 'A_LITTLE_ACTIVE',
  mbti: '',
  myHeight: 0,
  myBody: 'SKINNY',
  mySmoke: true,
  myDateCount: 'ZERO',
  isSmokeOk: true,
  avoidUniversities: [],
  preferUniversities: [],
  preferAge: [20, 28],
  preferHeight: [140, 180],
  preferDepartments: ['LIBERAL', 'SCIENCE'],
  preferCharacters: ['VERY_QUIET', 'A_LITTLE_QUIET'],
  preferBodies: ['SKINNY', 'SLIM'],
  preferDateCount: 'ZERO',
  isAbroad: false,
  domesticAreas: ['SNW', 'SNE', 'SSW', 'SSE'],
  abroadAreas: [],
  channel: 'FACEBOOK',
  agreement: true,
  kakaoId: '',
};

const datingState = atom<Dating>({
  key: 'dating/datingState',
  default: INITIAL_DATING_STATE,
  effects_UNSTABLE: [persistAtom],
});

const useDatingState = () => {
  const [datingData, setDatingData] = useRecoilState(datingState);

  return {
    datingData,
    setDatingData,
  };
};

export { useDatingState };
