import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

function LandingFooter() {
  return (
    <FooterLayout>
      <FooterContents>
        <li>자주 묻는 질문</li>
        <li>연락처</li>
        <li>개인정보 처리방침</li>
        <li> 이용약관</li>
      </FooterContents>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  margin: 15px 16px 0 16px;
`;

const FooterContents = styled.ul`
  display: flex;
  font-size: 10px;
  justify-content: space-between;
  color: ${palette.grayDarker};
`;

export default LandingFooter;
