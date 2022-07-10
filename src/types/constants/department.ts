import { type Departments } from '@/types/meeting';

export interface DEPARTMENT_ITEM {
  id: Departments;
  text: '문과' | '이과' | '체육' | '예술';
  name: 'myDepartment' | 'ourDepartments' | 'preferDepartments';
  checked?: boolean;
}

export const MY_DEPARTMENT_ITEMS: Readonly<DEPARTMENT_ITEM>[] = [
  {
    id: 'LIBERAL',
    text: '문과',
    name: 'myDepartment',
  },
  {
    id: 'SCIENCE',
    text: '이과',
    name: 'myDepartment',
  },
  {
    id: 'ATHLETIC',
    text: '체육',
    name: 'myDepartment',
  },
  {
    id: 'ART',
    text: '예술',
    name: 'myDepartment',
  },
];

export const OUR_DEPARTMENT_ITEMS: Readonly<DEPARTMENT_ITEM>[] = [
  {
    id: 'LIBERAL',
    text: '문과',
    name: 'ourDepartments',
  },
  {
    id: 'SCIENCE',
    text: '이과',
    name: 'ourDepartments',
  },
  {
    id: 'ATHLETIC',
    text: '체육',
    name: 'ourDepartments',
  },
  {
    id: 'ART',
    text: '예술',
    name: 'ourDepartments',
  },
];

export const PREFER_DEPARTMENT_ITEMS: Readonly<DEPARTMENT_ITEM>[] = [
  {
    id: 'LIBERAL',
    text: '문과',
    name: 'preferDepartments',
  },
  {
    id: 'SCIENCE',
    text: '이과',
    name: 'preferDepartments',
  },
  {
    id: 'ATHLETIC',
    text: '체육',
    name: 'preferDepartments',
  },
  {
    id: 'ART',
    text: '예술',
    name: 'preferDepartments',
  },
];
