import React from 'react';
import styled from 'styled-components';
import { ChoiceButton } from '@/components/base';
import { SubTitle } from '@/lib/styles/styledComponents';

export interface ChooseFourBoxItemProps {
  id: string;
  text: string;
  name: string;
  checked?: boolean;
}

interface ChooseFourBoxProps<T> {
  checkedOption?: T;
  setCheckedOption?: React.Dispatch<React.SetStateAction<T>>;
  checkedMultiOption?: ChooseFourBoxItemProps[];
  setMultiCheckedOption?: React.Dispatch<React.SetStateAction<ChooseFourBoxItemProps[]>>;
  children: React.ReactNode;
  isMulti?: boolean;
  items: ChooseFourBoxItemProps[];
  top?: 31 | 34 | 45 | 97;
  width?: number;
  height?: 38 | 48 | 70 | 72 | 100;
}

const ChooseFourBox = <T extends string>({
  checkedOption,
  setCheckedOption,
  checkedMultiOption,
  setMultiCheckedOption,
  children,
  isMulti = false,
  items,
  top,
  width,
  height,
}: ChooseFourBoxProps<T | string>) => {
  if (isMulti && !setMultiCheckedOption) {
    throw new Error('setMultiCheckedOption is required');
  }
  if (!isMulti && setMultiCheckedOption) {
    throw new Error('isMulti is required');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isMulti && setCheckedOption) {
      const { id } = e.target;
      setCheckedOption(id);
    }
  };

  const handleMultiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isMulti && setMultiCheckedOption) {
      const { id, checked } = e.target;
      setMultiCheckedOption((items) => items.map((item) => (item.id === id ? { ...item, checked } : item)));
    }
  };

  return (
    <Container top={top}>
      <SubTitle>{children}</SubTitle>
      <ButtonWrapper gridSet={width || 999}>
        {isMulti
          ? checkedMultiOption?.map(({ name, id, text, checked }) => (
              <ChoiceButton
                isMultiple
                width={width}
                height={height}
                name={name}
                size="medium"
                variant="grayBlack"
                id={id}
                onChange={handleMultiChange}
                key={id}
                checked={checked}
                invisible={id === 'INVISIVLE' ? true : false}
              >
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

const Container = styled.section<{ top?: number }>`
  width: 100%;
  margin-top: ${({ top }) => (top ? `${top}px` : '45px')};
`;

const ButtonWrapper = styled.div<{ gridSet: number }>`
  display: grid;
  grid-template-columns: ${({ gridSet }) => (gridSet > 100 ? `repeat(2, 1fr)` : `repeat(4, 1fr)`)};
  gap: 8px;
`;

export default React.memo(ChooseFourBox);
