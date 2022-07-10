import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  isMulti?: boolean;
  /**
   * important: 전체동의에서 쓸것, true일시 글씨크기,fontweight커짐
   */
  impotrant?: boolean;
}

function CheckBox({ isMulti = true, text, impotrant = false, ...rest }: CheckBoxProps) {
  return isMulti ? (
    <StyledLabel htmlFor={text}>
      <StyledInput type="checkbox" id={text} name={text} {...rest} />
      <StyleText impotrant={impotrant}>{text}</StyleText>
    </StyledLabel>
  ) : (
    <StyledLabel htmlFor={text}>
      <StyledInput type="radio" id={text} name={text} {...rest} />
      <StyleText impotrant={impotrant}>{text}</StyleText>
    </StyledLabel>
  );
}

const StyledInput = styled.input`
  appearance: none;
  border-radius: 0.35rem;
  width: 18px;
  height: 18px;
  background-color: ${palette.grayLight};
  margin: 10px 8px 10px 8px;
  &:checked {
    /** 이미지 인터넷에서 퍼온건데 문제되면 나중에 수정할 예정! */
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 80% 80%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${palette.primary};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyleText = styled.p<{ impotrant: boolean }>`
  font-size: ${({ impotrant }) => (impotrant ? '16px' : '14px')};
  font-weight: ${({ impotrant }) => (impotrant ? '700' : '300')};
  margin: 10px 8px 10px 8px;
`;
export default CheckBox;
