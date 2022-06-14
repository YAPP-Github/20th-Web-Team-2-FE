import React, { useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';

export type ChoiceOptions = 'ALL' | 'GAME' | 'TALK';

const PreferDepartmentCharacterSurvey = () => {
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(DEPARTS);
  const [checkedMultiOption2, setMultiCheckedOption2] = useState<ChooseFourBoxItemProps[]>(CHARACTER);
  return (
    <SurveyTemplate disableNext={!checkedMultiOption || !checkedMultiOption2} currStep={9} totalStep={11}>
      <ChooseFourBox isMulti items={DEPARTS} checkedMultiOption={checkedMultiOption} setMultiCheckedOption={setMultiCheckedOption} top={97}>
        선호하는 학과를 모두 알려주세요.
      </ChooseFourBox>
      <ChooseFourBox isMulti items={CHARACTER} checkedMultiOption={checkedMultiOption2} setMultiCheckedOption={setMultiCheckedOption2} top={97}>
        선호하는 성격을 모두 알려주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

const DEPARTS = [
  {
    id: 'LIBERAL',
    text: '문과',
    name: 'ourDepartments',
    checked: true,
  },
  {
    id: 'SCIENCE',
    text: '이과',
    name: 'ourDepartments',
    checked: true,
  },
  {
    id: 'ATHLETIC',
    text: '체육',
    name: 'ourDepartments',
    checked: false,
  },
  {
    id: 'ART',
    text: '예술',
    name: 'ourDepartments',
    checked: false,
  },
];

const CHARACTER = [
  {
    id: 'VERY_QUIET',
    text: '많이 조용한',
    name: 'character',
    checked: true,
  },
  {
    id: 'A_LITTLE_QUIET',
    text: '조금 조용한',
    name: 'character',
    checked: true,
  },
  {
    id: 'A_LITTLE_ACTIVE',
    text: '조금 활발한',
    name: 'character',
    checked: false,
  },
  {
    id: 'VERY_ACTIVE',
    text: '많이 활발한',
    name: 'character',
    checked: false,
  },
];

export default PreferDepartmentCharacterSurvey;
