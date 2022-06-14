import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChoiceButton } from '@/components/base';
import styled from 'styled-components';
import { PLAY_ITEMS } from '@/types/constant';

export type ChoiceOptions = 'ALL' | 'GAME' | 'TALK';

const PlaySurvey = () => {
  const [checkedOption, setCheckedOption] = useState<ChoiceOptions>('ALL');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setCheckedOption(id as ChoiceOptions);
  };

  return (
    <SurveyTemplate disableNext={!checkedOption} currStep={3} totalStep={10}>
      <Title>
        <strong>술게임 여부</strong>를
        <br />
        알려주세요.
      </Title>
      <ChoiceButtonWrapper>
        {PLAY_ITEMS.map(({ name, id, text }) => (
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

export default PlaySurvey;
