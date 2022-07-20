import React, { useState } from 'react';
import { Input, Button, Modal } from '@/components/base';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import styled from 'styled-components';
import { LoginRequest } from '@/types/user';
import { palette } from '@/lib/styles/palette';
import { useToggle } from '@/hooks/common';

interface LoginFormProps {
  onSubmitAuthCode: (values: LoginRequest) => void;
}

const LoginForm = ({ onSubmitAuthCode }: LoginFormProps) => {
  const [onFocus, setFocus] = useState(true);
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const { values, errors, handleSubmit, handleChange } = useForm<LoginRequest>({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: async () => {
      try {
        if (values.userName) {
          onSubmitAuthCode(values as any);
          setFocus(false);
        }
      } catch (e) {
        onToggleErrorModal();
      }
    },
    validate: ({ userName, password }) => {
      const newErrors: InitialValues = { userName: '' };
      if (userName?.length === 0) {
        newErrors.userName = '이름을 입력해주세요';
        return newErrors;
      }

      if (password?.length === 0) {
        newErrors.password = '비밀번호를 입력해주세요';
        return newErrors;
      }
      return newErrors;
    },
  });

  return (
    <>
      <FormsWrapper onSubmit={handleSubmit}>
        <InputsWrapper>
          <Input isFocus={onFocus} name="userName" placeholder="이름" maxLength={50} onChange={handleChange} />
          {errors.userName && <ErrorMessage>{errors.userName}</ErrorMessage>}
        </InputsWrapper>
        <InputsWrapper>
          <Input name="password" placeholder="비밀번호" maxLength={50} onChange={handleChange} />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputsWrapper>
        <Button>로그인</Button>
      </FormsWrapper>
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

const FormsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputsWrapper = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 12px;
  color: ${palette.warning};
  padding-top: 2px;
`;

export default LoginForm;
