import React, { useState } from 'react';
import { SurveyTemplate, AgeBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { MIN_AGE, MAX_AGE } from '@/components/domain/survey/AgeBox';
import ChooseTwoBox from '@/components/domain/survey/ChooseTwoBox';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';

export type GenderOptions = 'FEMAIL' | 'MALE';

const MyGenderAge = () => {
  const navigate = useNavigate();
  const meetingNavigate = useMeetingNavigate();
  const [genderOption, setGenderOption] = useState<GenderOptions>('FEMAIL');
  const [ageOption, setAgeOption] = useState(Math.floor((MIN_AGE + MAX_AGE) / 2));
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setGenderOption(id as GenderOptions);
  };
  return (
    <SurveyTemplate
      disableNext={!ageOption && !genderOption}
      currStep={3}
      totalStep={10}
      handlePrevClick={() => navigate(Path.TypeOfMeetingSurvey)}
      handleNextClick={() => meetingNavigate(Path.GenderAverageAgeSurvey)}
    >
      <StyledTitle>
        <strong>1:1 소개팅</strong>을 선택하셨어요.
        <br />
        몇가지 질문만 대답하시면
        <br />
        바로 매칭해드릴게요!
      </StyledTitle>
      <ChooseTwoBox items={ITEMS} selectedOption={genderOption} onChangeOption={onChangeOption}>
        성별을 선택해주세요.
      </ChooseTwoBox>
      <AgeBox setAgeOption={setAgeOption}>본인의 나이를 알려주세요</AgeBox>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(Title)`
  font-weight: 400;
`;

const ITEMS = [
  {
    id: 'FEMAIL',
    text: '여자',
    name: 'gender',
  },
  {
    id: 'MAIL',
    text: '남자',
    name: 'gender',
  },
];

export default MyGenderAge;
