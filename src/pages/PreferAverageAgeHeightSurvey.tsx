import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { AgeBox, HeightBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { MIN_AGE, MAX_AGE } from '@/components/domain/survey/AgeBox';
import { MIN_HEIGHT, MAX_HEIGHT } from '@/components/domain/survey/HeightBox';
import { useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';

const PreferAverageAgeHeightSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();

  const [multiAgeOption, setMultiAgeOption] = useState<number[]>([MIN_AGE, MAX_AGE]);
  const [multiHeightOption, setMultiHeightOption] = useState<number[]>([MIN_HEIGHT, MAX_HEIGHT]);

  return (
    <SurveyTemplate
      disableNext={!multiAgeOption || !multiHeightOption}
      totalStep={matchMeeting ? 15 : 12}
      currStep={matchMeeting ? 8 : 9}
      handlePrevClick={() => meetingNavigate(matchMeeting ? Path.PreferDepartmentsSurvey : Path.PreferUniversitiesSurvey)}
      handleNextClick={() => meetingNavigate(matchMeeting ? Path.MindsetSurvey : Path.PreferDepartmentCharacterSurvey)}
    >
      <StyledTitle>
        <strong>선호하는 범위를</strong>
        <br /> 최대한 넓게 알려주세요.
      </StyledTitle>
      <AgeBox setMultiAgeOption={setMultiAgeOption} isMulti>
        나이를 알려주세요.
      </AgeBox>
      <HeightBox setMultiHeightOption={setMultiHeightOption} isMulti>
        키를 알려주세요.
      </HeightBox>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(Title)`
  font-weight: 400;
`;

export default PreferAverageAgeHeightSurvey;
