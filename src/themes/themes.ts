import type { Theme } from '@theme-ui/core';

import lightPalette from './lightPalette';
import darkPalette from './darkPalette';
import typography from './typography';
import scales from './scales';

const makeTheme = <T extends Theme>(t: T) => t;

export const defaultTheme = makeTheme({
  ...typography,
  ...scales,
  colors: {
    ...lightPalette,
    action: {
      drag: 'rgba(0, 0, 0, 0.16)',
      active: 'rgba(0, 0, 0, 0.12)',
      hover: 'rgba(0, 0, 0, 0.08)',
    },
    modes: {
      dark: {
        ...darkPalette,
      },
    },
  },
  shadows: {
    sm: '0 0 10px 1px',
    md: '0 0 15px 3px',
    lg: '0 0 20px 6px',
  },
});

export type DefaultTheme = typeof defaultTheme;
