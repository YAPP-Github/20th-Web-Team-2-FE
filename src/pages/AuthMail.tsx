import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { Button, Modal } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';
import { EmailForm, AuthCodeForm } from '@/components/authMail';
import { useNavigate } from 'react-router-dom';
import { useToggle } from '@/hooks/common';
import { postEmail, putEmail } from '@/lib/api/email';
import Cookies from 'js-cookie';
import Path from '@/router/Path';

const AuthMail = () => {
  const [email, setEmail] = useState('');
  const [isModal, onToggleModal] = useToggle();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [isNextModal, onToggleNextModal] = useToggle();
  const [errorMessage, setErrorMessage] = useState({ title: '에러', text: '에러가 발생했습니다😭<br /> 다시한번 시도해 주세요!' });
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = Cookies.get('authenticated') === 'true';
    authenticated && navigate(Path.LandingPage);
  }, []);

  const onSubmitAuthCode = async (email: string) => {
    try {
      await postEmail(email);
      setEmail(email);
      onToggleModal();
    } catch (e) {
      if ((e as any).message === '지원하지 않는 대학입니다.') {
        setErrorMessage({
          title: '지원하는 학교가 아닙니다 🥲',
          text: '"학교 추가하기"에서<br /> 학교 추가를 요청해주세요!',
        });
      }
      onToggleErrorModal();
    }
  };

  const onCheckAuthCode = async (authCode: string) => {
    try {
      const result = await putEmail(authCode);
      Cookies.set('authenticated', result);
      onToggleNextModal();
    } catch (e) {
      setErrorMessage({
        title: '에러',
        text: (e as any).message,
      });
      onToggleErrorModal();
    }
  };

  const handlePrevNextClick = () => {
    navigate('/');
  };

  return (
    <>
      <SurveyTemplate disableNext={!isNextModal} hasProgressBar={false} handlePrevClick={handlePrevNextClick} handleNextClick={handlePrevNextClick}>
        <Title>
          <strong>
            신원 확인을 위해 <br />
            학교 메일로 인증해주세요.
          </strong>
        </Title>
        <Description>예시: 1234@bu.edu</Description>
        <FormWrapper>
          <EmailForm onSubmitAuthCode={onSubmitAuthCode} />
          <AuthCodeForm email={email} onCheckAuthCode={onCheckAuthCode} />
          <AddSchoolParagraph>
            학교가 없다고 나오나요?{' '}
            <StyledLink
              href="https://docs.google.com/forms/d/e/1FAIpQLScTbXoWfKIUtgInYvEaeqDQofvQalNndwcbHMR9F4s5al0v1A/viewform?usp=sf_link"
              target="_blank"
            >
              학교 추가하기
            </StyledLink>
          </AddSchoolParagraph>
        </FormWrapper>
      </SurveyTemplate>
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title={errorMessage.title}
          text={errorMessage.text}
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
      {isModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="
              이메일로 인증번호를 전송하였습니다. <br />
              인증번호를 입력해 주세요.
            "
          onToggleModal={onToggleModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
      {isNextModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="인증이 완료되었습니다.<br /> 👏 설문을 시작해 주세요."
          onToggleModal={onToggleNextModal}
          onClick={() => {
            navigate('/type-of-meeting');
          }}
        />
      )}
    </>
  );
};

const Description = styled.p`
  padding-top: 10px;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  top: 40%;
  margin-top: 65px;
`;

export const InputsWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 12px;
  color: ${palette.warning};
  padding-top: 2px;
`;

const AddSchoolParagraph = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-top: 16px;
`;

const StyledLink = styled.a`
  padding-left: 4px;
  color: ${palette.primary};
  font-weight: 700;
  text-decoration: underline;
`;

export default AuthMail;
