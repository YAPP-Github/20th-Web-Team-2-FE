import { Body, Characteristic } from '@/types/dating';

export type Gender = 'MALE' | 'FEMALE';
export type TypeOfMeeting = 'ONE' | 'TWO' | 'THREE' | 'FOUR';
export type Departments = 'LIBERAL' | 'SCIENCE' | 'ART' | 'ATHLETIC';
export type MindSet = 'ALL' | 'FRIEND' | 'LOVE';
export type Play = 'ALL' | 'GAME' | 'TALK';
export type Location = 'ABROAD' | 'DOMESTIC';
export type DomesticAreas = 'ICN' | 'SNW' | 'SNE' | 'SSW' | 'SSE' | 'GN' | 'GS';
export type Channel = 'FACEBOOK' | 'INSTAGRAM' | 'KAKAOROOM' | 'KAKAOPLUS' | 'FRIEND' | 'COMMUNITY';

export interface Meeting {
  typeOfMeeting: TypeOfMeeting;
  gender: Gender;
  averageAge: number;
  ourUniversities: number[];
  ourDepartments: Departments[];
  averageHeight: number;
  avoidUniversities: number[];
  preferUniversities: number[];
  preferAge: number[];
  preferHeight: number[];
  preferDepartments: Departments[];
  mindset: MindSet;
  play: Play;
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

export interface MeetingMatchingResultResponse {
  code: Code;
  message: string;
  partnerSurvey: MeetingPartnerSurvey;
}

export interface MeetingPartnerSurvey {
  areas: string[];
  averageAge: number;
  averageHeight: number;
  departments: Departments[];
  kakaoId: string;
  mindset: MindSet | '';
  play: Play | '';
  universities: string;
  payDeadline: string;
}
