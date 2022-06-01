import { useEffect } from 'react';
import { Input } from '@/components/base';
import { InputsWrapper, StyledButton, ErrorMessage } from '@/pages/AuthMail';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import useCountdown from '@/hooks/common/useCountdown';
import styled from 'styled-components';

interface AuthCodeFormProps {
  email: string;
  onCheckAuthCode: () => void;
}

const AuthCodeForm = ({ email, onCheckAuthCode }: AuthCodeFormProps) => {
  const { minutes, seconds, setTarget } = useCountdown(0);
  const { values, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email,
      authCode: '',
    },
    onSubmit: async () => {
      try {
        console.log('try submit authCode');
        onCheckAuthCode();
      } catch (e) {
        console.error('Modal 띄워야 할 듯');
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
    <form onSubmit={handleSubmit}>
      <InputsWrapper>
        <Input name="authCode" placeholder="인증번호" maxLength={8} onChange={handleChange} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <StyledButton disabled={!!errors.authCode}>확인</StyledButton>
        {email && (
          <CountDownWrapper>
            {minutes}:{seconds}
          </CountDownWrapper>
        )}
      </InputsWrapper>
    </form>
  );
};

const CountDownWrapper = styled.span`
  position: absolute;
  top: 15px;
  right: 0;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 0, 0, 0.5);
`;

export default AuthCodeForm;
