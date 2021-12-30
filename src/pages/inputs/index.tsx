import React, { useState } from 'react';

import {
  TextField,
  DateInput,
  RangeDateInput,
  SelectInput,
  Option,
  MultSelectInput,
  ToggleInput,
  PasswordInput,
  InputGroup
} from 'components';

import {
  compareValidatorBuilder,
  completeNameValidator
} from 'services/validation/validators';
import { moneyInputMask } from 'services/mask';
import * as S from './styles';

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

export const InputsPage: React.FC = () => {
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

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <InputGroup columns={{ default: '2fr 1fr' }}>
          <TextField
            label='Nome Completo'
            onChange={handleChange('name')}
            value={formData.name}
            validator={completeNameValidator}
            touched={formSubmited}
          />
          <DateInput
            label='Data de nascimento'
            onChange={handleChange('birthDate')}
            value={formData.birthDate}
            touched={formSubmited}
          />
        </InputGroup>

        <InputGroup columns={{ default: '1fr 1fr' }}>
          <RangeDateInput
            label='Dias disponíveis'
            onChange={handleChange('rangeDate')}
            value={formData.rangeDate}
            touched={formSubmited}
          />
          <TextField
            label='Dinheiro na conta'
            onChange={handleChange('accountCurrency')}
            mask={moneyInputMask}
            value={formData.accountCurrency}
            touched={formSubmited}
          />
        </InputGroup>

        <InputGroup columns={{ default: '2fr 3fr' }}>
          <SelectInput
            label='Sexo'
            value={formData.sex}
            onChange={handleChange('sex')}
            options={[
              { label: 'Não opinar', value: 'none' },
              { label: 'Masculino', value: 'male' },
              { label: 'Feminino', value: 'female' }
            ]}
            touched={formSubmited}
          />
          <MultSelectInput
            label='Selecione suas cores'
            value={formData.colors}
            onChange={handleChange('colors')}
            options={[
              { label: 'blue', value: '1' },
              { label: 'yellow', value: '2' },
              { label: 'red', value: '3' }
            ]}
            touched={formSubmited}
          />
        </InputGroup>

        <InputGroup columns={{}}>
          <ToggleInput
            label='Gostou do conteúdo'
            checked={formData.likeContent}
            onChange={handleChange('likeContent')}
          />
        </InputGroup>

        <InputGroup columns={{ default: '1fr 1fr' }}>
          <PasswordInput
            label='Senha'
            onChange={handleChange('password')}
            value={formData.password}
            touched={formSubmited}
          />
          <PasswordInput
            label='Confirmar Senha'
            onChange={handleChange('confirmPassword')}
            value={formData.confirmPassword}
            validator={compareValidatorBuilder(formData.password)}
            touched={formSubmited}
          />
        </InputGroup>
      </form>
    </S.Container>
  );
};
