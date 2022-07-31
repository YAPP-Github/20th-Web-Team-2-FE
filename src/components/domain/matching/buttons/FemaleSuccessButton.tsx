import { Button } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function FemaleSuccessButton() {
  return (
    <ButtonStyled size="medium" variant="grayBlack">
      상대 결제 대기중입니다..
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)`
  color: white;
  font-weight: 700;
  background-color: ${palette.disableColor};
`;

export default FemaleSuccessButton;
