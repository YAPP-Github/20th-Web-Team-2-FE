import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';

const PreferDepartmentsSurvey = () => {
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(ITEMS);
  console.log(checkedMultiOption, 'checkedMultiOption');

  return (
    <SurveyTemplate disableNext={!checkedMultiOption} currStep={3} totalStep={10}>
      <Title>
        <strong>
          선호하는 학과를
          <br />
          모두 알려주세요.
        </strong>
      </Title>
      <ChooseFourBox isMulti items={ITEMS} checkedMultiOption={checkedMultiOption} setMultiCheckedOption={setMultiCheckedOption} top={97}>
        복수 선택이 가능합니다.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

const ITEMS = [
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

export default PreferDepartmentsSurvey;
