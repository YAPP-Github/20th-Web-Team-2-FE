import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { GenderBox, AgeBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { MIN_AGE, MAX_AGE } from '@/components/domain/survey/AgeBox';

export type GenderOptions = 'female' | 'male';

const MeetingSurvey5 = () => {
  const [genderOption, setGenderOption] = useState<GenderOptions>('female');
  const [ageOption, setAgeOption] = useState(Math.floor((MIN_AGE + MAX_AGE) / 2));

  return (
    <SurveyTemplate disableNext={!ageOption && !genderOption} currStep={3} totalStep={10}>
      <StyledTitle>
        <strong>2:2 미팅</strong>을 선택하셨어요.
        <br />
        몇가지 질문만 대답하시면
        <br />
        바로 매칭해드릴게요!
      </StyledTitle>
      <GenderBox genderOption={genderOption} setGenderOption={setGenderOption}>
        성별을 선택해주세요.
      </GenderBox>
      <AgeBox setAgeOption={setAgeOption}>참여자의 평균 나이를 알려주세요.</AgeBox>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(Title)`
  font-weight: 400;
`;

export default MeetingSurvey5;
