import React, { useState } from 'react';
import { Input, Modal } from '@/components/base';
import { InputsWrapper, StyledButton, ErrorMessage } from '@/pages/AuthMail';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import { checkForm } from '@/utils/validations';
import { useToggle } from '@/hooks/common';
import { palette } from '@/lib/styles/palette';

interface EmailFormProps {
  onSubmitAuthCode: (email: string) => void;
}

const EmailForm = ({ onSubmitAuthCode }: EmailFormProps) => {
  const [onFocus, setFocus] = useState(true);
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const { values, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: async () => {
      try {
        if (values.email) {
          onSubmitAuthCode(values.email);
          setFocus(false);
        }
      } catch (e) {
        onToggleErrorModal();
      }
    },
    validate: ({ email }) => {
      const newErrors: InitialValues = { email: '' };
      if (email?.length === 0) {
        newErrors.email = '이메일을 입력해주세요';
        return newErrors;
      }
      if (email && !checkForm({ value: email, type: 'email' })) newErrors.email = '교육용 이메일은 edu, ca, ie 중 하나로 끝나야 합니다.';
      return newErrors;
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputsWrapper>
          <Input
            isFocus={onFocus}
            name="email"
            placeholder="이메일"
            backgroundColor={palette.backgroundColor}
            maxLength={50}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <StyledButton disabled={!!errors.email}>인증번호 보내기</StyledButton>
        </InputsWrapper>
      </form>
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

export default EmailForm;
