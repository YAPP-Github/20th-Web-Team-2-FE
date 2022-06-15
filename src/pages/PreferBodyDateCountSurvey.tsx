import React, { useState } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { useDatingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { PREFER_DCOUNT_ITEMS } from '@/types/constants/dcount';
import { PREFER_BODY_ITEMS } from '@/types/constants/body';

const PreferBodyDateCountSurvey = () => {
  const datingNavigate = useDatingNavigate();
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(PREFER_BODY_ITEMS);
  const [checkedCharacterOption, setCharacterCheckedOption] = useState('');
  return (
    <SurveyTemplate
      disableNext={!checkedMultiOption && !checkedCharacterOption}
      currStep={10}
      totalStep={11}
      handlePrevClick={() => datingNavigate(Path.PreferAgeHeightSurvey)}
    >
      <ChooseFourBox isMulti items={PREFER_BODY_ITEMS} checkedMultiOption={checkedMultiOption} setMultiCheckedOption={setMultiCheckedOption} top={31}>
        선호하는 체형을 모두 선택해주세요.
      </ChooseFourBox>
      <ChooseFourBox items={PREFER_DCOUNT_ITEMS} checkedOption={checkedCharacterOption} setCheckedOption={setCharacterCheckedOption} top={45}>
        선호하는 상대방의 연애 횟수를 선택해주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default PreferBodyDateCountSurvey;
