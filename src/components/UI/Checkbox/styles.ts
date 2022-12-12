import type { ThemeUIStyleObject } from '@theme-ui/core';

export const labelStyles: ThemeUIStyleObject = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};

export const baseStyles: ThemeUIStyleObject = {
  position: 'relative',
  display: 'inline-block',
  width: 18,
  height: 18,
  border: '2px solid',
  borderRadius: 2,
  transition: 'standard',
};

export const checkedStyles: ThemeUIStyleObject = {
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    bg: 'action.hover',
    borderRadius: 'inherit',
  },
};

export const iconStyles: ThemeUIStyleObject = {
  fill: 'none',
  strokeWidth: 3,
};
