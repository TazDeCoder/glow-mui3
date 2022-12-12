import type { ThemeUIStyleObject } from '@theme-ui/core';

export const backdropStyles: ThemeUIStyleObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1201,
  bg: 'scrim',
  opacity: 'backdrop',
};

export const baseStyles: ThemeUIStyleObject = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: 1301,
  minWidth: 280,
  maxWidth: 560,
  p: 24,
  bg: 'surface.main',
  borderRadius: 'xl',
  boxShadow: 'lg',
  transform: 'translate(-50%, -50%)',
  '&::before': {
    content: '""',
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'surface.tint',
    opacity: 'tint',
    borderRadius: 'inherit',
  },
};

export const actionStyles: ThemeUIStyleObject = {
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: 2,
  pt: 24,
};
