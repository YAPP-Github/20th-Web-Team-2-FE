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

/*
code : 7000 - 작성한 설문이 없을 때
code : 7001 - 매칭 대기중인 상태
code : 7002 - 매칭 성공 후 자신이 결제해야하는 상황 (남자의 경우만 해당)
code : 7003 - 매칭 성공 후 상대가 결제해야하는 상황 (여자의 경우만 해당)
code : 7004 - 모두 결제를 해서 서로의 정보를 확인하는 상황
code : 7005 - 매칭에 실패한 상태
code : 7006 - 상대방 탈퇴로 인한 매칭 취소 상태
*/

type Code = 7000 | 7001 | 7002 | 7003 | 7004 | 7005 | 7006;

export interface DatingMatchingResultResponse {
  code: Code;
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
