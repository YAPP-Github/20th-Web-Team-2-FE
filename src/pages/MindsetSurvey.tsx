import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChoiceButton } from '@/components/base';
import styled from 'styled-components';
import { MINDSET_ITEMS } from '@/types/constants/constant';

export type ChoiceOptions = 'ALL' | 'FRIEND' | 'LOVE';

const MindsetSurvey = () => {
  const [checkedOption, setCheckedOption] = useState<ChoiceOptions>('ALL');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setCheckedOption(id as ChoiceOptions);
  };

  return (
    <SurveyTemplate disableNext={!checkedOption} currStep={3} totalStep={10}>
      <Title>
        <strong>미팅의 마인드셋</strong>을
        <br />
        알려주세요.
      </Title>
      <ChoiceButtonWrapper>
        {MINDSET_ITEMS.map(({ name, id, text }) => (
          <ChoiceButton
            name={name}
            size="medium"
            variant="grayBlack"
            id={id}
            onChange={handleChange}
            key={id}
            checked={checkedOption === id}
            height={70}
          >
            {text}
          </ChoiceButton>
        ))}
      </ChoiceButtonWrapper>
    </SurveyTemplate>
  );
};

const ChoiceButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 71px;
`;

export default MindsetSurvey;
