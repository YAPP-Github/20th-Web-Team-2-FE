/* eslint-disable react/no-children-prop */
import { ChooseTwoBox, SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';
import { Abroad } from '@/types/enums';
import { COUNTRY_ITEMS } from '@/types/constants/area';

const IsAbroadSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [isAbroad, setIsAbroad] = useState<Abroad>(Abroad.domestic);
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setIsAbroad(id as Abroad);
  };
  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      currStep={11}
      totalStep={14}
      handlePrevClick={() => meetingNavigate(Path.PlaySurvey)}
      handleNextClick={() => meetingNavigate(isAbroad === Abroad.abroad ? Path.AbroadAreasSurvey : Path.DomesticAreasSurvey)}
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
`;

export default IsAbroadSurvey;
