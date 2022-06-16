import { type Gender, Departments, DomesticAreas, Channel } from './meeting';

export type Character = 'VERY_QUIET' | 'A_LITTLE_QUIET' | 'VERY_ACTIVE' | 'A_LITTLE_ACTIVE';
export type Body = 'SKINNY' | 'SLIM' | 'MUSCULAR' | 'CHUBBY';
export type DateCount = 'ZERO' | 'ONETWO' | 'THREEFOUR' | 'FIVE';

export interface Dating {
  gender: Gender;
  age: number;
  myDepartment: Departments;
  character: Character;
  mbti: string;
  myHeight: number;
  myBody: Body;
  mySmoke: boolean;
  myDateCount: DateCount;
  isSmokeOk: boolean;
  avoidUniversities: string[];
  preferUniversities: string[];
  preferAge: number[]; // FIXME: 숫자배열이여야 함
  preferHeight: number[];
  preferDepartments: Departments[];
  preferCharacters: Character[];
  preferBodies: Body[];
  preferDateCount: DateCount;
  isAbroad: boolean;
  domesticAreas: DomesticAreas[]; // FIXME: 배열이여야 함
  abroadAreas: string[];
  channel: Channel;
  agreement: boolean;
  kakaoId: string;
}
