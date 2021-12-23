import React, { useState } from 'react';

import { TextField, DateInput, RangeDateInput } from 'components';

import { completeNameValidator } from 'services/validation/validators';
import { moneyInputMask } from 'services/mask';
import * as S from './styles';

type FormData = {
  name: string;
  birthDate: string;
  accountCurrency: string;
  rangeDate: string;
};

export const InputsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDate: '',
    accountCurrency: '',
    rangeDate: ''
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
        <DateInput
          label='Data de nascimento'
          onChange={handleChange('birthDate')}
          value={formData.birthDate}
        />
        <RangeDateInput
          label='Dias disponíveis'
          onChange={handleChange('rangeDate')}
          value={formData.rangeDate}
        />
        <TextField
          label='Dinheiro na conta'
          onChange={handleChange('accountCurrency')}
          mask={moneyInputMask}
          value={formData.accountCurrency}
        />
      </form>
    </S.Container>
  );
};
