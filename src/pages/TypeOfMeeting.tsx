import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import TypeOfMeetingBox from '@/components/domain/survey/TypeOfMeetingBox';

export type ChoiceOptions = 'oneByOne' | 'twoByTwo' | 'threeByThree' | 'fourByFour';

const TypeOfMeeting = () => {
  const [checkedOption, setCheckedOption] = useState<ChoiceOptions>('oneByOne');

  return (
    <SurveyTemplate disableNext={!checkedOption} currStep={3} totalStep={10}>
      <Title>
        원하시는 만남의
        <br />
        유형을 알려주세요.
      </Title>
      <TypeOfMeetingBox checkedOption={checkedOption} setCheckedOption={setCheckedOption} />
    </SurveyTemplate>
  );
};

export default TypeOfMeeting;
