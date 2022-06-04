import React from 'react';
import styled from 'styled-components';
import { ChoiceButton } from '@/components/base';
import { ChoiceOptions } from '@/pages/TypeOfMeetingSurvey';
import { SubTitle } from '@/lib/styles/styledComponents';

interface TypeOfMeetingProps {
  checkedOption: ChoiceOptions;
  setCheckedOption: React.Dispatch<React.SetStateAction<ChoiceOptions>>;
}

const TypeOfMeeting = ({ checkedOption, setCheckedOption }: TypeOfMeetingProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setCheckedOption(id as ChoiceOptions);
  };

  return (
    <Container>
      <SubTitle>1가지를 선택해주세요.</SubTitle>
      <ButtonWrapper>
        {ITEMS.map((item) => (
          <ChoiceButton
            name="typeOfmeeting"
            size="medium"
            variant="grayBlack"
            id={item.id}
            onChange={handleChange}
            key={item.id}
            checked={checkedOption === item.id}
          >
            {item.text}
          </ChoiceButton>
        ))}
      </ButtonWrapper>
    </Container>
  );
};

const ITEMS = [
  {
    id: 'oneByOne',
    text: '1: 1 소개팅',
  },
  {
    id: 'twoByTwo',
    text: '2: 2 미팅',
  },
  {
    id: 'threeBythree',
    text: '3: 3 미팅',
  },
  {
    id: 'fourByfour',
    text: '4: 4 미팅',
  },
];

const Container = styled.section`
  position: absolute;
  top: 40%;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

export default TypeOfMeeting;
