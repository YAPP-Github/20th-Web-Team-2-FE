import React, { useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { PREFER_DEPARTMENT_ITEMS } from '@/types/constants/department';
import { PREFER_DCOUNT_ITEMS } from '@/types/constants/dcount';

const PreferBodyDateCountSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(PREFER_DEPARTMENT_ITEMS);
  const [checkedCharacterOption, setCharacterCheckedOption] = useState('');
  return (
    <SurveyTemplate
      disableNext={!checkedMultiOption && !checkedCharacterOption}
      currStep={10}
      totalStep={11}
      handlePrevClick={() => meetingNavigate(Path.PreferAgeHeightSurvey)}
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
      <ChooseFourBox items={PREFER_DCOUNT_ITEMS} checkedOption={checkedCharacterOption} setCheckedOption={setCharacterCheckedOption} top={45}>
        선호하는 상대방의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferBodyDateCountSurvey;
