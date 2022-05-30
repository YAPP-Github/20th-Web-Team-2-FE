import { useRef, useEffect } from 'react';
import { Input } from '@/components/base';
import { InputsWrapper, StyledButton, ErrorMessage } from '@/pages/AuthMail';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import { checkForm } from '@/utils/validations';

interface EmailFormProps {
  onSubmitAuthCode: () => void;
}

const EmailForm = ({ onSubmitAuthCode }: EmailFormProps) => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const { values, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: async () => {
      try {
        onSubmitAuthCode();
      } catch (e) {
        console.error('Modal 띄워야 할 듯');
      }
    },
    validate: ({ email }) => {
      const newErrors: InitialValues = { email: '' };
      if (email.length === 0) {
        newErrors.email = '이메일을 입력해주세요';
        return newErrors;
      }
      if (!checkForm({ value: email, type: 'email' })) newErrors.email = '올바른 이메일 형식이 아닙니다';
      return newErrors;
    },
  });

  useEffect(() => {
    if (emailInputRef.current) emailInputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputsWrapper>
        <Input name="email" placeholder="이메일" maxLength={50} onChange={handleChange} ref={emailInputRef} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <StyledButton variant="gray" disabled={!!errors.email}>
          인증번호 보내기
        </StyledButton>
      </InputsWrapper>
    </form>
  );
};

export default EmailForm;
