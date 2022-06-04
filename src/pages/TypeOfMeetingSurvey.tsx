import React, { useState } from 'react';
import { SurveyTemplate, TypeOfMeeting } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';

export type ChoiceOptions = 'oneByOne' | 'twoByTwo' | 'threeByThree' | 'fourByFour';

const TypeOfMeetingSurvey = () => {
  const [checkedOption, setCheckedOption] = useState<ChoiceOptions>('oneByOne');

  return (
    <SurveyTemplate disableNext={!checkedOption} currStep={3} totalStep={10}>
      <Title>
        원하시는 만남의
        <br />
        유형을 알려주세요.
      </Title>
      <TypeOfMeeting checkedOption={checkedOption} setCheckedOption={setCheckedOption} />
    </SurveyTemplate>
  );
};

export default TypeOfMeetingSurvey;
