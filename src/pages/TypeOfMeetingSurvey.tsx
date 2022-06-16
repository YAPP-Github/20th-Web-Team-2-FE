import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';
import { useMeetingState } from '@/lib/recoil/meeting';
import { type Meeting } from '@/types/meeting';

const TypeOfMeetingSurvey = () => {
  const navigate = useNavigate();
  const meetingNavigate = useMeetingNavigate();
  const [checkedOption, setCheckedOption] = useState<Meeting['typeOfMeeting'] | string>('ONE');
  const { meetingData, setMeetingData } = useMeetingState();

  const ITEMS = [
    {
      name: 'typeOfMeeting',
      id: 'ONE',
      text: '1: 1 소개팅',
    },
    {
      name: 'typeOfMeeting',
      id: 'TWO',
      text: '2: 2 미팅',
    },
    {
      name: 'typeOfMeeting',
      id: 'THREE',
      text: '3: 3 미팅',
    },
    {
      name: 'typeOfMeeting',
      id: 'FOUR',
      text: '4: 4 미팅',
    },
  ];

  const handleNextClick = () => {
    meetingNavigate(Path.GenderAverageAgeSurvey);
    setMeetingData({ ...meetingData, typeOfMeeting: checkedOption as Meeting['typeOfMeeting'] });
  };

  return (
    <SurveyTemplate
      disableNext={!checkedOption}
      currStep={3}
      totalStep={10}
      handlePrevClick={() => navigate(Path.AuthMail)}
      handleNextClick={handleNextClick}
    >
      <Title>
        원하시는 만남의
        <br />
        유형을 알려주세요.
      </Title>
      <ChooseFourBox checkedOption={checkedOption} setCheckedOption={setCheckedOption} items={ITEMS} top={97}>
        1가지를 선택해주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default TypeOfMeetingSurvey;
