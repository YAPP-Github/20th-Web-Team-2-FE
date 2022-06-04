import { useState } from 'react';
import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { Button } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';
import { EmailForm, AuthCodeForm } from '@/components/authMail';
import { Link } from 'react-router-dom';

const AuthMail = () => {
  const [cantMoveNext, setCantMoveNext] = useState(true);
  const [email, setEmail] = useState('');

  const onSubmitAuthCode = (email: string) => {
    try {
      console.log('인증번호 보내는 로직', email);
      setEmail(email);
    } catch (e) {
      console.error('에러 모달');
    }
  };

  const onCheckAuthCode = () => {
    try {
      setCantMoveNext(false);
    } catch (e) {
      console.error('에러 모달');
    }
  };

  return (
    <SurveyTemplate disableNext={cantMoveNext} hasProgressBar={false}>
      <Title>
        <strong>
          신원 확인을 위해 <br />
          학교 메일로 인증해주세요.
        </strong>
      </Title>
      <Description>예시: 1234@bu.du</Description>
      <FormWrapper>
        <EmailForm onSubmitAuthCode={onSubmitAuthCode} />
        <AuthCodeForm email={email} onCheckAuthCode={onCheckAuthCode} />
        <AddSchoolParagraph>
          학교가 없다고 나오나요? <StyledLink to="/">학교 추가하기</StyledLink>
        </AddSchoolParagraph>
      </FormWrapper>
    </SurveyTemplate>
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
  position: absolute;
  width: 100%;
  top: 40%;
  transform: translateY(-50%);
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
