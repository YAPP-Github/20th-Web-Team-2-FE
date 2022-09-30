import { Button } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function CompleteButton() {
  return (
    <ButtonStyled size="medium" variant="grayBlack">
      이미 결제를 완료하였습니다.
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)`
  color: white;
  font-weight: 700;
  background-color: ${palette.disableColor};
`;

export default CompleteButton;
