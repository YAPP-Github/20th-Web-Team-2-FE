import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';

const MyDepartmentCharacter = () => {
  const [checkedDepartmentOption, setDepartmentCheckedOption] = useState<DepartmentOptions | string>('LIBERAL');
  const [checkedCharacterOption, setCharacterCheckedOption] = useState<CharacterOptions | string>('VERY_QUIET');

  return (
    <SurveyTemplate disableNext={!checkedDepartmentOption && !checkedCharacterOption} currStep={3} totalStep={10}>
      <Title>
        <strong>본인에 대한 것을</strong>
        <br />
        선택해주세요.
      </Title>
      <ChooseFourBox items={DEPARTMENT_ITEMS} checkedOption={checkedDepartmentOption} setCheckedOption={setDepartmentCheckedOption}>
        학과를 선택해주세요
      </ChooseFourBox>
      <ChooseFourBox items={CHARACTER_ITEMS} checkedOption={checkedCharacterOption} setCheckedOption={setCharacterCheckedOption}>
        본인의 성격을 선택해주세요
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

type DepartmentOptions = 'LIBERAL' | 'SCIENCE' | 'ATHLETIC' | 'ART';
type CharacterOptions = 'VERY_QUIET' | 'A_LITTLE_QUIET' | 'VERY_ACTIVE' | 'A_LITTLE_ACTIVE';

const DEPARTMENT_ITEMS = [
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

const CHARACTER_ITEMS = [
  {
    id: 'VERY_QUIET',
    text: '많이 조용한',
    name: 'character',
  },
  {
    id: 'A_LITTLE_QUIET',
    text: '조금 조용한',
    name: 'character',
  },
  {
    id: 'VERY_ACTIVE',
    text: '조금 활발한',
    name: 'character',
  },
  {
    id: 'A_LITTLE_ACTIVE',
    text: '많이 활발한',
    name: 'character',
  },
];

export default MyDepartmentCharacter;
