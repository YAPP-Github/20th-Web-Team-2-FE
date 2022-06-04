import React, { useState } from 'react';
import SurveyTemplate from '@/components/survey/SurveyTemplate';
import { GenderOfMeeting, AgeOfMeeting } from '@/components/domain';
import { Title } from '@/lib/styles/styledComponents';

export type GenderOptions = 'female' | 'male';

const MeetingSurvey5 = () => {
  const [genderOption, setGenderOption] = useState<GenderOptions>('female');
  const [ageOption, setAgeOption] = useState(27);

  return (
    <SurveyTemplate disableNext={!ageOption && !genderOption} currStep={3} totalStep={10}>
      <Title>
        <strong>2:2 미팅</strong>을 선택하셨어요.
        <br />
        몇가지 질문만 대답하시면
        <br />
        바로 매칭해드릴게요!
      </Title>
      <GenderOfMeeting genderOption={genderOption} setGenderOption={setGenderOption} />
      <AgeOfMeeting setAgeOption={setAgeOption} />
    </SurveyTemplate>
  );
};

export default MeetingSurvey5;
