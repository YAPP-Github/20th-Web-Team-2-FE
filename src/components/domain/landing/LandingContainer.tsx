import React from 'react';
import { StringLogo, RadiousLogo } from '@/assets/img';
import { Button } from '@/components/base';
import { palette } from '@/lib/styles/palette';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLoginState } from '@/atoms/userState';
import { goKakaoLogin } from '@/utils/goKakaoLogin';

function LandingContainer() {
  const navigate = useNavigate();
  const { isLogin } = useLoginState();

  const handleKakaoLoginClick = () => {
    goKakaoLogin('login');
  };

  return (
    <Container>
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
          <Button size="medium" fontWeight={700} fullWidth onClick={() => navigate('/test-login')}>
            일반 로그인
          </Button>
        </BtnBox>
      ) : (
        <BtnBox>
          <LandingBtn
            size="medium"
            fontWeight={700}
            fullWidth
            variant={'default'}
            onClick={() => {
              navigate('/type-of-meeting');
            }}
          >
            시작하기
          </LandingBtn>
          <LandingBtn size="medium" fontWeight={700} fullWidth variant={'grayBlack'} onClick={() => navigate('/matching/meeting')}>
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
