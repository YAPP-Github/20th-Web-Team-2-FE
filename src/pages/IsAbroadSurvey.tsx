/* eslint-disable react/no-children-prop */
import { ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { Abroad } from '@/types/data';

const IsAbroadSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [isAbroad, setIsAbroad] = useState<Abroad>(Abroad.domestic);
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsAbroad(id as Abroad);
  };
  return (
    <SurveyTemplate
      disableNext={true}
      hasProgressBar={true}
      currStep={3}
      totalStep={15}
      handlePrevClick={() => meetingNavigate(Path.PlaySurvey)}
      handleNextClick={() => meetingNavigate(Path.DomesticAreasSurvey)}
    >
      <Title>
        지금 한국이신가요? <br />
        해외이신가요?
      </Title>
      <BtnWrapper>
        <ChooseTwoBox height={100} items={ITEMS} selectedOption={isAbroad} onChangeOption={onChangeOption} />
      </BtnWrapper>
    </SurveyTemplate>
  );
};

const BtnWrapper = styled(FormWrapper)`
  display: flex;
`;
const ITEMS = [
  {
    id: 'domestic',
    text: '국내',
    name: 'isAbroad',
  },
  {
    id: 'abroad',
    text: '해외',
    name: 'isAbroad',
  },
];
export default IsAbroadSurvey;
