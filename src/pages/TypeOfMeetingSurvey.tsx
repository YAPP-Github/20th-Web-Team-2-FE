import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import TypeOfMeetingBox from '@/components/domain/survey/TypeOfMeetingBox';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';

export type ChoiceOptions = 'oneByOne' | 'twoByTwo' | 'threeByThree' | 'fourByFour';

const TypeOfMeetingSurvey = () => {
  const navigate = useNavigate();
  const meetingNavigate = useMeetingNavigate();
  const [checkedOption, setCheckedOption] = useState<ChoiceOptions>('oneByOne');

  return (
    <SurveyTemplate
      disableNext={!checkedOption}
      currStep={3}
      totalStep={10}
      handlePrevClick={() => navigate(Path.AuthMail)}
      handleNextClick={() => meetingNavigate(Path.GenderAverageAgeSurvey)}
    >
      <Title>
        원하시는 만남의
        <br />
        유형을 알려주세요.
      </Title>
      <TypeOfMeetingBox checkedOption={checkedOption} setCheckedOption={setCheckedOption} />
    </SurveyTemplate>
  );
};

export default TypeOfMeetingSurvey;
