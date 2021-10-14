import { darken, lighten } from 'polished';
import { colors } from './colors';

export const themeColors = {
  highlight: '#EDF8FF',
  darkBlue: '#05152E',

  primary: '#2A54C4',
  primaryLigth: lighten(0.15, '#2A54C4'),
  primaryDark: darken(0.15, '#2A54C4'),

  secondary: '#3454C4',
  secondaryLigth: lighten(0.15, '#3454C4'),
  secondaryDark: darken(0.15, '#3454C4'),

  error: colors.red300,
  errorLigth: colors.red200,
  errorDark: colors.red400,

  warning: colors.yellow,
  warningLigth: colors.yellow300,
  warningDark: colors.yellow700,

  info: colors.blue,
  infoLigth: colors.blue300,
  infoDark: colors.blue700,

  success: colors.green,
  successLigth: colors.green300,
  successDark: colors.green700
};
