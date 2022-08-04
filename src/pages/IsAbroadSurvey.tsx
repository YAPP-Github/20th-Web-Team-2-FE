import React, { useState } from 'react';
import { ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import { useMeetingNavigate, useDatingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { COUNTRY_ITEMS } from '@/types/constants/area';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import { useMatch, useNavigate } from 'react-router-dom';
import { type Location } from '@/types/meeting';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import useMatchingType from '@/hooks/survey/useMatchingType';

const IsAbroadSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const navigate = useNavigate();
  const { isUpdate, onUpdateMeetingSurvey, onUpdateDatingSurvey } = useUpdateSurvey();
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [isAbroad, setIsAbroad] = useState<Location>(initMeetingState.isAbroad ? 'ABROAD' : 'DOMESTIC');
  const [isAbroadDating, setIsAbroadDating] = useState<Location>(initDatingState.isAbroad ? 'ABROAD' : 'DOMESTIC');
  const ISABOARD = matchMeeting ? isAbroad : isAbroadDating;
  const [type] = useMatchingType();

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    matchMeeting ? setIsAbroad(id as Location) : setIsAbroadDating(id as Location);
  };

  const handlePrevClick = () => {
    meetingNavigate(matchMeeting ? Path.PlaySurvey : Path.PreferBodyDateCountSurvey);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      if (type === 'meeting') {
        onUpdateMeetingSurvey({ ...initMeetingState, isAbroad: isAbroad === 'ABROAD' ? true : false });
        setMeetingData({ ...initMeetingState, isAbroad: isAbroad === 'ABROAD' ? true : false });
        navigate(ISABOARD === 'ABROAD' ? `/updating/meeting/${Path.AbroadAreasSurvey}` : `/updating/meeting/${Path.DomesticAreasSurvey}`);
      }
      if (type === 'dating') {
        onUpdateDatingSurvey({ ...initDatingState, isAbroad: isAbroadDating === 'ABROAD' ? true : false });
        setDatingData({ ...initDatingState, isAbroad: isAbroadDating === 'ABROAD' ? true : false });
        navigate(ISABOARD === 'ABROAD' ? `/updating/dating/${Path.AbroadAreasSurvey}` : `/updating/dating/${Path.DomesticAreasSurvey}`);
      }
    } else {
      if (initMeetingState) {
        matchMeeting
          ? setMeetingData({ ...initMeetingState, isAbroad: isAbroad === 'ABROAD' ? true : false })
          : setDatingData({ ...initDatingState, isAbroad: isAbroadDating === 'ABROAD' ? true : false });
      }

      meetingNavigate(ISABOARD === 'ABROAD' ? Path.AbroadAreasSurvey : Path.DomesticAreasSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      currStep={matchMeeting ? 11 : 12}
      totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
      handlePrevClick={handlePrevClick}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>
          지금 한국이신가요? <br />
          해외이신가요?
        </strong>
      </Title>
      <BtnWrapper>
        <ChooseTwoBox height={100} items={COUNTRY_ITEMS} selectedOption={matchMeeting ? isAbroad : isAbroadDating} onChangeOption={onChangeOption} />
      </BtnWrapper>
    </SurveyTemplate>
  );
};

const BtnWrapper = styled(FormWrapper)`
  display: flex;
  margin-top: 71px;
`;

export default IsAbroadSurvey;
