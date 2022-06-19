import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '@/lib/styles/styledComponents';
import { ChoiceButton } from '@/components/base';
import { ButtonSizes } from '@/utils/buttons';

interface ChooseTwoBoxProps {
  selectedOption: string;
  onChangeOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  items: Array<{ id: string; text: string; name: string }>;
  size?: ButtonSizes;
  height?: 38 | 48 | 70 | 100;
}

const ChooseTwoBox = ({ selectedOption, onChangeOption, children, items, size = 'medium', ...rest }: ChooseTwoBoxProps) => {
  return (
    <Container>
      {children && <SubTitle> {children}</SubTitle>}
      <ButtonWrapper>
        {items.map((item) => (
          <ChoiceButton
            {...rest}
            name={item.name}
            size={size}
            variant="grayBlack"
            id={item.id}
            onChange={onChangeOption}
            key={item.id}
            checked={item.id === selectedOption}
          >
            {item.text}
          </ChoiceButton>
        ))}
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  margin-top: 67px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default ChooseTwoBox;
