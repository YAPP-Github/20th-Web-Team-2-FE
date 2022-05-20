import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string;
  height: string;
}

const InputStyled = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-bottom: 0.6px solid rgba(0, 0, 0, 0.6);
  padding: 5.5px 12px 5.5px 10px;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
  :focus {
    border-bottom: 0.6px solid ${palette.primary};
  }
`;

function Input({ width = '312px', height = '38px', ...rest }: InputProps) {
  return <InputStyled {...rest} />;
}

export default Input;
