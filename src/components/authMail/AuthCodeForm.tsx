import { Input } from '@/components/base';
import { InputsWrapper, StyledButton, ErrorMessage } from '@/pages/AuthMail';
import useForm, { InitialValues } from '@/hooks/common/useForm';
import useCountdown from '@/hooks/common/useCountdown';

interface AuthCodeFormProps {
  email: string;
  setCantMoveNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthCodeForm = ({ email, setCantMoveNext }: AuthCodeFormProps) => {
  const [minutes, seconds] = useCountdown(180);
  const { values, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email,
      authCode: '',
    },
    onSubmit: async () => {
      try {
        console.log('try authCode');
        setCantMoveNext(false);
      } catch (e) {
        console.error('Modal 띄워야 할 듯');
      }
    },
    validate: () => {
      const newErrors: InitialValues = { email: '', authCode: '' };
      console.log(values?.authCode);
      if (values?.authCode?.length === 0) {
        newErrors.authCode = '인증번호를 입력해주세요';
        return newErrors;
      }
      return newErrors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <InputsWrapper>
        <Input name="authCode" placeholder="인증번호" maxLength={8} onChange={handleChange} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <StyledButton disabled={!!errors.authCode}>확인</StyledButton>
        <span>
          {minutes}:{seconds}
        </span>
      </InputsWrapper>
    </form>
  );
};

export default AuthCodeForm;
