import { useState, useCallback, useEffect } from 'react';

export interface InitialValues {
  email: string;
  authCode?: string;
}

interface useFormProps {
  initialValues: InitialValues;
  onSubmit: () => void;
  validate: (arg: InitialValues) => InitialValues;
}

const useForm = ({ initialValues, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, never> | InitialValues>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    if (Object.values(errors).length === 1) {
      await onSubmit();
    }
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
