import React, { useState } from 'react';
import { Input, Button } from '@/components/base';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import styled from 'styled-components';
import { LoginRequest } from '@/types/user';
import { palette } from '@/lib/styles/palette';

interface LoginFormProps {
  onSubmitAuthCode: (values: LoginRequest) => void;
}

const LoginForm = ({ onSubmitAuthCode }: LoginFormProps) => {
  const [onFocus, setFocus] = useState(true);
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
        console.error('Modal 띄워야 할 듯');
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
