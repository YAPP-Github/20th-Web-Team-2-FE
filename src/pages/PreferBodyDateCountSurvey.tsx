import React, { useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';

const PreferBodyDateCountSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(DEPARTS);
  const [checkedCharacterOption, setCharacterCheckedOption] = useState<CharacterOptions | string>('VERY_QUIET');
  console.log(checkedMultiOption);
  return (
    <SurveyTemplate
      disableNext={!checkedMultiOption || !checkedCharacterOption}
      currStep={10}
      totalStep={11}
      handlePrevClick={() => meetingNavigate(Path.PreferAgeHeightSurvey)}
    >
      <ChooseFourBox isMulti items={DEPARTS} checkedMultiOption={checkedMultiOption} setMultiCheckedOption={setMultiCheckedOption} top={31}>
        선호하는 학과를 모두 알려주세요.
      </ChooseFourBox>
      <ChooseFourBox items={CHARACTER} checkedOption={checkedCharacterOption} setCheckedOption={setCharacterCheckedOption} top={31}>
        선호하는 상대방의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

type CharacterOptions = 'VERY_QUIET' | 'A_LITTLE_QUIET' | 'VERY_ACTIVE' | 'A_LITTLE_ACTIVE';

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
  },
  {
    id: 'A_LITTLE_QUIET',
    text: '조금 조용한',
    name: 'character',
  },
  {
    id: 'A_LITTLE_ACTIVE',
    text: '조금 활발한',
    name: 'character',
  },
  {
    id: 'VERY_ACTIVE',
    text: '많이 활발한',
    name: 'character',
  },
];

export default PreferBodyDateCountSurvey;
