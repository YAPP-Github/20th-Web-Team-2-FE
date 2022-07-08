import { type Characteristic } from '@/types/dating';

export interface CHARACTER_ITEM {
  id: Characteristic;
  text: '많이 조용한' | '조금 조용한' | '조금 활발한' | '많이 활발한';
  name: 'characteristic' | 'preferCharacteristics';
  checked?: boolean;
}

export const CHARACTER_ITEMS: Readonly<CHARACTER_ITEM>[] = [
  {
    id: 'VERY_QUIET',
    text: '많이 조용한',
    name: 'characteristic',
  },
  {
    id: 'A_LITTLE_QUIET',
    text: '조금 조용한',
    name: 'characteristic',
  },
  {
    id: 'VERY_ACTIVE',
    text: '조금 활발한',
    name: 'characteristic',
  },
  {
    id: 'A_LITTLE_ACTIVE',
    text: '많이 활발한',
    name: 'characteristic',
  },
];

export const PREFER_CHARACTER_ITEMS: Readonly<CHARACTER_ITEM>[] = [
  {
    id: 'VERY_QUIET',
    text: '많이 조용한',
    name: 'preferCharacteristics',
  },
  {
    id: 'A_LITTLE_QUIET',
    text: '조금 조용한',
    name: 'preferCharacteristics',
  },
  {
    id: 'A_LITTLE_ACTIVE',
    text: '조금 활발한',
    name: 'preferCharacteristics',
  },
  {
    id: 'VERY_ACTIVE',
    text: '많이 활발한',
    name: 'preferCharacteristics',
  },
];
