import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';

import { TextField, TextFieldProps } from '.';

describe('<TextField />', () => {
  const BaseComponent = (props: Partial<TextFieldProps>) => (
    <TextField label='input-label' onChange={() => null} {...props} />
  );

  const getInput = (label = /input-label/i) => screen.getByLabelText(label);
  const getRequiredErrorText = () =>
    screen.queryByText(/campo obrigatório/i, { selector: 'span' });

  const getErrorIcon = () => screen.queryByLabelText(/ícone de erro/i);
  const getSuccessIcon = () => screen.queryByLabelText(/ícone de sucesso/i);

  const customValidator = (value: unknown) =>
    typeof value === 'string' && value.length > 3
      ? null
      : 'Campo deve ser maior que 3 caracteres';

  const getCustomValidatorErrorText = () =>
    screen.queryByText(/campo deve ser maior que 3 caracteres/i, {
      selector: 'span'
    });

  describe('uncontrolled', () => {
    it('should render a input without crashing', () => {
      render(<BaseComponent />);

      expect(getInput()).toBeInTheDocument();
    });

    it('should show error when touch on required input and success on valid', async () => {
      render(<BaseComponent />);

      const input = getInput();

      expect(getErrorIcon()).not.toBeInTheDocument();
      expect(getRequiredErrorText()).not.toBeInTheDocument();

      fireEvent.focus(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getErrorIcon()).toBeInTheDocument();
        expect(getRequiredErrorText()).toBeInTheDocument();
      });

      fireEvent.change(input, { target: { value: 'a' } });

      await waitFor(() => {
        expect(getErrorIcon()).not.toBeInTheDocument();
        expect(getSuccessIcon()).toBeInTheDocument();
      });
    });

    it('should call onChange function when type on input', () => {
      const onChangeSpy = jest.fn();

      render(<BaseComponent onChange={onChangeSpy} />);

      const input = getInput();

      fireEvent.change(input, { target: { value: 'a' } });

      expect(onChangeSpy).toHaveBeenCalledWith('a');
    });

    it('should test input accessibility with keyboard', async () => {
      render(<BaseComponent />);

      const input = getInput();

      expect(input).not.toHaveFocus();
      expect(getErrorIcon()).not.toBeInTheDocument();

      userEvent.tab();

      expect(input).toHaveFocus();

      userEvent.tab();

      await waitFor(() => {
        expect(getErrorIcon()).toBeInTheDocument();
      });
    });

    it('should validate input with custom validator', async () => {
      render(<BaseComponent validator={customValidator} />);

      const input = getInput();

      fireEvent.change(input, { target: { value: 'a' } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getCustomValidatorErrorText()).toBeInTheDocument();
      });

      fireEvent.change(input, { target: { value: 'aaa' } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getCustomValidatorErrorText()).toBeInTheDocument();
      });

      fireEvent.change(input, { target: { value: 'aaaa' } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getCustomValidatorErrorText()).not.toBeInTheDocument();
      });
    });
  });

  describe('controlled', () => {
    const ControlledTextField: React.FC<Partial<TextFieldProps>> = props => {
      const [value, setValue] = useState('');
      return (
        <TextField
          label='input-label'
          {...props}
          value={value}
          onChange={setValue}
        />
      );
    };

    it('should render a input without crashing', () => {
      render(<ControlledTextField />);

      expect(getInput()).toBeInTheDocument();
    });

    it('should show error when touch on required input and success on valid', async () => {
      render(<ControlledTextField />);

      const input = getInput();

      expect(getErrorIcon()).not.toBeInTheDocument();
      expect(getRequiredErrorText()).not.toBeInTheDocument();

      fireEvent.focus(input);
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getErrorIcon()).toBeInTheDocument();
        expect(getRequiredErrorText()).toBeInTheDocument();
      });

      fireEvent.change(input, { target: { value: 'a' } });

      await waitFor(() => {
        expect(getErrorIcon()).not.toBeInTheDocument();
        expect(getSuccessIcon()).toBeInTheDocument();
      });
    });

    it('should test input accessibility with keyboard', async () => {
      render(<ControlledTextField />);

      const input = getInput();

      expect(input).not.toHaveFocus();
      expect(getErrorIcon()).not.toBeInTheDocument();

      userEvent.tab();

      expect(input).toHaveFocus();

      userEvent.tab();

      await waitFor(() => {
        expect(getErrorIcon()).toBeInTheDocument();
      });
    });

    it('should validate input with custom validator', async () => {
      render(<ControlledTextField validator={customValidator} />);

      const input = getInput();

      fireEvent.change(input, { target: { value: 'a' } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getCustomValidatorErrorText()).toBeInTheDocument();
      });

      fireEvent.change(input, { target: { value: 'aaa' } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getCustomValidatorErrorText()).toBeInTheDocument();
      });

      fireEvent.change(input, { target: { value: 'aaaa' } });
      fireEvent.blur(input);

      await waitFor(() => {
        expect(getCustomValidatorErrorText()).not.toBeInTheDocument();
      });
    });
  });
});
