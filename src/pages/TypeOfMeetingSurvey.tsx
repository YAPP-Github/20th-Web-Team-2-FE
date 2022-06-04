import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';

export type ChoiceOptions = 'oneByOne' | 'twoByTwo' | 'threeByThree' | 'fourByFour';

const TypeOfMeetingSurvey = () => {
  const navigate = useNavigate();
  const meetingNavigate = useMeetingNavigate();
  const [checkedOption, setCheckedOption] = useState<ChoiceOptions>('oneByOne');

  const ITEMS = [
    {
      name: 'typeOfmeeting',
      id: 'oneByOne',
      text: '1: 1 소개팅',
    },
    {
      name: 'typeOfmeeting',
      id: 'twoByTwo',
      text: '2: 2 미팅',
    },
    {
      name: 'typeOfmeeting',
      id: 'threeBythree',
      text: '3: 3 미팅',
    },
    {
      name: 'typeOfmeeting',
      id: 'fourByfour',
      text: '4: 4 미팅',
    },
  ];

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
      <ChooseFourBox checkedOption={checkedOption} setCheckedOption={setCheckedOption} items={ITEMS}>
        원하시는 만남의
        <br />
        유형을 알려주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default TypeOfMeetingSurvey;
