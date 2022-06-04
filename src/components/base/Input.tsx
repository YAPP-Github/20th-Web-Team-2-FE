import { palette } from '@/lib/styles/palette';
import { InputVariantKeyTypes } from '@/utils/input';
import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

interface InputStyle {
  /**
   * focusColor : focus 될 때 border-bottom의 컬러
   */
  focusColor?: string;

  /***
   * 어떤 형태의 Input 을 가져올건지 결정한다.
   * STANDARD, FILLED,
   */
  variant?: InputVariantKeyTypes;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputStyle {
  width?: string;
  height?: string;

  /**
   * isFocus : 랜더링시 해당 input에 focus를 할건지?
   */
  isFocus?: boolean;
}

const Input = ({ width = '100%', height = '38px', focusColor = palette.primary, variant = 'standard', isFocus = false, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isFocus) {
      console.log(isFocus, 'isFocus');
      inputRef.current.focus();
    }
  }, [isFocus]);
  return <InputStyled ref={inputRef} {...rest} height={height} width={width} focusColor={focusColor} isFocus={isFocus} variant={variant} />;
};

const InputStyled = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${palette.black};
  outline: none;
  transition: all 0.2s linear;
  ::placeholder {
    font-family: Pretendard Variable;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 300;
  }
  ${({ variant, focusColor }) =>
    variant === 'standard'
      ? css`
          padding: 8px;
          border-bottom: 0.6px solid rgba(0, 0, 0, 0.6);
          :focus {
            border-bottom: 0.6px solid ${focusColor};
          }
        `
      : css`
          font-weight: 400;
          padding: 15px 20px 15px 15px;
          border-radius: 4px;
          background-color: ${palette.grayLight};
        `}// 아직 variant가 두개뿐이라 이렇게 했음. 추후에 생기면 추가할 예정
`;

export default Input;
