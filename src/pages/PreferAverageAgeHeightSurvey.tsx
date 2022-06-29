import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { AgeBox, HeightBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import Path from '@/router/Path';

const PreferAverageAgeHeightSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();

  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [multiAgeOption, setMultiAgeOption] = useState<number[]>(initMeetingState.preferAge);
  const [multiHeightOption, setMultiHeightOption] = useState<number[]>(initMeetingState.preferHeight);

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, preferAge: multiAgeOption, preferHeight: multiHeightOption });
    }

    meetingNavigate(matchMeeting ? Path.MindsetSurvey : Path.PreferDepartmentCharacterSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!multiAgeOption || !multiHeightOption}
      totalStep={matchMeeting ? 14 : 12}
      currStep={matchMeeting ? 8 : 9}
      handlePrevClick={() => meetingNavigate(Path.PreferUniversitiesSurvey)}
      handleNextClick={handleNextClick}
    >
      <StyledTitle>
        <strong>선호하는 범위를</strong>
        <br /> 최대한 넓게 알려주세요.
      </StyledTitle>
      <AgeBox multiAgeOption={multiAgeOption} setMultiAgeOption={setMultiAgeOption} isMulti>
        나이를 알려주세요.
      </AgeBox>
      <HeightBox multiHeightOption={multiHeightOption} setMultiHeightOption={setMultiHeightOption} isMulti>
        키를 알려주세요.
      </HeightBox>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(Title)`
  font-weight: 400;
`;

export default PreferAverageAgeHeightSurvey;
