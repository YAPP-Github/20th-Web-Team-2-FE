import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper, Logo } from '../survey/SurveyTemplate';

const UserHeader = () => {
  return (
    <HeaderLayout>
      <Logo to="/">외딴썸</Logo>
      {/* 유저 정보 불러오고 햄버거 매뉴 만들어야함! */}
    </HeaderLayout>
  );
};

const HeaderLayout = styled(HeaderWrapper)`
  margin-bottom: 10px;
`;

export default UserHeader;
