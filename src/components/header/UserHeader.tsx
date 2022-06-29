import { TripleLineMenu } from '@/assets/img';
import React from 'react';
import styled from 'styled-components';
import { HeaderWrapper, Logo } from '../domain/survey/SurveyTemplate';

const UserHeader = () => {
  return (
    <HeaderLayout>
      <Logo to="/">외딴썸</Logo>
      {/* 유저 정보 불러오고 햄버거 매뉴 만들어야함! */}
      <img src={TripleLineMenu} alt="메뉴 이미지" />
    </HeaderLayout>
  );
};

const HeaderLayout = styled(HeaderWrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export default UserHeader;
