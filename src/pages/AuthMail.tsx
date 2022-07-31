import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { Button, Modal } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';
import { EmailForm, AuthCodeForm } from '@/components/authMail';
import { Link, useNavigate } from 'react-router-dom';
import { useToggle } from '@/hooks/common';
import { postEmail, putEmail } from '@/lib/api/email';
import Cookies from 'js-cookie';

const AuthMail = () => {
  const [cantMoveNext, setCantMoveNext] = useState(true);
  const [email, setEmail] = useState('');
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = Cookies.get('authenticated') === 'true';
    authenticated && navigate('/type-of-meeting');
  }, []);

  const onSubmitAuthCode = async (email: string) => {
    try {
      await postEmail(email);
      setEmail(email);
      onToggleErrorModal();
      setModalMessage('이메일로 인증번호를 전송하였습니다. 인증번호를 입력해 주세요.');
    } catch (e) {
      onToggleErrorModal();
      setModalMessage('에러가 발생했습니다😭 다시한번 시도해 주세요!');
    }
  };

  const onCheckAuthCode = async (authCode: string) => {
    try {
      const result = await putEmail(authCode);
      Cookies.set('authenticated', result);
      navigate('/type-of-meeting');
    } catch (e) {
      onToggleErrorModal();
      setModalMessage('에러가 발생했습니다😭 다시한번 시도해 주세요!');
    }
  };

  return (
    <>
      <SurveyTemplate disableNext={cantMoveNext} hasProgressBar={false}>
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
            학교가 없다고 나오나요? <StyledLink to="/">학교 추가하기</StyledLink>
          </AddSchoolParagraph>
        </FormWrapper>
      </SurveyTemplate>
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text={modalMessage}
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
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

const StyledLink = styled(Link)`
  padding-left: 4px;
  color: ${palette.primary};
  font-weight: 700;
  text-decoration: underline;
`;

export default AuthMail;
