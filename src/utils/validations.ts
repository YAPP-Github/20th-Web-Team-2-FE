type CheckFormType = 'email';

interface checkFormProps {
  value: string;
  type: CheckFormType;
}

export const checkForm = ({ value, type }: checkFormProps) => {
  const regex = {
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.(edu|ca)$/i,
  };

  if (type === 'email') {
    return regex.email.test(value);
  }

  return false;
};
