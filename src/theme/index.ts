import { light } from '@assets/constants';
import { colors } from './colors';
import {
  borderRadius, borderWidth, opacity, size,
} from './fonts';
import { ThemeProps } from './theme';

const defaultTheme: ThemeProps = {
  fontSize: size,
  colors,
  opacity,
  borderRadius,
  borderWidth,
};

export const getTheme = (mode: 'light' | 'dark') => {
  if (mode === light) {
    return defaultTheme;
  }
  return defaultTheme;
};
