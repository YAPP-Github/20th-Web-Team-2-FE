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
  averageHeight: number; // @FIXME: number[] -> number
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
