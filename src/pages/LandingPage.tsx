import { Button, Modal } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

const LandingPageLayout = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainIconBox = styled.div`
  padding-top: 42%;
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
`;
const MainNameStyled = styled.div`
  font-family: 'SANGJU Gotgam';
  font-size: 26px;
`;
const LoginBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 10%;
`;
const Icon = styled.div`
  background-color: ${palette.primary};
  width: 84px;
  height: 84px;
  margin: 35px auto;
`;
const TextStyled = styled.div`
  font-size: 12px;
  margin: 12px;
`;

function LandingPage() {
  return (
    <LandingPageLayout>
      <MainIconBox>
        <Icon />
        <MainNameStyled>외딴썸</MainNameStyled>
        <TextStyled>유학생을 위한 미팅/소개팅</TextStyled>
      </MainIconBox>
      <LoginBtnBox>
        <TextStyled>간단하게 로그인하고 인연을 찾아보세요.</TextStyled>
        <Button size="large" fontWeight={700}>
          카카오 로그인
        </Button>
      </LoginBtnBox>
    </LandingPageLayout>
  );
}

export default LandingPage;
