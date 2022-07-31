import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { AgeBox, HeightBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { useMatch, useNavigate } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import Path from '@/router/Path';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const PreferAverageAgeHeightSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const { isUpdate, onUpdateMeetingSurvey } = useUpdateSurvey();
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const navigate = useNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [multiAgeOption, setMultiAgeOption] = useState<number[]>(initMeetingState.preferAge);
  const [multiHeightOption, setMultiHeightOption] = useState<number[]>(initMeetingState.preferHeight);

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateMeetingSurvey({ ...initMeetingState, preferAge: multiAgeOption, preferHeight: multiHeightOption });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        setMeetingData({ ...initMeetingState, preferAge: multiAgeOption, preferHeight: multiHeightOption });
      }

      meetingNavigate(matchMeeting ? Path.PreferDepartmentsSurvey : Path.PreferDepartmentCharacterSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!multiAgeOption || !multiHeightOption}
      totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
      currStep={matchMeeting ? 7 : 9}
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
