import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { ChoiceButton } from '@/components/base';
import { GenderOptions } from '@/pages/GenderAverageAgeSurvey';

interface GenderBoxProps {
  genderOption: GenderOptions;
  setGenderOption: React.Dispatch<React.SetStateAction<GenderOptions>>;
  children: React.ReactNode;
}

const GenderBox = ({ genderOption, setGenderOption, children }: GenderBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setGenderOption(id as GenderOptions);
  };

  return (
    <Container>
      <SubTitle>{children}</SubTitle>
      <ButtonWrapper>
        {ITEMS.map((item) => (
          <ChoiceButton
            name="typeOfmeeting"
            size="medium"
            variant="grayBlack"
            id={item.id}
            onChange={handleChange}
            key={item.id}
            checked={genderOption === item.id}
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
    id: 'female',
    text: '여자',
  },
  {
    id: 'male',
    text: '남자',
  },
];

const Container = styled.section`
  width: 100%;
  margin-top: 67px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default GenderBox;
