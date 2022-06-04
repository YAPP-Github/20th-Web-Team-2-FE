import React from 'react';
import styled from 'styled-components';
import { ChoiceButton } from '@/components/base';
import { ChoiceOptions } from '@/pages/TypeOfMeetingSurvey';
import { SubTitle } from '@/lib/styles/styledComponents';

export interface ChooseFourBoxItemProps {
  id: string;
  text: string;
  name: string;
  checked?: boolean;
}

interface ChooseFourBoxProps {
  checkedOption?: ChoiceOptions;
  setCheckedOption?: React.Dispatch<React.SetStateAction<ChoiceOptions>>;
  checkedMultiOption?: ChooseFourBoxItemProps[];
  setMultiCheckedOption?: React.Dispatch<React.SetStateAction<ChooseFourBoxItemProps[]>>;
  children: React.ReactNode;
  isMulti?: boolean;
  items: ChooseFourBoxItemProps[];
}

const ChooseFourBox = ({
  checkedOption,
  setCheckedOption,
  checkedMultiOption,
  setMultiCheckedOption,
  children,
  isMulti = false,
  items,
}: ChooseFourBoxProps) => {
  if (isMulti && !setMultiCheckedOption) {
    throw new Error('setMultiCheckedOption is required');
  }
  if (!isMulti && setMultiCheckedOption) {
    throw new Error('isMulti is required');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isMulti && setCheckedOption) {
      const { id } = e.target;
      setCheckedOption(id as ChoiceOptions);
    }
  };

  const handleMultiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isMulti && setMultiCheckedOption) {
      const { id, checked } = e.target;
      setMultiCheckedOption((items) => items.map((item) => (item.id === id ? { ...item, checked } : item)));
    }
  };

  return (
    <Container>
      <SubTitle>{children}</SubTitle>
      <ButtonWrapper>
        {isMulti
          ? checkedMultiOption?.map(({ name, id, text, checked }) => (
              <ChoiceButton isMultiple name={name} size="medium" variant="grayBlack" id={id} onChange={handleMultiChange} key={id} checked={checked}>
                {text}
              </ChoiceButton>
            ))
          : items.map(({ name, id, text }) => (
              <ChoiceButton name={name} size="medium" variant="grayBlack" id={id} onChange={handleChange} key={id} checked={checkedOption === id}>
                {text}
              </ChoiceButton>
            ))}
      </ButtonWrapper>
    </Container>
  );
};

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

export default ChooseFourBox;