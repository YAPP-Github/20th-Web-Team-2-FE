import React, { useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { PREFER_DEPARTMENT_ITEMS } from '@/types/constants/department';
import { PREFER_CHARACTER_ITEMS } from '@/types/constants/charater';

const PreferDepartmentCharacterSurvey = () => {
  const datingNavigate = useDatingNavigate();
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(PREFER_DEPARTMENT_ITEMS);
  const [checkedMultiOption2, setMultiCheckedOption2] = useState<ChooseFourBoxItemProps[]>(PREFER_CHARACTER_ITEMS);
  return (
    <SurveyTemplate
      disableNext={!checkedMultiOption || !checkedMultiOption2}
      currStep={9}
      totalStep={11}
      handleNextClick={() => datingNavigate(Path.PreferBodyDateCountSurvey)}
      handlePrevClick={() => datingNavigate(Path.PreferAgeHeightSurvey)}
    >
      <ChooseFourBox
        isMulti
        items={PREFER_DEPARTMENT_ITEMS}
        checkedMultiOption={checkedMultiOption}
        setMultiCheckedOption={setMultiCheckedOption}
        top={31}
      >
        선호하는 학과를 모두 알려주세요.
      </ChooseFourBox>
      <ChooseFourBox
        isMulti
        items={PREFER_DEPARTMENT_ITEMS}
        checkedMultiOption={checkedMultiOption2}
        setMultiCheckedOption={setMultiCheckedOption2}
        top={31}
      >
        선호하는 성격을 모두 알려주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferDepartmentCharacterSurvey;
