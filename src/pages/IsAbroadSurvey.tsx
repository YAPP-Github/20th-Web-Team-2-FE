/* eslint-disable react/no-children-prop */
import { ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';

const IsAbroadSurvey = () => {
  const [isAbroad, setIsAbroad] = useState('domestic');
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsAbroad(id);
  };
  return (
    <SurveyTemplate disableNext={true} hasProgressBar={false}>
      <Title>
        신원 확인을 위해 <br />
        학교 메일로 인증해주세요.
      </Title>
      <BtnWrapper>
        <ChooseTwoBox height={100} items={ITEMS} selectedOption={isAbroad} onChangeOption={onChangeOption} children={undefined} />
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
  },
  {
    id: 'abroad',
    text: '해외',
  },
];
export default IsAbroadSurvey;
