import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChooseFourBox } from '@/components/domain/survey';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';
import { type Meeting } from '@/types/meeting';
import { TYPE_OF_MEETING_ITEMS } from '@/types/constants/constant';
import { useMeetingSessionState } from '@/hooks/common';

const TypeOfMeetingSurvey = () => {
  const navigate = useNavigate();
  const meetingNavigate = useMeetingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [checkedOption, setCheckedOption] = useState<Meeting['typeOfMeeting'] | string>(initMeetingState?.typeOfMeeting);

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, typeOfMeeting: checkedOption as Meeting['typeOfMeeting'] });
    }

    meetingNavigate(Path.GenderAverageAgeSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!checkedOption}
      currStep={1}
      totalStep={14}
      handlePrevClick={() => navigate(Path.AuthMail)}
      handleNextClick={handleNextClick}
    >
      <Title>
        원하시는 만남의
        <br />
        유형을 알려주세요.
      </Title>
      <ChooseFourBox checkedOption={checkedOption} setCheckedOption={setCheckedOption} items={TYPE_OF_MEETING_ITEMS} top={97}>
        1가지를 선택해주세요.
      </ChooseFourBox>
    </SurveyTemplate>
  );
};

export default TypeOfMeetingSurvey;
