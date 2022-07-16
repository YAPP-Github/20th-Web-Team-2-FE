import { useState, useCallback, useEffect } from 'react';

export interface InitialValues {
  email?: string;
  userName?: string;
  password?: string;
  authCode?: string;
}

interface UseFormProps {
  initialValues: InitialValues;
  onSubmit: () => void;
  validate: (arg: InitialValues) => InitialValues;
}

const useForm = ({ initialValues, onSubmit, validate }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, never> | InitialValues>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    await onSubmit();
    setIsLoading(false);
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [values]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
