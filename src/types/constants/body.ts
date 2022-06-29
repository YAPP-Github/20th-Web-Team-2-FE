import { type Body } from '@/types/dating';

export interface MYBODY_ITEM {
  id: Body;
  text: '마른 편' | '슬림 탄탄' | '근육' | '통통한';
  name: 'myBody';
}

export const MYBODY_ITEMS: Readonly<MYBODY_ITEM>[] = [
  {
    id: 'SKINNY',
    text: '마른 편',
    name: 'myBody',
  },
  {
    id: 'SLIM',
    text: '슬림 탄탄',
    name: 'myBody',
  },
  {
    id: 'MUSCULAR',
    text: '근육',
    name: 'myBody',
  },
  {
    id: 'CHUBBY',
    text: '통통한',
    name: 'myBody',
  },
];

export const PREFER_BODY_ITEMS = [
  {
    id: 'SKINNY',
    text: '마른 편',
    name: 'preferBodies',
    checked: false,
  },
  {
    id: 'SLIM',
    text: '슬림 탄탄',
    name: 'preferBodies',
    checked: false,
  },
  {
    id: 'MUSCULAR',
    text: '근육',
    name: 'preferBodies',
    checked: false,
  },
  {
    id: 'CHUBBY',
    text: '통통한',
    name: 'preferBodies',
    checked: false,
  },
];
