import React, { useState } from 'react';
import styled from 'styled-components';
import { SurveyTemplate } from '@/components/domain/survey';
import { Button, Modal } from '@/components/base';
import { Title } from '@/lib/styles/styledComponents';
import { palette } from '@/lib/styles/palette';
import { EmailForm, AuthCodeForm } from '@/components/authMail';
import { Link } from 'react-router-dom';
import client from '@/lib/api';

const AuthMail = () => {
  const [cantMoveNext, setCantMoveNext] = useState(true);
  const [email, setEmail] = useState('');
  // const [state, setState] = useState(initState);

  const postEmail = async (email: string) => {
    await client.post(`/api/email`, { email });
  };

  const putEmail = async (authCode: string) => {
    await client.put(`/api/email`, { authCode });
  };

  const onSubmitAuthCode = async (email: string) => {
    try {
      await postEmail(email);
      setEmail(email);
    } catch (e) {
      alert(e.message);
      console.error('에러 모달');
    }
  };

  const onCheckAuthCode = async (authCode: string) => {
    try {
      await putEmail(authCode);
      setCantMoveNext(false);
    } catch (e) {
      alert(e.message);
      console.error('에러 모달');
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
        <Description>예시: 1234@bu.du</Description>
        <FormWrapper>
          <EmailForm onSubmitAuthCode={onSubmitAuthCode} />
          <AuthCodeForm email={email} onCheckAuthCode={onCheckAuthCode} />
          <AddSchoolParagraph>
            학교가 없다고 나오나요? <StyledLink to="/">학교 추가하기</StyledLink>
          </AddSchoolParagraph>
        </FormWrapper>
      </SurveyTemplate>
      {/*{isModal && (*/}
      {/*  <Modal*/}
      {/*    width={200}*/}
      {/*    height={140}*/}
      {/*    bottonName="확인"*/}
      {/*    title="ㅔ러"*/}
      {/*    text="　카톡아이디를 확인해 주세요.　상대에게 보여질 아아디입니다!"*/}
      {/*    onToggleModal={onToggleModal}*/}
      {/*    onClick={() => setConfirm(true)}*/}
      {/*  />*/}
      {/*)}*/}
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
