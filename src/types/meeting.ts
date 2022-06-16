export type Gender = 'MALE' | 'FEMALE';
export type TypeOfMeeting = 'ONE' | 'TWO' | 'THREE' | 'FOUR';
export type Departments = 'LIBERAL' | 'SCIENCE' | 'ART' | 'ATHLETIC';
export type MindSet = 'ALL' | 'FRIEND' | 'LOVE';
export type Play = 'ALL' | 'GAME' | 'TALK';
export type DomesticAreas = 'ICN' | 'SNW' | 'SNE' | 'SSW' | 'SSE' | 'GN' | 'GS';
export type Channel = 'FACEBOOK' | 'INSTAGRAM' | 'KAKAOROOM' | 'KAKAOPLUS' | 'FRIEND' | 'COMMUNITY';

export interface Meeting {
  typeOfMeeting: TypeOfMeeting; // FIXME: 배열아님
  gender: Gender;
  averageAge: number;
  ourUniversities: number[];
  ourDepartments: Departments[];
  averageHeight: number[]; // FIXME: 복수로 들어가야 함 ex) 140 ~ 180 이면 [140, 180];
  avoidUniversities: number[];
  preferUniversities: number[];
  preferAge: number[];
  preferHeight: number[];
  preferDepartments: string[];
  mindset: MindSet;
  play: Play;
  isAbroad: boolean;
  domesticAreas: DomesticAreas[]; // FIXME: 복수로 들어가야 함
  abroadAreas: number[];
  channel: Channel;
  agreement: boolean;
  kakaoId: string;
}
