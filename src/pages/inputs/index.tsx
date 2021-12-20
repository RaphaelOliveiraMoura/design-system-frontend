import React, { useState } from 'react';

import { TextField } from 'components';

import { completeNameValidator } from 'services/validation/validators';
import * as S from './styles';

type FormData = {
  name: string;
};

export const InputsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: ''
  });

  const handleChange = (key: keyof FormData) => (value: string) =>
    setFormData(state => ({ ...state, [key]: value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label='Nome Completo'
          onChange={handleChange('name')}
          value={formData.name}
          validator={completeNameValidator}
        />
      </form>
    </S.Container>
  );
};
