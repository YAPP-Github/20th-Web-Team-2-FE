import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { Title } from '@/lib/styles/styledComponents';
import { DOMESTICAREAS_ITEMS } from '@/types/constant';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';

const DomesticAreasSurvey = () => {
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(DOMESTICAREAS_ITEMS);
  return (
    <SurveyTemplate disableNext={true} currStep={3} totalStep={10}>
      <Title>
        <strong>미팅이 가능한 지역</strong>을
        <br />
        모두 알려주세요.
      </Title>
      <BtnWrapper>
        <ChooseFourBox
          height={72}
          width={72}
          isMulti
          items={DOMESTICAREAS_ITEMS}
          checkedMultiOption={checkedMultiOption}
          setMultiCheckedOption={setMultiCheckedOption}
        >
          복수 선택이 가능합니다.
        </ChooseFourBox>
      </BtnWrapper>
    </SurveyTemplate>
  );
};

const BtnWrapper = styled(FormWrapper)`
  top: 30%;
`;

export default DomesticAreasSurvey;
