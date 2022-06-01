type CheckFormType = 'email';

interface checkFormProps {
  value: string;
  type: CheckFormType;
}

export const checkForm = ({ value, type }: checkFormProps) => {
  const regex = {
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  };

  if (type === 'email') {
    return regex.email.test(value);
  }

  return false;
};
