import { StringLogo, RadiousLogo } from '@/assets/img';
import { Button } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';

function Landing() {
  /**
   * 로그인 되었는지 안되었는지는 나중에 리코일에서 꺼내기
   */
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LandingPageLayout>
      <MainIconBox>
        <Icon src={RadiousLogo} />
        <MainNameStyled src={StringLogo} />
        <TextStyled>유학생을 위한 미팅/소개팅</TextStyled>
      </MainIconBox>
      {isLogin ? (
        <BtnBox>
          <BtnTextStyled>간단하게 로그인하고 인연을 찾아보세요.</BtnTextStyled>
          <LandingBtn size="medium" fontWeight={700} width={312} variant={'kakao'} onClick={() => setIsLogin((prev) => !prev)}>
            카카오 로그인
          </LandingBtn>
        </BtnBox>
      ) : (
        <BtnBox>
          <LandingBtn size="medium" fontWeight={700} width={312} variant={'default'} onClick={() => setIsLogin((prev) => !prev)}>
            시작하기
          </LandingBtn>
          <LandingBtn size="medium" fontWeight={700} width={312} variant={'grayBlack'} onClick={() => setIsLogin((prev) => !prev)}>
            응답 수정하기
          </LandingBtn>
        </BtnBox>
      )}
    </LandingPageLayout>
  );
}

const LandingPageLayout = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
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
  flex: 1 1 15%;
`;
const LandingBtn = styled(Button)`
  margin: 4px;
`;
const Icon = styled.img`
  width: 84px;
  height: 84px;
  margin: 35px auto;
`;
const TextStyled = styled.div`
  font-size: 12px;
  margin: 12px;
  color: ${palette.grayDarker};
`;
const BtnTextStyled = styled(TextStyled)`
  margin-top: 28px;
`;

export default Landing;
