import { palette } from '@/lib/styles/palette';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface InputStyle {
  /**
   * focusColor : focus 될 때 border-bottom의 컬러
   */
  focusColor?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputStyle {
  width?: string;
  height?: string;

  /**
   * isFocus : 랜더링시 해당 input에 focus를 할건지?
   */
  isFocus?: boolean;
}

const Input = React.forwardRef(
  (
    { width = '100%', height = '38px', focusColor = palette.primary, isFocus = false, ...rest }: InputProps,
    ref: React.Ref<HTMLInputElement | null>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
    // FIXME: ref 고치기
    return <InputStyled ref={ref} {...rest} height={height} width={width} focusColor={focusColor} isFocus={isFocus} />;
  },
);

Input.displayName = 'Input';

const InputStyled = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-bottom: 0.6px solid rgba(0, 0, 0, 0.6);
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${palette.black};
  outline: none;
  transition: all 0.2s linear;
  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 300;
  }
  :focus {
    border-bottom: 0.6px solid ${({ focusColor }) => focusColor};
  }
`;

export default Input;
