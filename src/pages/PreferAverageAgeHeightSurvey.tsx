import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { AgeBox, HeightBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import { MIN_AGE, MAX_AGE } from '@/components/domain/survey/AgeBox';
import { MIN_HEIGHT, MAX_HEIGHT } from '@/components/domain/survey/HeightBox';

const PreferAverageAgeHeightSurvey = () => {
  const [multiAgeOption, setMultiAgeOption] = useState<number[]>([MIN_AGE, MAX_AGE]);
  const [multiHeightOption, setMultiHeightOption] = useState<number[]>([MIN_HEIGHT, MAX_HEIGHT]);

  return (
    <SurveyTemplate disableNext={!multiAgeOption && !multiHeightOption} currStep={3} totalStep={10}>
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