import { TripleLineMenu } from '@/assets/img';
import { useToggle } from '@/hooks/common';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderWrapper, Logo } from '../domain/survey/SurveyTemplate';
import MenuBlock from './MenuBlock';

const UserHeader = () => {
  const [isMenu, onToggleMenu] = useToggle();
  return (
    <>
      <HeaderLayout>
        <Logo to="/">외딴썸</Logo>
        <Menu>
          <img src={TripleLineMenu} alt="메뉴 이미지" onClick={onToggleMenu} />
        </Menu>
      </HeaderLayout>
      <MenuBlock isMenu={isMenu} onToggleMenu={onToggleMenu} />
      <Outlet />
    </>
  );
};

const HeaderLayout = styled(HeaderWrapper)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 10px;
`;

const Menu = styled.button`
  & > img {
    width: 20px;
    height: 20px;
  }
`;

export default UserHeader;
