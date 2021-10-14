import { breakpoints } from './breakpoints';
import { colors, opacity, themeColors } from './colors';

export const sg = Object.freeze({
  opacity,
  colors,
  themeColors,
  breakpoints,
  fontFamily: {
    primary: "'Inter', sans-serif",
    secondary:
      "'Work Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif"
  },
  fontSize: {
    default: '16px',
    smaller: '12px',
    small: '14px',
    medium: '18px',
    large: '20px',
    xlarge: '24px',
    xxlarge: '28px'
  },
  spacing: {
    xsmall: '2px',
    small: '4px',
    medium: '8px',
    large: '12px',
    xlarge: '16px',
    xxlarge: '24px',
    xxxlarge: '34px'
  }
});
