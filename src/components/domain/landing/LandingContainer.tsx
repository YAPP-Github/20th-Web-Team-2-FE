import { StringLogo, RadiousLogo } from '@/assets/img';
import { Button } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';

function LandingContainer() {
  /**
   * 로그인 되었는지 안되었는지는 나중에 리코일에서 꺼내기
   */
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      <MainIconBox>
        <Icon src={RadiousLogo} />
        <MainNameStyled src={StringLogo} alt="외딴썸" />
        <TextStyled>유학생을 위한 미팅/소개팅</TextStyled>
      </MainIconBox>
      {isLogin ? (
        <BtnBox>
          <BtnTextStyled>간단하게 로그인하고 인연을 찾아보세요.</BtnTextStyled>
          <LandingBtn size="medium" fontWeight={700} fullWidth variant={'kakao'} onClick={() => setIsLogin((prev) => !prev)}>
            카카오 로그인
          </LandingBtn>
        </BtnBox>
      ) : (
        <BtnBox>
          <LandingBtn size="medium" fontWeight={700} fullWidth variant={'default'} onClick={() => setIsLogin((prev) => !prev)}>
            시작하기
          </LandingBtn>
          <LandingBtn size="medium" fontWeight={700} fullWidth variant={'grayBlack'} onClick={() => setIsLogin((prev) => !prev)}>
            응답 수정하기
          </LandingBtn>
        </BtnBox>
      )}
    </Container>
  );
}

const Container = styled.section`
  text-align: center;
  height: 92%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  flex: 1 0 auto;
`;
const MainIconBox = styled.div`
  padding-top: 152px;
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
`;
const MainNameStyled = styled.img`
  margin: 0 auto;
  width: 78px;
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 8%;
`;
const LandingBtn = styled(Button)`
  margin: 4px;
`;
const Icon = styled.img`
  width: 84px;
  height: 84px;
  margin: 35px auto;
`;
const TextStyled = styled.h3`
  font-size: 12px;
  margin: 12px;
  color: ${palette.grayDarker};
`;
const BtnTextStyled = styled(TextStyled)`
  margin-top: 28px;
`;
export default LandingContainer;
