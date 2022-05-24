import { palette } from '@/lib/styles/palette';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface InputStyle {
  /**
   * focusColor : focus 될 때 border-bottom의 컬러
   */
  focusColor?: string;
}

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputStyle {
  width?: string;
  height?: string;

  /**
   * isFocus : 랜더링시 해당 input에 focus를 할건지?
   */
  isFocus?: boolean;
}

const Input = ({
  width = '312px',
  height = '38px',
  focusColor = palette.primary,
  isFocus = false,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <InputStyled
      {...rest}
      height={height}
      width={width}
      focusColor={focusColor}
      isFocus={isFocus}
    />
  );
};

const InputStyled = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-bottom: 0.6px solid rgba(0, 0, 0, 0.6);
  padding: 5.5px 12px 5.5px 10px;
  outline: none;
  transition: all 0.2s linear;
  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  :focus {
    border-bottom: 0.6px solid ${({ focusColor }) => focusColor};
  }
`;

export default Input;
