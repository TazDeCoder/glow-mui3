import type { ThemeUIStyleObject } from '@theme-ui/core';

export const baseStyles: ThemeUIStyleObject = {
  position: 'relative',
  minWidth: 48,
  height: 40,
  px: 24,
  border: '1px solid',
  borderRadius: 'full',
  cursor: 'pointer',
};

export const interactionStyles: ThemeUIStyleObject = {
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'action.hover',
    borderRadius: 'inherit',
  },
  '&:focus::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    bg: 'action.active',
    borderRadius: 'inherit',
  },
};

export const filledStyles: ThemeUIStyleObject = {
  transition: 'emphasized',
  '&:hover': {
    boxShadow: 'sm',
  },
};

export const outlinedStyles: ThemeUIStyleObject = {
  bg: 'transparent',
  borderColor: 'outline.main',
  transition: 'standard',
  '&:active': {
    borderColor: 'outline.main',
  },
};

export const textStyles: ThemeUIStyleObject = {
  bg: 'transparent',
  borderColor: 'transparent',
};
