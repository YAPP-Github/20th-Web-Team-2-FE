import { type Gender, Departments, DomesticAreas, Channel } from './meeting';

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
  avoidUniversities: string[];
  preferUniversities: string[];
  preferAge: number[];
  preferHeight: number[];
  preferDepartments: Departments[];
  preferCharacteristics: Characteristic[];
  preferBodies: Body[];
  preferDateCount: DateCount;
  isAbroad: boolean;
  domesticAreas: DomesticAreas[];
  abroadAreas: string[];
  channel: Channel;
  agreement: boolean;
  kakaoId: string;
}
