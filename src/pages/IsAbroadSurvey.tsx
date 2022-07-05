/* eslint-disable react/no-children-prop */
import { ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { COUNTRY_ITEMS } from '@/types/constants/area';
import { useMeetingSessionState } from '@/hooks/common';
import { type Location } from '@/types/meeting';

const IsAbroadSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [isAbroad, setIsAbroad] = useState<Location>(initMeetingState.isAbroad ? 'ABROAD' : 'DOMESTIC');

  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsAbroad(id as Location);
  };

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, isAbroad: isAbroad === 'ABROAD' ? true : false });
    }

    meetingNavigate(isAbroad === 'ABROAD' ? Path.AbroadAreasSurvey : Path.DomesticAreasSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      currStep={11}
      totalStep={14}
      handlePrevClick={() => meetingNavigate(Path.PlaySurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        지금 한국이신가요? <br />
        해외이신가요?
      </Title>
      <BtnWrapper>
        <ChooseTwoBox height={100} items={COUNTRY_ITEMS} selectedOption={isAbroad} onChangeOption={onChangeOption} />
      </BtnWrapper>
    </SurveyTemplate>
  );
};

const BtnWrapper = styled(FormWrapper)`
  display: flex;
  margin-top: 0px;
`;

export default IsAbroadSurvey;
