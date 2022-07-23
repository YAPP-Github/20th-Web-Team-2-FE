import { type Gender, Departments, DomesticAreas, Channel, Play, MindSet, TypeOfMeeting } from './meeting';

export type Characteristic = 'VERY_QUIET' | 'A_LITTLE_QUIET' | 'VERY_ACTIVE' | 'A_LITTLE_ACTIVE';
export type Body = 'SKINNY' | 'SLIM' | 'MUSCULAR' | 'CHUBBY';
export type DateCount = 'ZERO' | 'ONETWO' | 'THREEFOUR' | 'FIVE';

export interface Dating {
  gender: Gender;
  age: number;
  myDepartment: Departments;
  characteristic: Characteristic;
  mbti: string;
  myHeight: number;
  myBody: Body;
  mySmoke: boolean;
  myDateCount: DateCount;
  isSmokeOk: boolean;
  avoidUniversities: number[];
  preferUniversities: number[];
  preferAge: number[];
  preferHeight: number[];
  preferDepartments: Departments[];
  preferCharacteristics: Characteristic[];
  preferBodies: Body[];
  preferDateCount: DateCount;
  isAbroad: boolean;
  domesticAreas: DomesticAreas[];
  abroadAreas: number[];
  channel: Channel;
  agreement: boolean;
  kakaoId: string;
}

export interface DatingMatchingResultResponse {
  code: number;
  message: string;
  partnerSurvey: DatingPartnerSurvey;
}

export interface DatingPartnerSurvey {
  age: number;
  areas: string[];
  body: Body | '';
  characteristic: Characteristic | '';
  dateCount: TypeOfMeeting | '';
  department: Departments | '';
  height: number;
  isSmoke: boolean;
  kakaoId: string;
  university: string;
  payDeadline: string;
}
