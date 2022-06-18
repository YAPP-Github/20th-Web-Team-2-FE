import React from 'react';
import { HeaderWrapper, Logo } from '../survey/SurveyTemplate';

const UserHeader = () => {
  return (
    <HeaderWrapper>
      <Logo to="/">외딴썸</Logo>
      {/* 유저 정보 불러오고 햄버거 매뉴 만들어야함! */}
    </HeaderWrapper>
  );
};

export default UserHeader;
