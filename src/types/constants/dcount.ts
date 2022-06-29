import { type DateCount } from '@/types/dating';

export interface MY_DOUNT_ITEM {
  id: DateCount;
  text: '0회' | '1~2회' | '3~4회' | '5회 이상';
  name: 'myDateCount';
}

export const MY_DOUNT_ITEMS: Readonly<MY_DOUNT_ITEM>[] = [
  {
    id: 'ZERO',
    text: '0회',
    name: 'myDateCount',
  },
  {
    id: 'ONETWO',
    text: '1~2회',
    name: 'myDateCount',
  },
  {
    id: 'THREEFOUR',
    text: '3~4회',
    name: 'myDateCount',
  },
  {
    id: 'FIVE',
    text: '5회 이상',
    name: 'myDateCount',
  },
];

export const PREFER_DCOUNT_ITEMS = [
  {
    id: 'ZERO',
    text: '모태솔로',
    name: 'preferDateCount ',
  },
  {
    id: 'ONETWO',
    text: '1~2회',
    name: 'preferDateCount ',
  },
  {
    id: 'THREEFOUR',
    text: '3~4회',
    name: 'preferDateCount ',
  },
  {
    id: 'FIVE',
    text: '5회 이상',
    name: 'preferDateCount ',
  },
];
