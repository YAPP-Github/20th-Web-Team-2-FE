import React, { useEffect } from 'react';
import { Input, Modal } from '@/components/base';
import { InputsWrapper, StyledButton, ErrorMessage } from '@/pages/AuthMail';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import useAuthNumber from '@/hooks/common/useAuthNumber';
import styled from 'styled-components';
import { useToggle } from '@/hooks/common';
import { palette } from '@/lib/styles/palette';

interface AuthCodeFormProps {
  email: string;
  onCheckAuthCode: (authCode: string) => void;
}

const AuthCodeForm = ({ email, onCheckAuthCode }: AuthCodeFormProps) => {
  const { minutes, seconds, setTarget } = useAuthNumber(0);
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const { values, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email,
      authCode: '',
    },
    onSubmit: async () => {
      try {
        onCheckAuthCode(values.authCode);
      } catch (e) {
        onToggleErrorModal();
      }
    },
    validate: () => {
      const newErrors: InitialValues = { email: '', authCode: '' };
      if (values?.authCode?.length === 0) {
        newErrors.authCode = '인증번호를 입력해주세요';
        return newErrors;
      }
      return newErrors;
    },
  });

  const handleCountdown = () => {
    const MINUTES = 60;
    setTarget(MINUTES * 3);
  };

  useEffect(() => {
    if (email) handleCountdown();
  }, [email]);

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <InputsWrapper>
          <Input
            isFocus={!!email}
            name="authCode"
            placeholder="인증번호"
            backgroundColor={palette.backgroundColor}
            maxLength={8}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <StyledButton disabled={!!errors.authCode}>확인</StyledButton>
          {email && (
            <CountDownWrapper>
              {minutes}:{seconds}
            </CountDownWrapper>
          )}
        </InputsWrapper>
      </FormWrapper>
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="에러가 발생했습니다😭 다시한번 시도해 주세요!"
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </>
  );
};

const FormWrapper = styled.form`
  margin-top: 20px;
`;

const CountDownWrapper = styled.span`
  position: absolute;
  top: 15px;
  right: 0;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 0, 0, 0.5);
`;

export default AuthCodeForm;
