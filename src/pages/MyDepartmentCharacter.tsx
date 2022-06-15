import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { MY_DEPARTMENT_ITEMS } from '@/types/constants/department';
import { CHARACTER_ITEMS } from '@/types/constants/charater';

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
      <ChooseFourBox top={34} items={MY_DEPARTMENT_ITEMS} checkedOption={checkedDepartmentOption} setCheckedOption={setDepartmentCheckedOption}>
        학과를 선택해주세요
      </ChooseFourBox>
      <ChooseFourBox top={31} items={CHARACTER_ITEMS} checkedOption={checkedCharacterOption} setCheckedOption={setCharacterCheckedOption}>
        본인의 성격을 선택해주세요
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

type DepartmentOptions = 'LIBERAL' | 'SCIENCE' | 'ATHLETIC' | 'ART';
type CharacterOptions = 'VERY_QUIET' | 'A_LITTLE_QUIET' | 'VERY_ACTIVE' | 'A_LITTLE_ACTIVE';

export default MyDepartmentCharacter;
