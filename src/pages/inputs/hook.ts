import { Option } from 'components';
import { useState } from 'react';

type FormData = {
  name: string;
  birthDate: string;
  accountCurrency: string;
  rangeDate: string;
  sex: Option;
  colors: Option[];
  likeContent: boolean;
  password: string;
  confirmPassword: string;
};

export const useInputsPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    accountCurrency: '',
    rangeDate: '',
    sex: { value: '', label: '' },
    colors: [],
    likeContent: false,
    password: '',
    confirmPassword: ''
  });

  const [formSubmited, setFormSubmited] = useState<boolean | undefined>();

  const handleChange = (key: keyof FormData) => (value: unknown) =>
    setFormData(state => ({ ...state, [key]: value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmited(true);
  };

  return {
    formData,
    formSubmited,
    handleChange,
    handleSubmit
  };
};
