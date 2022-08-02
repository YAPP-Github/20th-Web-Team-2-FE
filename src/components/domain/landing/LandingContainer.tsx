import React, { useEffect, useState } from 'react';
import { StringLogo, RadiousLogo } from '@/assets/img';
import { Button } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLoginState } from '@/atoms/userState';
import { goKakaoLogin } from '@/utils/goKakaoLogin';
import Cookies from 'js-cookie';
import { HeaderWrapper } from '@/components/domain/survey/SurveyTemplate';

function LandingContainer() {
  const navigate = useNavigate();
  const { isLogin } = useLoginState();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const authenticated = Cookies.get('authenticated') === 'true';
    setAuth(authenticated);
  }, []);

  const handleKakaoLoginClick = () => {
    goKakaoLogin('login');
  };

  const checkAuthRedirect = ({ startSurvey = true }: { startSurvey?: boolean }) => {
    isAuth ? (startSurvey ? navigate('/type-of-meeting') : navigate('/matching/meeting')) : navigate('/auth-mail');
  };

  return (
    <Container>
      <HeaderWrapper>
        <Logo href="https://intro.lonessum.com/" target="_blank" rel="noreferrer">
          외딴썸
        </Logo>
      </HeaderWrapper>
      <MainIconBox>
        <Icon src={RadiousLogo} />
        <MainNameStyled src={StringLogo} alt="외딴썸" />
        <TextStyled>유학생을 위한 미팅/소개팅</TextStyled>
      </MainIconBox>
      {!isLogin ? (
        <BtnBox>
          <BtnTextStyled>간단하게 로그인하고 인연을 찾아보세요.</BtnTextStyled>
          <LandingBtn size="medium" fontWeight={700} fullWidth variant={'kakao'} onClick={handleKakaoLoginClick}>
            카카오 로그인
          </LandingBtn>
        </BtnBox>
      ) : (
        <BtnBox>
          <LandingBtn
            size="medium"
            fontWeight={700}
            fullWidth
            variant={'default'}
            onClick={() => {
              const authenticated = Cookies.get('authenticated') === 'true';
              authenticated ? navigate('/') : navigate('/auth-mail');
            }}
          >
            시작하기
          </LandingBtn>
          <LandingBtn size="medium" fontWeight={700} fullWidth variant={'grayBlack'} onClick={() => checkAuthRedirect({ startSurvey: false })}>
            매칭 결과 확인하기
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
export const Logo = styled.a`
  position: absolute;
  left: 16px;
  font-family: SangjuGotgam, Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
    'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
`;
const MainIconBox = styled.div`
  padding-top: 76px;
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
  margin-bottom: 42px;
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
