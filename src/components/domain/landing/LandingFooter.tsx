import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function LandingFooter() {
  return (
    <FooterBox>
      <div>자주 묻는 질문</div>
      <div>연락처</div>
      <div>개인정보 처리방침</div>
      <div> 이용약관</div>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  display: flex;
  margin: 15px 16px 0 16px;
  font-size: 10px;

  justify-content: space-between;
  color: ${palette.grayDarker};
`;

export default LandingFooter;
